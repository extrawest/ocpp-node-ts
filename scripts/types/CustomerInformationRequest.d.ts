/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Used algorithms for the hashes provided.
 *
 */
export type HashAlgorithmEnumType = "SHA256" | "SHA384" | "SHA512";
/**
 * Enumeration of possible idToken types.
 *
 */
export type IdTokenEnumType =
  | "Central"
  | "eMAID"
  | "ISO14443"
  | "ISO15693"
  | "KeyCode"
  | "Local"
  | "MacAddress"
  | "NoAuthorization";

export interface CustomerInformationRequest {
  customData?: CustomDataType;
  customerCertificate?: CertificateHashDataType;
  idToken?: IdTokenType;
  /**
   * The Id of the request.
   *
   *
   */
  requestId: number;
  /**
   * Flag indicating whether the Charging Station should return NotifyCustomerInformationRequest messages containing information about the customer referred to.
   *
   */
  report: boolean;
  /**
   * Flag indicating whether the Charging Station should clear all information about the customer referred to.
   *
   */
  clear: boolean;
  /**
   * A (e.g. vendor specific) identifier of the customer this request refers to. This field contains a custom identifier other than IdToken and Certificate.
   * One of the possible identifiers (customerIdentifier, customerIdToken or customerCertificate) should be in the request message.
   *
   */
  customerIdentifier?: string;
}
/**
 * This class does not get 'AdditionalProperties = false' in the schema generation, so it can be extended with arbitrary JSON properties to allow adding custom data.
 */
export interface CustomDataType {
  vendorId: string;
  [k: string]: unknown;
}
export interface CertificateHashDataType {
  customData?: CustomDataType;
  hashAlgorithm: HashAlgorithmEnumType;
  /**
   * Hashed value of the Issuer DN (Distinguished Name).
   *
   *
   */
  issuerNameHash: string;
  /**
   * Hashed value of the issuers public key
   *
   */
  issuerKeyHash: string;
  /**
   * The serial number of the certificate.
   *
   */
  serialNumber: string;
}
/**
 * Contains a case insensitive identifier to use for the authorization and the type of authorization to support multiple forms of identifiers.
 *
 */
export interface IdTokenType {
  customData?: CustomDataType;
  additionalInfo?: [AdditionalInfoType, ...AdditionalInfoType[]];
  /**
   * IdToken is case insensitive. Might hold the hidden id of an RFID tag, but can for example also contain a UUID.
   *
   */
  idToken: string;
  type: IdTokenEnumType;
}
/**
 * Contains a case insensitive identifier to use for the authorization and the type of authorization to support multiple forms of identifiers.
 *
 */
export interface AdditionalInfoType {
  customData?: CustomDataType;
  /**
   * This field specifies the additional IdToken.
   *
   */
  additionalIdToken: string;
  /**
   * This defines the type of the additionalIdToken. This is a custom type, so the implementation needs to be agreed upon by all involved parties.
   *
   */
  type: string;
}
