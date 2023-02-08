# OCPP

Typescript package implementing the JSON version of the Open Charge Point Protocol (OCPP). Currently OCPP 2.0.1 is
supported.

Open Charge Point Protocol (OCPP, <http://www.openchargealliance.org/>) is a communication protocol between multiple
charging stations ("charge points") and a single management software ("central system").

## Installation

```
npm i ocpp-ts
```

## Usage

### Central System

```ts
import {
    OcppServer, OcppClientConnection, BootNotificationRequest, BootNotificationResponse,
} from 'ocpp-ts';

const centralSystemSimple = new OcppServer();
centralSystemSimple.listen(9220);
centralSystemSimple.on('connection', (client: OcppClientConnection) => {
    console.log(`Client ${client.getCpId()} connected`);
    client.on('close', (code: number, reason: Buffer) => {
        console.log(`Client ${client.getCpId()} closed connection`, code, reason.toString());
    });

    client.on('BootNotification', (request: BootNotificationRequest, cb: (response: BootNotificationResponse) => void) => {
        const response: BootNotificationResponse = {
            status: 'Accepted',
            currentTime: new Date().toISOString(),
            interval: 60,
        };
        cb(response);
    });
});
```

### Charging Point

```ts
import {
    BootNotificationRequest,
    BootNotificationResponse,
    OcppClient, OcppError,
} from 'ocpp-ts';

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
            model: "eParking",
            vendorName: "NECU-T2"
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
```

## Security

Add required certificates for Central System, note from OCPP protocol:

*As some Charge Point implementations are using embedded systems with limited computing
resources, we impose an additional restriction on the TLS configuration on the server side:*

* The TLS certificate SHALL be an RSA certificate with a size no greater than 2048 bytes

```ts
centralSystemSimple.on('authorization', (cbId: string, req: IncomingMessage, cb: (err?: Error) => void) => {
    console.log('authorization', cbId, req.headers.authorization);
    // validate authorization header
    // cb(new Error('Unathorized')); // Deny
    cb(); // Accept
});
centralSystemSimple.listen(9220, {
    cert: fs.readFileSync('cert.pem'),
    key: fs.readFileSync('key.pem'),
});
```

If the central system requires authorization, an authorization header can be placed as the second parameter.

```ts
chargingPointSimple.connect('wss://eparking.fi/ocpp/', {
    Authorization: getBasicAuth(),
});
```

