/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */
/**
 * This contains the current status of the Connector.
 *
 */
export type ConnectorStatusEnumType = "Available" | "Occupied" | "Reserved" | "Unavailable" | "Faulted";
export interface UrnOCPPCp220203StatusNotificationRequest {
    customData?: CustomDataType;
    /**
     * The time for which the status is reported. If absent time of receipt of the message will be assumed.
     *
     */
    timestamp: string;
    connectorStatus: ConnectorStatusEnumType;
    /**
     * The id of the EVSE to which the connector belongs for which the the status is reported.
     *
     */
    evseId: number;
    /**
     * The id of the connector within the EVSE for which the status is reported.
     *
     */
    connectorId: number;
}
/**
 * This class does not get 'AdditionalProperties = false' in the schema generation, so it can be extended with arbitrary JSON properties to allow adding custom data.
 */
export interface CustomDataType {
    vendorId: string;
    [k: string]: unknown;
}
