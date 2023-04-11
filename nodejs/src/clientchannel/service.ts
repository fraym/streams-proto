/* eslint-disable */
import {
  CallOptions,
  ChannelCredentials,
  ChannelOptions,
  Client,
  ClientDuplexStream,
  ClientReadableStream,
  ClientUnaryCall,
  handleBidiStreamingCall,
  handleServerStreamingCall,
  handleUnaryCall,
  makeGenericClientConstructor,
  Metadata,
  ServiceError,
  UntypedServiceImplementation,
} from "@grpc/grpc-js";
import { PublishEventEnvelope } from "./event";
import { GetEventsFromStartRequest } from "./get_events_from_start";
import { GetStreamRequest, GetStreamResponse } from "./get_stream";
import { IntroduceGdprOnFieldRequest, IntroduceGdprOnFieldResponse } from "./introduce_gdpr_on_field";
import { InvalidateGdprRequest, InvalidateGdprResponse } from "./invalidate_gdpr";
import { LogRequest, LogResponse } from "./log";
import { PublishRequest, PublishResponse } from "./publish";
import { SnapshotRequest, SnapshotResponse } from "./snapshot";
import { SubscribeRequest, SubscribeResponse } from "./subscribe";

export const protobufPackage = "clientchannel";

export type ServiceService = typeof ServiceService;
export const ServiceService = {
  subscribe: {
    path: "/clientchannel.Service/Subscribe",
    requestStream: true,
    responseStream: true,
    requestSerialize: (value: SubscribeRequest) => Buffer.from(SubscribeRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => SubscribeRequest.decode(value),
    responseSerialize: (value: SubscribeResponse) => Buffer.from(SubscribeResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => SubscribeResponse.decode(value),
  },
  publish: {
    path: "/clientchannel.Service/Publish",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: PublishRequest) => Buffer.from(PublishRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => PublishRequest.decode(value),
    responseSerialize: (value: PublishResponse) => Buffer.from(PublishResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => PublishResponse.decode(value),
  },
  getStream: {
    path: "/clientchannel.Service/GetStream",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetStreamRequest) => Buffer.from(GetStreamRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetStreamRequest.decode(value),
    responseSerialize: (value: GetStreamResponse) => Buffer.from(GetStreamResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetStreamResponse.decode(value),
  },
  getEventsFromStart: {
    path: "/clientchannel.Service/GetEventsFromStart",
    requestStream: false,
    responseStream: true,
    requestSerialize: (value: GetEventsFromStartRequest) =>
      Buffer.from(GetEventsFromStartRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetEventsFromStartRequest.decode(value),
    responseSerialize: (value: PublishEventEnvelope) => Buffer.from(PublishEventEnvelope.encode(value).finish()),
    responseDeserialize: (value: Buffer) => PublishEventEnvelope.decode(value),
  },
  introduceGdprOnField: {
    path: "/clientchannel.Service/IntroduceGdprOnField",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: IntroduceGdprOnFieldRequest) =>
      Buffer.from(IntroduceGdprOnFieldRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => IntroduceGdprOnFieldRequest.decode(value),
    responseSerialize: (value: IntroduceGdprOnFieldResponse) =>
      Buffer.from(IntroduceGdprOnFieldResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => IntroduceGdprOnFieldResponse.decode(value),
  },
  invalidateGdpr: {
    path: "/clientchannel.Service/InvalidateGdpr",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: InvalidateGdprRequest) => Buffer.from(InvalidateGdprRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => InvalidateGdprRequest.decode(value),
    responseSerialize: (value: InvalidateGdprResponse) => Buffer.from(InvalidateGdprResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => InvalidateGdprResponse.decode(value),
  },
  snapshot: {
    path: "/clientchannel.Service/Snapshot",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: SnapshotRequest) => Buffer.from(SnapshotRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => SnapshotRequest.decode(value),
    responseSerialize: (value: SnapshotResponse) => Buffer.from(SnapshotResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => SnapshotResponse.decode(value),
  },
  getLog: {
    path: "/clientchannel.Service/GetLog",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: LogRequest) => Buffer.from(LogRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => LogRequest.decode(value),
    responseSerialize: (value: LogResponse) => Buffer.from(LogResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => LogResponse.decode(value),
  },
} as const;

export interface ServiceServer extends UntypedServiceImplementation {
  subscribe: handleBidiStreamingCall<SubscribeRequest, SubscribeResponse>;
  publish: handleUnaryCall<PublishRequest, PublishResponse>;
  getStream: handleUnaryCall<GetStreamRequest, GetStreamResponse>;
  getEventsFromStart: handleServerStreamingCall<GetEventsFromStartRequest, PublishEventEnvelope>;
  introduceGdprOnField: handleUnaryCall<IntroduceGdprOnFieldRequest, IntroduceGdprOnFieldResponse>;
  invalidateGdpr: handleUnaryCall<InvalidateGdprRequest, InvalidateGdprResponse>;
  snapshot: handleUnaryCall<SnapshotRequest, SnapshotResponse>;
  getLog: handleUnaryCall<LogRequest, LogResponse>;
}

export interface ServiceClient extends Client {
  subscribe(): ClientDuplexStream<SubscribeRequest, SubscribeResponse>;
  subscribe(options: Partial<CallOptions>): ClientDuplexStream<SubscribeRequest, SubscribeResponse>;
  subscribe(
    metadata: Metadata,
    options?: Partial<CallOptions>,
  ): ClientDuplexStream<SubscribeRequest, SubscribeResponse>;
  publish(
    request: PublishRequest,
    callback: (error: ServiceError | null, response: PublishResponse) => void,
  ): ClientUnaryCall;
  publish(
    request: PublishRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: PublishResponse) => void,
  ): ClientUnaryCall;
  publish(
    request: PublishRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: PublishResponse) => void,
  ): ClientUnaryCall;
  getStream(
    request: GetStreamRequest,
    callback: (error: ServiceError | null, response: GetStreamResponse) => void,
  ): ClientUnaryCall;
  getStream(
    request: GetStreamRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetStreamResponse) => void,
  ): ClientUnaryCall;
  getStream(
    request: GetStreamRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetStreamResponse) => void,
  ): ClientUnaryCall;
  getEventsFromStart(
    request: GetEventsFromStartRequest,
    options?: Partial<CallOptions>,
  ): ClientReadableStream<PublishEventEnvelope>;
  getEventsFromStart(
    request: GetEventsFromStartRequest,
    metadata?: Metadata,
    options?: Partial<CallOptions>,
  ): ClientReadableStream<PublishEventEnvelope>;
  introduceGdprOnField(
    request: IntroduceGdprOnFieldRequest,
    callback: (error: ServiceError | null, response: IntroduceGdprOnFieldResponse) => void,
  ): ClientUnaryCall;
  introduceGdprOnField(
    request: IntroduceGdprOnFieldRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: IntroduceGdprOnFieldResponse) => void,
  ): ClientUnaryCall;
  introduceGdprOnField(
    request: IntroduceGdprOnFieldRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: IntroduceGdprOnFieldResponse) => void,
  ): ClientUnaryCall;
  invalidateGdpr(
    request: InvalidateGdprRequest,
    callback: (error: ServiceError | null, response: InvalidateGdprResponse) => void,
  ): ClientUnaryCall;
  invalidateGdpr(
    request: InvalidateGdprRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: InvalidateGdprResponse) => void,
  ): ClientUnaryCall;
  invalidateGdpr(
    request: InvalidateGdprRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: InvalidateGdprResponse) => void,
  ): ClientUnaryCall;
  snapshot(
    request: SnapshotRequest,
    callback: (error: ServiceError | null, response: SnapshotResponse) => void,
  ): ClientUnaryCall;
  snapshot(
    request: SnapshotRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: SnapshotResponse) => void,
  ): ClientUnaryCall;
  snapshot(
    request: SnapshotRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: SnapshotResponse) => void,
  ): ClientUnaryCall;
  getLog(request: LogRequest, callback: (error: ServiceError | null, response: LogResponse) => void): ClientUnaryCall;
  getLog(
    request: LogRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: LogResponse) => void,
  ): ClientUnaryCall;
  getLog(
    request: LogRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: LogResponse) => void,
  ): ClientUnaryCall;
}

export const ServiceClient = makeGenericClientConstructor(ServiceService, "clientchannel.Service") as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions>): ServiceClient;
  service: typeof ServiceService;
};
