export declare class SchemaValidator {
    schema: any;
    constructor(schema: object);
    /**
     * @throws {OcppError}
     */
    validate(payload: any): void;
}
