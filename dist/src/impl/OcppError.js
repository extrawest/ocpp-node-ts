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
exports.OcppError = exports.ERROR_GENERICERROR = exports.ERROR_TYPECONSTRAINTVIOLATION = exports.ERROR_OCCURENCECONSTRAINTVIOLATION = exports.ERROR_PROPERTYCONSTRAINTVIOLATION = exports.ERROR_FORMATIONVIOLATION = exports.ERROR_SECURITYERROR = exports.ERROR_PROTOCOLERROR = exports.ERROR_INTERNALERROR = exports.ERROR_NOTSUPPORTED = exports.ERROR_NOTIMPLEMENTED = void 0;
// Requested Action is not known by receiver
exports.ERROR_NOTIMPLEMENTED = 'NotImplemented';
// Requested Action is recognized but not supported by the receiver
exports.ERROR_NOTSUPPORTED = 'NotSupported';
// An internal error occurred and the receiver was not able to process the requested Action
// successfully
exports.ERROR_INTERNALERROR = 'InternalError';
// Payload for Action is incomplete
exports.ERROR_PROTOCOLERROR = 'ProtocolError';
// During the processing of Action a security issue occurred preventing receiver from completing
// the Action successfully
exports.ERROR_SECURITYERROR = 'SecurityError';
// Payload for Action is syntactically incorrect or not conform the PDU structure for Action
exports.ERROR_FORMATIONVIOLATION = 'FormationViolation';
// Payload is syntactically correct but at least one field contains an invalid value
exports.ERROR_PROPERTYCONSTRAINTVIOLATION = 'PropertyConstraintViolation';
// Payload for Action is syntactically correct but at least one of the fields violates occurence
// constraints
exports.ERROR_OCCURENCECONSTRAINTVIOLATION = 'OccurenceConstraintViolation';
// Payload for Action is syntactically correct but at least one of the fields violates data type
// constraints (e.g. “somestring”: 12)
exports.ERROR_TYPECONSTRAINTVIOLATION = 'TypeConstraintViolation';
// Any other error not covered by the previous ones
exports.ERROR_GENERICERROR = 'GenericError';
var OcppError = /** @class */ (function (_super) {
    __extends(OcppError, _super);
    function OcppError(code, info, details) {
        var _this = _super.call(this, code) || this;
        _this.code = code;
        _this.info = info;
        _this.details = details;
        return _this;
    }
    return OcppError;
}(Error));
exports.OcppError = OcppError;
