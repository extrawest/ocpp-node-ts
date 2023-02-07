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
exports.OcppClient = void 0;
var Client_1 = require("./impl/Client");
var OcppClient = /** @class */ (function (_super) {
    __extends(OcppClient, _super);
    function OcppClient() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OcppClient.prototype.connect = function (centralSystemUrl, headers) {
        _super.prototype.connect.call(this, centralSystemUrl, headers);
    };
    OcppClient.prototype.on = function (event, listener) {
        return _super.prototype.on.call(this, event, listener);
    };
    OcppClient.prototype.callRequest = function (request, payload) {
        return _super.prototype.callRequest.call(this, request, payload);
    };
    return OcppClient;
}(Client_1.Client));
exports.OcppClient = OcppClient;
