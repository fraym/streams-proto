/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Data } from "./event";

export const protobufPackage = "clientchannel";

export interface LogRequest {
  tenantId: string;
  stream: string;
  correlationId: string;
}

export interface LogResponse {
  tenantId: string;
  logs: LogEvent[];
}

export interface LogEvent {
  id: string;
  type: string;
  stream: string;
  correlationId: string;
  causationId: string;
  raisedAt: string;
  payload: { [key: string]: Data };
  reason: string;
  consumedByGroups: string[];
}

export interface LogEvent_PayloadEntry {
  key: string;
  value: Data | undefined;
}

function createBaseLogRequest(): LogRequest {
  return { tenantId: "", stream: "", correlationId: "" };
}

export const LogRequest = {
  encode(message: LogRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tenantId !== "") {
      writer.uint32(10).string(message.tenantId);
    }
    if (message.stream !== "") {
      writer.uint32(18).string(message.stream);
    }
    if (message.correlationId !== "") {
      writer.uint32(26).string(message.correlationId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LogRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tenantId = reader.string();
          break;
        case 2:
          message.stream = reader.string();
          break;
        case 3:
          message.correlationId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LogRequest {
    return {
      tenantId: isSet(object.tenantId) ? String(object.tenantId) : "",
      stream: isSet(object.stream) ? String(object.stream) : "",
      correlationId: isSet(object.correlationId) ? String(object.correlationId) : "",
    };
  },

  toJSON(message: LogRequest): unknown {
    const obj: any = {};
    message.tenantId !== undefined && (obj.tenantId = message.tenantId);
    message.stream !== undefined && (obj.stream = message.stream);
    message.correlationId !== undefined && (obj.correlationId = message.correlationId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LogRequest>, I>>(object: I): LogRequest {
    const message = createBaseLogRequest();
    message.tenantId = object.tenantId ?? "";
    message.stream = object.stream ?? "";
    message.correlationId = object.correlationId ?? "";
    return message;
  },
};

function createBaseLogResponse(): LogResponse {
  return { tenantId: "", logs: [] };
}

export const LogResponse = {
  encode(message: LogResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tenantId !== "") {
      writer.uint32(10).string(message.tenantId);
    }
    for (const v of message.logs) {
      LogEvent.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LogResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tenantId = reader.string();
          break;
        case 2:
          message.logs.push(LogEvent.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LogResponse {
    return {
      tenantId: isSet(object.tenantId) ? String(object.tenantId) : "",
      logs: Array.isArray(object?.logs) ? object.logs.map((e: any) => LogEvent.fromJSON(e)) : [],
    };
  },

  toJSON(message: LogResponse): unknown {
    const obj: any = {};
    message.tenantId !== undefined && (obj.tenantId = message.tenantId);
    if (message.logs) {
      obj.logs = message.logs.map((e) => e ? LogEvent.toJSON(e) : undefined);
    } else {
      obj.logs = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LogResponse>, I>>(object: I): LogResponse {
    const message = createBaseLogResponse();
    message.tenantId = object.tenantId ?? "";
    message.logs = object.logs?.map((e) => LogEvent.fromPartial(e)) || [];
    return message;
  },
};

function createBaseLogEvent(): LogEvent {
  return {
    id: "",
    type: "",
    stream: "",
    correlationId: "",
    causationId: "",
    raisedAt: "0",
    payload: {},
    reason: "",
    consumedByGroups: [],
  };
}

export const LogEvent = {
  encode(message: LogEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    if (message.stream !== "") {
      writer.uint32(26).string(message.stream);
    }
    if (message.correlationId !== "") {
      writer.uint32(34).string(message.correlationId);
    }
    if (message.causationId !== "") {
      writer.uint32(42).string(message.causationId);
    }
    if (message.raisedAt !== "0") {
      writer.uint32(48).int64(message.raisedAt);
    }
    Object.entries(message.payload).forEach(([key, value]) => {
      LogEvent_PayloadEntry.encode({ key: key as any, value }, writer.uint32(58).fork()).ldelim();
    });
    if (message.reason !== "") {
      writer.uint32(66).string(message.reason);
    }
    for (const v of message.consumedByGroups) {
      writer.uint32(74).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LogEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.type = reader.string();
          break;
        case 3:
          message.stream = reader.string();
          break;
        case 4:
          message.correlationId = reader.string();
          break;
        case 5:
          message.causationId = reader.string();
          break;
        case 6:
          message.raisedAt = longToString(reader.int64() as Long);
          break;
        case 7:
          const entry7 = LogEvent_PayloadEntry.decode(reader, reader.uint32());
          if (entry7.value !== undefined) {
            message.payload[entry7.key] = entry7.value;
          }
          break;
        case 8:
          message.reason = reader.string();
          break;
        case 9:
          message.consumedByGroups.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LogEvent {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      type: isSet(object.type) ? String(object.type) : "",
      stream: isSet(object.stream) ? String(object.stream) : "",
      correlationId: isSet(object.correlationId) ? String(object.correlationId) : "",
      causationId: isSet(object.causationId) ? String(object.causationId) : "",
      raisedAt: isSet(object.raisedAt) ? String(object.raisedAt) : "0",
      payload: isObject(object.payload)
        ? Object.entries(object.payload).reduce<{ [key: string]: Data }>((acc, [key, value]) => {
          acc[key] = Data.fromJSON(value);
          return acc;
        }, {})
        : {},
      reason: isSet(object.reason) ? String(object.reason) : "",
      consumedByGroups: Array.isArray(object?.consumedByGroups)
        ? object.consumedByGroups.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: LogEvent): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.type !== undefined && (obj.type = message.type);
    message.stream !== undefined && (obj.stream = message.stream);
    message.correlationId !== undefined && (obj.correlationId = message.correlationId);
    message.causationId !== undefined && (obj.causationId = message.causationId);
    message.raisedAt !== undefined && (obj.raisedAt = message.raisedAt);
    obj.payload = {};
    if (message.payload) {
      Object.entries(message.payload).forEach(([k, v]) => {
        obj.payload[k] = Data.toJSON(v);
      });
    }
    message.reason !== undefined && (obj.reason = message.reason);
    if (message.consumedByGroups) {
      obj.consumedByGroups = message.consumedByGroups.map((e) => e);
    } else {
      obj.consumedByGroups = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LogEvent>, I>>(object: I): LogEvent {
    const message = createBaseLogEvent();
    message.id = object.id ?? "";
    message.type = object.type ?? "";
    message.stream = object.stream ?? "";
    message.correlationId = object.correlationId ?? "";
    message.causationId = object.causationId ?? "";
    message.raisedAt = object.raisedAt ?? "0";
    message.payload = Object.entries(object.payload ?? {}).reduce<{ [key: string]: Data }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = Data.fromPartial(value);
      }
      return acc;
    }, {});
    message.reason = object.reason ?? "";
    message.consumedByGroups = object.consumedByGroups?.map((e) => e) || [];
    return message;
  },
};

function createBaseLogEvent_PayloadEntry(): LogEvent_PayloadEntry {
  return { key: "", value: undefined };
}

export const LogEvent_PayloadEntry = {
  encode(message: LogEvent_PayloadEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Data.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LogEvent_PayloadEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogEvent_PayloadEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = Data.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LogEvent_PayloadEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? Data.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: LogEvent_PayloadEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value ? Data.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LogEvent_PayloadEntry>, I>>(object: I): LogEvent_PayloadEntry {
    const message = createBaseLogEvent_PayloadEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null) ? Data.fromPartial(object.value) : undefined;
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

function longToString(long: Long) {
  return long.toString();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
