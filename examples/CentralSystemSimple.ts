import {
	OcppServer,
	OcppClientConnection,
	BootNotificationRequest,
	BootNotificationResponse
} from "../src";

const centralSystemSimple = new OcppServer();

centralSystemSimple.listen(9220);

centralSystemSimple.on(
	"connection",
	(client: OcppClientConnection) => {
		console.log(`Client ${client.getCpId()} connected`);

		client.on(
			"close",
			(
				code: number, reason: Buffer
			) => {
				console.log(
					`Client ${client.getCpId()} closed connection`,
					code,
					reason.toString()
				);
			}
		);

		client.on(
			"BootNotification",
			(
				request: BootNotificationRequest,
				cb: (response: BootNotificationResponse) => void
			) => {
				const response: BootNotificationResponse = {
					status: "Accepted",
					currentTime: new Date().toISOString(),
					interval: 60,
				};
				cb(response);
			}
		);
	}
);
