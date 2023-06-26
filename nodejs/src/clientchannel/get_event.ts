/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "clientchannel";

export interface GetEventRequest {
  tenantId: string;
  eventId: string;
}

function createBaseGetEventRequest(): GetEventRequest {
  return { tenantId: "", eventId: "" };
}

export const GetEventRequest = {
  encode(message: GetEventRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tenantId !== "") {
      writer.uint32(10).string(message.tenantId);
    }
    if (message.eventId !== "") {
      writer.uint32(18).string(message.eventId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetEventRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetEventRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tenantId = reader.string();
          break;
        case 2:
          message.eventId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetEventRequest {
    return {
      tenantId: isSet(object.tenantId) ? String(object.tenantId) : "",
      eventId: isSet(object.eventId) ? String(object.eventId) : "",
    };
  },

  toJSON(message: GetEventRequest): unknown {
    const obj: any = {};
    message.tenantId !== undefined && (obj.tenantId = message.tenantId);
    message.eventId !== undefined && (obj.eventId = message.eventId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetEventRequest>, I>>(object: I): GetEventRequest {
    const message = createBaseGetEventRequest();
    message.tenantId = object.tenantId ?? "";
    message.eventId = object.eventId ?? "";
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
