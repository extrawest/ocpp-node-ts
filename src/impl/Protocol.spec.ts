import { WS } from "jest-websocket-mock";
import { jest } from "@jest/globals";
import { Protocol } from "./Protocol";
import EventEmitter from "events";
import { WebSocket } from "ws";

let ws: WS;
let protocol: Protocol;

jest.useFakeTimers();
jest.spyOn(
	global,
	"setTimeout"
);

jest.spyOn(
	console,
	"error"
).mockImplementation(() => null);

describe(
	"Test Protocol public function onMessage",
	() => {
		beforeEach(() => {
			ws = new WS("ws://localhost:1234");
			protocol = new Protocol(
				new EventEmitter(),
				ws as unknown as WebSocket
			);
		});
		it(
			"get message from onMessage method successfully with CALL_MESSAGE ",
			async () => {
				const spyOnMessage = jest.spyOn(
					protocol,
					"onMessage"
				);

				const message = JSON.stringify([
					2,
					"866bc7e1-e80a-4475-9cc6-56a05bb2222c",
					"BootNotification",
					{
						chargePointVendor: "ocpp-rpc",
						chargePointModel: "ocpp-rpc",
					}]);

				protocol.onMessage(message);

				expect(spyOnMessage).toBeCalled();
				expect(spyOnMessage).toHaveBeenCalledTimes(1);
				expect(spyOnMessage).toHaveBeenCalledWith(message);

			}
		);

		it(
			"get message from onMessage method successfully with CALLRESULT_MESSAGE",
			async () => {
				const spyOnMessage = jest.spyOn(
					protocol,
					"onMessage"
				);

				const message = JSON.stringify([
					3,
					"866bc7e1-e80a-4475-9cc6-56a05bb2222c",
					{
						smth: "ocpp-rpc",
						smthToo: "ocpp-rpc",
					}]);

				protocol.onMessage(message);

				expect(spyOnMessage).toBeCalled();
				expect(spyOnMessage).toHaveBeenCalledTimes(1);
				expect(spyOnMessage).toHaveBeenCalledWith(message);

			}
		);

		it(
			"get message from onMessage method successfully with CALLERROR_MESSAGE",
			async () => {
				const spyOnMessage = jest.spyOn(
					protocol,
					"onMessage"
				);

				const message = JSON.stringify([
					4,
					"866bc7e1-e80a-4475-9cc6-56a05bb2222c",
					"ProtocError",
					"Something happened"
				]);

				protocol.onMessage(message);

				expect(spyOnMessage).toBeCalled();
				expect(spyOnMessage).toHaveBeenCalledTimes(1);
				expect(spyOnMessage).toHaveBeenCalledWith(message);

			}
		);

		it(
			"get error from onMessage method",
			async () => {
				const spyOnMessage = jest.spyOn(
					protocol,
					"onMessage"
				);

				const message = JSON.stringify([
					2,
				]);
				protocol.onMessage(message);

				expect(spyOnMessage).toBeCalled();
				expect(spyOnMessage).toHaveBeenCalledTimes(1);
				expect(spyOnMessage).toHaveBeenCalledWith(message);
				expect(console.error).toHaveBeenCalled();
			}
		);

		afterEach(() => {
			jest.clearAllMocks();
			ws.close();
		});
	}
);

describe(
	"Test Protocol public function callRequest",
	() => {
		beforeEach(() => {
			ws = new WS("ws://localhost:1234");
			protocol = new Protocol(
				new EventEmitter(),
				ws as unknown as WebSocket
			);
		});

		it(
			"Send message with callRequest method successfully",
			() => {
				const spyOnMessage = jest.spyOn(
					protocol,
					"callRequest"
				);
				const request = "someRequest";
				const payload = {
					smth: "asfe"
				};
				protocol.callRequest(
					request,
					payload
				);
				expect(protocol.callRequest).toBeCalled();
				expect(spyOnMessage).toHaveBeenCalledTimes(1);
				expect(spyOnMessage).toHaveBeenCalledWith(
					request,
					payload
				);
				expect(setTimeout).toHaveBeenLastCalledWith(
					expect.any(Function),
					10000
				);
			}
		);

		it(
			"Send message with callRequest method with no response from client",
			() => {
				const spyOnMessage = jest.spyOn(
					protocol,
					"callRequest"
				);
				const request = "someRequest";
				const payload = {
					smth: "asfe"
				};
				protocol.callRequest(
					request,
					payload
				);
				expect(protocol.callRequest).toBeCalled();
				expect(spyOnMessage).toHaveBeenCalledTimes(1);
				expect(setTimeout).toHaveBeenLastCalledWith(
					expect.any(Function),
					10000
				);
			}
		);

		it(
			"Send message with callRequest method with reject",
			async () => {
				protocol.callRequest = jest.fn(() => {
					return new Promise((
						resolve, reject
					) => {
						reject(() => {
							throw new Error("error");
						});
					});
				});

				const request = "asdasdas";
				const payload = {
					smth: "asfe"
				};

				await expect(protocol.callRequest(
					request,
					payload
				)).rejects.toThrow("error");
			}
		);

		afterEach(() => {
			jest.clearAllMocks();
			ws.close();
		});
	}
);
