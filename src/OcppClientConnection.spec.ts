import { OcppClientConnection } from "./OcppClientConnection";
import { jest } from "@jest/globals";
import { WS } from "jest-websocket-mock";
import { Protocol } from "./impl/Protocol";
import WebSocket from "ws";

jest.mock("./impl/Client");

let ocppClCon = new OcppClientConnection("testId");
let ws: WS;

describe(
	"Test Ocpp Client Connection methods",
	() => {
		beforeEach(() => {
			ws = new WS("ws://localhost:1234");
			ocppClCon = new OcppClientConnection("testId");
		});

		it(
			"Test method 'getCpId'. Should run method 'getCpId' correctly",
			() => {
				const fakeGetCpId = jest.fn().mockReturnValue("testId");
				jest.mock(
					"./impl/Client",
					() => {
						return jest.fn().mockImplementation(() => {
							return { getCpId: () => fakeGetCpId };
						});
					}
				);
				ocppClCon.getCpId();
				expect(ocppClCon.getCpId).toBeCalled();
				expect(ocppClCon.getCpId).toBeCalledTimes(1);
			}
		);

		it(
			"Test method 'setConnection'. Should run method 'setConnection' correctly",
			() => {
				const spySetConnection = jest.spyOn(
					ocppClCon,
					"setConnection"
				);
				ocppClCon.setConnection(new Protocol(
					ocppClCon,
					ws as unknown as WebSocket
				));
				expect(spySetConnection).toBeCalled();
				expect(spySetConnection).toBeCalledTimes(1);
				expect(spySetConnection).toBeCalledWith(new Protocol(
					ocppClCon,
					ws as unknown as WebSocket
				));
			}
		);

		it(
			"Test method 'callRequest'. Should run method 'callRequest' correctly",
			() => {
				ocppClCon.callRequest(
					"CancelReservation",
					{ reservationId: 0 }
				);

				expect(ocppClCon.callRequest).toBeCalled();
				expect(ocppClCon.callRequest).toBeCalledTimes(1);
				expect(ocppClCon.callRequest).toBeCalledWith(
					"CancelReservation",
					{ reservationId: 0 }
				);
			}
		);

		it(
			"Test method 'on'. Should run method 'on' correctly",
			() => {
				jest.spyOn(
					ocppClCon,
					"on"
				);

				ocppClCon.on(
					"BootNotification",
					jest.fn()
				);

				expect(ocppClCon.on).toBeCalled();
				expect(ocppClCon.on).toBeCalledTimes(1);
				expect(ocppClCon.on).toBeCalledWith(
					"BootNotification",
					expect.any(Function)
				);
			}
		);

		afterEach(() => {
			jest.clearAllMocks();
			ws.close();
		});
	}
);