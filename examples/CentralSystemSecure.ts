import { IncomingMessage } from 'http';
import fs from 'fs';
import {
  OcppServer, OcppClientConnection
} from '../src/';
import {UrnOCPPCp220203BootNotificationRequest} from '../src/types/BootNotification'
import {UrnOCPPCp220203BootNotificationResponse} from '../src/types/BootNotificationResponse'

const cs = new OcppServer();
cs.on('connection', (client: OcppClientConnection) => {
  console.log(`Client ${client.getCpId()} connected`);
  client.on('close', (code: number, reason: Buffer) => {
    console.log(`Client ${client.getCpId()} closed connection`, code, reason.toString());
  });

  client.on('BootNotification', (request: UrnOCPPCp220203BootNotificationRequest, cb: (response: UrnOCPPCp220203BootNotificationResponse) => void) => {
    const response: UrnOCPPCp220203BootNotificationResponse = {
      status: 'Accepted',
      currentTime: new Date().toISOString(),
      interval: 60,
    };
    cb(response);
  });
});

cs.on('authorization', (cbId: string, req: IncomingMessage, cb: (err?: Error) => void) => {
  console.log('authorization', cbId, req.headers.authorization);
  // validate authorization header
  // cb(new Error('Unathorized')); // Deny
  cb(); // Accept
});
cs.listen(9220, {
  cert: fs.readFileSync('cert.pem'),
  key: fs.readFileSync('key.pem'),
});
