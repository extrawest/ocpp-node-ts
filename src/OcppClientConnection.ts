import { Client } from "./impl/Client";
import { UrnOCPPCp220203AuthorizeRequest } from "./types/AuthorizeRequest";
import { UrnOCPPCp220203AuthorizeResponse } from "./types/AuthorizeResponse";
import { UrnOCPPCp220203BootNotificationRequest } from "./types/BootNotification";
import { UrnOCPPCp220203BootNotificationResponse } from "./types/BootNotificationResponse";
import { UrnOCPPCp220203CancelReservationRequest } from "./types/CancelReservationRequest";
import { UrnOCPPCp220203CancelReservationResponse } from "./types/CancelReservationResponse";
import { UrnOCPPCp220203CertificateSignedRequest } from "./types/CertificateSignedRequest";
import { UrnOCPPCp220203CertificateSignedResponse } from "./types/CertificateSignedResponse";
import { UrnOCPPCp220203ChangeAvailabilityRequest } from "./types/ChangeAvailabilityRequest";
import { UrnOCPPCp220203ChangeAvailabilityResponse } from "./types/ChangeAvailabilityResponse";
import { UrnOCPPCp220203ClearCacheRequest } from "./types/ClearCacheRequest";
import { UrnOCPPCp220203ClearCacheResponse } from "./types/ClearCacheResponse";
import { UrnOCPPCp220203ClearChargingProfileRequest } from "./types/ClearChargingProfileRequest";
import { UrnOCPPCp220203ClearChargingProfileResponse } from "./types/ClearChargingProfileResponse";
import { UrnOCPPCp220203ClearDisplayMessageRequest } from "./types/ClearDisplayMessageRequest";
import { UrnOCPPCp220203ClearDisplayMessageResponse } from "./types/ClearDisplayMessageResponse";
import { UrnOCPPCp220203ClearedChargingLimitRequest } from "./types/ClearedChargingLimitRequest";
import { UrnOCPPCp220203ClearedChargingLimitResponse } from "./types/ClearedChargingLimitResponse";
import { UrnOCPPCp220203ClearVariableMonitoringRequest } from "./types/ClearVariableMonitoringRequest";
import { UrnOCPPCp220203ClearVariableMonitoringResponse } from "./types/ClearVariableMonitoringResponse";
import { UrnOCPPCp220203CostUpdatedRequest } from "./types/CostUpdatedRequest";
import { UrnOCPPCp220203CostUpdatedResponse } from "./types/CostUpdatedResponse";
import { UrnOCPPCp220203CustomerInformationRequest } from "./types/CustomerInformationRequest";
import { UrnOCPPCp220203CustomerInformationResponse } from "./types/CustomerInformationResponse";
import { UrnOCPPCp220203DataTransferRequest } from "./types/DataTransferRequest";
import { UrnOCPPCp220203DataTransferResponse } from "./types/DataTransferResponse";
import { UrnOCPPCp220203DeleteCertificateRequest } from "./types/DeleteCertificateRequest";
import { UrnOCPPCp220203DeleteCertificateResponse } from "./types/DeleteCertificateResponse";
import { UrnOCPPCp220203FirmwareStatusNotificationRequest } from "./types/FirmwareStatusNotificationRequest";
import { UrnOCPPCp220203FirmwareStatusNotificationResponse } from "./types/FirmwareStatusNotificationResponse";
import { UrnOCPPCp220203Get15118EVCertificateRequest } from "./types/Get15118EVCertificateRequest";
import { UrnOCPPCp220203Get15118EVCertificateResponse } from "./types/Get15118EVCertificateResponse";
import { UrnOCPPCp220203GetBaseReportRequest } from "./types/GetBaseReportRequest";
import { UrnOCPPCp220203GetBaseReportResponse } from "./types/GetBaseReportResponse";
import { UrnOCPPCp220203GetCertificateStatusRequest } from "./types/GetCertificateStatusRequest";
import { UrnOCPPCp220203GetCertificateStatusResponse } from "./types/GetCertificateStatusResponse";
import { UrnOCPPCp220203GetChargingProfilesRequest } from "./types/GetChargingProfilesRequest";
import { UrnOCPPCp220203GetChargingProfilesResponse } from "./types/GetChargingProfilesResponse";
import { UrnOCPPCp220203GetCompositeScheduleRequest } from "./types/GetCompositeScheduleRequest";
import { UrnOCPPCp220203GetCompositeScheduleResponse } from "./types/GetCompositeScheduleResponse";
import { UrnOCPPCp220203GetDisplayMessagesRequest } from "./types/GetDisplayMessagesRequest";
import { UrnOCPPCp220203GetDisplayMessagesResponse } from "./types/GetDisplayMessagesResponse";
import { UrnOCPPCp220203GetInstalledCertificateIdsRequest } from "./types/GetInstalledCertificateIdsRequest";
import { UrnOCPPCp220203GetInstalledCertificateIdsResponse } from "./types/GetInstalledCertificateIdsResponse";
import { UrnOCPPCp220203GetLocalListVersionRequest } from "./types/GetLocalListVersionRequest";
import { UrnOCPPCp220203GetLocalListVersionResponse } from "./types/GetLocalListVersionResponse";
import { UrnOCPPCp220203GetLogRequest } from "./types/GetLogRequest";
import { UrnOCPPCp220203GetLogResponse } from "./types/GetLogResponse";
import { UrnOCPPCp220203GetMonitoringReportRequest } from "./types/GetMonitoringReportRequest";
import { UrnOCPPCp220203GetMonitoringReportResponse } from "./types/GetMonitoringReportResponse";
import { UrnOCPPCp220203GetReportRequest } from "./types/GetReportRequest";
import { UrnOCPPCp220203GetReportResponse } from "./types/GetReportResponse";
import { UrnOCPPCp220203GetTransactionStatusRequest } from "./types/GetTransactionStatusRequest";
import { UrnOCPPCp220203GetTransactionStatusResponse } from "./types/GetTransactionStatusResponse";
import { UrnOCPPCp220203GetVariablesRequest } from "./types/GetVariablesRequest";
import { UrnOCPPCp220203GetVariablesResponse } from "./types/GetVariablesResponse";
import { UrnOCPPCp220203HeartbeatRequest } from "./types/HeartbeatRequest";
import { UrnOCPPCp220203HeartbeatResponse } from "./types/HeartbeatResponse";
import { UrnOCPPCp220203InstallCertificateRequest } from "./types/InstallCertificateRequest";
import { UrnOCPPCp220203InstallCertificateResponse } from "./types/InstallCertificateResponse";
import { UrnOCPPCp220203LogStatusNotificationRequest } from "./types/LogStatusNotificationRequest";
import { UrnOCPPCp220203LogStatusNotificationResponse } from "./types/LogStatusNotificationResponse";
import { UrnOCPPCp220203MeterValuesRequest } from "./types/MeterValuesRequest";
import { UrnOCPPCp220203MeterValuesResponse } from "./types/MeterValuesResponse";
import { UrnOCPPCp220203NotifyChargingLimitRequest } from "./types/NotifyChargingLimitRequest";
import { UrnOCPPCp220203NotifyChargingLimitResponse } from "./types/NotifyChargingLimitResponse";
import { UrnOCPPCp220203NotifyCustomerInformationRequest } from "./types/NotifyCustomerInformationRequest";
import { UrnOCPPCp220203NotifyCustomerInformationResponse } from "./types/NotifyCustomerInformationResponse";
import { UrnOCPPCp220203NotifyDisplayMessagesRequest } from "./types/NotifyDisplayMessagesRequest";
import { UrnOCPPCp220203NotifyDisplayMessagesResponse } from "./types/NotifyDisplayMessagesResponse";
import { UrnOCPPCp220203NotifyEVChargingNeedsRequest } from "./types/NotifyEVChargingNeedsRequest";
import { UrnOCPPCp220203NotifyEVChargingNeedsResponse } from "./types/NotifyEVChargingNeedsResponse";
import { UrnOCPPCp220203NotifyEVChargingScheduleRequest } from "./types/NotifyEVChargingScheduleRequest";
import { UrnOCPPCp220203NotifyEVChargingScheduleResponse } from "./types/NotifyEVChargingScheduleResponse";
import { UrnOCPPCp220203NotifyEventRequest } from "./types/NotifyEventRequest";
import { UrnOCPPCp220203NotifyEventResponse } from "./types/NotifyEventResponse";
import { UrnOCPPCp220203NotifyMonitoringReportRequest } from "./types/NotifyMonitoringReportRequest";
import { UrnOCPPCp220203NotifyMonitoringReportResponse } from "./types/NotifyMonitoringReportResponse";
import { UrnOCPPCp220203NotifyReportRequest } from "./types/NotifyReportRequest";
import { UrnOCPPCp220203NotifyReportResponse } from "./types/NotifyReportResponse";
import { UrnOCPPCp220203PublishFirmwareRequest } from "./types/PublishFirmwareRequest";
import { UrnOCPPCp220203PublishFirmwareResponse } from "./types/PublishFirmwareResponse";
import { UrnOCPPCp220203PublishFirmwareStatusNotificationRequest } from "./types/PublishFirmwareStatusNotificationRequest";
import { UrnOCPPCp220203PublishFirmwareStatusNotificationResponse } from "./types/PublishFirmwareStatusNotificationResponse";
import { UrnOCPPCp220203ReportChargingProfilesRequest } from "./types/ReportChargingProfilesRequest";
import { UrnOCPPCp220203ReportChargingProfilesResponse } from "./types/ReportChargingProfilesResponse";
import { UrnOCPPCp220203RequestStartTransactionRequest } from "./types/RequestStartTransactionRequest";
import { UrnOCPPCp220203RequestStartTransactionResponse } from "./types/RequestStartTransactionResponse";
import { UrnOCPPCp220203RequestStopTransactionRequest } from "./types/RequestStopTransactionRequest";
import { UrnOCPPCp220203RequestStopTransactionResponse } from "./types/RequestStopTransactionResponse";
import { UrnOCPPCp220203ReservationStatusUpdateRequest } from "./types/ReservationStatusUpdateRequest";
import { UrnOCPPCp220203ReservationStatusUpdateResponse } from "./types/ReservationStatusUpdateResponse";
import { UrnOCPPCp220203ReserveNowRequest } from "./types/ReserveNowRequest";
import { UrnOCPPCp220203ReserveNowResponse } from "./types/ReserveNowResponse";
import { UrnOCPPCp220203ResetRequest } from "./types/ResetRequest";
import { UrnOCPPCp220203ResetResponse } from "./types/ResetResponse";
import { UrnOCPPCp220203SecurityEventNotificationRequest } from "./types/SecurityEventNotificationRequest";
import { UrnOCPPCp220203SecurityEventNotificationResponse } from "./types/SecurityEventNotificationResponse";
import { UrnOCPPCp220203SendLocalListRequest } from "./types/SendLocalListRequest";
import { UrnOCPPCp220203SendLocalListResponse } from "./types/SendLocalListResponse";
import { UrnOCPPCp220203SetChargingProfileRequest } from "./types/SetChargingProfileRequest";
import { UrnOCPPCp220203SetChargingProfileResponse } from "./types/SetChargingProfileResponse";
import { UrnOCPPCp220203SetDisplayMessageRequest } from "./types/SetDisplayMessageRequest";
import { UrnOCPPCp220203SetDisplayMessageResponse } from "./types/SetDisplayMessageResponse";
import { UrnOCPPCp220203SetMonitoringBaseRequest } from "./types/SetMonitoringBaseRequest";
import { UrnOCPPCp220203SetMonitoringBaseResponse } from "./types/SetMonitoringBaseResponse";
import { UrnOCPPCp220203SetMonitoringLevelRequest } from "./types/SetMonitoringLevelRequest";
import { UrnOCPPCp220203SetMonitoringLevelResponse } from "./types/SetMonitoringLevelResponse";
import { UrnOCPPCp220203SetNetworkProfileRequest } from "./types/SetNetworkProfileRequest";
import { UrnOCPPCp220203SetNetworkProfileResponse } from "./types/SetNetworkProfileResponse";
import { UrnOCPPCp220203SetVariableMonitoringRequest } from "./types/SetVariableMonitoringRequest";
import { UrnOCPPCp220203SetVariableMonitoringResponse } from "./types/SetVariableMonitoringResponse";
import { UrnOCPPCp220203SetVariablesRequest } from "./types/SetVariablesRequest";
import { UrnOCPPCp220203SetVariablesResponse } from "./types/SetVariablesResponse";
import { UrnOCPPCp220203SignCertificateRequest } from "./types/SignCertificateRequest";
import { UrnOCPPCp220203SignCertificateResponse } from "./types/SignCertificateResponse";
import { UrnOCPPCp220203StatusNotificationRequest } from "./types/StatusNotificationRequest";
import { UrnOCPPCp220203StatusNotificationResponse } from "./types/StatusNotificationResponse";
import { UrnOCPPCp220203TransactionEventRequest } from "./types/TransactionEventRequest";
import { UrnOCPPCp220203TransactionEventResponse } from "./types/TransactionEventResponse";
import { UrnOCPPCp220203TriggerMessageRequest } from "./types/TriggerMessageRequest";
import { UrnOCPPCp220203TriggerMessageResponse } from "./types/TriggerMessageResponse";
import { UrnOCPPCp220203UnlockConnectorRequest } from "./types/UnlockConnectorRequest";
import { UrnOCPPCp220203UnlockConnectorResponse } from "./types/UnlockConnectorResponse";
import { UrnOCPPCp220203UnpublishFirmwareRequest } from "./types/UnpublishFirmwareRequest";
import { UrnOCPPCp220203UnpublishFirmwareResponse } from "./types/UnpublishFirmwareResponse";
import { UrnOCPPCp220203UpdateFirmwareRequest } from "./types/UpdateFirmwareRequest";
import { UrnOCPPCp220203UpdateFirmwareResponse } from "./types/UpdateFirmwareResponse";
import { Protocol } from "./impl/Protocol";

