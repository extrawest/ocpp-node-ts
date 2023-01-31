import EventEmitter from 'events';
import { OutgoingHttpHeaders } from 'http';
import WebSocket from 'ws';
import { Protocol } from './Protocol';
import { OCPP_PROTOCOL_1_6 } from './schemas';

export class Client extends EventEmitter {
  private connection: Protocol | null = null;

  private cpId: string;

  constructor(cpId: string) {
    super();
    this.cpId = cpId;
  }

  protected getCpId(): string {
    return this.cpId;
  }

  protected setConnection(connection: Protocol | null): void {
    this.connection = connection;
  }

  protected callRequest(request: string, payload: any): Promise<any> {
    if (this.connection) {
      return this.connection.callRequest(request, payload);
    }
    throw new Error('Charging point not connected to central system');
  }

  protected connect(centralSystemUrl: string, headers?: OutgoingHttpHeaders) {
    const ws = new WebSocket(centralSystemUrl + this.getCpId(), [OCPP_PROTOCOL_1_6], {
      perMessageDeflate: false,
      protocolVersion: 13,
      headers,
    });

    ws.on('upgrade', (res) => {
      if (!res.headers['sec-websocket-protocol']) {
        this.emit('error', new Error(`Server doesn't support protocol ${OCPP_PROTOCOL_1_6}`));
      }
    });

    ws.on('close', (code: number, reason: Buffer) => {
      this.setConnection(null);
      this.emit('close', code, reason);
    });

    ws.on('open', () => {
      if (ws) {
        this.setConnection(new Protocol(this, ws));
        this.emit('connect');
      }
    });

    ws.on('error', (err) => {
      this.emit('error', err);
    });
  }
}
