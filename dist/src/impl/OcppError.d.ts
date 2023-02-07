export declare const ERROR_NOTIMPLEMENTED = "NotImplemented";
export declare const ERROR_NOTSUPPORTED = "NotSupported";
export declare const ERROR_INTERNALERROR = "InternalError";
export declare const ERROR_PROTOCOLERROR = "ProtocolError";
export declare const ERROR_SECURITYERROR = "SecurityError";
export declare const ERROR_FORMATIONVIOLATION = "FormationViolation";
export declare const ERROR_PROPERTYCONSTRAINTVIOLATION = "PropertyConstraintViolation";
export declare const ERROR_OCCURENCECONSTRAINTVIOLATION = "OccurenceConstraintViolation";
export declare const ERROR_TYPECONSTRAINTVIOLATION = "TypeConstraintViolation";
export declare const ERROR_GENERICERROR = "GenericError";
export declare class OcppError extends Error {
    code: string;
    details: any;
    info: string | undefined;
    constructor(code: string, info?: string, details?: any | any[]);
}
