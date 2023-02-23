/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */
/**
 * This indicates the success or failure of the data transfer.
 *
 */
export type DataTransferStatusEnumType = "Accepted" | "Rejected" | "UnknownMessageId" | "UnknownVendorId";
export interface UrnOCPPCp220203DataTransferResponse {
    customData?: CustomDataType;
    status: DataTransferStatusEnumType;
    statusInfo?: StatusInfoType;
    /**
     * Data without specified length or format, in response to request.
     *
     */
    data?: {
        [k: string]: unknown;
    };
}
/**
 * This class does not get 'AdditionalProperties = false' in the schema generation, so it can be extended with arbitrary JSON properties to allow adding custom data.
 */
export interface CustomDataType {
    vendorId: string;
    [k: string]: unknown;
}
/**
 * Element providing more information about the status.
 *
 */
export interface StatusInfoType {
    customData?: CustomDataType;
    /**
     * A predefined code for the reason why the status is returned in this response. The string is case-insensitive.
     *
     */
    reasonCode: string;
    /**
     * Additional text to provide detailed information.
     *
     */
    additionalInfo?: string;
}
