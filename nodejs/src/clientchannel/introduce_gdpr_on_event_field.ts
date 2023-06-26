/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "clientchannel";

export interface IntroduceGdprOnEventFieldRequest {
  tenant: string;
  topic: string;
  eventId: string;
  fieldName: string;
  defaultValue: string;
}

export interface IntroduceGdprOnEventFieldResponse {
}

function createBaseIntroduceGdprOnEventFieldRequest(): IntroduceGdprOnEventFieldRequest {
  return { tenant: "", topic: "", eventId: "", fieldName: "", defaultValue: "" };
}

export const IntroduceGdprOnEventFieldRequest = {
  encode(message: IntroduceGdprOnEventFieldRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tenant !== "") {
      writer.uint32(10).string(message.tenant);
    }
    if (message.topic !== "") {
      writer.uint32(18).string(message.topic);
    }
    if (message.eventId !== "") {
      writer.uint32(26).string(message.eventId);
    }
    if (message.fieldName !== "") {
      writer.uint32(34).string(message.fieldName);
    }
    if (message.defaultValue !== "") {
      writer.uint32(42).string(message.defaultValue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IntroduceGdprOnEventFieldRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIntroduceGdprOnEventFieldRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tenant = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.topic = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.eventId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.fieldName = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.defaultValue = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): IntroduceGdprOnEventFieldRequest {
    return {
      tenant: isSet(object.tenant) ? String(object.tenant) : "",
      topic: isSet(object.topic) ? String(object.topic) : "",
      eventId: isSet(object.eventId) ? String(object.eventId) : "",
      fieldName: isSet(object.fieldName) ? String(object.fieldName) : "",
      defaultValue: isSet(object.defaultValue) ? String(object.defaultValue) : "",
    };
  },

  toJSON(message: IntroduceGdprOnEventFieldRequest): unknown {
    const obj: any = {};
    message.tenant !== undefined && (obj.tenant = message.tenant);
    message.topic !== undefined && (obj.topic = message.topic);
    message.eventId !== undefined && (obj.eventId = message.eventId);
    message.fieldName !== undefined && (obj.fieldName = message.fieldName);
    message.defaultValue !== undefined && (obj.defaultValue = message.defaultValue);
    return obj;
  },

  create<I extends Exact<DeepPartial<IntroduceGdprOnEventFieldRequest>, I>>(
    base?: I,
  ): IntroduceGdprOnEventFieldRequest {
    return IntroduceGdprOnEventFieldRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<IntroduceGdprOnEventFieldRequest>, I>>(
    object: I,
  ): IntroduceGdprOnEventFieldRequest {
    const message = createBaseIntroduceGdprOnEventFieldRequest();
    message.tenant = object.tenant ?? "";
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIntroduceGdprOnEventFieldResponse();
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

  fromJSON(_: any): IntroduceGdprOnEventFieldResponse {
    return {};
  },

  toJSON(_: IntroduceGdprOnEventFieldResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<IntroduceGdprOnEventFieldResponse>, I>>(
    base?: I,
  ): IntroduceGdprOnEventFieldResponse {
    return IntroduceGdprOnEventFieldResponse.fromPartial(base ?? {});
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
