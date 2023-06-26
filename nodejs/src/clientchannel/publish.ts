/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { EventEnvelope } from "./event";

export const protobufPackage = "clientchannel";

export interface PublishRequest {
  topic: string;
  events: EventEnvelope[];
}

export interface PublishResponse {
}

function createBasePublishRequest(): PublishRequest {
  return { topic: "", events: [] };
}

export const PublishRequest = {
  encode(message: PublishRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.topic !== "") {
      writer.uint32(10).string(message.topic);
    }
    for (const v of message.events) {
      EventEnvelope.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PublishRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePublishRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.topic = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.events.push(EventEnvelope.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PublishRequest {
    return {
      topic: isSet(object.topic) ? String(object.topic) : "",
      events: Array.isArray(object?.events) ? object.events.map((e: any) => EventEnvelope.fromJSON(e)) : [],
    };
  },

  toJSON(message: PublishRequest): unknown {
    const obj: any = {};
    message.topic !== undefined && (obj.topic = message.topic);
    if (message.events) {
      obj.events = message.events.map((e) => e ? EventEnvelope.toJSON(e) : undefined);
    } else {
      obj.events = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PublishRequest>, I>>(base?: I): PublishRequest {
    return PublishRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PublishRequest>, I>>(object: I): PublishRequest {
    const message = createBasePublishRequest();
    message.topic = object.topic ?? "";
    message.events = object.events?.map((e) => EventEnvelope.fromPartial(e)) || [];
    return message;
  },
};

function createBasePublishResponse(): PublishResponse {
  return {};
}

export const PublishResponse = {
  encode(_: PublishResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PublishResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePublishResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): PublishResponse {
    return {};
  },

  toJSON(_: PublishResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<PublishResponse>, I>>(base?: I): PublishResponse {
    return PublishResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PublishResponse>, I>>(_: I): PublishResponse {
    const message = createBasePublishResponse();
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
