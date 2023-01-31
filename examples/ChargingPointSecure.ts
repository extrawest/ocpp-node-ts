import {
  OcppError, OcppClient, BootNotificationRequest, BootNotificationResponse, StartTransactionRequest, StartTransactionResponse,
} from '../src';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const cp = new OcppClient('CP1111');
cp.on('error', (err: Error) => {
  console.log(err.message);
});
cp.on('close', () => {
  console.log('Connection closed');
});
cp.on('connect', async () => {
  const boot: BootNotificationRequest = {
    chargePointVendor: 'eParking',
    chargePointModel: 'NECU-T2',
  };

  try {
    const bootResp: BootNotificationResponse = await cp.callRequest('BootNotification', boot);
    if (bootResp.status === 'Accepted') {
      const transaction: StartTransactionRequest = {
        connectorId: 0,
        idTag: '1234',
        meterStart: 0,
        timestamp: new Date().toISOString(),
      };
      const transactionResp: StartTransactionResponse = await cp.callRequest('StartTransaction', transaction);
      if (transactionResp.idTagInfo.status === 'Accepted') {
        console.log('Starting transaction...');
      }
    }
  } catch (e) {
    if (e instanceof Error || e instanceof OcppError) {
      console.error(e.message);
    }
  }
});

cp.connect('wss://example.com:8081/');