export class OcppClientConnection extends Client {
	getCpId(): string {
		return super.getCpId();
	}

	setConnection(connection: Protocol | null): void {
		super.setConnection(connection);
	}

	on(
		event: "Authorize",
		listener: (
			request: UrnOCPPCp220203AuthorizeRequest,
			cb: (response: UrnOCPPCp220203AuthorizeResponse) => void
		) => void
	): this;
	on(
		event: "BootNotification",
		listener: (
			request: UrnOCPPCp220203BootNotificationRequest,
			cb: (response: UrnOCPPCp220203BootNotificationResponse) => void
		) => void
	): this;
	on(
		event: "ClearedChargingLimit",
		listener: (
			request: UrnOCPPCp220203ClearedChargingLimitRequest,
			cb: (response: UrnOCPPCp220203ClearedChargingLimitResponse) => void
		) => void
	): this;
	on(
		event: "DataTransfer",
		listener: (
			request: UrnOCPPCp220203DataTransferRequest,
			cb: (response: UrnOCPPCp220203DataTransferResponse) => void
		) => void
	): this;
	on(
		event: "Get15118EVCertificate",
		listener: (
			request: UrnOCPPCp220203Get15118EVCertificateRequest,
			cb: (response: UrnOCPPCp220203Get15118EVCertificateResponse) => void
		) => void
	): this;
	on(
		event: "GetCertificateStatus",
		listener: (
			request: UrnOCPPCp220203GetCertificateStatusRequest,
			cb: (response: UrnOCPPCp220203GetCertificateStatusResponse) => void
		) => void
	): this;
	on(
		event: "LogStatusNotification",
		listener: (
			request: UrnOCPPCp220203LogStatusNotificationRequest,
			cb: (response: UrnOCPPCp220203LogStatusNotificationResponse) => void
		) => void
	): this;
	on(
		event: "NotifyChargingLimit",
		listener: (
			request: UrnOCPPCp220203NotifyChargingLimitRequest,
			cb: (response: UrnOCPPCp220203NotifyChargingLimitResponse) => void
		) => void
	): this;
	on(
		event: "NotifyCustomerInformation",
		listener: (
			request: UrnOCPPCp220203NotifyCustomerInformationRequest,
			cb: (response: UrnOCPPCp220203NotifyCustomerInformationResponse) => void
		) => void
	): this;
	on(
		event: "NotifyDisplayMessages",
		listener: (
			request: UrnOCPPCp220203NotifyDisplayMessagesRequest,
			cb: (response: UrnOCPPCp220203NotifyDisplayMessagesResponse) => void
		) => void
	): this;
	on(
		event: "NotifyEVChargingNeeds",
		listener: (
			request: UrnOCPPCp220203NotifyEVChargingNeedsRequest,
			cb: (response: UrnOCPPCp220203NotifyEVChargingNeedsResponse) => void
		) => void
	): this;
	on(
		event: "NotifyEVChargingSchedule",
		listener: (
			request: UrnOCPPCp220203NotifyEVChargingScheduleRequest,
			cb: (response: UrnOCPPCp220203NotifyEVChargingScheduleResponse) => void
		) => void
	): this;
	on(
		event: "NotifyEvent",
		listener: (
			request: UrnOCPPCp220203NotifyEventRequest,
			cb: (response: UrnOCPPCp220203NotifyEventResponse) => void
		) => void
	): this;
	on(
		event: "NotifyMonitoringReport",
		listener: (
			request: UrnOCPPCp220203NotifyMonitoringReportRequest,
			cb: (response: UrnOCPPCp220203NotifyMonitoringReportResponse) => void
		) => void
	): this;
	on(
		event: "NotifyReport",
		listener: (
			request: UrnOCPPCp220203NotifyReportRequest,
			cb: (response: UrnOCPPCp220203NotifyReportResponse) => void
		) => void
	): this;
	on(
		event: "PublishFirmwareStatusNotification",
		listener: (request: UrnOCPPCp220203PublishFirmwareStatusNotificationRequest,
			cb: (response: UrnOCPPCp220203PublishFirmwareStatusNotificationResponse) => void
		) => void
	): this;
	on(
		event: "ReportChargingProfiles",
		listener: (
			request: UrnOCPPCp220203ReportChargingProfilesRequest,
			cb: (response: UrnOCPPCp220203ReportChargingProfilesResponse) => void
		) => void
	): this;
	on(
		event: "ReservationStatusUpdate",
		listener: (
			request: UrnOCPPCp220203ReservationStatusUpdateRequest,
			cb: (response: UrnOCPPCp220203ReservationStatusUpdateResponse) => void
		) => void
	): this;
	on(
		event: "SecurityEventNotification",
		listener: (
			request: UrnOCPPCp220203SecurityEventNotificationRequest,
			cb: (response: UrnOCPPCp220203SecurityEventNotificationResponse) => void
		) => void
	): this;
	on(
		event: "SignCertificate",
		listener: (
			request: UrnOCPPCp220203SignCertificateRequest,
			cb: (response: UrnOCPPCp220203SignCertificateResponse) => void
		) => void
	): this;
	on(
		event: "TransactionEvent",
		listener: (
			request: UrnOCPPCp220203TransactionEventRequest,
			cb: (response: UrnOCPPCp220203TransactionEventResponse) => void
		) => void
	): this;
	on(
		event: "FirmwareStatusNotification",
		listener: (
			request: UrnOCPPCp220203FirmwareStatusNotificationRequest,
			cb: (response: UrnOCPPCp220203FirmwareStatusNotificationResponse) => void
		) => void
	): this;
	on(
		event: "Heartbeat",
		listener: (
			request: UrnOCPPCp220203HeartbeatRequest,
			cb: (response: UrnOCPPCp220203HeartbeatResponse) => void
		) => void
	): this;
	on(
		event: "MeterValues",
		listener: (
			request: UrnOCPPCp220203MeterValuesRequest,
			cb: (response: UrnOCPPCp220203MeterValuesResponse) => void
		) => void
	): this;
	on(
		event: "StatusNotification",
		listener: (
			request: UrnOCPPCp220203StatusNotificationRequest,
			cb: (response: UrnOCPPCp220203StatusNotificationResponse) => void
		) => void
	): this;
	on(
		event: "call",
		listener: (message: string) => void
	): this;
	on(
		event: "call_result",
		listener: (message: string) => void
	): this;
	on(
		event: "call_error",
		listener: (message: string) => void
	): this;
	on(
		event: "close",
		listener: (code: number, reason: Buffer) => void
	): this;
	on(
		event: "error",
		listener: (err: Error) => void
	): this;
	on(
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		event: string | symbol, listener: (...args: any[]) => void
	) {
		return super.on(
			event,
			listener
		);
	}

