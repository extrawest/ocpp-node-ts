import {
	OcppClient,
	OcppError,
	BootNotificationRequest,
	BootNotificationResponse,
	TransactionEventRequest,
	TransactionEventResponse
} from "../src";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const cp = new OcppClient("CP1111");

cp.on(
	"error",
	(err: Error) => {
		console.log(err.message);
	}
);
cp.on(
	"close",
	() => {
		console.log("Connection closed");
	}
);
cp.on(
	"connect",
	async () => {
		const boot: BootNotificationRequest = {
			chargingStation: {
				model: "sda",
				vendorName: "sad"
			},
			reason: "Unknown"
		};

		try {
			const bootResp: BootNotificationResponse = await cp.callRequest(
				"BootNotification",
				boot
			);
			if (bootResp.status === "Accepted") {
				const transaction: TransactionEventRequest = {
					eventType: "Started",
					meterValue: [
						{
							sampledValue: [{ value: 1 }], timestamp: new Date().toISOString()
						}
					],
					timestamp: new Date().toISOString(),
					triggerReason: "Authorized",
					seqNo: 10,
					transactionInfo: {
						transactionId: "1",
						remoteStartId: 10
					}
				};
				const transactionResp: TransactionEventResponse = await cp.callRequest(
					"TransactionEvent",
					transaction
				);
				if (transactionResp.idTokenInfo?.status === "Accepted") {
					console.log("Starting transaction...");
				}
			}
		} catch (e) {
			if (e instanceof Error || e instanceof OcppError) {
				console.error(e.message);
			}
		}
	}
);

cp.connect("wss://example.com:8081/");
