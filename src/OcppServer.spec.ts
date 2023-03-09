import {OcppServer} from "./OcppServer";
import {Server} from "./impl/Server";
import {WS} from "jest-websocket-mock";
import {jest} from "@jest/globals";
jest.mock("./impl/Server")

let server: OcppServer;
let websocketServer: WS;
describe("Test ocppserver", ()=>{
    it("test server create", () =>{
        const server = new OcppServer()
        expect(Server).toHaveBeenCalledTimes(1)
        server.listen(8181)
        expect(server.listen).toBeCalled()
        expect(OcppServer).toBeCalled()
    })
})
describe('Test listen method functionality', () => {
    beforeEach(() => {
        server = new OcppServer();
        jest.clearAllMocks();
    });
    it("Test listen", () => {
        server.listen()
        expect(server.listen).toBeCalled()
        expect(server)
    });
});