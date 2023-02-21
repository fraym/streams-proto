/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "clientchannel";

export interface SnapshotRequest {
  topic: string;
  toTime: string;
}

export interface SnapshotResponse {
}

function createBaseSnapshotRequest(): SnapshotRequest {
  return { topic: "", toTime: "" };
}

export const SnapshotRequest = {
  encode(message: SnapshotRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.topic !== "") {
      writer.uint32(10).string(message.topic);
    }
    if (message.toTime !== "") {
      writer.uint32(18).string(message.toTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SnapshotRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSnapshotRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.topic = reader.string();
          break;
        case 2:
          message.toTime = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SnapshotRequest {
    return {
      topic: isSet(object.topic) ? String(object.topic) : "",
      toTime: isSet(object.toTime) ? String(object.toTime) : "",
    };
  },

  toJSON(message: SnapshotRequest): unknown {
    const obj: any = {};
    message.topic !== undefined && (obj.topic = message.topic);
    message.toTime !== undefined && (obj.toTime = message.toTime);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SnapshotRequest>, I>>(object: I): SnapshotRequest {
    const message = createBaseSnapshotRequest();
    message.topic = object.topic ?? "";
    message.toTime = object.toTime ?? "";
    return message;
  },
};

function createBaseSnapshotResponse(): SnapshotResponse {
  return {};
}

export const SnapshotResponse = {
  encode(_: SnapshotResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SnapshotResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSnapshotResponse();
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

  fromJSON(_: any): SnapshotResponse {
    return {};
  },

  toJSON(_: SnapshotResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SnapshotResponse>, I>>(_: I): SnapshotResponse {
    const message = createBaseSnapshotResponse();
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
