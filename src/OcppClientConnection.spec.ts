import {OcppClientConnection} from "./OcppClientConnection";
import {jest} from "@jest/globals";

let ocppClCon = new OcppClientConnection("testId");

describe("Test Ocpp Client Connection methods", () => {
    beforeEach(() => {
        ocppClCon = new OcppClientConnection("testId");
    });

    it("test server auth", () => {
        const spyGetCpId = jest.spyOn(ocppClCon, "getCpId")
        const cpId = ocppClCon.getCpId();
        expect(cpId).toBe("testId");
        expect(spyGetCpId).toBeCalled()
        expect(spyGetCpId).toBeCalledTimes(1)
    });

    afterEach(() => {
        jest.clearAllMocks();
    });
});