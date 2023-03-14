import {OcppClientConnection} from "./OcppClientConnection";
import {jest} from "@jest/globals";
import {WS} from "jest-websocket-mock";
import {Protocol} from "./impl/Protocol";

let ocppClCon = new OcppClientConnection("testId");
let ws: WS;

describe("Test Ocpp Client Connection methods", () => {
    beforeEach(() => {
        ws = new WS('ws://localhost:1234');
        ocppClCon = new OcppClientConnection("testId");
    });

    it("test getCpId method", () => {
        const spyGetCpId = jest.spyOn(ocppClCon, "getCpId")
        const cpId = ocppClCon.getCpId();
        expect(cpId).toBe("testId");
        expect(spyGetCpId).toBeCalled()
        expect(spyGetCpId).toBeCalledTimes(1)
    });

    it("test setConnection method", () => {
        const spyGetCpId = jest.spyOn(ocppClCon, "setConnection")
        ocppClCon.setConnection(new Protocol(ocppClCon, ws as any));
        expect(spyGetCpId).toBeCalled();
        expect(spyGetCpId).toBeCalledTimes(1);
        expect(spyGetCpId).toBeCalledWith(new Protocol(ocppClCon, ws as any));
    });

    afterEach(() => {
        jest.clearAllMocks();
        ws.close();
    });
});