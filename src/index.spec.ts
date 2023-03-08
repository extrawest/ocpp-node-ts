import {OcppClient, OcppError} from "./index";
import {OcppServer} from "./index";
import {OcppClientConnection} from "./index";

describe("Test index classes export", () => {
    it("Test OcppClient export", () => {
        const ocppClient = new OcppClient("asdasd");
        expect(ocppClient).toBeDefined()
    })

    it("Test OcppClientConnection export", () => {
        const ocppClientConnection = new OcppClientConnection("asdasd");
        expect(ocppClientConnection).toBeDefined()
    })

    it("Test OcppClient export", () => {
        const ocppServer = new OcppServer();
        expect(ocppServer).toBeDefined()
    })

    it("Test OcppError export", () => {
        const ocppError = new OcppError("error");
        expect(ocppError).toBeDefined()
    })
})