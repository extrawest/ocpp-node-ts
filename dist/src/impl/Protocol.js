"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Protocol = void 0;
var uuid_1 = require("uuid");
var schemas_1 = __importDefault(require("./schemas"));
var OcppError_1 = require("./OcppError");
var SchemaValidator_1 = require("./SchemaValidator");
var CALL_MESSAGE = 2; // Client-to-Server
var CALLRESULT_MESSAGE = 3; // Server-to-Client
var CALLERROR_MESSAGE = 4; // Server-to-Client
var Protocol = /** @class */ (function () {
    function Protocol(eventEmitter, socket) {
        var _this = this;
        this.pendingCalls = {};
        this.eventEmitter = eventEmitter;
        this.socket = socket;
        this.socket.on('message', function (message) {
            _this.onMessage(message.toString());
        });
    }
    Protocol.prototype.onMessage = function (message) {
        try {
            var _a = JSON.parse(message), messageType = _a[0], rest = _a.slice(1);
            if (!Array.isArray(rest)) {
                throw new Error('ProtocolError');
            }
            if (messageType === CALL_MESSAGE && rest.length === 3) {
                var messageId = rest[0], action = rest[1], payload = rest[2];
                this.onCall(messageId, action, payload);
            }
            else if (messageType === CALLRESULT_MESSAGE && rest.length === 2) {
                var messageId = rest[0], payload = rest[1];
                this.onCallResult(messageId, payload);
            }
            else if (messageType === CALLERROR_MESSAGE && rest.length === 4) {
                var messageId = rest[0], errorCode = rest[1], errorDescription = rest[2], errorDetails = rest[3];
                this.onCallError(messageId, errorCode, errorDescription, errorDetails);
            }
            else {
                throw new Error('ProtocolError');
            }
        }
        catch (err) {
            if (err instanceof SyntaxError || err instanceof Error) {
                console.error(err.message);
            }
        }
    };
    Protocol.prototype.callRequest = function (request, payload) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var messageId_1 = (0, uuid_1.v4)();
                var result = JSON.stringify([CALL_MESSAGE,
                    messageId_1,
                    request,
                    payload]);
                _this.socket.send(result);
                _this.pendingCalls[messageId_1] = {
                    resolve: resolve,
                    reject: reject,
                };
                setTimeout(function () {
                    // timeout error
                    _this.onCallError(messageId_1, OcppError_1.ERROR_INTERNALERROR, 'No response from the client', {});
                }, 10000);
            }
            catch (e) {
                console.error(e);
                reject(e);
            }
        });
    };
    Protocol.prototype.callError = function (messageId, error) {
        try {
            var result = JSON.stringify([CALLERROR_MESSAGE,
                messageId,
                error.code,
                error.message,
                error.details || {}]);
            this.socket.send(result);
        }
        catch (e) {
            console.error(e);
        }
    };
    Protocol.prototype.onCallError = function (messageId, errorCode, errorDescription, errorDetails) {
        if (this.pendingCalls[messageId]) {
            var reject = this.pendingCalls[messageId].reject;
            if (reject) {
                reject(new OcppError_1.OcppError(errorCode, errorDescription, errorDetails));
            }
            delete this.pendingCalls[messageId];
        }
    };
    Protocol.prototype.onCallResult = function (messageId, payload) {
        if (this.pendingCalls[messageId]) {
            var resolve = this.pendingCalls[messageId].resolve;
            if (resolve) {
                resolve(payload);
            }
            delete this.pendingCalls[messageId];
        }
    };
    Protocol.prototype.onCall = function (messageId, request, payload) {
        return __awaiter(this, void 0, void 0, function () {
            var schema, validator, response, e_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        schema = schemas_1.default[request];
                        validator = new SchemaValidator_1.SchemaValidator(schema);
                        validator.validate(payload);
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                setTimeout(function () {
                                    // timeout error
                                    reject(new OcppError_1.OcppError(OcppError_1.ERROR_INTERNALERROR, 'No response from the handler'));
                                }, 10000);
                                var hasListener = _this.eventEmitter.emit(request, payload, function (result) {
                                    resolve(result);
                                });
                                if (!hasListener) {
                                    reject(new OcppError_1.OcppError(OcppError_1.ERROR_NOTIMPLEMENTED, "Listener for action \"".concat(request, "\" not set")));
                                }
                            })];
                    case 1:
                        response = _a.sent();
                        this.callResult(messageId, request, response);
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        if (e_1 instanceof OcppError_1.OcppError) {
                            this.callError(messageId, e_1);
                        }
                        else {
                            this.callError(messageId, new OcppError_1.OcppError(OcppError_1.ERROR_INTERNALERROR, 'An internal error occurred and the receiver was not able to process the requested Action'));
                        }
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Protocol.prototype.callResult = function (messageId, action, responsePayload) {
        try {
            var result = JSON.stringify([
                CALLRESULT_MESSAGE,
                messageId,
                responsePayload
            ]);
            this.socket.send(result);
        }
        catch (e) {
            if (e instanceof SyntaxError) {
                this.callError(messageId, new OcppError_1.OcppError(OcppError_1.ERROR_INTERNALERROR, 'Response payload is invalid'));
                console.error(e.message);
            }
        }
    };
    return Protocol;
}());
exports.Protocol = Protocol;
