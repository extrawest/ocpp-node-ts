import { jest } from "@jest/globals";
import { OcppServer } from "./OcppServer";

jest.mock("./impl/Server");

let server: OcppServer;

describe(
	"Test listen method functionality",
	() => {
		beforeEach(() => {
			server = new OcppServer();
			jest.clearAllMocks();
		});
		it(
			"Should listen OcppServer with port parameter",
			() => {
				server.listen(3000);

				expect(server.listen).toBeCalled();
				expect(server.listen).toBeCalledTimes(1);
				expect(server.listen).toBeCalledWith(3000);
			}
		);

		it(
			"Should listen OcppServer without port parameter",
			() => {
				server.listen();
				expect(server.listen).toBeCalled();
				expect(server.listen).toBeCalledTimes(1);
				expect(server.listen).toBeCalledWith();
			}
		);
	}
);

describe(
	"Test method \"On\"",
	() => {
		beforeEach(() => {
			server = new OcppServer();
			jest.clearAllMocks();
		});
		it(
			"Should run method on correctly",
			() => {
				jest.spyOn(
					server,
					"on"
				);
				server.on(
					"connection",
					jest.fn()
				);

				expect(server.on).toBeCalled();
				expect(server.on).toBeCalledTimes(1);
				expect(server.on).toBeCalledWith(
					"connection",
					expect.any(Function)
				);
			}
		);
	}
);
