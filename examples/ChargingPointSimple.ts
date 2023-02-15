import {
  OcppClient, OcppError,
} from '../src';
import {BootNotificationRequest} from '../src/index'
import {BootNotificationResponse} from '../src/index'

const chargingPointSimple = new OcppClient('CP1111');
chargingPointSimple.on('error', (err: Error) => {
  console.log(err.message);
});
chargingPointSimple.on('close', () => {
  console.log('Connection closed');
});

chargingPointSimple.on('connect', async () => {
  const boot: BootNotificationRequest = {
    chargingStation: {
      model: "sda",
      vendorName: "sad"
    },
    reason: "Unknown"
  };

  try {
    const bootResp: BootNotificationResponse = await chargingPointSimple.callRequest('BootNotification', boot);
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
