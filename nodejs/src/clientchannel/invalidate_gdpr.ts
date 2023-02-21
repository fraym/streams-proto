/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "clientchannel";

export interface InvalidateGdprRequest {
  tenantId: string;
  topic: string;
  gdprId: string;
}

export interface InvalidateGdprResponse {
}

function createBaseInvalidateGdprRequest(): InvalidateGdprRequest {
  return { tenantId: "", topic: "", gdprId: "" };
}

export const InvalidateGdprRequest = {
  encode(message: InvalidateGdprRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tenantId !== "") {
      writer.uint32(10).string(message.tenantId);
    }
    if (message.topic !== "") {
      writer.uint32(18).string(message.topic);
    }
    if (message.gdprId !== "") {
      writer.uint32(26).string(message.gdprId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InvalidateGdprRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInvalidateGdprRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tenantId = reader.string();
          break;
        case 2:
          message.topic = reader.string();
          break;
        case 3:
          message.gdprId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InvalidateGdprRequest {
    return {
      tenantId: isSet(object.tenantId) ? String(object.tenantId) : "",
      topic: isSet(object.topic) ? String(object.topic) : "",
      gdprId: isSet(object.gdprId) ? String(object.gdprId) : "",
    };
  },

  toJSON(message: InvalidateGdprRequest): unknown {
    const obj: any = {};
    message.tenantId !== undefined && (obj.tenantId = message.tenantId);
    message.topic !== undefined && (obj.topic = message.topic);
    message.gdprId !== undefined && (obj.gdprId = message.gdprId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<InvalidateGdprRequest>, I>>(object: I): InvalidateGdprRequest {
    const message = createBaseInvalidateGdprRequest();
    message.tenantId = object.tenantId ?? "";
    message.topic = object.topic ?? "";
    message.gdprId = object.gdprId ?? "";
    return message;
  },
};

function createBaseInvalidateGdprResponse(): InvalidateGdprResponse {
  return {};
}

export const InvalidateGdprResponse = {
  encode(_: InvalidateGdprResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InvalidateGdprResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInvalidateGdprResponse();
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

  fromJSON(_: any): InvalidateGdprResponse {
    return {};
  },

  toJSON(_: InvalidateGdprResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<InvalidateGdprResponse>, I>>(_: I): InvalidateGdprResponse {
    const message = createBaseInvalidateGdprResponse();
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
