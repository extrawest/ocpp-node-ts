import {OcppServer} from "./OcppServer";
import {jest} from "@jest/globals";
jest.mock("./impl/Server")

let server: OcppServer;


describe('Test listen method functionality', () => {
    beforeEach(() => {
        server = new OcppServer();
        jest.clearAllMocks();
    });
    it("Test OcppServer listen with port parameter", () => {
        server.listen(3000)
        expect(server.listen).toBeCalled();
        expect(server.listen).toBeCalledTimes(1);
        expect(server.listen).toBeCalledWith(3000);
    });

    it("Test OcppServer listen with port parameter", () => {
        server.listen()
        expect(server.listen).toBeCalled();
        expect(server.listen).toBeCalledTimes(1);
        expect(server.listen).toBeCalledWith(9220);
    });
});