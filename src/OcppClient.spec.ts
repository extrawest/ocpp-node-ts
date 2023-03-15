import {OcppClient} from "./OcppClient";
import {jest} from "@jest/globals";
import {WS} from "jest-websocket-mock";
import {Protocol} from "./impl/Protocol";
import {BootNotificationRequest, BootNotificationResponse} from "./index";
jest.mock("./impl/Client")
let ocppClCon: OcppClient;
let ws: WS;

describe("Test Ocpp Client Connection methods", () => {
    beforeEach(() => {
        ws = new WS('ws://localhost:1234');
        ocppClCon = new OcppClient("testId");
    });

    it("test callRequest method", async () => {
        const fakeCallRequest = jest.fn((request: string, payload: any) => {});
        jest.mock('./impl/Client', () => {
            return jest.fn().mockImplementation(() => {
                return {callRequest: fakeCallRequest};
            });
        });
        const boot: BootNotificationRequest = {
            chargingStation: {
                model: "sda",
                vendorName: "sad"
            },
            reason: "Unknown"
        };
        const bootResp: BootNotificationResponse = await ocppClCon.callRequest('BootNotification', boot);
        expect(ocppClCon.callRequest).toBeCalled();
        expect(ocppClCon.callRequest).toBeCalledTimes(1);
        expect(ocppClCon.callRequest).toBeCalledWith("BootNotification", boot);
    });

    afterEach(() => {
        jest.clearAllMocks();
        ws.close();
    });
});
