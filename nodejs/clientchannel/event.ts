/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface PublishEventEnvelope {
  tenantId: string;
  topic: string;
  event: Event | undefined;
}

export interface EventEnvelope {
  tenantId: string;
  broadcast: boolean;
  event: Event | undefined;
}

export interface Event {
  id: string;
  type: string;
  stream: string;
  correlationId: string;
  causationId: string;
  raisedAt: string;
  payload: { [key: string]: Data };
  reason: string;
}

export interface Event_PayloadEntry {
  key: string;
  value: Data | undefined;
}

export interface Data {
  metadata?: { $case: "gdpr"; gdpr: Data_GdprMetadata };
  value: string;
}

export interface Data_GdprMetadata {
  default: string;
}

function createBasePublishEventEnvelope(): PublishEventEnvelope {
  return { tenantId: "", topic: "", event: undefined };
}

export const PublishEventEnvelope = {
  encode(message: PublishEventEnvelope, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tenantId !== "") {
      writer.uint32(10).string(message.tenantId);
    }
    if (message.topic !== "") {
      writer.uint32(18).string(message.topic);
    }
    if (message.event !== undefined) {
      Event.encode(message.event, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PublishEventEnvelope {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePublishEventEnvelope();
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
          message.event = Event.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PublishEventEnvelope {
    return {
      tenantId: isSet(object.tenantId) ? String(object.tenantId) : "",
      topic: isSet(object.topic) ? String(object.topic) : "",
      event: isSet(object.event) ? Event.fromJSON(object.event) : undefined,
    };
  },

  toJSON(message: PublishEventEnvelope): unknown {
    const obj: any = {};
    message.tenantId !== undefined && (obj.tenantId = message.tenantId);
    message.topic !== undefined && (obj.topic = message.topic);
    message.event !== undefined && (obj.event = message.event ? Event.toJSON(message.event) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PublishEventEnvelope>, I>>(object: I): PublishEventEnvelope {
    const message = createBasePublishEventEnvelope();
    message.tenantId = object.tenantId ?? "";
    message.topic = object.topic ?? "";
    message.event = (object.event !== undefined && object.event !== null) ? Event.fromPartial(object.event) : undefined;
    return message;
  },
};

function createBaseEventEnvelope(): EventEnvelope {
  return { tenantId: "", broadcast: false, event: undefined };
}

export const EventEnvelope = {
  encode(message: EventEnvelope, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tenantId !== "") {
      writer.uint32(10).string(message.tenantId);
    }
    if (message.broadcast === true) {
      writer.uint32(16).bool(message.broadcast);
    }
    if (message.event !== undefined) {
      Event.encode(message.event, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventEnvelope {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventEnvelope();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tenantId = reader.string();
          break;
        case 2:
          message.broadcast = reader.bool();
          break;
        case 3:
          message.event = Event.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventEnvelope {
    return {
      tenantId: isSet(object.tenantId) ? String(object.tenantId) : "",
      broadcast: isSet(object.broadcast) ? Boolean(object.broadcast) : false,
      event: isSet(object.event) ? Event.fromJSON(object.event) : undefined,
    };
  },

  toJSON(message: EventEnvelope): unknown {
    const obj: any = {};
    message.tenantId !== undefined && (obj.tenantId = message.tenantId);
    message.broadcast !== undefined && (obj.broadcast = message.broadcast);
    message.event !== undefined && (obj.event = message.event ? Event.toJSON(message.event) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventEnvelope>, I>>(object: I): EventEnvelope {
    const message = createBaseEventEnvelope();
    message.tenantId = object.tenantId ?? "";
    message.broadcast = object.broadcast ?? false;
    message.event = (object.event !== undefined && object.event !== null) ? Event.fromPartial(object.event) : undefined;
    return message;
  },
};

function createBaseEvent(): Event {
  return { id: "", type: "", stream: "", correlationId: "", causationId: "", raisedAt: "", payload: {}, reason: "" };
}

export const Event = {
  encode(message: Event, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (message.raisedAt !== "") {
      writer.uint32(50).string(message.raisedAt);
    }
    Object.entries(message.payload).forEach(([key, value]) => {
      Event_PayloadEntry.encode({ key: key as any, value }, writer.uint32(58).fork()).ldelim();
    });
    if (message.reason !== "") {
      writer.uint32(66).string(message.reason);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Event {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvent();
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
          message.raisedAt = reader.string();
          break;
        case 7:
          const entry7 = Event_PayloadEntry.decode(reader, reader.uint32());
          if (entry7.value !== undefined) {
            message.payload[entry7.key] = entry7.value;
          }
          break;
        case 8:
          message.reason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Event {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      type: isSet(object.type) ? String(object.type) : "",
      stream: isSet(object.stream) ? String(object.stream) : "",
      correlationId: isSet(object.correlationId) ? String(object.correlationId) : "",
      causationId: isSet(object.causationId) ? String(object.causationId) : "",
      raisedAt: isSet(object.raisedAt) ? String(object.raisedAt) : "",
      payload: isObject(object.payload)
        ? Object.entries(object.payload).reduce<{ [key: string]: Data }>((acc, [key, value]) => {
          acc[key] = Data.fromJSON(value);
          return acc;
        }, {})
        : {},
      reason: isSet(object.reason) ? String(object.reason) : "",
    };
  },

  toJSON(message: Event): unknown {
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
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Event>, I>>(object: I): Event {
    const message = createBaseEvent();
    message.id = object.id ?? "";
    message.type = object.type ?? "";
    message.stream = object.stream ?? "";
    message.correlationId = object.correlationId ?? "";
    message.causationId = object.causationId ?? "";
    message.raisedAt = object.raisedAt ?? "";
    message.payload = Object.entries(object.payload ?? {}).reduce<{ [key: string]: Data }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = Data.fromPartial(value);
      }
      return acc;
    }, {});
    message.reason = object.reason ?? "";
    return message;
  },
};

function createBaseEvent_PayloadEntry(): Event_PayloadEntry {
  return { key: "", value: undefined };
}

export const Event_PayloadEntry = {
  encode(message: Event_PayloadEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Data.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Event_PayloadEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvent_PayloadEntry();
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

  fromJSON(object: any): Event_PayloadEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? Data.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: Event_PayloadEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value ? Data.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Event_PayloadEntry>, I>>(object: I): Event_PayloadEntry {
    const message = createBaseEvent_PayloadEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null) ? Data.fromPartial(object.value) : undefined;
    return message;
  },
};

function createBaseData(): Data {
  return { metadata: undefined, value: "" };
}

export const Data = {
  encode(message: Data, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.metadata?.$case === "gdpr") {
      Data_GdprMetadata.encode(message.metadata.gdpr, writer.uint32(34).fork()).ldelim();
    }
    if (message.value !== "") {
      writer.uint32(10).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Data {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          message.metadata = { $case: "gdpr", gdpr: Data_GdprMetadata.decode(reader, reader.uint32()) };
          break;
        case 1:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Data {
    return {
      metadata: isSet(object.gdpr) ? { $case: "gdpr", gdpr: Data_GdprMetadata.fromJSON(object.gdpr) } : undefined,
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: Data): unknown {
    const obj: any = {};
    message.metadata?.$case === "gdpr" &&
      (obj.gdpr = message.metadata?.gdpr ? Data_GdprMetadata.toJSON(message.metadata?.gdpr) : undefined);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Data>, I>>(object: I): Data {
    const message = createBaseData();
    if (object.metadata?.$case === "gdpr" && object.metadata?.gdpr !== undefined && object.metadata?.gdpr !== null) {
      message.metadata = { $case: "gdpr", gdpr: Data_GdprMetadata.fromPartial(object.metadata.gdpr) };
    }
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseData_GdprMetadata(): Data_GdprMetadata {
  return { default: "" };
}

export const Data_GdprMetadata = {
  encode(message: Data_GdprMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.default !== "") {
      writer.uint32(26).string(message.default);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Data_GdprMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseData_GdprMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          message.default = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Data_GdprMetadata {
    return { default: isSet(object.default) ? String(object.default) : "" };
  },

  toJSON(message: Data_GdprMetadata): unknown {
    const obj: any = {};
    message.default !== undefined && (obj.default = message.default);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Data_GdprMetadata>, I>>(object: I): Data_GdprMetadata {
    const message = createBaseData_GdprMetadata();
    message.default = object.default ?? "";
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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
