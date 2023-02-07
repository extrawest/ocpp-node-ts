"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OCPP_PROTOCOL_2_0_1 = void 0;
var AuthorizeRequest_json_1 = __importDefault(require("../schemas/AuthorizeRequest.json"));
var AuthorizeResponse_json_1 = __importDefault(require("../schemas/AuthorizeResponse.json"));
var BootNotification_json_1 = __importDefault(require("../schemas/BootNotification.json"));
var BootNotificationResponse_json_1 = __importDefault(require("../schemas/BootNotificationResponse.json"));
var CancelReservationRequest_json_1 = __importDefault(require("../schemas/CancelReservationRequest.json"));
var CancelReservationResponse_json_1 = __importDefault(require("../schemas/CancelReservationResponse.json"));
var CertificateSignedRequest_json_1 = __importDefault(require("../schemas/CertificateSignedRequest.json"));
var CertificateSignedResponse_json_1 = __importDefault(require("../schemas/CertificateSignedResponse.json"));
var ChangeAvailabilityRequest_json_1 = __importDefault(require("../schemas/ChangeAvailabilityRequest.json"));
var ChangeAvailabilityResponse_json_1 = __importDefault(require("../schemas/ChangeAvailabilityResponse.json"));
var ClearCacheRequest_json_1 = __importDefault(require("../schemas/ClearCacheRequest.json"));
var ClearCacheResponse_json_1 = __importDefault(require("../schemas/ClearCacheResponse.json"));
var ClearChargingProfileRequest_json_1 = __importDefault(require("../schemas/ClearChargingProfileRequest.json"));
var ClearChargingProfileResponse_json_1 = __importDefault(require("../schemas/ClearChargingProfileResponse.json"));
var ClearDisplayMessageRequest_json_1 = __importDefault(require("../schemas/ClearDisplayMessageRequest.json"));
var ClearDisplayMessageResponse_json_1 = __importDefault(require("../schemas/ClearDisplayMessageResponse.json"));
var ClearedChargingLimitRequest_json_1 = __importDefault(require("../schemas/ClearedChargingLimitRequest.json"));
var ClearedChargingLimitResponse_json_1 = __importDefault(require("../schemas/ClearedChargingLimitResponse.json"));
var ClearVariableMonitoringRequest_json_1 = __importDefault(require("../schemas/ClearVariableMonitoringRequest.json"));
var ClearVariableMonitoringResponse_json_1 = __importDefault(require("../schemas/ClearVariableMonitoringResponse.json"));
var CostUpdatedRequest_json_1 = __importDefault(require("../schemas/CostUpdatedRequest.json"));
var CostUpdatedResponse_json_1 = __importDefault(require("../schemas/CostUpdatedResponse.json"));
var CustomerInformationRequest_json_1 = __importDefault(require("../schemas/CustomerInformationRequest.json"));
var CustomerInformationResponse_json_1 = __importDefault(require("../schemas/CustomerInformationResponse.json"));
var DataTransferRequest_json_1 = __importDefault(require("../schemas/DataTransferRequest.json"));
var DataTransferResponse_json_1 = __importDefault(require("../schemas/DataTransferResponse.json"));
var DeleteCertificateRequest_json_1 = __importDefault(require("../schemas/DeleteCertificateRequest.json"));
var DeleteCertificateResponse_json_1 = __importDefault(require("../schemas/DeleteCertificateResponse.json"));
var FirmwareStatusNotificationRequest_json_1 = __importDefault(require("../schemas/FirmwareStatusNotificationRequest.json"));
var FirmwareStatusNotificationResponse_json_1 = __importDefault(require("../schemas/FirmwareStatusNotificationResponse.json"));
var Get15118EVCertificateRequest_json_1 = __importDefault(require("../schemas/Get15118EVCertificateRequest.json"));
var Get15118EVCertificateResponse_json_1 = __importDefault(require("../schemas/Get15118EVCertificateResponse.json"));
var GetBaseReportRequest_json_1 = __importDefault(require("../schemas/GetBaseReportRequest.json"));
var GetBaseReportResponse_json_1 = __importDefault(require("../schemas/GetBaseReportResponse.json"));
var GetCertificateStatusRequest_json_1 = __importDefault(require("../schemas/GetCertificateStatusRequest.json"));
var GetCertificateStatusResponse_json_1 = __importDefault(require("../schemas/GetCertificateStatusResponse.json"));
var GetChargingProfilesRequest_json_1 = __importDefault(require("../schemas/GetChargingProfilesRequest.json"));
var GetChargingProfilesResponse_json_1 = __importDefault(require("../schemas/GetChargingProfilesResponse.json"));
var GetCompositeScheduleRequest_json_1 = __importDefault(require("../schemas/GetCompositeScheduleRequest.json"));
var GetCompositeScheduleResponse_json_1 = __importDefault(require("../schemas/GetCompositeScheduleResponse.json"));
var GetDisplayMessagesRequest_json_1 = __importDefault(require("../schemas/GetDisplayMessagesRequest.json"));
var GetDisplayMessagesResponse_json_1 = __importDefault(require("../schemas/GetDisplayMessagesResponse.json"));
var GetInstalledCertificateIdsRequest_json_1 = __importDefault(require("../schemas/GetInstalledCertificateIdsRequest.json"));
var GetInstalledCertificateIdsResponse_json_1 = __importDefault(require("../schemas/GetInstalledCertificateIdsResponse.json"));
var GetLocalListVersionRequest_json_1 = __importDefault(require("../schemas/GetLocalListVersionRequest.json"));
var GetLocalListVersionResponse_json_1 = __importDefault(require("../schemas/GetLocalListVersionResponse.json"));
var GetLogRequest_json_1 = __importDefault(require("../schemas/GetLogRequest.json"));
var GetLogResponse_json_1 = __importDefault(require("../schemas/GetLogResponse.json"));
var GetMonitoringReportRequest_json_1 = __importDefault(require("../schemas/GetMonitoringReportRequest.json"));
var GetMonitoringReportResponse_json_1 = __importDefault(require("../schemas/GetMonitoringReportResponse.json"));
var GetReportRequest_json_1 = __importDefault(require("../schemas/GetReportRequest.json"));
var GetReportResponse_json_1 = __importDefault(require("../schemas/GetReportResponse.json"));
var GetTransactionStatusRequest_json_1 = __importDefault(require("../schemas/GetTransactionStatusRequest.json"));
var GetTransactionStatusResponse_json_1 = __importDefault(require("../schemas/GetTransactionStatusResponse.json"));
var GetVariablesRequest_json_1 = __importDefault(require("../schemas/GetVariablesRequest.json"));
var GetVariablesResponse_json_1 = __importDefault(require("../schemas/GetVariablesResponse.json"));
var HeartbeatRequest_json_1 = __importDefault(require("../schemas/HeartbeatRequest.json"));
var HeartbeatResponse_json_1 = __importDefault(require("../schemas/HeartbeatResponse.json"));
var InstallCertificateRequest_json_1 = __importDefault(require("../schemas/InstallCertificateRequest.json"));
var InstallCertificateResponse_json_1 = __importDefault(require("../schemas/InstallCertificateResponse.json"));
var LogStatusNotificationRequest_json_1 = __importDefault(require("../schemas/LogStatusNotificationRequest.json"));
var LogStatusNotificationResponse_json_1 = __importDefault(require("../schemas/LogStatusNotificationResponse.json"));
var MeterValuesRequest_json_1 = __importDefault(require("../schemas/MeterValuesRequest.json"));
var MeterValuesResponse_json_1 = __importDefault(require("../schemas/MeterValuesResponse.json"));
var NotifyChargingLimitRequest_json_1 = __importDefault(require("../schemas/NotifyChargingLimitRequest.json"));
var NotifyChargingLimitResponse_json_1 = __importDefault(require("../schemas/NotifyChargingLimitResponse.json"));
var NotifyCustomerInformationRequest_json_1 = __importDefault(require("../schemas/NotifyCustomerInformationRequest.json"));
var NotifyCustomerInformationResponse_json_1 = __importDefault(require("../schemas/NotifyCustomerInformationResponse.json"));
var NotifyDisplayMessagesRequest_json_1 = __importDefault(require("../schemas/NotifyDisplayMessagesRequest.json"));
var NotifyDisplayMessagesResponse_json_1 = __importDefault(require("../schemas/NotifyDisplayMessagesResponse.json"));
var NotifyEVChargingNeedsRequest_json_1 = __importDefault(require("../schemas/NotifyEVChargingNeedsRequest.json"));
var NotifyEVChargingNeedsResponse_json_1 = __importDefault(require("../schemas/NotifyEVChargingNeedsResponse.json"));
var NotifyEVChargingScheduleRequest_json_1 = __importDefault(require("../schemas/NotifyEVChargingScheduleRequest.json"));
var NotifyEVChargingScheduleResponse_json_1 = __importDefault(require("../schemas/NotifyEVChargingScheduleResponse.json"));
var NotifyEventRequest_json_1 = __importDefault(require("../schemas/NotifyEventRequest.json"));
var NotifyEventResponse_json_1 = __importDefault(require("../schemas/NotifyEventResponse.json"));
var NotifyMonitoringReportRequest_json_1 = __importDefault(require("../schemas/NotifyMonitoringReportRequest.json"));
var NotifyMonitoringReportResponse_json_1 = __importDefault(require("../schemas/NotifyMonitoringReportResponse.json"));
var NotifyReportRequest_json_1 = __importDefault(require("../schemas/NotifyReportRequest.json"));
var NotifyReportResponse_json_1 = __importDefault(require("../schemas/NotifyReportResponse.json"));
var PublishFirmwareRequest_json_1 = __importDefault(require("../schemas/PublishFirmwareRequest.json"));
var PublishFirmwareResponse_json_1 = __importDefault(require("../schemas/PublishFirmwareResponse.json"));
var PublishFirmwareStatusNotificationRequest_json_1 = __importDefault(require("../schemas/PublishFirmwareStatusNotificationRequest.json"));
var PublishFirmwareStatusNotificationResponse_json_1 = __importDefault(require("../schemas/PublishFirmwareStatusNotificationResponse.json"));
var ReportChargingProfilesRequest_json_1 = __importDefault(require("../schemas/ReportChargingProfilesRequest.json"));
var ReportChargingProfilesResponse_json_1 = __importDefault(require("../schemas/ReportChargingProfilesResponse.json"));
var RequestStartTransactionRequest_json_1 = __importDefault(require("../schemas/RequestStartTransactionRequest.json"));
var RequestStartTransactionResponse_json_1 = __importDefault(require("../schemas/RequestStartTransactionResponse.json"));
var RequestStopTransactionRequest_json_1 = __importDefault(require("../schemas/RequestStopTransactionRequest.json"));
var RequestStopTransactionResponse_json_1 = __importDefault(require("../schemas/RequestStopTransactionResponse.json"));
var ReservationStatusUpdateRequest_json_1 = __importDefault(require("../schemas/ReservationStatusUpdateRequest.json"));
var ReservationStatusUpdateResponse_json_1 = __importDefault(require("../schemas/ReservationStatusUpdateResponse.json"));
var ReserveNowRequest_json_1 = __importDefault(require("../schemas/ReserveNowRequest.json"));
var ReserveNowResponse_json_1 = __importDefault(require("../schemas/ReserveNowResponse.json"));
var ResetRequest_json_1 = __importDefault(require("../schemas/ResetRequest.json"));
var ResetResponse_json_1 = __importDefault(require("../schemas/ResetResponse.json"));
var SecurityEventNotificationRequest_json_1 = __importDefault(require("../schemas/SecurityEventNotificationRequest.json"));
var SecurityEventNotificationResponse_json_1 = __importDefault(require("../schemas/SecurityEventNotificationResponse.json"));
var SendLocalListRequest_json_1 = __importDefault(require("../schemas/SendLocalListRequest.json"));
var SendLocalListResponse_json_1 = __importDefault(require("../schemas/SendLocalListResponse.json"));
var SetChargingProfileRequest_json_1 = __importDefault(require("../schemas/SetChargingProfileRequest.json"));
var SetChargingProfileResponse_json_1 = __importDefault(require("../schemas/SetChargingProfileResponse.json"));
var SetDisplayMessageRequest_json_1 = __importDefault(require("../schemas/SetDisplayMessageRequest.json"));
var SetDisplayMessageResponse_json_1 = __importDefault(require("../schemas/SetDisplayMessageResponse.json"));
var SetMonitoringBaseRequest_json_1 = __importDefault(require("../schemas/SetMonitoringBaseRequest.json"));
var SetMonitoringBaseResponse_json_1 = __importDefault(require("../schemas/SetMonitoringBaseResponse.json"));
var SetMonitoringLevelRequest_json_1 = __importDefault(require("../schemas/SetMonitoringLevelRequest.json"));
var SetMonitoringLevelResponse_json_1 = __importDefault(require("../schemas/SetMonitoringLevelResponse.json"));
var SetNetworkProfileRequest_json_1 = __importDefault(require("../schemas/SetNetworkProfileRequest.json"));
var SetNetworkProfileResponse_json_1 = __importDefault(require("../schemas/SetNetworkProfileResponse.json"));
var SetVariableMonitoringRequest_json_1 = __importDefault(require("../schemas/SetVariableMonitoringRequest.json"));
var SetVariableMonitoringResponse_json_1 = __importDefault(require("../schemas/SetVariableMonitoringResponse.json"));
var SetVariablesRequest_json_1 = __importDefault(require("../schemas/SetVariablesRequest.json"));
var SetVariablesResponse_json_1 = __importDefault(require("../schemas/SetVariablesResponse.json"));
var SignCertificateRequest_json_1 = __importDefault(require("../schemas/SignCertificateRequest.json"));
var SignCertificateResponse_json_1 = __importDefault(require("../schemas/SignCertificateResponse.json"));
var StatusNotificationRequest_json_1 = __importDefault(require("../schemas/StatusNotificationRequest.json"));
var StatusNotificationResponse_json_1 = __importDefault(require("../schemas/StatusNotificationResponse.json"));
var TransactionEventRequest_json_1 = __importDefault(require("../schemas/TransactionEventRequest.json"));
var TransactionEventResponse_json_1 = __importDefault(require("../schemas/TransactionEventResponse.json"));
var TriggerMessageRequest_json_1 = __importDefault(require("../schemas/TriggerMessageRequest.json"));
var TriggerMessageResponse_json_1 = __importDefault(require("../schemas/TriggerMessageResponse.json"));
var UnlockConnectorRequest_json_1 = __importDefault(require("../schemas/UnlockConnectorRequest.json"));
var UnlockConnectorResponse_json_1 = __importDefault(require("../schemas/UnlockConnectorResponse.json"));
var UnpublishFirmwareRequest_json_1 = __importDefault(require("../schemas/UnpublishFirmwareRequest.json"));
var UnpublishFirmwareResponse_json_1 = __importDefault(require("../schemas/UnpublishFirmwareResponse.json"));
var UpdateFirmwareRequest_json_1 = __importDefault(require("../schemas/UpdateFirmwareRequest.json"));
var UpdateFirmwareResponse_json_1 = __importDefault(require("../schemas/UpdateFirmwareResponse.json"));
exports.default = {
    Authorize: AuthorizeRequest_json_1.default,
    AuthorizeResponse: AuthorizeResponse_json_1.default,
    BootNotification: BootNotification_json_1.default,
    BootNotificationResponse: BootNotificationResponse_json_1.default,
    CancelReservation: CancelReservationRequest_json_1.default,
    CancelReservationResponse: CancelReservationResponse_json_1.default,
    CertificateSigned: CertificateSignedRequest_json_1.default,
    CertificateSignedResponse: CertificateSignedResponse_json_1.default,
    ChangeAvailability: ChangeAvailabilityRequest_json_1.default,
    ChangeAvailabilityResponse: ChangeAvailabilityResponse_json_1.default,
    ClearCache: ClearCacheRequest_json_1.default,
    ClearCacheResponse: ClearCacheResponse_json_1.default,
    ClearChargingProfile: ClearChargingProfileRequest_json_1.default,
    ClearChargingProfileResponse: ClearChargingProfileResponse_json_1.default,
    ClearDisplayMessage: ClearDisplayMessageRequest_json_1.default,
    ClearDisplayMessageResponse: ClearDisplayMessageResponse_json_1.default,
    ClearedChargingLimit: ClearedChargingLimitRequest_json_1.default,
    ClearedChargingLimitResponse: ClearedChargingLimitResponse_json_1.default,
    ClearVariableMonitoring: ClearVariableMonitoringRequest_json_1.default,
    ClearVariableMonitoringResponse: ClearVariableMonitoringResponse_json_1.default,
    CostUpdated: CostUpdatedRequest_json_1.default,
    CostUpdatedResponse: CostUpdatedResponse_json_1.default,
    CustomerInformation: CustomerInformationRequest_json_1.default,
    CustomerInformationResponse: CustomerInformationResponse_json_1.default,
    DataTransfer: DataTransferRequest_json_1.default,
    DataTransferResponse: DataTransferResponse_json_1.default,
    DeleteCertificate: DeleteCertificateRequest_json_1.default,
    DeleteCertificateResponse: DeleteCertificateResponse_json_1.default,
    FirmwareStatusNotification: FirmwareStatusNotificationRequest_json_1.default,
    FirmwareStatusNotificationResponse: FirmwareStatusNotificationResponse_json_1.default,
    Get15118EVCertificate: Get15118EVCertificateRequest_json_1.default,
    Get15118EVCertificateResponse: Get15118EVCertificateResponse_json_1.default,
    GetBaseReport: GetBaseReportRequest_json_1.default,
    GetBaseReportResponse: GetBaseReportResponse_json_1.default,
    GetCertificateStatus: GetCertificateStatusRequest_json_1.default,
    GetCertificateStatusResponse: GetCertificateStatusResponse_json_1.default,
    GetChargingProfiles: GetChargingProfilesRequest_json_1.default,
    GetChargingProfilesResponse: GetChargingProfilesResponse_json_1.default,
    GetCompositeSchedule: GetCompositeScheduleRequest_json_1.default,
    GetCompositeScheduleResponse: GetCompositeScheduleResponse_json_1.default,
    GetDisplayMessages: GetDisplayMessagesRequest_json_1.default,
    GetDisplayMessagesResponse: GetDisplayMessagesResponse_json_1.default,
    GetInstalledCertificateIds: GetInstalledCertificateIdsRequest_json_1.default,
    GetInstalledCertificateIdsResponse: GetInstalledCertificateIdsResponse_json_1.default,
    GetLocalListVersion: GetLocalListVersionRequest_json_1.default,
    GetLocalListVersionResponse: GetLocalListVersionResponse_json_1.default,
    GetLog: GetLogRequest_json_1.default,
    GetLogResponse: GetLogResponse_json_1.default,
    GetMonitoringReport: GetMonitoringReportRequest_json_1.default,
    GetMonitoringReportResponse: GetMonitoringReportResponse_json_1.default,
    GetReport: GetReportRequest_json_1.default,
    GetReportResponse: GetReportResponse_json_1.default,
    GetTransactionStatus: GetTransactionStatusRequest_json_1.default,
    GetTransactionStatusResponse: GetTransactionStatusResponse_json_1.default,
    GetVariables: GetVariablesRequest_json_1.default,
    GetVariablesResponse: GetVariablesResponse_json_1.default,
    Heartbeat: HeartbeatRequest_json_1.default,
    HeartbeatResponse: HeartbeatResponse_json_1.default,
    InstallCertificate: InstallCertificateRequest_json_1.default,
    InstallCertificateResponse: InstallCertificateResponse_json_1.default,
    LogStatusNotification: LogStatusNotificationRequest_json_1.default,
    LogStatusNotificationResponse: LogStatusNotificationResponse_json_1.default,
    MeterValues: MeterValuesRequest_json_1.default,
    MeterValuesResponse: MeterValuesResponse_json_1.default,
    NotifyChargingLimit: NotifyChargingLimitRequest_json_1.default,
    NotifyChargingLimitResponse: NotifyChargingLimitResponse_json_1.default,
    NotifyCustomerInformation: NotifyCustomerInformationRequest_json_1.default,
    NotifyCustomerInformationResponse: NotifyCustomerInformationResponse_json_1.default,
    NotifyDisplayMessages: NotifyDisplayMessagesRequest_json_1.default,
    NotifyDisplayMessagesResponse: NotifyDisplayMessagesResponse_json_1.default,
    NotifyEVChargingNeeds: NotifyEVChargingNeedsRequest_json_1.default,
    NotifyEVChargingNeedsResponse: NotifyEVChargingNeedsResponse_json_1.default,
    NotifyEVChargingSchedule: NotifyEVChargingScheduleRequest_json_1.default,
    NotifyEVChargingScheduleResponse: NotifyEVChargingScheduleResponse_json_1.default,
    NotifyEvent: NotifyEventRequest_json_1.default,
    NotifyEventResponse: NotifyEventResponse_json_1.default,
    NotifyMonitoringReport: NotifyMonitoringReportRequest_json_1.default,
    NotifyMonitoringReportResponse: NotifyMonitoringReportResponse_json_1.default,
    NotifyReport: NotifyReportRequest_json_1.default,
    NotifyReportResponse: NotifyReportResponse_json_1.default,
    PublishFirmware: PublishFirmwareRequest_json_1.default,
    PublishFirmwareResponse: PublishFirmwareResponse_json_1.default,
    PublishFirmwareStatusNotification: PublishFirmwareStatusNotificationRequest_json_1.default,
    PublishFirmwareStatusNotificationResponse: PublishFirmwareStatusNotificationResponse_json_1.default,
    ReportChargingProfiles: ReportChargingProfilesRequest_json_1.default,
    ReportChargingProfilesResponse: ReportChargingProfilesResponse_json_1.default,
    RequestStartTransaction: RequestStartTransactionRequest_json_1.default,
    RequestStartTransactionResponse: RequestStartTransactionResponse_json_1.default,
    RequestStopTransaction: RequestStopTransactionRequest_json_1.default,
    RequestStopTransactionResponse: RequestStopTransactionResponse_json_1.default,
    ReservationStatusUpdate: ReservationStatusUpdateRequest_json_1.default,
    ReservationStatusUpdateResponse: ReservationStatusUpdateResponse_json_1.default,
    ReserveNow: ReserveNowRequest_json_1.default,
    ReserveNowResponse: ReserveNowResponse_json_1.default,
    Reset: ResetRequest_json_1.default,
    ResetResponse: ResetResponse_json_1.default,
    SecurityEventNotification: SecurityEventNotificationRequest_json_1.default,
    SecurityEventNotificationResponse: SecurityEventNotificationResponse_json_1.default,
    SendLocalList: SendLocalListRequest_json_1.default,
    SendLocalListResponse: SendLocalListResponse_json_1.default,
    SetChargingProfile: SetChargingProfileRequest_json_1.default,
    SetChargingProfileResponse: SetChargingProfileResponse_json_1.default,
    SetDisplayMessage: SetDisplayMessageRequest_json_1.default,
    SetDisplayMessageResponse: SetDisplayMessageResponse_json_1.default,
    SetMonitoringBase: SetMonitoringBaseRequest_json_1.default,
    SetMonitoringBaseResponse: SetMonitoringBaseResponse_json_1.default,
    SetMonitoringLevel: SetMonitoringLevelRequest_json_1.default,
    SetMonitoringLevelResponse: SetMonitoringLevelResponse_json_1.default,
    SetNetworkProfile: SetNetworkProfileRequest_json_1.default,
    SetNetworkProfileResponse: SetNetworkProfileResponse_json_1.default,
    SetVariableMonitoring: SetVariableMonitoringRequest_json_1.default,
    SetVariableMonitoringResponse: SetVariableMonitoringResponse_json_1.default,
    SetVariables: SetVariablesRequest_json_1.default,
    SetVariablesResponse: SetVariablesResponse_json_1.default,
    SignCertificate: SignCertificateRequest_json_1.default,
    SignCertificateResponse: SignCertificateResponse_json_1.default,
    StatusNotification: StatusNotificationRequest_json_1.default,
    StatusNotificationResponse: StatusNotificationResponse_json_1.default,
    TransactionEvent: TransactionEventRequest_json_1.default,
    TransactionEventResponse: TransactionEventResponse_json_1.default,
    TriggerMessage: TriggerMessageRequest_json_1.default,
    TriggerMessageResponse: TriggerMessageResponse_json_1.default,
    UnlockConnector: UnlockConnectorRequest_json_1.default,
    UnlockConnectorResponse: UnlockConnectorResponse_json_1.default,
    UnpublishFirmware: UnpublishFirmwareRequest_json_1.default,
    UnpublishFirmwareResponse: UnpublishFirmwareResponse_json_1.default,
    UpdateFirmware: UpdateFirmwareRequest_json_1.default,
    UpdateFirmwareResponse: UpdateFirmwareResponse_json_1.default,
};
exports.OCPP_PROTOCOL_2_0_1 = 'ocpp2.0.1';
