/// <reference types="node" />
/// <reference types="node" />
import EventEmitter from 'events';
import { OutgoingHttpHeaders } from 'http';
import { Protocol } from './Protocol';
export declare class Client extends EventEmitter {
    private connection;
    private cpId;
    constructor(cpId: string);
    protected getCpId(): string;
    protected setConnection(connection: Protocol | null): void;
    protected callRequest(request: string, payload: any): Promise<any>;
    protected connect(centralSystemUrl: string, headers?: OutgoingHttpHeaders): void;
}
