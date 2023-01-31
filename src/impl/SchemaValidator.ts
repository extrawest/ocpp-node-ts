import Ajv from 'ajv';
import {
  ERROR_FORMATIONVIOLATION,
  ERROR_PROPERTYCONSTRAINTVIOLATION,
  ERROR_PROTOCOLERROR,
  ERROR_TYPECONSTRAINTVIOLATION,
  OcppError,
} from './OcppError';

export class SchemaValidator {
  schema: any;

  constructor(schema: object) {
    this.schema = schema;
    delete this.schema.$schema;
  }

  /**
   * @throws {OcppError}
   */
  validate(payload: any): void {
    if (!this.schema) {
      throw new OcppError(ERROR_PROTOCOLERROR, 'Schema for request not found');
    }
    const ajv = new Ajv();
    // delete schema.$schema;
    const validate = ajv.compile(this.schema);
    const valid = validate(payload);
    if (!valid) {
      validate.errors?.forEach((error) => {
        if (error.keyword === 'additionalProperties') {
          throw new OcppError(
            ERROR_FORMATIONVIOLATION,
            'Payload for Action is syntactically incorrect or not conform the PDU structure for'
            + ' Action',
            error,
          );
        } else if (['maxLength', 'enum'].includes(error.keyword)) {
          throw new OcppError(
            ERROR_PROPERTYCONSTRAINTVIOLATION,
            'Payload is syntactically correct but at least one field contains an invalid value',
            error,
          );
        } else if (['type'].includes(error.keyword)) {
          throw new OcppError(
            ERROR_TYPECONSTRAINTVIOLATION,
            'Payload for Action is syntactically correct but at least one of the fields violates data type',
            error,
          );
        } else if (error.keyword === 'required') {
          throw new OcppError(
            ERROR_PROTOCOLERROR,
            'Payload for Action is incomplete',
            error,
          );
        } else {
          throw new OcppError(
            ERROR_FORMATIONVIOLATION,
            'Payload for Action is syntactically incorrect or not conform the PDU structure for Action',
            error,
          );
        }
      });
      throw new OcppError(
        ERROR_FORMATIONVIOLATION,
        'Payload for Action is syntactically incorrect or not conform the PDU structure for Action',
      );
    }
  }
}
