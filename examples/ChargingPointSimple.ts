import {
  OcppClient, OcppError,
} from '../src';
import {UrnOCPPCp220203BootNotificationRequest} from '../src/types/BootNotification'
import {UrnOCPPCp220203BootNotificationResponse} from '../src/types/BootNotificationResponse'

const chargingPointSimple = new OcppClient('CP1111');
chargingPointSimple.on('error', (err: Error) => {
  console.log(err.message);
});
chargingPointSimple.on('close', () => {
  console.log('Connection closed');
});

chargingPointSimple.on('connect', async () => {
  const boot: UrnOCPPCp220203BootNotificationRequest = {
    chargingStation: {
      model: "sda",
      vendorName: "sad"
    },
    reason: "Unknown"
  };

  try {
    const bootResp: UrnOCPPCp220203BootNotificationResponse = await chargingPointSimple.callRequest('BootNotification', boot);
    if (bootResp.status === 'Accepted') {
      console.log('Bootnotification accepted');
    }
  } catch (e) {
    if (e instanceof Error || e instanceof OcppError) {
      console.error(e.message);
    }
  }
});
chargingPointSimple.connect('ws://localhost:9220/');
