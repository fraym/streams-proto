/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "clientchannel";

export interface IntroduceGdprOnFieldRequest {
  topic: string;
  eventType: string;
  fieldName: string;
  defaultValue: string;
}

export interface IntroduceGdprOnFieldResponse {
}

function createBaseIntroduceGdprOnFieldRequest(): IntroduceGdprOnFieldRequest {
  return { topic: "", eventType: "", fieldName: "", defaultValue: "" };
}

export const IntroduceGdprOnFieldRequest = {
  encode(message: IntroduceGdprOnFieldRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.topic !== "") {
      writer.uint32(10).string(message.topic);
    }
    if (message.eventType !== "") {
      writer.uint32(18).string(message.eventType);
    }
    if (message.fieldName !== "") {
      writer.uint32(26).string(message.fieldName);
    }
    if (message.defaultValue !== "") {
      writer.uint32(34).string(message.defaultValue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IntroduceGdprOnFieldRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIntroduceGdprOnFieldRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.topic = reader.string();
          break;
        case 2:
          message.eventType = reader.string();
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

  fromJSON(object: any): IntroduceGdprOnFieldRequest {
    return {
      topic: isSet(object.topic) ? String(object.topic) : "",
      eventType: isSet(object.eventType) ? String(object.eventType) : "",
      fieldName: isSet(object.fieldName) ? String(object.fieldName) : "",
      defaultValue: isSet(object.defaultValue) ? String(object.defaultValue) : "",
    };
  },

  toJSON(message: IntroduceGdprOnFieldRequest): unknown {
    const obj: any = {};
    message.topic !== undefined && (obj.topic = message.topic);
    message.eventType !== undefined && (obj.eventType = message.eventType);
    message.fieldName !== undefined && (obj.fieldName = message.fieldName);
    message.defaultValue !== undefined && (obj.defaultValue = message.defaultValue);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<IntroduceGdprOnFieldRequest>, I>>(object: I): IntroduceGdprOnFieldRequest {
    const message = createBaseIntroduceGdprOnFieldRequest();
    message.topic = object.topic ?? "";
    message.eventType = object.eventType ?? "";
    message.fieldName = object.fieldName ?? "";
    message.defaultValue = object.defaultValue ?? "";
    return message;
  },
};

function createBaseIntroduceGdprOnFieldResponse(): IntroduceGdprOnFieldResponse {
  return {};
}

export const IntroduceGdprOnFieldResponse = {
  encode(_: IntroduceGdprOnFieldResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IntroduceGdprOnFieldResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIntroduceGdprOnFieldResponse();
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

  fromJSON(_: any): IntroduceGdprOnFieldResponse {
    return {};
  },

  toJSON(_: IntroduceGdprOnFieldResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<IntroduceGdprOnFieldResponse>, I>>(_: I): IntroduceGdprOnFieldResponse {
    const message = createBaseIntroduceGdprOnFieldResponse();
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
