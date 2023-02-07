import {
  OcppServer, OcppClientConnection
} from '../src';
import {UrnOCPPCp220203BootNotificationRequest} from '../src/types/BootNotification'
import {UrnOCPPCp220203BootNotificationResponse} from '../src/types/BootNotificationResponse'

const centralSystemSimple = new OcppServer();
centralSystemSimple.listen(9220);
centralSystemSimple.on('connection', (client: OcppClientConnection) => {
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
