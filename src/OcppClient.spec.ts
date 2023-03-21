import { OcppClient } from "./OcppClient";
import { jest } from "@jest/globals";
import { BootNotificationRequest } from "./types";

jest.mock("./impl/Client");

let ocppCl: OcppClient;

describe(
	"Test Ocpp Client Connection methods",
	() => {
		beforeEach(() => {
			ocppCl = new OcppClient("testId");
		});

		it(
			"Test method 'callRequest'. Should run method 'callRequest' correctly ",
			async () => {

				const boot: BootNotificationRequest = {
					chargingStation: {
						model: "sda",
						vendorName: "sad"
					},
					reason: "Unknown"
				};
				await ocppCl.callRequest(
					"BootNotification",
					boot
				);
				expect(ocppCl.callRequest).toBeCalled();
				expect(ocppCl.callRequest).toBeCalledTimes(1);
				expect(ocppCl.callRequest).toBeCalledWith(
					"BootNotification",
					boot
				);
			}
		);

		it(
			"Test method 'on'. Should run method 'on' correctly",
			() => {
				jest.spyOn(
					ocppCl,
					"on"
				);

				ocppCl.on(
					"CancelReservation",
					jest.fn()
				);
				expect(ocppCl.on).toBeCalled();
				expect(ocppCl.on).toBeCalledTimes(1);
				expect(ocppCl.on).toBeCalledWith(
					"CancelReservation",
					expect.any(Function)
				);
			}
		);

		it(
			"Test method 'connect'. Should run method 'connect' correctly",
			() => {
				jest.spyOn(
					ocppCl,
					"connect"
				);

				ocppCl.connect("ws://localhost:1234");
				expect(ocppCl.connect).toBeCalled();
				expect(ocppCl.connect).toBeCalledTimes(1);
				expect(ocppCl.connect).toBeCalledWith("ws://localhost:1234");
			}
		);

		afterEach(() => {
			jest.clearAllMocks();
		});
	}
);
