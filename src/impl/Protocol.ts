import WebSocket from 'ws';
import {v4 as uuidv4} from 'uuid';
import EventEmitter from 'events';
import schemas from './schemas';
import {
    ERROR_INTERNALERROR,
    ERROR_NOTIMPLEMENTED,
    OcppError,
} from './OcppError';
import {SchemaValidator} from './SchemaValidator';

const CALL_MESSAGE = 2; // Client-to-Server
const CALLRESULT_MESSAGE = 3; // Server-to-Client
const CALLERROR_MESSAGE = 4; // Server-to-Client

export class Protocol {
    pendingCalls: any = {};

    eventEmitter: EventEmitter;

    socket: WebSocket;

    constructor(eventEmitter: EventEmitter, socket: WebSocket) {
        this.eventEmitter = eventEmitter;
        this.socket = socket;
        this.socket.on('message', (message) => {
            this.onMessage(message.toString());
        });
    }


    onMessage(message: string) {
        try {
            const [messageType, ...rest] = JSON.parse(message);

            if (messageType === CALL_MESSAGE && rest.length === 3) {
                const [messageId, action, payload] = rest;
                this.onCall(messageId, action, payload);
            } else if (messageType === CALLRESULT_MESSAGE && rest.length === 2) {
                const [messageId, payload] = rest;
                this.onCallResult(messageId, payload);
            } else if (messageType === CALLERROR_MESSAGE && rest.length === 3) {
                const [messageId, errorCode, errorDescription, errorDetails] = rest;
                this.onCallError(messageId, errorCode, errorDescription, errorDetails);
            } else {
                throw new Error('ProtocolError');
            }
        } catch (err) {
            if (err instanceof SyntaxError || err instanceof Error) {
                console.error(err.message);
            }
        }
    }

    public callRequest(request: string, payload: any): Promise<any> {  //TODO: try to replace any to generic or unknown
        return new Promise((resolve, reject) => {
            try {
                const messageId = uuidv4();
                const result = JSON.stringify([CALL_MESSAGE,
                    messageId,
                    request,
                    payload]);
                this.socket.send(result);
                this.pendingCalls[messageId] = {
                    resolve,
                    reject,
                };

                setTimeout(() => {
                    // timeout error
                    this.onCallError(messageId, ERROR_INTERNALERROR, 'No response from the client', {});
                }, 10000);
            } catch (e) {
                console.error(e);
                reject(e);
            }
        });
    }

    private callError(messageId: string, error: OcppError) {
        try {
            const result = JSON.stringify([CALLERROR_MESSAGE,
                messageId,
                error.code,
                error.message,
                error.details || {}]);
            this.socket.send(result);
        } catch (e) {
            console.error(e);
        }
    }

    private onCallError(
        messageId: string,
        errorCode: string,
        errorDescription: string,
        errorDetails: any,
    ) {
        if (this.pendingCalls[messageId]) {
            const {reject} = this.pendingCalls[messageId];
            if (reject) {
                reject(new OcppError(errorCode, errorDescription, errorDetails));
            }
            delete this.pendingCalls[messageId];
        }
    }

    private onCallResult(messageId: string, payload: any) {
        if (this.pendingCalls[messageId]) {
            const {resolve} = this.pendingCalls[messageId];
            if (resolve) {
                resolve(payload);
            }
            delete this.pendingCalls[messageId];
        }
    }

    private async onCall(messageId: string, request: string, payload: any) {
        try {
            // @ts-ignore
            const schema = schemas[request];

            const validator = new SchemaValidator(schema);
            validator.validate(payload);
            const response = await new Promise((resolve, reject) => {
                setTimeout(() => {
                    // timeout error
                    reject(new OcppError(ERROR_INTERNALERROR, 'No response from the handler'));
                }, 10000);

                const hasListener = this.eventEmitter.emit(request, payload, (result: any) => {
                    resolve(result);
                });
                if (!hasListener) {
                    reject(new OcppError(ERROR_NOTIMPLEMENTED, `Listener for action "${request}" not set`));
                }
            });
            this.callResult(messageId, request, response);
        } catch (e) {
            if (e instanceof OcppError) {
                this.callError(messageId, e);
            } else {
                this.callError(
                    messageId,
                    new OcppError(
                        ERROR_INTERNALERROR,
                        'An internal error occurred and the receiver was not able to process the requested Action',
                    ),
                );
            }
        }
    }

    private callResult(messageId: string, action: string, responsePayload: any) {
        try {
            const result = JSON.stringify([
                CALLRESULT_MESSAGE,
                messageId,
                responsePayload]);
            this.socket.send(result);
        } catch (e) {
            if (e instanceof SyntaxError) {
                this.callError(messageId, new OcppError(ERROR_INTERNALERROR, 'Response payload is invalid'));
                console.error(e.message);
            }
        }
    }
}
