![Maintaner](https://img.shields.io/badge/maintainer-extrawest.com-blue)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/extrawest/ocpp-node-ts)
![GitHub release](https://img.shields.io/github/v/release/extrawest/ocpp-node-ts)
[![GitHub tag](https://img.shields.io/github/v/tag/extrawest/ocpp-node-ts)](https://github.com/extrawest/ocpp-node-ts/tags/)
#### Test coverage
![Statements](https://img.shields.io/badge/statements-100%25-brightgreen.svg?style=flat)
![Branches](https://img.shields.io/badge/branches-100%25-brightgreen.svg?style=flat)
![Functions](https://img.shields.io/badge/functions-100%25-brightgreen.svg?style=flat)
![Lines](https://img.shields.io/badge/lines-100%25-brightgreen.svg?style=flat)
# Extrawest OCPP 2.0.1 package

Based on great package [sepych/ocpp-ts][sepych/ocpp-ts] for OCPP 1.6 version.

Typescript package implementing the JSON version of the Open Charge Point Protocol (OCPP). Currently OCPP 2.0.1 is
supported.

Open Charge Point Protocol (OCPP, <http://www.openchargealliance.org/>) is a communication protocol between multiple
charging stations ("charge points") and a single management software ("central system").

## Installation

```
npm i @extrawest/node-ts-ocpp
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
            model: "someModel",
            vendorName: "someVendor"
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
chargingPointSimple.connect('wss://somecs.com/ocpp/', {
    Authorization: getBasicAuth(),
});
```

---
Created by Extrawest Node.js Team
[Extrawest.com](https://www.extrawest.com), 2023
---


[sepych/ocpp-ts]: https://www.npmjs.com/package/ocpp-ts