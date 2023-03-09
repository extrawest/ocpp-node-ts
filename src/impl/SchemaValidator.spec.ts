import {SchemaValidator} from "./SchemaValidator";
import BootNotification from "../schemas/BootNotification.json"
import {
    ERROR_FORMATIONVIOLATION,
    ERROR_PROPERTYCONSTRAINTVIOLATION, ERROR_PROTOCOLERROR, ERROR_TYPECONSTRAINTVIOLATION
} from "./OcppError";

describe('OcppSchema', () => {
    const customSchema = {
        "$schema": "http://json-schema.org/draft-06/schema#",
        "$id": "urn:OCPP:Cp:2:2020:3:BootNotificationRequest",
        "comment": "OCPP 2.0.1 FINAL",
        "definitions": {
            "BootReasonEnumType": {
                "description": "This contains the reason for sending this message to the CSMS.\r\n",
                "javaType": "BootReasonEnum",
                "type": "string",
                "additionalProperties": false,
                "format": "date",
                "formatMinimum": "2016-02-06",
                "formatExclusiveMaximum": "2016-12-27",
            },

        },
        "type": "object",
        "additionalProperties": false,
        "properties": {
            "reason": {
                "$ref": "#/definitions/BootReasonEnumType"
            }
        },
        "required": [
            "reason"
        ]
    };

    it('should throw format violation', () => {
        const validator = new SchemaValidator(BootNotification);
        const t = () => {
            validator.validate({
                chargingStation: {
                    model: 90,
                    vendorName: "sad"
                },
                reason: "sdfsdf",
                test: "sdsd"
            })
        }
        expect(t).toThrow(ERROR_FORMATIONVIOLATION)
    });

    it('should throw type contstrain violation', () => {
        const validator = new SchemaValidator(BootNotification);
        const t = () => {
            validator.validate({
                chargingStation: {
                    model: 90,
                    vendorName: "sad"
                },
                reason: "sdfsdf"
            })
        }
        expect(t).toThrow(ERROR_TYPECONSTRAINTVIOLATION)
    });

    it('should throw property constrain violation for long string', () => {
        const validator = new SchemaValidator(BootNotification);
        const t = () => {
            validator.validate({
                chargingStation: {
                    model: "sdassssssssssssssssssssssssssssssssssssssssssssssssss",
                    vendorName: "sad"
                },
                reason: "sdfsdf"
            })
        }
        expect(t).toThrow(ERROR_PROPERTYCONSTRAINTVIOLATION)
    });

    it('should throw protocol error for missing required attribute', () => {
        const validator = new SchemaValidator(BootNotification);
        const t = () => {
            validator.validate({
                chargingStation: {
                    model: "sda",
                    vendorName: "sad"
                }
            })
        }
        expect(t).toThrow(ERROR_PROTOCOLERROR)
    });

    it('should throw property violation for invalid enum value', () => {
        const validator = new SchemaValidator(BootNotification);
        const t = () => {
            validator.validate({
                chargingStation: {
                    model: "sda",
                    vendorName: "sad"
                },
                reason: "sdfsdf"
            })
        }
        expect(t).toThrow(ERROR_PROPERTYCONSTRAINTVIOLATION)
    });

    it('should throw format violation', () => {
        const validator = new SchemaValidator(customSchema);
        const t = () => {
            validator.validate({reason:"123"})
        }
        expect(t).toThrow(ERROR_FORMATIONVIOLATION)
    });
});