	callRequest(
		request: "CancelReservation",
		payload: UrnOCPPCp220203CancelReservationRequest
	): Promise<UrnOCPPCp220203CancelReservationResponse>;
	callRequest(
		request: "ChangeAvailability",
		payload: UrnOCPPCp220203ChangeAvailabilityRequest
	): Promise<UrnOCPPCp220203ChangeAvailabilityResponse>;
	callRequest(
		request: "CertificateSigned",
		payload: UrnOCPPCp220203CertificateSignedRequest
	): Promise<UrnOCPPCp220203CertificateSignedResponse>;
	callRequest(
		request: "ClearCache",
		payload: UrnOCPPCp220203ClearCacheRequest
	): Promise<UrnOCPPCp220203ClearCacheResponse>;
	callRequest(
		request: "ClearChargingProfile",
		payload: UrnOCPPCp220203ClearChargingProfileRequest
	): Promise<UrnOCPPCp220203ClearChargingProfileResponse>;
	callRequest(
		request: "ClearDisplayMessage",
		payload: UrnOCPPCp220203ClearDisplayMessageRequest
	): Promise<UrnOCPPCp220203ClearDisplayMessageResponse>;
	callRequest(
		request: "ClearVariableMonitoring",
		payload: UrnOCPPCp220203ClearVariableMonitoringRequest
	): Promise<UrnOCPPCp220203ClearVariableMonitoringResponse>;
	callRequest(
		request: "CostUpdated",
		payload: UrnOCPPCp220203CostUpdatedRequest
	): Promise<UrnOCPPCp220203CostUpdatedResponse>;
	callRequest(
		request: "CustomerInformation",
		payload: UrnOCPPCp220203CustomerInformationRequest
	): Promise<UrnOCPPCp220203CustomerInformationResponse>;
	callRequest(
		request: "DeleteCertificate",
		payload: UrnOCPPCp220203DeleteCertificateRequest
	): Promise<UrnOCPPCp220203DeleteCertificateResponse>;
	callRequest(
		request: "GetBaseReport",
		payload: UrnOCPPCp220203GetBaseReportRequest
	): Promise<UrnOCPPCp220203GetBaseReportResponse>;
	callRequest(
		request: "GetChargingProfilesReport",
		payload: UrnOCPPCp220203GetChargingProfilesRequest
	): Promise<UrnOCPPCp220203GetChargingProfilesResponse>;
	callRequest(
		request: "GetDisplayMessages",
		payload: UrnOCPPCp220203GetDisplayMessagesRequest
	): Promise<UrnOCPPCp220203GetDisplayMessagesResponse>;
	callRequest(
		request: "GetInstalledCertificateIds",
		payload: UrnOCPPCp220203GetInstalledCertificateIdsRequest
	): Promise<UrnOCPPCp220203GetInstalledCertificateIdsResponse>;
	callRequest(
		request: "GetLog",
		payload: UrnOCPPCp220203GetLogRequest
	): Promise<UrnOCPPCp220203GetLogResponse>;
	callRequest(
		request: "GetMonitoringReport",
		payload: UrnOCPPCp220203GetMonitoringReportRequest
	): Promise<UrnOCPPCp220203GetMonitoringReportResponse>;
	callRequest(
		request: "GetReport",
		payload: UrnOCPPCp220203GetReportRequest
	): Promise<UrnOCPPCp220203GetReportResponse>;
	callRequest(
		request: "GetTransactionStatus",
		payload: UrnOCPPCp220203GetTransactionStatusRequest
	): Promise<UrnOCPPCp220203GetTransactionStatusResponse>;
	callRequest(
		request: "GetVariables",
		payload: UrnOCPPCp220203GetVariablesRequest
	): Promise<UrnOCPPCp220203GetVariablesResponse>;
	callRequest(
		request: "InstallCertificate",
		payload: UrnOCPPCp220203InstallCertificateRequest
	): Promise<UrnOCPPCp220203InstallCertificateResponse>;
	callRequest(
		request: "PublishFirmware",
		payload: UrnOCPPCp220203PublishFirmwareRequest
	): Promise<UrnOCPPCp220203PublishFirmwareResponse>;
	callRequest(
		request: "RequestStartTransaction",
		payload: UrnOCPPCp220203RequestStartTransactionRequest
	): Promise<UrnOCPPCp220203RequestStartTransactionResponse>;
	callRequest(
		request: "RequestStopTransaction",
		payload: UrnOCPPCp220203RequestStopTransactionRequest
	): Promise<UrnOCPPCp220203RequestStopTransactionResponse>;
	callRequest(
		request: "SetDisplayMessage",
		payload: UrnOCPPCp220203SetDisplayMessageRequest
	): Promise<UrnOCPPCp220203SetDisplayMessageResponse>;
	callRequest(
		request: "SetMonitoringBase",
		payload: UrnOCPPCp220203SetMonitoringBaseRequest
	): Promise<UrnOCPPCp220203SetMonitoringBaseResponse>;
	callRequest(
		request: "SetMonitoringLevel",
		payload: UrnOCPPCp220203SetMonitoringLevelRequest
	): Promise<UrnOCPPCp220203SetMonitoringLevelResponse>;
	callRequest(
		request: "SetNetworkProfile",
		payload: UrnOCPPCp220203SetNetworkProfileRequest
	): Promise<UrnOCPPCp220203SetNetworkProfileResponse>;
	callRequest(
		request: "SetVariableMonitoring",
		payload: UrnOCPPCp220203SetVariableMonitoringRequest
	): Promise<UrnOCPPCp220203SetVariableMonitoringResponse>;
	callRequest(
		request: "SetVariables",
		payload: UrnOCPPCp220203SetVariablesRequest
	): Promise<UrnOCPPCp220203SetVariablesResponse>;
	callRequest(
		request: "UnpublishFirmware",
		payload: UrnOCPPCp220203UnpublishFirmwareRequest
	): Promise<UrnOCPPCp220203UnpublishFirmwareResponse>;
	callRequest(
		request: "DataTransfer",
		payload: UrnOCPPCp220203DataTransferRequest
	): Promise<UrnOCPPCp220203DataTransferResponse>;
	callRequest(
		request: "GetCompositeSchedule",
		payload: UrnOCPPCp220203GetCompositeScheduleRequest
	): Promise<UrnOCPPCp220203GetCompositeScheduleResponse>;
	callRequest(
		request: "GetLocalListVersion",
		payload: UrnOCPPCp220203GetLocalListVersionRequest
	): Promise<UrnOCPPCp220203GetLocalListVersionResponse>;
	callRequest(
		request: "ReserveNow",
		payload: UrnOCPPCp220203ReserveNowRequest
	): Promise<UrnOCPPCp220203ReserveNowResponse>;
	callRequest(
		request: "Reset",
		payload: UrnOCPPCp220203ResetRequest
	): Promise<UrnOCPPCp220203ResetResponse>;
	callRequest(
		request: "SendLocalList",
		payload: UrnOCPPCp220203SendLocalListRequest
	): Promise<UrnOCPPCp220203SendLocalListResponse>;
	callRequest(
		request: "SetChargingProfile",
		payload: UrnOCPPCp220203SetChargingProfileRequest
	): Promise<UrnOCPPCp220203SetChargingProfileResponse>;
	callRequest(
		request: "TriggerMessage",
		payload: UrnOCPPCp220203TriggerMessageRequest
	): Promise<UrnOCPPCp220203TriggerMessageResponse>;
	callRequest(
		request: "UnlockConnector",
		payload: UrnOCPPCp220203UnlockConnectorRequest
	): Promise<UrnOCPPCp220203UnlockConnectorResponse>;
	callRequest(
		request: "UpdateFirmware",
		payload: UrnOCPPCp220203UpdateFirmwareRequest
	): Promise<UrnOCPPCp220203UpdateFirmwareResponse>;
	callRequest(
		request: string, payload: never
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	): Promise<any> {
		return super.callRequest(
			request,
			payload
		);
	}
}

export default OcppClientConnection;
