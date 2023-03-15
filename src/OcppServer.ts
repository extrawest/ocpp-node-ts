import {SecureContextOptions} from 'tls';
import {IncomingMessage} from 'http';
import {Server} from './impl/Server';
import {OcppClientConnection} from './OcppClientConnection';

export class OcppServer extends Server {
    listen(port = 9220, options?: SecureContextOptions) {
        super.listen(port, options);
    }

    on(event: 'authorization', listener: (cpId: string, req: IncomingMessage, cb: (err?: Error) => void) => void): this;
    on(event: 'connection', listener: (client: OcppClientConnection) => void): this;
    on(event: string | symbol, listener: (...args: any[]) => void) {
        return super.on(event, listener);
    }
}
