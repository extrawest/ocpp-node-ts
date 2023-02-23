"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemaValidator = void 0;
var ajv_1 = __importDefault(require("ajv"));
var ajv_formats_1 = __importDefault(require("ajv-formats"));
var OcppError_1 = require("./OcppError");
var SchemaValidator = /** @class */ (function () {
    function SchemaValidator(schema) {
        this.schema = schema;
        delete this.schema.$schema;
    }
    /**
     * @throws {OcppError}
     */
    SchemaValidator.prototype.validate = function (payload) {
        var _a;
        if (!this.schema) {
            throw new OcppError_1.OcppError(OcppError_1.ERROR_PROTOCOLERROR, 'Schema for request not found');
        }
        var ajv = new ajv_1.default({ strict: false });
        (0, ajv_formats_1.default)(ajv);
        // delete schema.$schema;
        var validate = ajv.compile(this.schema);
        var valid = validate(payload);
        if (!valid) {
            (_a = validate.errors) === null || _a === void 0 ? void 0 : _a.forEach(function (error) {
                if (error.keyword === 'additionalProperties') {
                    throw new OcppError_1.OcppError(OcppError_1.ERROR_FORMATIONVIOLATION, 'Payload for Action is syntactically incorrect or not conform the PDU structure for'
                        + ' Action', error);
                }
                else if (['maxLength', 'enum'].includes(error.keyword)) {
                    throw new OcppError_1.OcppError(OcppError_1.ERROR_PROPERTYCONSTRAINTVIOLATION, 'Payload is syntactically correct but at least one field contains an invalid value', error);
                }
                else if (['type'].includes(error.keyword)) {
                    throw new OcppError_1.OcppError(OcppError_1.ERROR_TYPECONSTRAINTVIOLATION, 'Payload for Action is syntactically correct but at least one of the fields violates data type', error);
                }
                else if (error.keyword === 'required') {
                    throw new OcppError_1.OcppError(OcppError_1.ERROR_PROTOCOLERROR, 'Payload for Action is incomplete', error);
                }
                else {
                    throw new OcppError_1.OcppError(OcppError_1.ERROR_FORMATIONVIOLATION, 'Payload for Action is syntactically incorrect or not conform the PDU structure for Action', error);
                }
            });
            throw new OcppError_1.OcppError(OcppError_1.ERROR_FORMATIONVIOLATION, 'Payload for Action is syntactically incorrect or not conform the PDU structure for Action');
        }
    };
    return SchemaValidator;
}());
exports.SchemaValidator = SchemaValidator;
