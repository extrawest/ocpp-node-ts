"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
var events_1 = __importDefault(require("events"));
var ws_1 = require("ws");
var https_1 = require("https");
var http_1 = require("http");
var schemas_1 = require("./schemas");
var OcppClientConnection_1 = require("../OcppClientConnection");
var Protocol_1 = require("./Protocol");
var Server = /** @class */ (function (_super) {
    __extends(Server, _super);
    function Server() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.server = null;
        _this.clients = [];
        return _this;
    }
    Server.prototype.listen = function (port, options) {
        var _this = this;
        if (port === void 0) { port = 9220; }
        var server;
        if (options) {
            server = (0, https_1.createServer)(options || {});
        }
        else {
            server = (0, http_1.createServer)();
        }
        var wss = new ws_1.WebSocketServer({
            noServer: true,
            handleProtocols: function (protocols) {
                if (protocols.has(schemas_1.OCPP_PROTOCOL_2_0_1)) {
                    return schemas_1.OCPP_PROTOCOL_2_0_1;
                }
                return false;
            },
        });
        wss.on('connection', function (ws, req) { return _this.onNewConnection(ws, req); });
        server.on('upgrade', function (req, socket, head) {
            var cpId = Server.getCpIdFromUrl(req.url);
            if (!cpId) {
                socket.write('HTTP/1.1 400 Bad Request\r\n\r\n');
                socket.destroy();
            }
            else if (_this.listenerCount('authorization')) {
                _this.emit('authorization', cpId, req, function (err) {
                    if (err) {
                        socket.write('HTTP/1.1 401 Unauthorized\r\n\r\n');
                        socket.destroy();
                    }
                    else {
                        wss.handleUpgrade(req, socket, head, function (ws) {
                            wss.emit('connection', ws, req);
                        });
                    }
                });
            }
            else {
                wss.handleUpgrade(req, socket, head, function (ws) {
                    wss.emit('connection', ws, req);
                });
            }
        });
        server.listen(port);
    };
    Server.prototype.onNewConnection = function (socket, req) {
        var _this = this;
        var cpId = Server.getCpIdFromUrl(req.url);
        if (!socket.protocol || !cpId) {
            // From Spec: If the Central System does not agree to using one of the subprotocols offered
            // by the client, it MUST complete the WebSocket handshake with a response without a
            // Sec-WebSocket-Protocol header and then immediately close the WebSocket connection.
            console.info('Closed connection due to unsupported protocol');
            socket.close();
            return;
        }
        var client = new OcppClientConnection_1.OcppClientConnection(cpId);
        client.setConnection(new Protocol_1.Protocol(client, socket));
        socket.on('error', function (err) {
            console.info(err.message, socket.readyState);
            client.emit('error', err);
        });
        socket.on('close', function (code, reason) {
            var index = _this.clients.indexOf(client);
            _this.clients.splice(index, 1);
            client.emit('close', code, reason);
            // this.emit('close', client, code, reason);
        });
        this.clients.push(client);
        this.emit('connection', client);
    };
    Server.getCpIdFromUrl = function (url) {
        try {
            if (url) {
                var encodedCpId = url.split('/')
                    .pop();
                if (encodedCpId) {
                    return decodeURI(encodedCpId.split('?')[0]);
                }
            }
        }
        catch (e) {
            console.error(e);
        }
        return undefined;
    };
    return Server;
}(events_1.default));
exports.Server = Server;
