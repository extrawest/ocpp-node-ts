import {OcppServer} from "./OcppServer";
import {Server} from "./impl/Server";
jest.mock("./impl/Server")

describe("Test ocppserver", ()=>{
    it("test server create", () =>{
        const server = new OcppServer()
        expect(Server).toHaveBeenCalledTimes(1)
    })
})