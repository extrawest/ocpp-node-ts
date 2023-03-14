import {OcppServer} from "./OcppServer";
import {OcppClient} from "./OcppClient";
jest.mock("./impl/Server");
jest.mock("./impl/Client");

describe("Test ocpp server", () => {
    it("test server auth", () => {
        const server = new OcppServer();
        server.listen(8181);
        const client = new OcppClient('cp1');
        client.connect('ws://host.docker.internal:3000/');
        client.callRequest("Authorize", {
            idToken: {
                idToken: "sdsd",
                type: "Central"
            }
        });
        expect(client.callRequest).toBeCalled();
        expect(client.callRequest).toBeCalledTimes(1);
        expect(client.callRequest).toBeCalledWith("Authorize", {
            idToken: {
                idToken: "sdsd",
                type: "Central"
            }
        });
    });
});