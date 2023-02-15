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
exports.Client = void 0;
var events_1 = __importDefault(require("events"));
var ws_1 = __importDefault(require("ws"));
var Protocol_1 = require("./Protocol");
var schemas_1 = require("./schemas");
var Client = /** @class */ (function (_super) {
    __extends(Client, _super);
    function Client(cpId) {
        var _this = _super.call(this) || this;
        _this.connection = null;
        _this.cpId = cpId;
        return _this;
    }
    Client.prototype.getCpId = function () {
        return this.cpId;
    };
    Client.prototype.setConnection = function (connection) {
        this.connection = connection;
    };
    Client.prototype.callRequest = function (request, payload) {
        if (this.connection) {
            return this.connection.callRequest(request, payload);
        }
        throw new Error('Charging point not connected to central system');
    };
    Client.prototype.connect = function (centralSystemUrl, headers) {
        var _this = this;
        var ws = new ws_1.default(centralSystemUrl + this.getCpId(), [schemas_1.OCPP_PROTOCOL_2_0_1], {
            perMessageDeflate: false,
            protocolVersion: 13,
            headers: headers,
        });
        ws.on('upgrade', function (res) {
            if (!res.headers['sec-websocket-protocol']) {
                _this.emit('error', new Error("Server doesn't support protocol ".concat(schemas_1.OCPP_PROTOCOL_2_0_1)));
            }
        });
        ws.on('close', function (code, reason) {
            _this.setConnection(null);
            _this.emit('close', code, reason);
        });
        ws.on('open', function () {
            if (ws) {
                _this.setConnection(new Protocol_1.Protocol(_this, ws));
                _this.emit('connect');
            }
        });
        ws.on('error', function (err) {
            _this.emit('error', err);
        });
    };
    return Client;
}(events_1.default));
exports.Client = Client;
