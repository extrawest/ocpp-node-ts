import {OcppClient} from "./OcppClient";
import {jest} from "@jest/globals";
import {
    BootNotificationRequest,
    BootNotificationResponse,
    CancelReservationRequest,
    CancelReservationResponse
} from "./index";
jest.mock("./impl/Client")

let ocppCl: OcppClient;

describe("Test Ocpp Client Connection methods", () => {
    beforeEach(() => {
        ocppCl = new OcppClient("testId");
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
        const bootResp: BootNotificationResponse = await ocppCl.callRequest('BootNotification', boot);
        expect(ocppCl.callRequest).toBeCalled();
        expect(ocppCl.callRequest).toBeCalledTimes(1);
        expect(ocppCl.callRequest).toBeCalledWith("BootNotification", boot);
    });

    it("test on method", () => {
        const spy = jest.spyOn(ocppCl, "on")
        const fakeOn = jest.fn((event: string | symbol, listener: (...args: any[]) => void) => {});
        jest.mock('./OcppClient', () => {
            return jest.fn().mockImplementation(() => {
                return {on: fakeOn};
            });
        });
        ocppCl.on("CancelReservation", (request: CancelReservationRequest, cb: (response: CancelReservationResponse) => void) => {
        })
        expect(ocppCl.on).toBeCalled();
        expect(ocppCl.on).toBeCalledTimes(1);
        expect(ocppCl.on).toBeCalledWith("CancelReservation", expect.any(Function));
    });

    afterEach(() => {
        jest.clearAllMocks();
    });
});
