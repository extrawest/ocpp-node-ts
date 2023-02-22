/// <reference types="node" />
/// <reference types="node" />
import { SecureContextOptions } from 'tls';
import { IncomingMessage } from 'http';
import { Server } from './impl/Server';
import { OcppClientConnection } from './OcppClientConnection';
export declare class OcppServer extends Server {
    listen(port?: number, options?: SecureContextOptions): void;
    on(event: 'authorization', listener: (cpId: string, req: IncomingMessage, cb: (err?: Error) => void) => void): this;
    on(event: 'connection', listener: (client: OcppClientConnection) => void): this;
}
