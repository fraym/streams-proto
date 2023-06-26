/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "clientchannel";

export interface IntroduceGdprOnEventFieldRequest {
  topic: string;
  eventId: string;
  fieldName: string;
  defaultValue: string;
}

export interface IntroduceGdprOnEventFieldResponse {
}

function createBaseIntroduceGdprOnEventFieldRequest(): IntroduceGdprOnEventFieldRequest {
  return { topic: "", eventId: "", fieldName: "", defaultValue: "" };
}

export const IntroduceGdprOnEventFieldRequest = {
  encode(message: IntroduceGdprOnEventFieldRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.topic !== "") {
      writer.uint32(10).string(message.topic);
    }
    if (message.eventId !== "") {
      writer.uint32(18).string(message.eventId);
    }
    if (message.fieldName !== "") {
      writer.uint32(26).string(message.fieldName);
    }
    if (message.defaultValue !== "") {
      writer.uint32(34).string(message.defaultValue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IntroduceGdprOnEventFieldRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIntroduceGdprOnEventFieldRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.topic = reader.string();
          break;
        case 2:
          message.eventId = reader.string();
          break;
        case 3:
          message.fieldName = reader.string();
          break;
        case 4:
          message.defaultValue = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IntroduceGdprOnEventFieldRequest {
    return {
      topic: isSet(object.topic) ? String(object.topic) : "",
      eventId: isSet(object.eventId) ? String(object.eventId) : "",
      fieldName: isSet(object.fieldName) ? String(object.fieldName) : "",
      defaultValue: isSet(object.defaultValue) ? String(object.defaultValue) : "",
    };
  },

  toJSON(message: IntroduceGdprOnEventFieldRequest): unknown {
    const obj: any = {};
    message.topic !== undefined && (obj.topic = message.topic);
    message.eventId !== undefined && (obj.eventId = message.eventId);
    message.fieldName !== undefined && (obj.fieldName = message.fieldName);
    message.defaultValue !== undefined && (obj.defaultValue = message.defaultValue);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<IntroduceGdprOnEventFieldRequest>, I>>(
    object: I,
  ): IntroduceGdprOnEventFieldRequest {
    const message = createBaseIntroduceGdprOnEventFieldRequest();
    message.topic = object.topic ?? "";
    message.eventId = object.eventId ?? "";
    message.fieldName = object.fieldName ?? "";
    message.defaultValue = object.defaultValue ?? "";
    return message;
  },
};

function createBaseIntroduceGdprOnEventFieldResponse(): IntroduceGdprOnEventFieldResponse {
  return {};
}

export const IntroduceGdprOnEventFieldResponse = {
  encode(_: IntroduceGdprOnEventFieldResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IntroduceGdprOnEventFieldResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIntroduceGdprOnEventFieldResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): IntroduceGdprOnEventFieldResponse {
    return {};
  },

  toJSON(_: IntroduceGdprOnEventFieldResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<IntroduceGdprOnEventFieldResponse>, I>>(
    _: I,
  ): IntroduceGdprOnEventFieldResponse {
    const message = createBaseIntroduceGdprOnEventFieldResponse();
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
