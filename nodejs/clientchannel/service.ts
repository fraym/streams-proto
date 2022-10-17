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
import { Request } from "./request";
import { Response } from "./response";

export const protobufPackage = "clientchannel";

export type ServiceService = typeof ServiceService;
export const ServiceService = {
  connect: {
    path: "/clientchannel.Service/Connect",
    requestStream: true,
    responseStream: true,
    requestSerialize: (value: Request) => Buffer.from(Request.encode(value).finish()),
    requestDeserialize: (value: Buffer) => Request.decode(value),
    responseSerialize: (value: Response) => Buffer.from(Response.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Response.decode(value),
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
  getStream: {
    path: "/clientchannel.Service/GetStream",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetStreamRequest) => Buffer.from(GetStreamRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetStreamRequest.decode(value),
    responseSerialize: (value: GetStreamResponse) => Buffer.from(GetStreamResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetStreamResponse.decode(value),
  },
} as const;

export interface ServiceServer extends UntypedServiceImplementation {
  connect: handleBidiStreamingCall<Request, Response>;
  getEventsFromStart: handleServerStreamingCall<GetEventsFromStartRequest, PublishEventEnvelope>;
  getStream: handleUnaryCall<GetStreamRequest, GetStreamResponse>;
}

export interface ServiceClient extends Client {
  connect(): ClientDuplexStream<Request, Response>;
  connect(options: Partial<CallOptions>): ClientDuplexStream<Request, Response>;
  connect(metadata: Metadata, options?: Partial<CallOptions>): ClientDuplexStream<Request, Response>;
  getEventsFromStart(
    request: GetEventsFromStartRequest,
    options?: Partial<CallOptions>,
  ): ClientReadableStream<PublishEventEnvelope>;
  getEventsFromStart(
    request: GetEventsFromStartRequest,
    metadata?: Metadata,
    options?: Partial<CallOptions>,
  ): ClientReadableStream<PublishEventEnvelope>;
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
}

export const ServiceClient = makeGenericClientConstructor(ServiceService, "clientchannel.Service") as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions>): ServiceClient;
  service: typeof ServiceService;
};
