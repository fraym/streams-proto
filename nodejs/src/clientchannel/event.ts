/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface PublishEventEnvelope {
  tenantId: string;
  topic: string;
  event: Event | undefined;
  broadcast: boolean;
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
  value: string;
  metadata?: { $case: "gdpr"; gdpr: Data_GdprMetadata };
}

export interface Data_GdprMetadata {
  default: string;
  id: string;
  invalidated: boolean;
}

function createBasePublishEventEnvelope(): PublishEventEnvelope {
  return { tenantId: "", topic: "", event: undefined, broadcast: false };
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
    if (message.broadcast === true) {
      writer.uint32(32).bool(message.broadcast);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PublishEventEnvelope {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePublishEventEnvelope();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tenantId = reader.string();
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

          message.event = Event.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.broadcast = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PublishEventEnvelope {
    return {
      tenantId: isSet(object.tenantId) ? String(object.tenantId) : "",
      topic: isSet(object.topic) ? String(object.topic) : "",
      event: isSet(object.event) ? Event.fromJSON(object.event) : undefined,
      broadcast: isSet(object.broadcast) ? Boolean(object.broadcast) : false,
    };
  },

  toJSON(message: PublishEventEnvelope): unknown {
    const obj: any = {};
    message.tenantId !== undefined && (obj.tenantId = message.tenantId);
    message.topic !== undefined && (obj.topic = message.topic);
    message.event !== undefined && (obj.event = message.event ? Event.toJSON(message.event) : undefined);
    message.broadcast !== undefined && (obj.broadcast = message.broadcast);
    return obj;
  },

  create<I extends Exact<DeepPartial<PublishEventEnvelope>, I>>(base?: I): PublishEventEnvelope {
    return PublishEventEnvelope.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PublishEventEnvelope>, I>>(object: I): PublishEventEnvelope {
    const message = createBasePublishEventEnvelope();
    message.tenantId = object.tenantId ?? "";
    message.topic = object.topic ?? "";
    message.event = (object.event !== undefined && object.event !== null) ? Event.fromPartial(object.event) : undefined;
    message.broadcast = object.broadcast ?? false;
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventEnvelope();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tenantId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.broadcast = reader.bool();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.event = Event.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
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

  create<I extends Exact<DeepPartial<EventEnvelope>, I>>(base?: I): EventEnvelope {
    return EventEnvelope.fromPartial(base ?? {});
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
  return { id: "", type: "", stream: "", correlationId: "", causationId: "", raisedAt: "0", payload: {}, reason: "" };
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
    if (message.raisedAt !== "0") {
      writer.uint32(48).int64(message.raisedAt);
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.type = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.stream = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.correlationId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.causationId = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.raisedAt = longToString(reader.int64() as Long);
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          const entry7 = Event_PayloadEntry.decode(reader, reader.uint32());
          if (entry7.value !== undefined) {
            message.payload[entry7.key] = entry7.value;
          }
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.reason = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
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
      raisedAt: isSet(object.raisedAt) ? String(object.raisedAt) : "0",
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

  create<I extends Exact<DeepPartial<Event>, I>>(base?: I): Event {
    return Event.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Event>, I>>(object: I): Event {
    const message = createBaseEvent();
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvent_PayloadEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = Data.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
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

  create<I extends Exact<DeepPartial<Event_PayloadEntry>, I>>(base?: I): Event_PayloadEntry {
    return Event_PayloadEntry.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Event_PayloadEntry>, I>>(object: I): Event_PayloadEntry {
    const message = createBaseEvent_PayloadEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null) ? Data.fromPartial(object.value) : undefined;
    return message;
  },
};

function createBaseData(): Data {
  return { value: "", metadata: undefined };
}

export const Data = {
  encode(message: Data, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== "") {
      writer.uint32(10).string(message.value);
    }
    switch (message.metadata?.$case) {
      case "gdpr":
        Data_GdprMetadata.encode(message.metadata.gdpr, writer.uint32(18).fork()).ldelim();
        break;
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Data {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.value = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.metadata = { $case: "gdpr", gdpr: Data_GdprMetadata.decode(reader, reader.uint32()) };
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Data {
    return {
      value: isSet(object.value) ? String(object.value) : "",
      metadata: isSet(object.gdpr) ? { $case: "gdpr", gdpr: Data_GdprMetadata.fromJSON(object.gdpr) } : undefined,
    };
  },

  toJSON(message: Data): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    message.metadata?.$case === "gdpr" &&
      (obj.gdpr = message.metadata?.gdpr ? Data_GdprMetadata.toJSON(message.metadata?.gdpr) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Data>, I>>(base?: I): Data {
    return Data.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Data>, I>>(object: I): Data {
    const message = createBaseData();
    message.value = object.value ?? "";
    if (object.metadata?.$case === "gdpr" && object.metadata?.gdpr !== undefined && object.metadata?.gdpr !== null) {
      message.metadata = { $case: "gdpr", gdpr: Data_GdprMetadata.fromPartial(object.metadata.gdpr) };
    }
    return message;
  },
};

function createBaseData_GdprMetadata(): Data_GdprMetadata {
  return { default: "", id: "", invalidated: false };
}

export const Data_GdprMetadata = {
  encode(message: Data_GdprMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.default !== "") {
      writer.uint32(10).string(message.default);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.invalidated === true) {
      writer.uint32(24).bool(message.invalidated);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Data_GdprMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseData_GdprMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.default = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.id = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.invalidated = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Data_GdprMetadata {
    return {
      default: isSet(object.default) ? String(object.default) : "",
      id: isSet(object.id) ? String(object.id) : "",
      invalidated: isSet(object.invalidated) ? Boolean(object.invalidated) : false,
    };
  },

  toJSON(message: Data_GdprMetadata): unknown {
    const obj: any = {};
    message.default !== undefined && (obj.default = message.default);
    message.id !== undefined && (obj.id = message.id);
    message.invalidated !== undefined && (obj.invalidated = message.invalidated);
    return obj;
  },

  create<I extends Exact<DeepPartial<Data_GdprMetadata>, I>>(base?: I): Data_GdprMetadata {
    return Data_GdprMetadata.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Data_GdprMetadata>, I>>(object: I): Data_GdprMetadata {
    const message = createBaseData_GdprMetadata();
    message.default = object.default ?? "";
    message.id = object.id ?? "";
    message.invalidated = object.invalidated ?? false;
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
