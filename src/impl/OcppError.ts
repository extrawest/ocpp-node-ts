// Requested Action is not known by receiver
export const ERROR_NOTIMPLEMENTED = 'NotImplemented';

// Requested Action is recognized but not supported by the receiver
export const ERROR_NOTSUPPORTED = 'NotSupported';

// An internal error occurred and the receiver was not able to process the requested Action
// successfully
export const ERROR_INTERNALERROR = 'InternalError';

// Payload for Action is incomplete
export const ERROR_PROTOCOLERROR = 'ProtocolError';

// During the processing of Action a security issue occurred preventing receiver from completing
// the Action successfully
export const ERROR_SECURITYERROR = 'SecurityError';

// Payload for Action is syntactically incorrect or not conform the PDU structure for Action
export const ERROR_FORMATIONVIOLATION = 'FormationViolation';

// Payload is syntactically correct but at least one field contains an invalid value
export const ERROR_PROPERTYCONSTRAINTVIOLATION = 'PropertyConstraintViolation';

// Payload for Action is syntactically correct but at least one of the fields violates occurence
// constraints
export const ERROR_OCCURENCECONSTRAINTVIOLATION = 'OccurenceConstraintViolation';

// Payload for Action is syntactically correct but at least one of the fields violates data type
// constraints (e.g. “somestring”: 12)
export const ERROR_TYPECONSTRAINTVIOLATION = 'TypeConstraintViolation';

// Any other error not covered by the previous ones
export const ERROR_GENERICERROR = 'GenericError';

export class OcppError extends Error {
  code: string;

  details: any;

  info: string | undefined;

  constructor(code: string, info?: string, details?: any | any[]) {
    super(code);
    this.code = code;
    this.info = info;
    this.details = details;
  }
}
