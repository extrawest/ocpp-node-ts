declare const _default: {
    Authorize: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            HashAlgorithmEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            IdTokenEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            AdditionalInfoType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    additionalIdToken: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    type: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            IdTokenType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    additionalInfo: {
                        type: string;
                        additionalItems: boolean;
                        items: {
                            $ref: string;
                        };
                        minItems: number;
                    };
                    idToken: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    type: {
                        $ref: string;
                    };
                };
                required: string[];
            };
            OCSPRequestDataType: {
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    hashAlgorithm: {
                        $ref: string;
                    };
                    issuerNameHash: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    issuerKeyHash: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    serialNumber: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    responderURL: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            idToken: {
                $ref: string;
            };
            certificate: {
                description: string;
                type: string;
                maxLength: number;
            };
            iso15118CertificateHashData: {
                type: string;
                additionalItems: boolean;
                items: {
                    $ref: string;
                };
                minItems: number;
                maxItems: number;
            };
        };
        required: string[];
    };
    AuthorizeResponse: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            AuthorizationStatusEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            AuthorizeCertificateStatusEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            IdTokenEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            MessageFormatEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            AdditionalInfoType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    additionalIdToken: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    type: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            IdTokenInfoType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    status: {
                        $ref: string;
                    };
                    cacheExpiryDateTime: {
                        description: string;
                        type: string;
                        format: string;
                    };
                    chargingPriority: {
                        description: string;
                        type: string;
                    };
                    language1: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    evseId: {
                        description: string;
                        type: string;
                        additionalItems: boolean;
                        items: {
                            type: string;
                        };
                        minItems: number;
                    };
                    groupIdToken: {
                        $ref: string;
                    };
                    language2: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    personalMessage: {
                        $ref: string;
                    };
                };
                required: string[];
            };
            IdTokenType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    additionalInfo: {
                        type: string;
                        additionalItems: boolean;
                        items: {
                            $ref: string;
                        };
                        minItems: number;
                    };
                    idToken: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    type: {
                        $ref: string;
                    };
                };
                required: string[];
            };
            MessageContentType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    format: {
                        $ref: string;
                    };
                    language: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    content: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            idTokenInfo: {
                $ref: string;
            };
            certificateStatus: {
                $ref: string;
            };
        };
        required: string[];
    };
    BootNotification: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            BootReasonEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            ChargingStationType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    serialNumber: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    model: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    modem: {
                        $ref: string;
                    };
                    vendorName: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    firmwareVersion: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            ModemType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    iccid: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    imsi: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            chargingStation: {
                $ref: string;
            };
            reason: {
                $ref: string;
            };
        };
        required: string[];
    };
    BootNotificationResponse: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            RegistrationStatusEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            StatusInfoType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    reasonCode: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    additionalInfo: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            currentTime: {
                description: string;
                type: string;
                format: string;
            };
            interval: {
                description: string;
                type: string;
            };
            status: {
                $ref: string;
            };
            statusInfo: {
                $ref: string;
            };
        };
        required: string[];
    };
    CancelReservation: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            reservationId: {
                description: string;
                type: string;
            };
        };
        required: string[];
    };
    CancelReservationResponse: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            CancelReservationStatusEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            StatusInfoType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    reasonCode: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    additionalInfo: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            status: {
                $ref: string;
            };
            statusInfo: {
                $ref: string;
            };
        };
        required: string[];
    };
    CertificateSigned: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            CertificateSigningUseEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            certificateChain: {
                description: string;
                type: string;
                maxLength: number;
            };
            certificateType: {
                $ref: string;
            };
        };
        required: string[];
    };
    CertificateSignedResponse: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            CertificateSignedStatusEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            StatusInfoType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    reasonCode: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    additionalInfo: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            status: {
                $ref: string;
            };
            statusInfo: {
                $ref: string;
            };
        };
        required: string[];
    };
    ChangeAvailability: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            OperationalStatusEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            EVSEType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    id: {
                        description: string;
                        type: string;
                    };
                    connectorId: {
                        description: string;
                        type: string;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            evse: {
                $ref: string;
            };
            operationalStatus: {
                $ref: string;
            };
        };
        required: string[];
    };
    ChangeAvailabilityResponse: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            ChangeAvailabilityStatusEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            StatusInfoType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    reasonCode: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    additionalInfo: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            status: {
                $ref: string;
            };
            statusInfo: {
                $ref: string;
            };
        };
        required: string[];
    };
    ClearCache: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
        };
    };
    ClearCacheResponse: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            ClearCacheStatusEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            StatusInfoType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    reasonCode: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    additionalInfo: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            status: {
                $ref: string;
            };
            statusInfo: {
                $ref: string;
            };
        };
        required: string[];
    };
    ClearChargingProfile: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            ChargingProfilePurposeEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            ClearChargingProfileType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    evseId: {
                        description: string;
                        type: string;
                    };
                    chargingProfilePurpose: {
                        $ref: string;
                    };
                    stackLevel: {
                        description: string;
                        type: string;
                    };
                };
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            chargingProfileId: {
                description: string;
                type: string;
            };
            chargingProfileCriteria: {
                $ref: string;
            };
        };
    };
    ClearChargingProfileResponse: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            ClearChargingProfileStatusEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            StatusInfoType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    reasonCode: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    additionalInfo: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            status: {
                $ref: string;
            };
            statusInfo: {
                $ref: string;
            };
        };
        required: string[];
    };
    ClearDisplayMessage: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            id: {
                description: string;
                type: string;
            };
        };
        required: string[];
    };
    ClearDisplayMessageResponse: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            ClearMessageStatusEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            StatusInfoType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    reasonCode: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    additionalInfo: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            status: {
                $ref: string;
            };
            statusInfo: {
                $ref: string;
            };
        };
        required: string[];
    };
    ClearedChargingLimit: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            ChargingLimitSourceEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            chargingLimitSource: {
                $ref: string;
            };
            evseId: {
                description: string;
                type: string;
            };
        };
        required: string[];
    };
    ClearedChargingLimitResponse: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
        };
    };
    ClearVariableMonitoring: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            id: {
                description: string;
                type: string;
                additionalItems: boolean;
                items: {
                    type: string;
                };
                minItems: number;
            };
        };
        required: string[];
    };
    ClearVariableMonitoringResponse: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            ClearMonitoringStatusEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            ClearMonitoringResultType: {
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    status: {
                        $ref: string;
                    };
                    id: {
                        description: string;
                        type: string;
                    };
                    statusInfo: {
                        $ref: string;
                    };
                };
                required: string[];
            };
            StatusInfoType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    reasonCode: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    additionalInfo: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            clearMonitoringResult: {
                type: string;
                additionalItems: boolean;
                items: {
                    $ref: string;
                };
                minItems: number;
            };
        };
        required: string[];
    };
    CostUpdated: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            totalCost: {
                description: string;
                type: string;
            };
            transactionId: {
                description: string;
                type: string;
                maxLength: number;
            };
        };
        required: string[];
    };
    CostUpdatedResponse: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
        };
    };
    CustomerInformation: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            HashAlgorithmEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            IdTokenEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            AdditionalInfoType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    additionalIdToken: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    type: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            CertificateHashDataType: {
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    hashAlgorithm: {
                        $ref: string;
                    };
                    issuerNameHash: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    issuerKeyHash: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    serialNumber: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            IdTokenType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    additionalInfo: {
                        type: string;
                        additionalItems: boolean;
                        items: {
                            $ref: string;
                        };
                        minItems: number;
                    };
                    idToken: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    type: {
                        $ref: string;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            customerCertificate: {
                $ref: string;
            };
            idToken: {
                $ref: string;
            };
            requestId: {
                description: string;
                type: string;
            };
            report: {
                description: string;
                type: string;
            };
            clear: {
                description: string;
                type: string;
            };
            customerIdentifier: {
                description: string;
                type: string;
                maxLength: number;
            };
        };
        required: string[];
    };
    CustomerInformationResponse: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            CustomerInformationStatusEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            StatusInfoType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    reasonCode: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    additionalInfo: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            status: {
                $ref: string;
            };
            statusInfo: {
                $ref: string;
            };
        };
        required: string[];
    };
    DataTransfer: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            messageId: {
                description: string;
                type: string;
                maxLength: number;
            };
            data: {
                description: string;
            };
            vendorId: {
                description: string;
                type: string;
                maxLength: number;
            };
        };
        required: string[];
    };
    DataTransferResponse: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            DataTransferStatusEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            StatusInfoType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    reasonCode: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    additionalInfo: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            status: {
                $ref: string;
            };
            statusInfo: {
                $ref: string;
            };
            data: {
                description: string;
            };
        };
        required: string[];
    };
    DeleteCertificate: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            HashAlgorithmEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            CertificateHashDataType: {
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    hashAlgorithm: {
                        $ref: string;
                    };
                    issuerNameHash: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    issuerKeyHash: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    serialNumber: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            certificateHashData: {
                $ref: string;
            };
        };
        required: string[];
    };
    DeleteCertificateResponse: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            DeleteCertificateStatusEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            StatusInfoType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    reasonCode: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    additionalInfo: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            status: {
                $ref: string;
            };
            statusInfo: {
                $ref: string;
            };
        };
        required: string[];
    };
    FirmwareStatusNotification: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            FirmwareStatusEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            status: {
                $ref: string;
            };
            requestId: {
                description: string;
                type: string;
            };
        };
        required: string[];
    };
    FirmwareStatusNotificationResponse: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
        };
    };
    Get15118EVCertificate: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            CertificateActionEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            iso15118SchemaVersion: {
                description: string;
                type: string;
                maxLength: number;
            };
            action: {
                $ref: string;
            };
            exiRequest: {
                description: string;
                type: string;
                maxLength: number;
            };
        };
        required: string[];
    };
    Get15118EVCertificateResponse: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            Iso15118EVCertificateStatusEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            StatusInfoType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    reasonCode: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    additionalInfo: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            status: {
                $ref: string;
            };
            statusInfo: {
                $ref: string;
            };
            exiResponse: {
                description: string;
                type: string;
                maxLength: number;
            };
        };
        required: string[];
    };
    GetBaseReport: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            ReportBaseEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            requestId: {
                description: string;
                type: string;
            };
            reportBase: {
                $ref: string;
            };
        };
        required: string[];
    };
    GetBaseReportResponse: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            GenericDeviceModelStatusEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            StatusInfoType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    reasonCode: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    additionalInfo: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            status: {
                $ref: string;
            };
            statusInfo: {
                $ref: string;
            };
        };
        required: string[];
    };
    GetCertificateStatus: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            HashAlgorithmEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            OCSPRequestDataType: {
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    hashAlgorithm: {
                        $ref: string;
                    };
                    issuerNameHash: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    issuerKeyHash: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    serialNumber: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    responderURL: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            ocspRequestData: {
                $ref: string;
            };
        };
        required: string[];
    };
    GetCertificateStatusResponse: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            GetCertificateStatusEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            StatusInfoType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    reasonCode: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    additionalInfo: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            status: {
                $ref: string;
            };
            statusInfo: {
                $ref: string;
            };
            ocspResult: {
                description: string;
                type: string;
                maxLength: number;
            };
        };
        required: string[];
    };
    GetChargingProfiles: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            ChargingLimitSourceEnumType: {
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            ChargingProfilePurposeEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            ChargingProfileCriterionType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    chargingProfilePurpose: {
                        $ref: string;
                    };
                    stackLevel: {
                        description: string;
                        type: string;
                    };
                    chargingProfileId: {
                        description: string;
                        type: string;
                        additionalItems: boolean;
                        items: {
                            type: string;
                        };
                        minItems: number;
                    };
                    chargingLimitSource: {
                        description: string;
                        type: string;
                        additionalItems: boolean;
                        items: {
                            $ref: string;
                        };
                        minItems: number;
                        maxItems: number;
                    };
                };
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            requestId: {
                description: string;
                type: string;
            };
            evseId: {
                description: string;
                type: string;
            };
            chargingProfile: {
                $ref: string;
            };
        };
        required: string[];
    };
    GetChargingProfilesResponse: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            GetChargingProfileStatusEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            StatusInfoType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    reasonCode: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    additionalInfo: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            status: {
                $ref: string;
            };
            statusInfo: {
                $ref: string;
            };
        };
        required: string[];
    };
    GetCompositeSchedule: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            ChargingRateUnitEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            duration: {
                description: string;
                type: string;
            };
            chargingRateUnit: {
                $ref: string;
            };
            evseId: {
                description: string;
                type: string;
            };
        };
        required: string[];
    };
    GetCompositeScheduleResponse: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            ChargingRateUnitEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            GenericStatusEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            ChargingSchedulePeriodType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    startPeriod: {
                        description: string;
                        type: string;
                    };
                    limit: {
                        description: string;
                        type: string;
                    };
                    numberPhases: {
                        description: string;
                        type: string;
                    };
                    phaseToUse: {
                        description: string;
                        type: string;
                    };
                };
                required: string[];
            };
            CompositeScheduleType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    chargingSchedulePeriod: {
                        type: string;
                        additionalItems: boolean;
                        items: {
                            $ref: string;
                        };
                        minItems: number;
                    };
                    evseId: {
                        description: string;
                        type: string;
                    };
                    duration: {
                        description: string;
                        type: string;
                    };
                    scheduleStart: {
                        description: string;
                        type: string;
                        format: string;
                    };
                    chargingRateUnit: {
                        $ref: string;
                    };
                };
                required: string[];
            };
            StatusInfoType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    reasonCode: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    additionalInfo: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            status: {
                $ref: string;
            };
            statusInfo: {
                $ref: string;
            };
            schedule: {
                $ref: string;
            };
        };
        required: string[];
    };
    GetDisplayMessages: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            MessagePriorityEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            MessageStateEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            id: {
                description: string;
                type: string;
                additionalItems: boolean;
                items: {
                    type: string;
                };
                minItems: number;
            };
            requestId: {
                description: string;
                type: string;
            };
            priority: {
                $ref: string;
            };
            state: {
                $ref: string;
            };
        };
        required: string[];
    };
    GetDisplayMessagesResponse: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            GetDisplayMessagesStatusEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            StatusInfoType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    reasonCode: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    additionalInfo: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            status: {
                $ref: string;
            };
            statusInfo: {
                $ref: string;
            };
        };
        required: string[];
    };
    GetInstalledCertificateIds: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            GetCertificateIdUseEnumType: {
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            certificateType: {
                description: string;
                type: string;
                additionalItems: boolean;
                items: {
                    $ref: string;
                };
                minItems: number;
            };
        };
    };
    GetInstalledCertificateIdsResponse: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            GetCertificateIdUseEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            GetInstalledCertificateStatusEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            HashAlgorithmEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            CertificateHashDataChainType: {
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    certificateHashData: {
                        $ref: string;
                    };
                    certificateType: {
                        $ref: string;
                    };
                    childCertificateHashData: {
                        type: string;
                        additionalItems: boolean;
                        items: {
                            $ref: string;
                        };
                        minItems: number;
                        maxItems: number;
                    };
                };
                required: string[];
            };
            CertificateHashDataType: {
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    hashAlgorithm: {
                        $ref: string;
                    };
                    issuerNameHash: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    issuerKeyHash: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    serialNumber: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            StatusInfoType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    reasonCode: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    additionalInfo: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            status: {
                $ref: string;
            };
            statusInfo: {
                $ref: string;
            };
            certificateHashDataChain: {
                type: string;
                additionalItems: boolean;
                items: {
                    $ref: string;
                };
                minItems: number;
            };
        };
        required: string[];
    };
    GetLocalListVersion: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
        };
    };
    GetLocalListVersionResponse: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            versionNumber: {
                description: string;
                type: string;
            };
        };
        required: string[];
    };
    GetLog: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            LogEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            LogParametersType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    remoteLocation: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    oldestTimestamp: {
                        description: string;
                        type: string;
                        format: string;
                    };
                    latestTimestamp: {
                        description: string;
                        type: string;
                        format: string;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            log: {
                $ref: string;
            };
            logType: {
                $ref: string;
            };
            requestId: {
                description: string;
                type: string;
            };
            retries: {
                description: string;
                type: string;
            };
            retryInterval: {
                description: string;
                type: string;
            };
        };
        required: string[];
    };
    GetLogResponse: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            LogStatusEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            StatusInfoType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    reasonCode: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    additionalInfo: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            status: {
                $ref: string;
            };
            statusInfo: {
                $ref: string;
            };
            filename: {
                description: string;
                type: string;
                maxLength: number;
            };
        };
        required: string[];
    };
    GetMonitoringReport: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            MonitoringCriterionEnumType: {
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            ComponentType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    evse: {
                        $ref: string;
                    };
                    name: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    instance: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            ComponentVariableType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    component: {
                        $ref: string;
                    };
                    variable: {
                        $ref: string;
                    };
                };
                required: string[];
            };
            EVSEType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    id: {
                        description: string;
                        type: string;
                    };
                    connectorId: {
                        description: string;
                        type: string;
                    };
                };
                required: string[];
            };
            VariableType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    name: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    instance: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            componentVariable: {
                type: string;
                additionalItems: boolean;
                items: {
                    $ref: string;
                };
                minItems: number;
            };
            requestId: {
                description: string;
                type: string;
            };
            monitoringCriteria: {
                description: string;
                type: string;
                additionalItems: boolean;
                items: {
                    $ref: string;
                };
                minItems: number;
                maxItems: number;
            };
        };
        required: string[];
    };
    GetMonitoringReportResponse: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            GenericDeviceModelStatusEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            StatusInfoType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    reasonCode: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    additionalInfo: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            status: {
                $ref: string;
            };
            statusInfo: {
                $ref: string;
            };
        };
        required: string[];
    };
    GetReport: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            ComponentCriterionEnumType: {
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            ComponentType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    evse: {
                        $ref: string;
                    };
                    name: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    instance: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            ComponentVariableType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    component: {
                        $ref: string;
                    };
                    variable: {
                        $ref: string;
                    };
                };
                required: string[];
            };
            EVSEType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    id: {
                        description: string;
                        type: string;
                    };
                    connectorId: {
                        description: string;
                        type: string;
                    };
                };
                required: string[];
            };
            VariableType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    name: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    instance: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            componentVariable: {
                type: string;
                additionalItems: boolean;
                items: {
                    $ref: string;
                };
                minItems: number;
            };
            requestId: {
                description: string;
                type: string;
            };
            componentCriteria: {
                description: string;
                type: string;
                additionalItems: boolean;
                items: {
                    $ref: string;
                };
                minItems: number;
                maxItems: number;
            };
        };
        required: string[];
    };
    GetReportResponse: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            GenericDeviceModelStatusEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            StatusInfoType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    reasonCode: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    additionalInfo: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            status: {
                $ref: string;
            };
            statusInfo: {
                $ref: string;
            };
        };
        required: string[];
    };
    GetTransactionStatus: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            transactionId: {
                description: string;
                type: string;
                maxLength: number;
            };
        };
    };
    GetTransactionStatusResponse: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            ongoingIndicator: {
                description: string;
                type: string;
            };
            messagesInQueue: {
                description: string;
                type: string;
            };
        };
        required: string[];
    };
    GetVariables: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            AttributeEnumType: {
                description: string;
                javaType: string;
                type: string;
                default: string;
                additionalProperties: boolean;
                enum: string[];
            };
            ComponentType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    evse: {
                        $ref: string;
                    };
                    name: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    instance: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            EVSEType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    id: {
                        description: string;
                        type: string;
                    };
                    connectorId: {
                        description: string;
                        type: string;
                    };
                };
                required: string[];
            };
            GetVariableDataType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    attributeType: {
                        $ref: string;
                    };
                    component: {
                        $ref: string;
                    };
                    variable: {
                        $ref: string;
                    };
                };
                required: string[];
            };
            VariableType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    name: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    instance: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            getVariableData: {
                type: string;
                additionalItems: boolean;
                items: {
                    $ref: string;
                };
                minItems: number;
            };
        };
        required: string[];
    };
    GetVariablesResponse: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            AttributeEnumType: {
                description: string;
                javaType: string;
                type: string;
                default: string;
                additionalProperties: boolean;
                enum: string[];
            };
            GetVariableStatusEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            ComponentType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    evse: {
                        $ref: string;
                    };
                    name: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    instance: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            EVSEType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    id: {
                        description: string;
                        type: string;
                    };
                    connectorId: {
                        description: string;
                        type: string;
                    };
                };
                required: string[];
            };
            GetVariableResultType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    attributeStatusInfo: {
                        $ref: string;
                    };
                    attributeStatus: {
                        $ref: string;
                    };
                    attributeType: {
                        $ref: string;
                    };
                    attributeValue: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    component: {
                        $ref: string;
                    };
                    variable: {
                        $ref: string;
                    };
                };
                required: string[];
            };
            StatusInfoType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    reasonCode: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    additionalInfo: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            VariableType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    name: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    instance: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            getVariableResult: {
                type: string;
                additionalItems: boolean;
                items: {
                    $ref: string;
                };
                minItems: number;
            };
        };
        required: string[];
    };
    Heartbeat: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
        };
    };
    HeartbeatResponse: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            currentTime: {
                description: string;
                type: string;
                format: string;
            };
        };
        required: string[];
    };
    InstallCertificate: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            InstallCertificateUseEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            certificateType: {
                $ref: string;
            };
            certificate: {
                description: string;
                type: string;
                maxLength: number;
            };
        };
        required: string[];
    };
    InstallCertificateResponse: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            InstallCertificateStatusEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            StatusInfoType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    reasonCode: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    additionalInfo: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            status: {
                $ref: string;
            };
            statusInfo: {
                $ref: string;
            };
        };
        required: string[];
    };
    LogStatusNotification: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            UploadLogStatusEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            status: {
                $ref: string;
            };
            requestId: {
                description: string;
                type: string;
            };
        };
        required: string[];
    };
    LogStatusNotificationResponse: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
        };
    };
    MeterValues: {
        $schema: string;
        $id: string;
        description: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            LocationEnumType: {
                description: string;
                javaType: string;
                type: string;
                default: string;
                additionalProperties: boolean;
                enum: string[];
            };
            MeasurandEnumType: {
                description: string;
                javaType: string;
                type: string;
                default: string;
                additionalProperties: boolean;
                enum: string[];
            };
            PhaseEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            ReadingContextEnumType: {
                description: string;
                javaType: string;
                type: string;
                default: string;
                additionalProperties: boolean;
                enum: string[];
            };
            MeterValueType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    sampledValue: {
                        type: string;
                        additionalItems: boolean;
                        items: {
                            $ref: string;
                        };
                        minItems: number;
                    };
                    timestamp: {
                        description: string;
                        type: string;
                        format: string;
                    };
                };
                required: string[];
            };
            SampledValueType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    value: {
                        description: string;
                        type: string;
                    };
                    context: {
                        $ref: string;
                    };
                    measurand: {
                        $ref: string;
                    };
                    phase: {
                        $ref: string;
                    };
                    location: {
                        $ref: string;
                    };
                    signedMeterValue: {
                        $ref: string;
                    };
                    unitOfMeasure: {
                        $ref: string;
                    };
                };
                required: string[];
            };
            SignedMeterValueType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    signedMeterData: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    signingMethod: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    encodingMethod: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    publicKey: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            UnitOfMeasureType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    unit: {
                        description: string;
                        type: string;
                        default: string;
                        maxLength: number;
                    };
                    multiplier: {
                        description: string;
                        type: string;
                        default: number;
                    };
                };
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            evseId: {
                description: string;
                type: string;
            };
            meterValue: {
                type: string;
                additionalItems: boolean;
                items: {
                    $ref: string;
                };
                minItems: number;
            };
        };
        required: string[];
    };
    MeterValuesResponse: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
        };
    };
    NotifyChargingLimit: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            ChargingLimitSourceEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            ChargingRateUnitEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            CostKindEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            ChargingLimitType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    chargingLimitSource: {
                        $ref: string;
                    };
                    isGridCritical: {
                        description: string;
                        type: string;
                    };
                };
                required: string[];
            };
            ChargingSchedulePeriodType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    startPeriod: {
                        description: string;
                        type: string;
                    };
                    limit: {
                        description: string;
                        type: string;
                    };
                    numberPhases: {
                        description: string;
                        type: string;
                    };
                    phaseToUse: {
                        description: string;
                        type: string;
                    };
                };
                required: string[];
            };
            ChargingScheduleType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    id: {
                        description: string;
                        type: string;
                    };
                    startSchedule: {
                        description: string;
                        type: string;
                        format: string;
                    };
                    duration: {
                        description: string;
                        type: string;
                    };
                    chargingRateUnit: {
                        $ref: string;
                    };
                    chargingSchedulePeriod: {
                        type: string;
                        additionalItems: boolean;
                        items: {
                            $ref: string;
                        };
                        minItems: number;
                        maxItems: number;
                    };
                    minChargingRate: {
                        description: string;
                        type: string;
                    };
                    salesTariff: {
                        $ref: string;
                    };
                };
                required: string[];
            };
            ConsumptionCostType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    startValue: {
                        description: string;
                        type: string;
                    };
                    cost: {
                        type: string;
                        additionalItems: boolean;
                        items: {
                            $ref: string;
                        };
                        minItems: number;
                        maxItems: number;
                    };
                };
                required: string[];
            };
            CostType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    costKind: {
                        $ref: string;
                    };
                    amount: {
                        description: string;
                        type: string;
                    };
                    amountMultiplier: {
                        description: string;
                        type: string;
                    };
                };
                required: string[];
            };
            RelativeTimeIntervalType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    start: {
                        description: string;
                        type: string;
                    };
                    duration: {
                        description: string;
                        type: string;
                    };
                };
                required: string[];
            };
            SalesTariffEntryType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    relativeTimeInterval: {
                        $ref: string;
                    };
                    ePriceLevel: {
                        description: string;
                        type: string;
                        minimum: number;
                    };
                    consumptionCost: {
                        type: string;
                        additionalItems: boolean;
                        items: {
                            $ref: string;
                        };
                        minItems: number;
                        maxItems: number;
                    };
                };
                required: string[];
            };
            SalesTariffType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    id: {
                        description: string;
                        type: string;
                    };
                    salesTariffDescription: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    numEPriceLevels: {
                        description: string;
                        type: string;
                    };
                    salesTariffEntry: {
                        type: string;
                        additionalItems: boolean;
                        items: {
                            $ref: string;
                        };
                        minItems: number;
                        maxItems: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            chargingSchedule: {
                type: string;
                additionalItems: boolean;
                items: {
                    $ref: string;
                };
                minItems: number;
            };
            evseId: {
                description: string;
                type: string;
            };
            chargingLimit: {
                $ref: string;
            };
        };
        required: string[];
    };
    NotifyChargingLimitResponse: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
        };
    };
    NotifyCustomerInformation: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            data: {
                description: string;
                type: string;
                maxLength: number;
            };
            tbc: {
                description: string;
                type: string;
                default: boolean;
            };
            seqNo: {
                description: string;
                type: string;
            };
            generatedAt: {
                description: string;
                type: string;
                format: string;
            };
            requestId: {
                description: string;
                type: string;
            };
        };
        required: string[];
    };
    NotifyCustomerInformationResponse: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
        };
    };
    NotifyDisplayMessages: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            MessageFormatEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            MessagePriorityEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            MessageStateEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            ComponentType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    evse: {
                        $ref: string;
                    };
                    name: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    instance: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            EVSEType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    id: {
                        description: string;
                        type: string;
                    };
                    connectorId: {
                        description: string;
                        type: string;
                    };
                };
                required: string[];
            };
            MessageContentType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    format: {
                        $ref: string;
                    };
                    language: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    content: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            MessageInfoType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    display: {
                        $ref: string;
                    };
                    id: {
                        description: string;
                        type: string;
                    };
                    priority: {
                        $ref: string;
                    };
                    state: {
                        $ref: string;
                    };
                    startDateTime: {
                        description: string;
                        type: string;
                        format: string;
                    };
                    endDateTime: {
                        description: string;
                        type: string;
                        format: string;
                    };
                    transactionId: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    message: {
                        $ref: string;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            messageInfo: {
                type: string;
                additionalItems: boolean;
                items: {
                    $ref: string;
                };
                minItems: number;
            };
            requestId: {
                description: string;
                type: string;
            };
            tbc: {
                description: string;
                type: string;
                default: boolean;
            };
        };
        required: string[];
    };
    NotifyDisplayMessagesResponse: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
        };
    };
    NotifyEVChargingNeeds: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            EnergyTransferModeEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            ACChargingParametersType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    energyAmount: {
                        description: string;
                        type: string;
                    };
                    evMinCurrent: {
                        description: string;
                        type: string;
                    };
                    evMaxCurrent: {
                        description: string;
                        type: string;
                    };
                    evMaxVoltage: {
                        description: string;
                        type: string;
                    };
                };
                required: string[];
            };
            ChargingNeedsType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    acChargingParameters: {
                        $ref: string;
                    };
                    dcChargingParameters: {
                        $ref: string;
                    };
                    requestedEnergyTransfer: {
                        $ref: string;
                    };
                    departureTime: {
                        description: string;
                        type: string;
                        format: string;
                    };
                };
                required: string[];
            };
            DCChargingParametersType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    evMaxCurrent: {
                        description: string;
                        type: string;
                    };
                    evMaxVoltage: {
                        description: string;
                        type: string;
                    };
                    energyAmount: {
                        description: string;
                        type: string;
                    };
                    evMaxPower: {
                        description: string;
                        type: string;
                    };
                    stateOfCharge: {
                        description: string;
                        type: string;
                        minimum: number;
                        maximum: number;
                    };
                    evEnergyCapacity: {
                        description: string;
                        type: string;
                    };
                    fullSoC: {
                        description: string;
                        type: string;
                        minimum: number;
                        maximum: number;
                    };
                    bulkSoC: {
                        description: string;
                        type: string;
                        minimum: number;
                        maximum: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            maxScheduleTuples: {
                description: string;
                type: string;
            };
            chargingNeeds: {
                $ref: string;
            };
            evseId: {
                description: string;
                type: string;
            };
        };
        required: string[];
    };
    NotifyEVChargingNeedsResponse: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            NotifyEVChargingNeedsStatusEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            StatusInfoType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    reasonCode: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    additionalInfo: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            status: {
                $ref: string;
            };
            statusInfo: {
                $ref: string;
            };
        };
        required: string[];
    };
    NotifyEVChargingSchedule: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            ChargingRateUnitEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            CostKindEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            ChargingSchedulePeriodType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    startPeriod: {
                        description: string;
                        type: string;
                    };
                    limit: {
                        description: string;
                        type: string;
                    };
                    numberPhases: {
                        description: string;
                        type: string;
                    };
                    phaseToUse: {
                        description: string;
                        type: string;
                    };
                };
                required: string[];
            };
            ChargingScheduleType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    id: {
                        description: string;
                        type: string;
                    };
                    startSchedule: {
                        description: string;
                        type: string;
                        format: string;
                    };
                    duration: {
                        description: string;
                        type: string;
                    };
                    chargingRateUnit: {
                        $ref: string;
                    };
                    chargingSchedulePeriod: {
                        type: string;
                        additionalItems: boolean;
                        items: {
                            $ref: string;
                        };
                        minItems: number;
                        maxItems: number;
                    };
                    minChargingRate: {
                        description: string;
                        type: string;
                    };
                    salesTariff: {
                        $ref: string;
                    };
                };
                required: string[];
            };
            ConsumptionCostType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    startValue: {
                        description: string;
                        type: string;
                    };
                    cost: {
                        type: string;
                        additionalItems: boolean;
                        items: {
                            $ref: string;
                        };
                        minItems: number;
                        maxItems: number;
                    };
                };
                required: string[];
            };
            CostType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    costKind: {
                        $ref: string;
                    };
                    amount: {
                        description: string;
                        type: string;
                    };
                    amountMultiplier: {
                        description: string;
                        type: string;
                    };
                };
                required: string[];
            };
            RelativeTimeIntervalType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    start: {
                        description: string;
                        type: string;
                    };
                    duration: {
                        description: string;
                        type: string;
                    };
                };
                required: string[];
            };
            SalesTariffEntryType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    relativeTimeInterval: {
                        $ref: string;
                    };
                    ePriceLevel: {
                        description: string;
                        type: string;
                        minimum: number;
                    };
                    consumptionCost: {
                        type: string;
                        additionalItems: boolean;
                        items: {
                            $ref: string;
                        };
                        minItems: number;
                        maxItems: number;
                    };
                };
                required: string[];
            };
            SalesTariffType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    id: {
                        description: string;
                        type: string;
                    };
                    salesTariffDescription: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    numEPriceLevels: {
                        description: string;
                        type: string;
                    };
                    salesTariffEntry: {
                        type: string;
                        additionalItems: boolean;
                        items: {
                            $ref: string;
                        };
                        minItems: number;
                        maxItems: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            timeBase: {
                description: string;
                type: string;
                format: string;
            };
            chargingSchedule: {
                $ref: string;
            };
            evseId: {
                description: string;
                type: string;
            };
        };
        required: string[];
    };
    NotifyEVChargingScheduleResponse: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            GenericStatusEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            StatusInfoType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    reasonCode: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    additionalInfo: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            status: {
                $ref: string;
            };
            statusInfo: {
                $ref: string;
            };
        };
        required: string[];
    };
    NotifyEvent: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            EventNotificationEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            EventTriggerEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            ComponentType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    evse: {
                        $ref: string;
                    };
                    name: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    instance: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            EventDataType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    eventId: {
                        description: string;
                        type: string;
                    };
                    timestamp: {
                        description: string;
                        type: string;
                        format: string;
                    };
                    trigger: {
                        $ref: string;
                    };
                    cause: {
                        description: string;
                        type: string;
                    };
                    actualValue: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    techCode: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    techInfo: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    cleared: {
                        description: string;
                        type: string;
                    };
                    transactionId: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    component: {
                        $ref: string;
                    };
                    variableMonitoringId: {
                        description: string;
                        type: string;
                    };
                    eventNotificationType: {
                        $ref: string;
                    };
                    variable: {
                        $ref: string;
                    };
                };
                required: string[];
            };
            EVSEType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    id: {
                        description: string;
                        type: string;
                    };
                    connectorId: {
                        description: string;
                        type: string;
                    };
                };
                required: string[];
            };
            VariableType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    name: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    instance: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            generatedAt: {
                description: string;
                type: string;
                format: string;
            };
            tbc: {
                description: string;
                type: string;
                default: boolean;
            };
            seqNo: {
                description: string;
                type: string;
            };
            eventData: {
                type: string;
                additionalItems: boolean;
                items: {
                    $ref: string;
                };
                minItems: number;
            };
        };
        required: string[];
    };
    NotifyEventResponse: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
        };
    };
    NotifyMonitoringReport: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            MonitorEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            ComponentType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    evse: {
                        $ref: string;
                    };
                    name: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    instance: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            EVSEType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    id: {
                        description: string;
                        type: string;
                    };
                    connectorId: {
                        description: string;
                        type: string;
                    };
                };
                required: string[];
            };
            MonitoringDataType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    component: {
                        $ref: string;
                    };
                    variable: {
                        $ref: string;
                    };
                    variableMonitoring: {
                        type: string;
                        additionalItems: boolean;
                        items: {
                            $ref: string;
                        };
                        minItems: number;
                    };
                };
                required: string[];
            };
            VariableMonitoringType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    id: {
                        description: string;
                        type: string;
                    };
                    transaction: {
                        description: string;
                        type: string;
                    };
                    value: {
                        description: string;
                        type: string;
                    };
                    type: {
                        $ref: string;
                    };
                    severity: {
                        description: string;
                        type: string;
                    };
                };
                required: string[];
            };
            VariableType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    name: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    instance: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            monitor: {
                type: string;
                additionalItems: boolean;
                items: {
                    $ref: string;
                };
                minItems: number;
            };
            requestId: {
                description: string;
                type: string;
            };
            tbc: {
                description: string;
                type: string;
                default: boolean;
            };
            seqNo: {
                description: string;
                type: string;
            };
            generatedAt: {
                description: string;
                type: string;
                format: string;
            };
        };
        required: string[];
    };
    NotifyMonitoringReportResponse: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
        };
    };
    NotifyReport: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            AttributeEnumType: {
                description: string;
                javaType: string;
                type: string;
                default: string;
                additionalProperties: boolean;
                enum: string[];
            };
            DataEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            MutabilityEnumType: {
                description: string;
                javaType: string;
                type: string;
                default: string;
                additionalProperties: boolean;
                enum: string[];
            };
            ComponentType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    evse: {
                        $ref: string;
                    };
                    name: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    instance: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            EVSEType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    id: {
                        description: string;
                        type: string;
                    };
                    connectorId: {
                        description: string;
                        type: string;
                    };
                };
                required: string[];
            };
            ReportDataType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    component: {
                        $ref: string;
                    };
                    variable: {
                        $ref: string;
                    };
                    variableAttribute: {
                        type: string;
                        additionalItems: boolean;
                        items: {
                            $ref: string;
                        };
                        minItems: number;
                        maxItems: number;
                    };
                    variableCharacteristics: {
                        $ref: string;
                    };
                };
                required: string[];
            };
            VariableAttributeType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    type: {
                        $ref: string;
                    };
                    value: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    mutability: {
                        $ref: string;
                    };
                    persistent: {
                        description: string;
                        type: string;
                        default: boolean;
                    };
                    constant: {
                        description: string;
                        type: string;
                        default: boolean;
                    };
                };
            };
            VariableCharacteristicsType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    unit: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    dataType: {
                        $ref: string;
                    };
                    minLimit: {
                        description: string;
                        type: string;
                    };
                    maxLimit: {
                        description: string;
                        type: string;
                    };
                    valuesList: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    supportsMonitoring: {
                        description: string;
                        type: string;
                    };
                };
                required: string[];
            };
            VariableType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    name: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    instance: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            requestId: {
                description: string;
                type: string;
            };
            generatedAt: {
                description: string;
                type: string;
                format: string;
            };
            reportData: {
                type: string;
                additionalItems: boolean;
                items: {
                    $ref: string;
                };
                minItems: number;
            };
            tbc: {
                description: string;
                type: string;
                default: boolean;
            };
            seqNo: {
                description: string;
                type: string;
            };
        };
        required: string[];
    };
    NotifyReportResponse: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
        };
    };
    PublishFirmware: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            location: {
                description: string;
                type: string;
                maxLength: number;
            };
            retries: {
                description: string;
                type: string;
            };
            checksum: {
                description: string;
                type: string;
                maxLength: number;
            };
            requestId: {
                description: string;
                type: string;
            };
            retryInterval: {
                description: string;
                type: string;
            };
        };
        required: string[];
    };
    PublishFirmwareResponse: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            GenericStatusEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            StatusInfoType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    reasonCode: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    additionalInfo: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            status: {
                $ref: string;
            };
            statusInfo: {
                $ref: string;
            };
        };
        required: string[];
    };
    PublishFirmwareStatusNotification: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            PublishFirmwareStatusEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            status: {
                $ref: string;
            };
            location: {
                description: string;
                type: string;
                additionalItems: boolean;
                items: {
                    type: string;
                    maxLength: number;
                };
                minItems: number;
            };
            requestId: {
                description: string;
                type: string;
            };
        };
        required: string[];
    };
    PublishFirmwareStatusNotificationResponse: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
        };
    };
    ReportChargingProfiles: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            ChargingLimitSourceEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            ChargingProfileKindEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            ChargingProfilePurposeEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            ChargingRateUnitEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            CostKindEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            RecurrencyKindEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            ChargingProfileType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    id: {
                        description: string;
                        type: string;
                    };
                    stackLevel: {
                        description: string;
                        type: string;
                    };
                    chargingProfilePurpose: {
                        $ref: string;
                    };
                    chargingProfileKind: {
                        $ref: string;
                    };
                    recurrencyKind: {
                        $ref: string;
                    };
                    validFrom: {
                        description: string;
                        type: string;
                        format: string;
                    };
                    validTo: {
                        description: string;
                        type: string;
                        format: string;
                    };
                    chargingSchedule: {
                        type: string;
                        additionalItems: boolean;
                        items: {
                            $ref: string;
                        };
                        minItems: number;
                        maxItems: number;
                    };
                    transactionId: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            ChargingSchedulePeriodType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    startPeriod: {
                        description: string;
                        type: string;
                    };
                    limit: {
                        description: string;
                        type: string;
                    };
                    numberPhases: {
                        description: string;
                        type: string;
                    };
                    phaseToUse: {
                        description: string;
                        type: string;
                    };
                };
                required: string[];
            };
            ChargingScheduleType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    id: {
                        description: string;
                        type: string;
                    };
                    startSchedule: {
                        description: string;
                        type: string;
                        format: string;
                    };
                    duration: {
                        description: string;
                        type: string;
                    };
                    chargingRateUnit: {
                        $ref: string;
                    };
                    chargingSchedulePeriod: {
                        type: string;
                        additionalItems: boolean;
                        items: {
                            $ref: string;
                        };
                        minItems: number;
                        maxItems: number;
                    };
                    minChargingRate: {
                        description: string;
                        type: string;
                    };
                    salesTariff: {
                        $ref: string;
                    };
                };
                required: string[];
            };
            ConsumptionCostType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    startValue: {
                        description: string;
                        type: string;
                    };
                    cost: {
                        type: string;
                        additionalItems: boolean;
                        items: {
                            $ref: string;
                        };
                        minItems: number;
                        maxItems: number;
                    };
                };
                required: string[];
            };
            CostType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    costKind: {
                        $ref: string;
                    };
                    amount: {
                        description: string;
                        type: string;
                    };
                    amountMultiplier: {
                        description: string;
                        type: string;
                    };
                };
                required: string[];
            };
            RelativeTimeIntervalType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    start: {
                        description: string;
                        type: string;
                    };
                    duration: {
                        description: string;
                        type: string;
                    };
                };
                required: string[];
            };
            SalesTariffEntryType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    relativeTimeInterval: {
                        $ref: string;
                    };
                    ePriceLevel: {
                        description: string;
                        type: string;
                        minimum: number;
                    };
                    consumptionCost: {
                        type: string;
                        additionalItems: boolean;
                        items: {
                            $ref: string;
                        };
                        minItems: number;
                        maxItems: number;
                    };
                };
                required: string[];
            };
            SalesTariffType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    id: {
                        description: string;
                        type: string;
                    };
                    salesTariffDescription: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    numEPriceLevels: {
                        description: string;
                        type: string;
                    };
                    salesTariffEntry: {
                        type: string;
                        additionalItems: boolean;
                        items: {
                            $ref: string;
                        };
                        minItems: number;
                        maxItems: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            requestId: {
                description: string;
                type: string;
            };
            chargingLimitSource: {
                $ref: string;
            };
            chargingProfile: {
                type: string;
                additionalItems: boolean;
                items: {
                    $ref: string;
                };
                minItems: number;
            };
            tbc: {
                description: string;
                type: string;
                default: boolean;
            };
            evseId: {
                description: string;
                type: string;
            };
        };
        required: string[];
    };
    ReportChargingProfilesResponse: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
        };
    };
    RequestStartTransaction: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            ChargingProfileKindEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            ChargingProfilePurposeEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            ChargingRateUnitEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            CostKindEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            IdTokenEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            RecurrencyKindEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            AdditionalInfoType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    additionalIdToken: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    type: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            ChargingProfileType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    id: {
                        description: string;
                        type: string;
                    };
                    stackLevel: {
                        description: string;
                        type: string;
                    };
                    chargingProfilePurpose: {
                        $ref: string;
                    };
                    chargingProfileKind: {
                        $ref: string;
                    };
                    recurrencyKind: {
                        $ref: string;
                    };
                    validFrom: {
                        description: string;
                        type: string;
                        format: string;
                    };
                    validTo: {
                        description: string;
                        type: string;
                        format: string;
                    };
                    chargingSchedule: {
                        type: string;
                        additionalItems: boolean;
                        items: {
                            $ref: string;
                        };
                        minItems: number;
                        maxItems: number;
                    };
                    transactionId: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            ChargingSchedulePeriodType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    startPeriod: {
                        description: string;
                        type: string;
                    };
                    limit: {
                        description: string;
                        type: string;
                    };
                    numberPhases: {
                        description: string;
                        type: string;
                    };
                    phaseToUse: {
                        description: string;
                        type: string;
                    };
                };
                required: string[];
            };
            ChargingScheduleType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    id: {
                        description: string;
                        type: string;
                    };
                    startSchedule: {
                        description: string;
                        type: string;
                        format: string;
                    };
                    duration: {
                        description: string;
                        type: string;
                    };
                    chargingRateUnit: {
                        $ref: string;
                    };
                    chargingSchedulePeriod: {
                        type: string;
                        additionalItems: boolean;
                        items: {
                            $ref: string;
                        };
                        minItems: number;
                        maxItems: number;
                    };
                    minChargingRate: {
                        description: string;
                        type: string;
                    };
                    salesTariff: {
                        $ref: string;
                    };
                };
                required: string[];
            };
            ConsumptionCostType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    startValue: {
                        description: string;
                        type: string;
                    };
                    cost: {
                        type: string;
                        additionalItems: boolean;
                        items: {
                            $ref: string;
                        };
                        minItems: number;
                        maxItems: number;
                    };
                };
                required: string[];
            };
            CostType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    costKind: {
                        $ref: string;
                    };
                    amount: {
                        description: string;
                        type: string;
                    };
                    amountMultiplier: {
                        description: string;
                        type: string;
                    };
                };
                required: string[];
            };
            IdTokenType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    additionalInfo: {
                        type: string;
                        additionalItems: boolean;
                        items: {
                            $ref: string;
                        };
                        minItems: number;
                    };
                    idToken: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    type: {
                        $ref: string;
                    };
                };
                required: string[];
            };
            RelativeTimeIntervalType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    start: {
                        description: string;
                        type: string;
                    };
                    duration: {
                        description: string;
                        type: string;
                    };
                };
                required: string[];
            };
            SalesTariffEntryType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    relativeTimeInterval: {
                        $ref: string;
                    };
                    ePriceLevel: {
                        description: string;
                        type: string;
                        minimum: number;
                    };
                    consumptionCost: {
                        type: string;
                        additionalItems: boolean;
                        items: {
                            $ref: string;
                        };
                        minItems: number;
                        maxItems: number;
                    };
                };
                required: string[];
            };
            SalesTariffType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    id: {
                        description: string;
                        type: string;
                    };
                    salesTariffDescription: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    numEPriceLevels: {
                        description: string;
                        type: string;
                    };
                    salesTariffEntry: {
                        type: string;
                        additionalItems: boolean;
                        items: {
                            $ref: string;
                        };
                        minItems: number;
                        maxItems: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            evseId: {
                description: string;
                type: string;
            };
            groupIdToken: {
                $ref: string;
            };
            idToken: {
                $ref: string;
            };
            remoteStartId: {
                description: string;
                type: string;
            };
            chargingProfile: {
                $ref: string;
            };
        };
        required: string[];
    };
    RequestStartTransactionResponse: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            RequestStartStopStatusEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            StatusInfoType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    reasonCode: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    additionalInfo: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            status: {
                $ref: string;
            };
            statusInfo: {
                $ref: string;
            };
            transactionId: {
                description: string;
                type: string;
                maxLength: number;
            };
        };
        required: string[];
    };
    RequestStopTransaction: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            transactionId: {
                description: string;
                type: string;
                maxLength: number;
            };
        };
        required: string[];
    };
    RequestStopTransactionResponse: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            RequestStartStopStatusEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            StatusInfoType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    reasonCode: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    additionalInfo: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            status: {
                $ref: string;
            };
            statusInfo: {
                $ref: string;
            };
        };
        required: string[];
    };
    ReservationStatusUpdate: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            ReservationUpdateStatusEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            reservationId: {
                description: string;
                type: string;
            };
            reservationUpdateStatus: {
                $ref: string;
            };
        };
        required: string[];
    };
    ReservationStatusUpdateResponse: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
        };
    };
    ReserveNow: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            ConnectorEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            IdTokenEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            AdditionalInfoType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    additionalIdToken: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    type: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            IdTokenType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    additionalInfo: {
                        type: string;
                        additionalItems: boolean;
                        items: {
                            $ref: string;
                        };
                        minItems: number;
                    };
                    idToken: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    type: {
                        $ref: string;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            id: {
                description: string;
                type: string;
            };
            expiryDateTime: {
                description: string;
                type: string;
                format: string;
            };
            connectorType: {
                $ref: string;
            };
            idToken: {
                $ref: string;
            };
            evseId: {
                description: string;
                type: string;
            };
            groupIdToken: {
                $ref: string;
            };
        };
        required: string[];
    };
    ReserveNowResponse: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            ReserveNowStatusEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            StatusInfoType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    reasonCode: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    additionalInfo: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            status: {
                $ref: string;
            };
            statusInfo: {
                $ref: string;
            };
        };
        required: string[];
    };
    Reset: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            ResetEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            type: {
                $ref: string;
            };
            evseId: {
                description: string;
                type: string;
            };
        };
        required: string[];
    };
    ResetResponse: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            ResetStatusEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            StatusInfoType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    reasonCode: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    additionalInfo: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            status: {
                $ref: string;
            };
            statusInfo: {
                $ref: string;
            };
        };
        required: string[];
    };
    SecurityEventNotification: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            type: {
                description: string;
                type: string;
                maxLength: number;
            };
            timestamp: {
                description: string;
                type: string;
                format: string;
            };
            techInfo: {
                description: string;
                type: string;
                maxLength: number;
            };
        };
        required: string[];
    };
    SecurityEventNotificationResponse: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
        };
    };
    SendLocalList: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            AuthorizationStatusEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            IdTokenEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            MessageFormatEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            UpdateEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            AdditionalInfoType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    additionalIdToken: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    type: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            AuthorizationData: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    idToken: {
                        $ref: string;
                    };
                    idTokenInfo: {
                        $ref: string;
                    };
                };
                required: string[];
            };
            IdTokenInfoType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    status: {
                        $ref: string;
                    };
                    cacheExpiryDateTime: {
                        description: string;
                        type: string;
                        format: string;
                    };
                    chargingPriority: {
                        description: string;
                        type: string;
                    };
                    language1: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    evseId: {
                        description: string;
                        type: string;
                        additionalItems: boolean;
                        items: {
                            type: string;
                        };
                        minItems: number;
                    };
                    groupIdToken: {
                        $ref: string;
                    };
                    language2: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    personalMessage: {
                        $ref: string;
                    };
                };
                required: string[];
            };
            IdTokenType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    additionalInfo: {
                        type: string;
                        additionalItems: boolean;
                        items: {
                            $ref: string;
                        };
                        minItems: number;
                    };
                    idToken: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    type: {
                        $ref: string;
                    };
                };
                required: string[];
            };
            MessageContentType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    format: {
                        $ref: string;
                    };
                    language: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    content: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            localAuthorizationList: {
                type: string;
                additionalItems: boolean;
                items: {
                    $ref: string;
                };
                minItems: number;
            };
            versionNumber: {
                description: string;
                type: string;
            };
            updateType: {
                $ref: string;
            };
        };
        required: string[];
    };
    SendLocalListResponse: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            SendLocalListStatusEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            StatusInfoType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    reasonCode: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    additionalInfo: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            status: {
                $ref: string;
            };
            statusInfo: {
                $ref: string;
            };
        };
        required: string[];
    };
    SetChargingProfile: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            ChargingProfileKindEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            ChargingProfilePurposeEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            ChargingRateUnitEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            CostKindEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            RecurrencyKindEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            ChargingProfileType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    id: {
                        description: string;
                        type: string;
                    };
                    stackLevel: {
                        description: string;
                        type: string;
                    };
                    chargingProfilePurpose: {
                        $ref: string;
                    };
                    chargingProfileKind: {
                        $ref: string;
                    };
                    recurrencyKind: {
                        $ref: string;
                    };
                    validFrom: {
                        description: string;
                        type: string;
                        format: string;
                    };
                    validTo: {
                        description: string;
                        type: string;
                        format: string;
                    };
                    chargingSchedule: {
                        type: string;
                        additionalItems: boolean;
                        items: {
                            $ref: string;
                        };
                        minItems: number;
                        maxItems: number;
                    };
                    transactionId: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            ChargingSchedulePeriodType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    startPeriod: {
                        description: string;
                        type: string;
                    };
                    limit: {
                        description: string;
                        type: string;
                    };
                    numberPhases: {
                        description: string;
                        type: string;
                    };
                    phaseToUse: {
                        description: string;
                        type: string;
                    };
                };
                required: string[];
            };
            ChargingScheduleType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    id: {
                        description: string;
                        type: string;
                    };
                    startSchedule: {
                        description: string;
                        type: string;
                        format: string;
                    };
                    duration: {
                        description: string;
                        type: string;
                    };
                    chargingRateUnit: {
                        $ref: string;
                    };
                    chargingSchedulePeriod: {
                        type: string;
                        additionalItems: boolean;
                        items: {
                            $ref: string;
                        };
                        minItems: number;
                        maxItems: number;
                    };
                    minChargingRate: {
                        description: string;
                        type: string;
                    };
                    salesTariff: {
                        $ref: string;
                    };
                };
                required: string[];
            };
            ConsumptionCostType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    startValue: {
                        description: string;
                        type: string;
                    };
                    cost: {
                        type: string;
                        additionalItems: boolean;
                        items: {
                            $ref: string;
                        };
                        minItems: number;
                        maxItems: number;
                    };
                };
                required: string[];
            };
            CostType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    costKind: {
                        $ref: string;
                    };
                    amount: {
                        description: string;
                        type: string;
                    };
                    amountMultiplier: {
                        description: string;
                        type: string;
                    };
                };
                required: string[];
            };
            RelativeTimeIntervalType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    start: {
                        description: string;
                        type: string;
                    };
                    duration: {
                        description: string;
                        type: string;
                    };
                };
                required: string[];
            };
            SalesTariffEntryType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    relativeTimeInterval: {
                        $ref: string;
                    };
                    ePriceLevel: {
                        description: string;
                        type: string;
                        minimum: number;
                    };
                    consumptionCost: {
                        type: string;
                        additionalItems: boolean;
                        items: {
                            $ref: string;
                        };
                        minItems: number;
                        maxItems: number;
                    };
                };
                required: string[];
            };
            SalesTariffType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    id: {
                        description: string;
                        type: string;
                    };
                    salesTariffDescription: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    numEPriceLevels: {
                        description: string;
                        type: string;
                    };
                    salesTariffEntry: {
                        type: string;
                        additionalItems: boolean;
                        items: {
                            $ref: string;
                        };
                        minItems: number;
                        maxItems: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            evseId: {
                description: string;
                type: string;
            };
            chargingProfile: {
                $ref: string;
            };
        };
        required: string[];
    };
    SetChargingProfileResponse: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            ChargingProfileStatusEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            StatusInfoType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    reasonCode: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    additionalInfo: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            status: {
                $ref: string;
            };
            statusInfo: {
                $ref: string;
            };
        };
        required: string[];
    };
    SetDisplayMessage: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            MessageFormatEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            MessagePriorityEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            MessageStateEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            ComponentType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    evse: {
                        $ref: string;
                    };
                    name: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    instance: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            EVSEType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    id: {
                        description: string;
                        type: string;
                    };
                    connectorId: {
                        description: string;
                        type: string;
                    };
                };
                required: string[];
            };
            MessageContentType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    format: {
                        $ref: string;
                    };
                    language: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    content: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            MessageInfoType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    display: {
                        $ref: string;
                    };
                    id: {
                        description: string;
                        type: string;
                    };
                    priority: {
                        $ref: string;
                    };
                    state: {
                        $ref: string;
                    };
                    startDateTime: {
                        description: string;
                        type: string;
                        format: string;
                    };
                    endDateTime: {
                        description: string;
                        type: string;
                        format: string;
                    };
                    transactionId: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    message: {
                        $ref: string;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            message: {
                $ref: string;
            };
        };
        required: string[];
    };
    SetDisplayMessageResponse: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            DisplayMessageStatusEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            StatusInfoType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    reasonCode: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    additionalInfo: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            status: {
                $ref: string;
            };
            statusInfo: {
                $ref: string;
            };
        };
        required: string[];
    };
    SetMonitoringBase: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            MonitoringBaseEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            monitoringBase: {
                $ref: string;
            };
        };
        required: string[];
    };
    SetMonitoringBaseResponse: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            GenericDeviceModelStatusEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            StatusInfoType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    reasonCode: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    additionalInfo: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            status: {
                $ref: string;
            };
            statusInfo: {
                $ref: string;
            };
        };
        required: string[];
    };
    SetMonitoringLevel: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            severity: {
                description: string;
                type: string;
            };
        };
        required: string[];
    };
    SetMonitoringLevelResponse: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            GenericStatusEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            StatusInfoType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    reasonCode: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    additionalInfo: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            status: {
                $ref: string;
            };
            statusInfo: {
                $ref: string;
            };
        };
        required: string[];
    };
    SetNetworkProfile: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            APNAuthenticationEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            OCPPInterfaceEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            OCPPTransportEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            OCPPVersionEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            VPNEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            APNType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    apn: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    apnUserName: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    apnPassword: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    simPin: {
                        description: string;
                        type: string;
                    };
                    preferredNetwork: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    useOnlyPreferredNetwork: {
                        description: string;
                        type: string;
                        default: boolean;
                    };
                    apnAuthentication: {
                        $ref: string;
                    };
                };
                required: string[];
            };
            NetworkConnectionProfileType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    apn: {
                        $ref: string;
                    };
                    ocppVersion: {
                        $ref: string;
                    };
                    ocppTransport: {
                        $ref: string;
                    };
                    ocppCsmsUrl: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    messageTimeout: {
                        description: string;
                        type: string;
                    };
                    securityProfile: {
                        description: string;
                        type: string;
                    };
                    ocppInterface: {
                        $ref: string;
                    };
                    vpn: {
                        $ref: string;
                    };
                };
                required: string[];
            };
            VPNType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    server: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    user: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    group: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    password: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    key: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    type: {
                        $ref: string;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            configurationSlot: {
                description: string;
                type: string;
            };
            connectionData: {
                $ref: string;
            };
        };
        required: string[];
    };
    SetNetworkProfileResponse: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            SetNetworkProfileStatusEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            StatusInfoType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    reasonCode: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    additionalInfo: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            status: {
                $ref: string;
            };
            statusInfo: {
                $ref: string;
            };
        };
        required: string[];
    };
    SetVariableMonitoring: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            MonitorEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            ComponentType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    evse: {
                        $ref: string;
                    };
                    name: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    instance: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            EVSEType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    id: {
                        description: string;
                        type: string;
                    };
                    connectorId: {
                        description: string;
                        type: string;
                    };
                };
                required: string[];
            };
            SetMonitoringDataType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    id: {
                        description: string;
                        type: string;
                    };
                    transaction: {
                        description: string;
                        type: string;
                        default: boolean;
                    };
                    value: {
                        description: string;
                        type: string;
                    };
                    type: {
                        $ref: string;
                    };
                    severity: {
                        description: string;
                        type: string;
                    };
                    component: {
                        $ref: string;
                    };
                    variable: {
                        $ref: string;
                    };
                };
                required: string[];
            };
            VariableType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    name: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    instance: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            setMonitoringData: {
                type: string;
                additionalItems: boolean;
                items: {
                    $ref: string;
                };
                minItems: number;
            };
        };
        required: string[];
    };
    SetVariableMonitoringResponse: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            MonitorEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            SetMonitoringStatusEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            ComponentType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    evse: {
                        $ref: string;
                    };
                    name: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    instance: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            EVSEType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    id: {
                        description: string;
                        type: string;
                    };
                    connectorId: {
                        description: string;
                        type: string;
                    };
                };
                required: string[];
            };
            SetMonitoringResultType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    id: {
                        description: string;
                        type: string;
                    };
                    statusInfo: {
                        $ref: string;
                    };
                    status: {
                        $ref: string;
                    };
                    type: {
                        $ref: string;
                    };
                    component: {
                        $ref: string;
                    };
                    variable: {
                        $ref: string;
                    };
                    severity: {
                        description: string;
                        type: string;
                    };
                };
                required: string[];
            };
            StatusInfoType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    reasonCode: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    additionalInfo: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            VariableType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    name: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    instance: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            setMonitoringResult: {
                type: string;
                additionalItems: boolean;
                items: {
                    $ref: string;
                };
                minItems: number;
            };
        };
        required: string[];
    };
    SetVariables: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            AttributeEnumType: {
                description: string;
                javaType: string;
                type: string;
                default: string;
                additionalProperties: boolean;
                enum: string[];
            };
            ComponentType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    evse: {
                        $ref: string;
                    };
                    name: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    instance: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            EVSEType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    id: {
                        description: string;
                        type: string;
                    };
                    connectorId: {
                        description: string;
                        type: string;
                    };
                };
                required: string[];
            };
            SetVariableDataType: {
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    attributeType: {
                        $ref: string;
                    };
                    attributeValue: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    component: {
                        $ref: string;
                    };
                    variable: {
                        $ref: string;
                    };
                };
                required: string[];
            };
            VariableType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    name: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    instance: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            setVariableData: {
                type: string;
                additionalItems: boolean;
                items: {
                    $ref: string;
                };
                minItems: number;
            };
        };
        required: string[];
    };
    SetVariablesResponse: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            AttributeEnumType: {
                description: string;
                javaType: string;
                type: string;
                default: string;
                additionalProperties: boolean;
                enum: string[];
            };
            SetVariableStatusEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            ComponentType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    evse: {
                        $ref: string;
                    };
                    name: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    instance: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            EVSEType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    id: {
                        description: string;
                        type: string;
                    };
                    connectorId: {
                        description: string;
                        type: string;
                    };
                };
                required: string[];
            };
            SetVariableResultType: {
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    attributeType: {
                        $ref: string;
                    };
                    attributeStatus: {
                        $ref: string;
                    };
                    attributeStatusInfo: {
                        $ref: string;
                    };
                    component: {
                        $ref: string;
                    };
                    variable: {
                        $ref: string;
                    };
                };
                required: string[];
            };
            StatusInfoType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    reasonCode: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    additionalInfo: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            VariableType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    name: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    instance: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            setVariableResult: {
                type: string;
                additionalItems: boolean;
                items: {
                    $ref: string;
                };
                minItems: number;
            };
        };
        required: string[];
    };
    SignCertificate: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            CertificateSigningUseEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            csr: {
                description: string;
                type: string;
                maxLength: number;
            };
            certificateType: {
                $ref: string;
            };
        };
        required: string[];
    };
    SignCertificateResponse: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            GenericStatusEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            StatusInfoType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    reasonCode: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    additionalInfo: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            status: {
                $ref: string;
            };
            statusInfo: {
                $ref: string;
            };
        };
        required: string[];
    };
    StatusNotification: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            ConnectorStatusEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            timestamp: {
                description: string;
                type: string;
                format: string;
            };
            connectorStatus: {
                $ref: string;
            };
            evseId: {
                description: string;
                type: string;
            };
            connectorId: {
                description: string;
                type: string;
            };
        };
        required: string[];
    };
    StatusNotificationResponse: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
        };
    };
    TransactionEvent: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            ChargingStateEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            IdTokenEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            LocationEnumType: {
                description: string;
                javaType: string;
                type: string;
                default: string;
                additionalProperties: boolean;
                enum: string[];
            };
            MeasurandEnumType: {
                description: string;
                javaType: string;
                type: string;
                default: string;
                additionalProperties: boolean;
                enum: string[];
            };
            PhaseEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            ReadingContextEnumType: {
                description: string;
                javaType: string;
                type: string;
                default: string;
                additionalProperties: boolean;
                enum: string[];
            };
            ReasonEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            TransactionEventEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            TriggerReasonEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            AdditionalInfoType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    additionalIdToken: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    type: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            EVSEType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    id: {
                        description: string;
                        type: string;
                    };
                    connectorId: {
                        description: string;
                        type: string;
                    };
                };
                required: string[];
            };
            IdTokenType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    additionalInfo: {
                        type: string;
                        additionalItems: boolean;
                        items: {
                            $ref: string;
                        };
                        minItems: number;
                    };
                    idToken: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    type: {
                        $ref: string;
                    };
                };
                required: string[];
            };
            MeterValueType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    sampledValue: {
                        type: string;
                        additionalItems: boolean;
                        items: {
                            $ref: string;
                        };
                        minItems: number;
                    };
                    timestamp: {
                        description: string;
                        type: string;
                        format: string;
                    };
                };
                required: string[];
            };
            SampledValueType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    value: {
                        description: string;
                        type: string;
                    };
                    context: {
                        $ref: string;
                    };
                    measurand: {
                        $ref: string;
                    };
                    phase: {
                        $ref: string;
                    };
                    location: {
                        $ref: string;
                    };
                    signedMeterValue: {
                        $ref: string;
                    };
                    unitOfMeasure: {
                        $ref: string;
                    };
                };
                required: string[];
            };
            SignedMeterValueType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    signedMeterData: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    signingMethod: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    encodingMethod: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    publicKey: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            TransactionType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    transactionId: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    chargingState: {
                        $ref: string;
                    };
                    timeSpentCharging: {
                        description: string;
                        type: string;
                    };
                    stoppedReason: {
                        $ref: string;
                    };
                    remoteStartId: {
                        description: string;
                        type: string;
                    };
                };
                required: string[];
            };
            UnitOfMeasureType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    unit: {
                        description: string;
                        type: string;
                        default: string;
                        maxLength: number;
                    };
                    multiplier: {
                        description: string;
                        type: string;
                        default: number;
                    };
                };
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            eventType: {
                $ref: string;
            };
            meterValue: {
                type: string;
                additionalItems: boolean;
                items: {
                    $ref: string;
                };
                minItems: number;
            };
            timestamp: {
                description: string;
                type: string;
                format: string;
            };
            triggerReason: {
                $ref: string;
            };
            seqNo: {
                description: string;
                type: string;
            };
            offline: {
                description: string;
                type: string;
                default: boolean;
            };
            numberOfPhasesUsed: {
                description: string;
                type: string;
            };
            cableMaxCurrent: {
                description: string;
                type: string;
            };
            reservationId: {
                description: string;
                type: string;
            };
            transactionInfo: {
                $ref: string;
            };
            evse: {
                $ref: string;
            };
            idToken: {
                $ref: string;
            };
        };
        required: string[];
    };
    TransactionEventResponse: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            AuthorizationStatusEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            IdTokenEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            MessageFormatEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            AdditionalInfoType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    additionalIdToken: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    type: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            IdTokenInfoType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    status: {
                        $ref: string;
                    };
                    cacheExpiryDateTime: {
                        description: string;
                        type: string;
                        format: string;
                    };
                    chargingPriority: {
                        description: string;
                        type: string;
                    };
                    language1: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    evseId: {
                        description: string;
                        type: string;
                        additionalItems: boolean;
                        items: {
                            type: string;
                        };
                        minItems: number;
                    };
                    groupIdToken: {
                        $ref: string;
                    };
                    language2: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    personalMessage: {
                        $ref: string;
                    };
                };
                required: string[];
            };
            IdTokenType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    additionalInfo: {
                        type: string;
                        additionalItems: boolean;
                        items: {
                            $ref: string;
                        };
                        minItems: number;
                    };
                    idToken: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    type: {
                        $ref: string;
                    };
                };
                required: string[];
            };
            MessageContentType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    format: {
                        $ref: string;
                    };
                    language: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    content: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            totalCost: {
                description: string;
                type: string;
            };
            chargingPriority: {
                description: string;
                type: string;
            };
            idTokenInfo: {
                $ref: string;
            };
            updatedPersonalMessage: {
                $ref: string;
            };
        };
    };
    TriggerMessage: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            MessageTriggerEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            EVSEType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    id: {
                        description: string;
                        type: string;
                    };
                    connectorId: {
                        description: string;
                        type: string;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            evse: {
                $ref: string;
            };
            requestedMessage: {
                $ref: string;
            };
        };
        required: string[];
    };
    TriggerMessageResponse: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            TriggerMessageStatusEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            StatusInfoType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    reasonCode: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    additionalInfo: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            status: {
                $ref: string;
            };
            statusInfo: {
                $ref: string;
            };
        };
        required: string[];
    };
    UnlockConnector: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            evseId: {
                description: string;
                type: string;
            };
            connectorId: {
                description: string;
                type: string;
            };
        };
        required: string[];
    };
    UnlockConnectorResponse: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            UnlockStatusEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            StatusInfoType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    reasonCode: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    additionalInfo: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            status: {
                $ref: string;
            };
            statusInfo: {
                $ref: string;
            };
        };
        required: string[];
    };
    UnpublishFirmware: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            checksum: {
                description: string;
                type: string;
                maxLength: number;
            };
        };
        required: string[];
    };
    UnpublishFirmwareResponse: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            UnpublishFirmwareStatusEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            status: {
                $ref: string;
            };
        };
        required: string[];
    };
    UpdateFirmware: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            FirmwareType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    location: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    retrieveDateTime: {
                        description: string;
                        type: string;
                        format: string;
                    };
                    installDateTime: {
                        description: string;
                        type: string;
                        format: string;
                    };
                    signingCertificate: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    signature: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            retries: {
                description: string;
                type: string;
            };
            retryInterval: {
                description: string;
                type: string;
            };
            requestId: {
                description: string;
                type: string;
            };
            firmware: {
                $ref: string;
            };
        };
        required: string[];
    };
    UpdateFirmwareResponse: {
        $schema: string;
        $id: string;
        comment: string;
        definitions: {
            CustomDataType: {
                description: string;
                javaType: string;
                type: string;
                properties: {
                    vendorId: {
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
            UpdateFirmwareStatusEnumType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                enum: string[];
            };
            StatusInfoType: {
                description: string;
                javaType: string;
                type: string;
                additionalProperties: boolean;
                properties: {
                    customData: {
                        $ref: string;
                    };
                    reasonCode: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                    additionalInfo: {
                        description: string;
                        type: string;
                        maxLength: number;
                    };
                };
                required: string[];
            };
        };
        type: string;
        additionalProperties: boolean;
        properties: {
            customData: {
                $ref: string;
            };
            status: {
                $ref: string;
            };
            statusInfo: {
                $ref: string;
            };
        };
        required: string[];
    };
};
export default _default;
export declare const OCPP_PROTOCOL_2_0_1 = "ocpp2.0.1";
