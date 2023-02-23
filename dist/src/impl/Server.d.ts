/// <reference types="node" />
/// <reference types="node" />
import EventEmitter from 'events';
import { SecureContextOptions } from 'tls';
export declare class Server extends EventEmitter {
    private server;
    private clients;
    protected listen(port?: number, options?: SecureContextOptions): void;
    private onNewConnection;
    static getCpIdFromUrl(url: string | undefined): string | undefined;
}
