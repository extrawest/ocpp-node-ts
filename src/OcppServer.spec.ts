
import {OcppServer} from "./OcppServer";
import {Server} from "./impl/Server";
jest.mock("./impl/Server")

describe("Test ocppserver", ()=>{
    it("test server create", () =>{
        const serverMock = jest
        const server = new OcppServer()
        expect(Server).toHaveBeenCalledTimes(1)
        server.listen(8181)
        expect(server.listen).toBeCalled()
        expect(OcppServer).toBeCalled()
    })

})
