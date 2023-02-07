/// <reference types="node" />
import WebSocket from 'ws';
import EventEmitter from 'events';
export declare class Protocol {
    pendingCalls: any;
    eventEmitter: EventEmitter;
    socket: WebSocket;
    constructor(eventEmitter: EventEmitter, socket: WebSocket);
    onMessage(message: string): void;
    callRequest(request: string, payload: any): Promise<any>;
    private callError;
    private onCallError;
    private onCallResult;
    private onCall;
    private callResult;
}
