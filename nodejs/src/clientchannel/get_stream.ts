/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { PublishEventEnvelope } from "./event";

export const protobufPackage = "clientchannel";

export interface GetStreamRequest {
  tenantId: string;
  stream: string;
}

export interface GetStreamResponse {
  events: PublishEventEnvelope[];
}

function createBaseGetStreamRequest(): GetStreamRequest {
  return { tenantId: "", stream: "" };
}

export const GetStreamRequest = {
  encode(message: GetStreamRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tenantId !== "") {
      writer.uint32(10).string(message.tenantId);
    }
    if (message.stream !== "") {
      writer.uint32(18).string(message.stream);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetStreamRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetStreamRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tenantId = reader.string();
          break;
        case 2:
          message.stream = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetStreamRequest {
    return {
      tenantId: isSet(object.tenantId) ? String(object.tenantId) : "",
      stream: isSet(object.stream) ? String(object.stream) : "",
    };
  },

  toJSON(message: GetStreamRequest): unknown {
    const obj: any = {};
    message.tenantId !== undefined && (obj.tenantId = message.tenantId);
    message.stream !== undefined && (obj.stream = message.stream);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetStreamRequest>, I>>(object: I): GetStreamRequest {
    const message = createBaseGetStreamRequest();
    message.tenantId = object.tenantId ?? "";
    message.stream = object.stream ?? "";
    return message;
  },
};

function createBaseGetStreamResponse(): GetStreamResponse {
  return { events: [] };
}

export const GetStreamResponse = {
  encode(message: GetStreamResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.events) {
      PublishEventEnvelope.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetStreamResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetStreamResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.events.push(PublishEventEnvelope.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetStreamResponse {
    return {
      events: Array.isArray(object?.events) ? object.events.map((e: any) => PublishEventEnvelope.fromJSON(e)) : [],
    };
  },

  toJSON(message: GetStreamResponse): unknown {
    const obj: any = {};
    if (message.events) {
      obj.events = message.events.map((e) => e ? PublishEventEnvelope.toJSON(e) : undefined);
    } else {
      obj.events = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetStreamResponse>, I>>(object: I): GetStreamResponse {
    const message = createBaseGetStreamResponse();
    message.events = object.events?.map((e) => PublishEventEnvelope.fromPartial(e)) || [];
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends { $case: string } ? { [K in keyof Omit<T, "$case">]?: DeepPartial<T[K]> } & { $case: T["$case"] }
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
