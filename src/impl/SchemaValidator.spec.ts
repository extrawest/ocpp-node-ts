import { SchemaValidator } from "./SchemaValidator";
import BootNotification from "../schemas/BootNotification.json"
import {
    ERROR_FORMATIONVIOLATION,
    ERROR_PROPERTYCONSTRAINTVIOLATION, ERROR_PROTOCOLERROR, ERROR_TYPECONSTRAINTVIOLATION,
    OcppError,
} from "./OcppError";

describe('OcppSchema', () => {
    it('should throw format violation', () => {
        const validator = new SchemaValidator(BootNotification);
        const t = () => {
            validator.validate({
                chargingStation: {
                    model: 90,
                    vendorName: "sad"
                },
                reason: "sdfsdf",
                test:"sdsd"
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
});
