/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { PublishEventEnvelope } from "./event";
import { GetEventsFromStartRequest } from "./get_events_from_start";
import { GetStreamRequest, GetStreamResponse } from "./get_stream";
import { Request } from "./request";
import { Response } from "./response";

export const protobufPackage = "clientchannel";

export interface Service {
  Connect(request: Observable<Request>): Observable<Response>;
  GetEventsFromStart(request: GetEventsFromStartRequest): Observable<PublishEventEnvelope>;
  GetStream(request: GetStreamRequest): Promise<GetStreamResponse>;
}

export class ServiceClientImpl implements Service {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "clientchannel.Service";
    this.rpc = rpc;
    this.Connect = this.Connect.bind(this);
    this.GetEventsFromStart = this.GetEventsFromStart.bind(this);
    this.GetStream = this.GetStream.bind(this);
  }
  Connect(request: Observable<Request>): Observable<Response> {
    const data = request.pipe(map((request) => Request.encode(request).finish()));
    const result = this.rpc.bidirectionalStreamingRequest(this.service, "Connect", data);
    return result.pipe(map((data) => Response.decode(new _m0.Reader(data))));
  }

  GetEventsFromStart(request: GetEventsFromStartRequest): Observable<PublishEventEnvelope> {
    const data = GetEventsFromStartRequest.encode(request).finish();
    const result = this.rpc.serverStreamingRequest(this.service, "GetEventsFromStart", data);
    return result.pipe(map((data) => PublishEventEnvelope.decode(new _m0.Reader(data))));
  }

  GetStream(request: GetStreamRequest): Promise<GetStreamResponse> {
    const data = GetStreamRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetStream", data);
    return promise.then((data) => GetStreamResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
  clientStreamingRequest(service: string, method: string, data: Observable<Uint8Array>): Promise<Uint8Array>;
  serverStreamingRequest(service: string, method: string, data: Uint8Array): Observable<Uint8Array>;
  bidirectionalStreamingRequest(service: string, method: string, data: Observable<Uint8Array>): Observable<Uint8Array>;
}
