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
Object.defineProperty(exports, "__esModule", { value: true });
exports.OcppClientConnection = void 0;
var Client_1 = require("./impl/Client");
var OcppClientConnection = /** @class */ (function (_super) {
    __extends(OcppClientConnection, _super);
    function OcppClientConnection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OcppClientConnection.prototype.getCpId = function () {
        return _super.prototype.getCpId.call(this);
    };
    OcppClientConnection.prototype.setConnection = function (connection) {
        _super.prototype.setConnection.call(this, connection);
    };
    OcppClientConnection.prototype.on = function (event, listener) {
        return _super.prototype.on.call(this, event, listener);
    };
    OcppClientConnection.prototype.callRequest = function (request, payload) {
        return _super.prototype.callRequest.call(this, request, payload);
    };
    return OcppClientConnection;
}(Client_1.Client));
exports.OcppClientConnection = OcppClientConnection;
