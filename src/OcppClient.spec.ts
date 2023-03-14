import {OcppServer} from "./OcppServer";
import {OcppClient} from "./OcppClient";
import {Server} from "./impl/Server";
import {Client} from "./impl/Client";
jest.mock("./impl/Server")
jest.mock("./impl/Client")

describe("Test ocpp server", () => {
    it("test server auth", () => {
        const server = new OcppServer()
        server.listen(8181)
        const client = new OcppClient('cp1')
        client.connect('ws://host.docker.internal:3000/')
        client.callRequest("Authorize", {
            idToken: {
                idToken: "sdsd",
                type: "Central"
            }
        })
        expect(client.callRequest).toBeCalled()
    })

    /*it("test server smth", () => {
        const server = new OcppServer()
        server.listen(8181)
        const client = new OcppClient('cp1')
        client.connect('ws://host.docker.internal:3000/')
        client.callRequest("smth", {
            idToken: {
                idToken: "sdsd",
                type: "Central"
            }
        })
        expect(client.callRequest).toBeCalled()*/
})