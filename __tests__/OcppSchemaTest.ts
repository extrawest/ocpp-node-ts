import { Server } from "../src/impl/Server";
import { SchemaValidator } from "../src/impl/SchemaValidator";
import BootNotification from "../src/ocpp-1.6-schemas/BootNotification.json"
import ChangeAvailability from "../src/ocpp-1.6-schemas/ChangeAvailability.json"
import GetConfiguration from "../src/ocpp-1.6-schemas/GetConfiguration.json"

import {
  ERROR_FORMATIONVIOLATION,
  ERROR_PROPERTYCONSTRAINTVIOLATION, ERROR_PROTOCOLERROR, ERROR_TYPECONSTRAINTVIOLATION,
  OcppError,
} from "../src/impl/OcppError";

describe('OcppSchema', () => {
  it('should throw format violation', () => {
    const validator = new SchemaValidator(BootNotification);
    const t = () => {
      validator.validate({test: 'foo'})
    }
    expect(t).toThrow(ERROR_FORMATIONVIOLATION)
  });

  it('should throw type contstrain violation', () => {
    const validator = new SchemaValidator(BootNotification);
    const t = () => {
      validator.validate({
        "chargePointVendor": 90,
        "chargePointModel": 1
      })
    }
    expect(t).toThrow(ERROR_TYPECONSTRAINTVIOLATION)
  });

  it('should throw property constrain violation for long string', () => {
    const validator = new SchemaValidator(BootNotification);
    const t = () => {
      validator.validate({
        "chargePointVendor": 'long striiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiing',
        "chargePointModel": 'dfdsfdsf'
      })
    }
    expect(t).toThrow(ERROR_PROPERTYCONSTRAINTVIOLATION)
  });

  it('should throw protocol error for missing required attribute', () => {
    const validator = new SchemaValidator(BootNotification);
    const t = () => {
      validator.validate({
        "chargePointModel": 'dfdsfdsf'
      })
    }
    expect(t).toThrow(ERROR_PROTOCOLERROR)
  });

  it('should throw property violation for invalid enum value', () => {
    const validator = new SchemaValidator(ChangeAvailability);
    const t = () => {
      validator.validate({
        "connectorId": 2,
        "type": "Fail"
      })
    }
    expect(t).toThrow(ERROR_PROPERTYCONSTRAINTVIOLATION)
  });
});
