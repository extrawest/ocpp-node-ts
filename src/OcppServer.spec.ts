import {OcppServer} from "./OcppServer";
import {jest} from "@jest/globals";
import {OcppClientConnection} from "./index";

jest.mock("./impl/Server");

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
        expect(server.listen).toBeCalledWith();
    });
});

describe('Test on method', () => {
    beforeEach(() => {
        server = new OcppServer();
        jest.clearAllMocks();
    });
    it("test on method", () => {
        const spy = jest.spyOn(server, "on")
        const fakeOn = jest.fn((event: string | symbol, listener: (...args: any[]) => void) => {
        });
        jest.mock('./OcppServer', () => {
            return jest.fn().mockImplementation(() => {
                return {on: fakeOn};
            });
        });
        server.on('connection', (client: OcppClientConnection) => {
        });
        expect(server.on).toBeCalled();
        expect(server.on).toBeCalledTimes(1);
        expect(server.on).toBeCalledWith("connection", expect.any(Function));
    });
});

