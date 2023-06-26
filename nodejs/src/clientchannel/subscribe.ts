/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { PublishEventEnvelope } from "./event";

export const protobufPackage = "clientchannel";

export interface SubscribeRequest {
  payload?:
    | { $case: "init"; init: SubscribeRequest_InitAction }
    | { $case: "subscribe"; subscribe: SubscribeRequest_SubscribeAction }
    | { $case: "eventReceived"; eventReceived: SubscribeRequest_EventReceived }
    | { $case: "eventNotReceived"; eventNotReceived: SubscribeRequest_EventNotReceived }
    | { $case: "eventHandled"; eventHandled: SubscribeRequest_EventHandled }
    | { $case: "eventNotHandled"; eventNotHandled: SubscribeRequest_EventNotHandled };
}

export interface SubscribeRequest_InitAction {
  groupId: string;
  subscriberId: string;
}

export interface SubscribeRequest_SubscribeAction {
  includedTopics: string[];
  excludedTopics: string[];
}

export interface SubscribeRequest_EventReceived {
  tenantId: string;
  topic: string;
  eventId: string;
}

export interface SubscribeRequest_EventNotReceived {
  tenantId: string;
  topic: string;
  eventId: string;
  reason: string;
}

export interface SubscribeRequest_EventHandled {
  tenantId: string;
  topic: string;
  eventId: string;
}

export interface SubscribeRequest_EventNotHandled {
  tenantId: string;
  topic: string;
  eventId: string;
  reason: string;
}

export interface SubscribeResponse {
  data?:
    | { $case: "event"; event: PublishEventEnvelope }
    | { $case: "initAck"; initAck: SubscribeResponse_InitAck }
    | { $case: "initNotAck"; initNotAck: SubscribeResponse_InitNotAck }
    | { $case: "subscribeAck"; subscribeAck: SubscribeResponse_SubscribeAck }
    | { $case: "subscribeNotAck"; subscribeNotAck: SubscribeResponse_SubscribeNotAck };
}

export interface SubscribeResponse_InitAck {
}

export interface SubscribeResponse_InitNotAck {
  reason: string;
}

export interface SubscribeResponse_SubscribeAck {
}

export interface SubscribeResponse_SubscribeNotAck {
  reason: string;
}

function createBaseSubscribeRequest(): SubscribeRequest {
  return { payload: undefined };
}

export const SubscribeRequest = {
  encode(message: SubscribeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    switch (message.payload?.$case) {
      case "init":
        SubscribeRequest_InitAction.encode(message.payload.init, writer.uint32(10).fork()).ldelim();
        break;
      case "subscribe":
        SubscribeRequest_SubscribeAction.encode(message.payload.subscribe, writer.uint32(18).fork()).ldelim();
        break;
      case "eventReceived":
        SubscribeRequest_EventReceived.encode(message.payload.eventReceived, writer.uint32(26).fork()).ldelim();
        break;
      case "eventNotReceived":
        SubscribeRequest_EventNotReceived.encode(message.payload.eventNotReceived, writer.uint32(34).fork()).ldelim();
        break;
      case "eventHandled":
        SubscribeRequest_EventHandled.encode(message.payload.eventHandled, writer.uint32(42).fork()).ldelim();
        break;
      case "eventNotHandled":
        SubscribeRequest_EventNotHandled.encode(message.payload.eventNotHandled, writer.uint32(50).fork()).ldelim();
        break;
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubscribeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.payload = { $case: "init", init: SubscribeRequest_InitAction.decode(reader, reader.uint32()) };
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.payload = {
            $case: "subscribe",
            subscribe: SubscribeRequest_SubscribeAction.decode(reader, reader.uint32()),
          };
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.payload = {
            $case: "eventReceived",
            eventReceived: SubscribeRequest_EventReceived.decode(reader, reader.uint32()),
          };
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.payload = {
            $case: "eventNotReceived",
            eventNotReceived: SubscribeRequest_EventNotReceived.decode(reader, reader.uint32()),
          };
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.payload = {
            $case: "eventHandled",
            eventHandled: SubscribeRequest_EventHandled.decode(reader, reader.uint32()),
          };
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.payload = {
            $case: "eventNotHandled",
            eventNotHandled: SubscribeRequest_EventNotHandled.decode(reader, reader.uint32()),
          };
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SubscribeRequest {
    return {
      payload: isSet(object.init)
        ? { $case: "init", init: SubscribeRequest_InitAction.fromJSON(object.init) }
        : isSet(object.subscribe)
        ? { $case: "subscribe", subscribe: SubscribeRequest_SubscribeAction.fromJSON(object.subscribe) }
        : isSet(object.eventReceived)
        ? { $case: "eventReceived", eventReceived: SubscribeRequest_EventReceived.fromJSON(object.eventReceived) }
        : isSet(object.eventNotReceived)
        ? {
          $case: "eventNotReceived",
          eventNotReceived: SubscribeRequest_EventNotReceived.fromJSON(object.eventNotReceived),
        }
        : isSet(object.eventHandled)
        ? { $case: "eventHandled", eventHandled: SubscribeRequest_EventHandled.fromJSON(object.eventHandled) }
        : isSet(object.eventNotHandled)
        ? {
          $case: "eventNotHandled",
          eventNotHandled: SubscribeRequest_EventNotHandled.fromJSON(object.eventNotHandled),
        }
        : undefined,
    };
  },

  toJSON(message: SubscribeRequest): unknown {
    const obj: any = {};
    message.payload?.$case === "init" &&
      (obj.init = message.payload?.init ? SubscribeRequest_InitAction.toJSON(message.payload?.init) : undefined);
    message.payload?.$case === "subscribe" && (obj.subscribe = message.payload?.subscribe
      ? SubscribeRequest_SubscribeAction.toJSON(message.payload?.subscribe)
      : undefined);
    message.payload?.$case === "eventReceived" && (obj.eventReceived = message.payload?.eventReceived
      ? SubscribeRequest_EventReceived.toJSON(message.payload?.eventReceived)
      : undefined);
    message.payload?.$case === "eventNotReceived" && (obj.eventNotReceived = message.payload?.eventNotReceived
      ? SubscribeRequest_EventNotReceived.toJSON(message.payload?.eventNotReceived)
      : undefined);
    message.payload?.$case === "eventHandled" && (obj.eventHandled = message.payload?.eventHandled
      ? SubscribeRequest_EventHandled.toJSON(message.payload?.eventHandled)
      : undefined);
    message.payload?.$case === "eventNotHandled" && (obj.eventNotHandled = message.payload?.eventNotHandled
      ? SubscribeRequest_EventNotHandled.toJSON(message.payload?.eventNotHandled)
      : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<SubscribeRequest>, I>>(base?: I): SubscribeRequest {
    return SubscribeRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SubscribeRequest>, I>>(object: I): SubscribeRequest {
    const message = createBaseSubscribeRequest();
    if (object.payload?.$case === "init" && object.payload?.init !== undefined && object.payload?.init !== null) {
      message.payload = { $case: "init", init: SubscribeRequest_InitAction.fromPartial(object.payload.init) };
    }
    if (
      object.payload?.$case === "subscribe" &&
      object.payload?.subscribe !== undefined &&
      object.payload?.subscribe !== null
    ) {
      message.payload = {
        $case: "subscribe",
        subscribe: SubscribeRequest_SubscribeAction.fromPartial(object.payload.subscribe),
      };
    }
    if (
      object.payload?.$case === "eventReceived" &&
      object.payload?.eventReceived !== undefined &&
      object.payload?.eventReceived !== null
    ) {
      message.payload = {
        $case: "eventReceived",
        eventReceived: SubscribeRequest_EventReceived.fromPartial(object.payload.eventReceived),
      };
    }
    if (
      object.payload?.$case === "eventNotReceived" &&
      object.payload?.eventNotReceived !== undefined &&
      object.payload?.eventNotReceived !== null
    ) {
      message.payload = {
        $case: "eventNotReceived",
        eventNotReceived: SubscribeRequest_EventNotReceived.fromPartial(object.payload.eventNotReceived),
      };
    }
    if (
      object.payload?.$case === "eventHandled" &&
      object.payload?.eventHandled !== undefined &&
      object.payload?.eventHandled !== null
    ) {
      message.payload = {
        $case: "eventHandled",
        eventHandled: SubscribeRequest_EventHandled.fromPartial(object.payload.eventHandled),
      };
    }
    if (
      object.payload?.$case === "eventNotHandled" &&
      object.payload?.eventNotHandled !== undefined &&
      object.payload?.eventNotHandled !== null
    ) {
      message.payload = {
        $case: "eventNotHandled",
        eventNotHandled: SubscribeRequest_EventNotHandled.fromPartial(object.payload.eventNotHandled),
      };
    }
    return message;
  },
};

function createBaseSubscribeRequest_InitAction(): SubscribeRequest_InitAction {
  return { groupId: "", subscriberId: "" };
}

export const SubscribeRequest_InitAction = {
  encode(message: SubscribeRequest_InitAction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.groupId !== "") {
      writer.uint32(10).string(message.groupId);
    }
    if (message.subscriberId !== "") {
      writer.uint32(18).string(message.subscriberId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeRequest_InitAction {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubscribeRequest_InitAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.groupId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.subscriberId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SubscribeRequest_InitAction {
    return {
      groupId: isSet(object.groupId) ? String(object.groupId) : "",
      subscriberId: isSet(object.subscriberId) ? String(object.subscriberId) : "",
    };
  },

  toJSON(message: SubscribeRequest_InitAction): unknown {
    const obj: any = {};
    message.groupId !== undefined && (obj.groupId = message.groupId);
    message.subscriberId !== undefined && (obj.subscriberId = message.subscriberId);
    return obj;
  },

  create<I extends Exact<DeepPartial<SubscribeRequest_InitAction>, I>>(base?: I): SubscribeRequest_InitAction {
    return SubscribeRequest_InitAction.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SubscribeRequest_InitAction>, I>>(object: I): SubscribeRequest_InitAction {
    const message = createBaseSubscribeRequest_InitAction();
    message.groupId = object.groupId ?? "";
    message.subscriberId = object.subscriberId ?? "";
    return message;
  },
};

function createBaseSubscribeRequest_SubscribeAction(): SubscribeRequest_SubscribeAction {
  return { includedTopics: [], excludedTopics: [] };
}

export const SubscribeRequest_SubscribeAction = {
  encode(message: SubscribeRequest_SubscribeAction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.includedTopics) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.excludedTopics) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeRequest_SubscribeAction {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubscribeRequest_SubscribeAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.includedTopics.push(reader.string());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.excludedTopics.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SubscribeRequest_SubscribeAction {
    return {
      includedTopics: Array.isArray(object?.includedTopics) ? object.includedTopics.map((e: any) => String(e)) : [],
      excludedTopics: Array.isArray(object?.excludedTopics) ? object.excludedTopics.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: SubscribeRequest_SubscribeAction): unknown {
    const obj: any = {};
    if (message.includedTopics) {
      obj.includedTopics = message.includedTopics.map((e) => e);
    } else {
      obj.includedTopics = [];
    }
    if (message.excludedTopics) {
      obj.excludedTopics = message.excludedTopics.map((e) => e);
    } else {
      obj.excludedTopics = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SubscribeRequest_SubscribeAction>, I>>(
    base?: I,
  ): SubscribeRequest_SubscribeAction {
    return SubscribeRequest_SubscribeAction.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SubscribeRequest_SubscribeAction>, I>>(
    object: I,
  ): SubscribeRequest_SubscribeAction {
    const message = createBaseSubscribeRequest_SubscribeAction();
    message.includedTopics = object.includedTopics?.map((e) => e) || [];
    message.excludedTopics = object.excludedTopics?.map((e) => e) || [];
    return message;
  },
};

function createBaseSubscribeRequest_EventReceived(): SubscribeRequest_EventReceived {
  return { tenantId: "", topic: "", eventId: "" };
}

export const SubscribeRequest_EventReceived = {
  encode(message: SubscribeRequest_EventReceived, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tenantId !== "") {
      writer.uint32(10).string(message.tenantId);
    }
    if (message.topic !== "") {
      writer.uint32(18).string(message.topic);
    }
    if (message.eventId !== "") {
      writer.uint32(26).string(message.eventId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeRequest_EventReceived {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubscribeRequest_EventReceived();
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

          message.eventId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SubscribeRequest_EventReceived {
    return {
      tenantId: isSet(object.tenantId) ? String(object.tenantId) : "",
      topic: isSet(object.topic) ? String(object.topic) : "",
      eventId: isSet(object.eventId) ? String(object.eventId) : "",
    };
  },

  toJSON(message: SubscribeRequest_EventReceived): unknown {
    const obj: any = {};
    message.tenantId !== undefined && (obj.tenantId = message.tenantId);
    message.topic !== undefined && (obj.topic = message.topic);
    message.eventId !== undefined && (obj.eventId = message.eventId);
    return obj;
  },

  create<I extends Exact<DeepPartial<SubscribeRequest_EventReceived>, I>>(base?: I): SubscribeRequest_EventReceived {
    return SubscribeRequest_EventReceived.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SubscribeRequest_EventReceived>, I>>(
    object: I,
  ): SubscribeRequest_EventReceived {
    const message = createBaseSubscribeRequest_EventReceived();
    message.tenantId = object.tenantId ?? "";
    message.topic = object.topic ?? "";
    message.eventId = object.eventId ?? "";
    return message;
  },
};

function createBaseSubscribeRequest_EventNotReceived(): SubscribeRequest_EventNotReceived {
  return { tenantId: "", topic: "", eventId: "", reason: "" };
}

export const SubscribeRequest_EventNotReceived = {
  encode(message: SubscribeRequest_EventNotReceived, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tenantId !== "") {
      writer.uint32(10).string(message.tenantId);
    }
    if (message.topic !== "") {
      writer.uint32(18).string(message.topic);
    }
    if (message.eventId !== "") {
      writer.uint32(26).string(message.eventId);
    }
    if (message.reason !== "") {
      writer.uint32(34).string(message.reason);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeRequest_EventNotReceived {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubscribeRequest_EventNotReceived();
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

          message.eventId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
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

  fromJSON(object: any): SubscribeRequest_EventNotReceived {
    return {
      tenantId: isSet(object.tenantId) ? String(object.tenantId) : "",
      topic: isSet(object.topic) ? String(object.topic) : "",
      eventId: isSet(object.eventId) ? String(object.eventId) : "",
      reason: isSet(object.reason) ? String(object.reason) : "",
    };
  },

  toJSON(message: SubscribeRequest_EventNotReceived): unknown {
    const obj: any = {};
    message.tenantId !== undefined && (obj.tenantId = message.tenantId);
    message.topic !== undefined && (obj.topic = message.topic);
    message.eventId !== undefined && (obj.eventId = message.eventId);
    message.reason !== undefined && (obj.reason = message.reason);
    return obj;
  },

  create<I extends Exact<DeepPartial<SubscribeRequest_EventNotReceived>, I>>(
    base?: I,
  ): SubscribeRequest_EventNotReceived {
    return SubscribeRequest_EventNotReceived.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SubscribeRequest_EventNotReceived>, I>>(
    object: I,
  ): SubscribeRequest_EventNotReceived {
    const message = createBaseSubscribeRequest_EventNotReceived();
    message.tenantId = object.tenantId ?? "";
    message.topic = object.topic ?? "";
    message.eventId = object.eventId ?? "";
    message.reason = object.reason ?? "";
    return message;
  },
};

function createBaseSubscribeRequest_EventHandled(): SubscribeRequest_EventHandled {
  return { tenantId: "", topic: "", eventId: "" };
}

export const SubscribeRequest_EventHandled = {
  encode(message: SubscribeRequest_EventHandled, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tenantId !== "") {
      writer.uint32(10).string(message.tenantId);
    }
    if (message.topic !== "") {
      writer.uint32(18).string(message.topic);
    }
    if (message.eventId !== "") {
      writer.uint32(26).string(message.eventId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeRequest_EventHandled {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubscribeRequest_EventHandled();
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

          message.eventId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SubscribeRequest_EventHandled {
    return {
      tenantId: isSet(object.tenantId) ? String(object.tenantId) : "",
      topic: isSet(object.topic) ? String(object.topic) : "",
      eventId: isSet(object.eventId) ? String(object.eventId) : "",
    };
  },

  toJSON(message: SubscribeRequest_EventHandled): unknown {
    const obj: any = {};
    message.tenantId !== undefined && (obj.tenantId = message.tenantId);
    message.topic !== undefined && (obj.topic = message.topic);
    message.eventId !== undefined && (obj.eventId = message.eventId);
    return obj;
  },

  create<I extends Exact<DeepPartial<SubscribeRequest_EventHandled>, I>>(base?: I): SubscribeRequest_EventHandled {
    return SubscribeRequest_EventHandled.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SubscribeRequest_EventHandled>, I>>(
    object: I,
  ): SubscribeRequest_EventHandled {
    const message = createBaseSubscribeRequest_EventHandled();
    message.tenantId = object.tenantId ?? "";
    message.topic = object.topic ?? "";
    message.eventId = object.eventId ?? "";
    return message;
  },
};

function createBaseSubscribeRequest_EventNotHandled(): SubscribeRequest_EventNotHandled {
  return { tenantId: "", topic: "", eventId: "", reason: "" };
}

export const SubscribeRequest_EventNotHandled = {
  encode(message: SubscribeRequest_EventNotHandled, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tenantId !== "") {
      writer.uint32(10).string(message.tenantId);
    }
    if (message.topic !== "") {
      writer.uint32(18).string(message.topic);
    }
    if (message.eventId !== "") {
      writer.uint32(26).string(message.eventId);
    }
    if (message.reason !== "") {
      writer.uint32(34).string(message.reason);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeRequest_EventNotHandled {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubscribeRequest_EventNotHandled();
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

          message.eventId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
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

  fromJSON(object: any): SubscribeRequest_EventNotHandled {
    return {
      tenantId: isSet(object.tenantId) ? String(object.tenantId) : "",
      topic: isSet(object.topic) ? String(object.topic) : "",
      eventId: isSet(object.eventId) ? String(object.eventId) : "",
      reason: isSet(object.reason) ? String(object.reason) : "",
    };
  },

  toJSON(message: SubscribeRequest_EventNotHandled): unknown {
    const obj: any = {};
    message.tenantId !== undefined && (obj.tenantId = message.tenantId);
    message.topic !== undefined && (obj.topic = message.topic);
    message.eventId !== undefined && (obj.eventId = message.eventId);
    message.reason !== undefined && (obj.reason = message.reason);
    return obj;
  },

  create<I extends Exact<DeepPartial<SubscribeRequest_EventNotHandled>, I>>(
    base?: I,
  ): SubscribeRequest_EventNotHandled {
    return SubscribeRequest_EventNotHandled.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SubscribeRequest_EventNotHandled>, I>>(
    object: I,
  ): SubscribeRequest_EventNotHandled {
    const message = createBaseSubscribeRequest_EventNotHandled();
    message.tenantId = object.tenantId ?? "";
    message.topic = object.topic ?? "";
    message.eventId = object.eventId ?? "";
    message.reason = object.reason ?? "";
    return message;
  },
};

function createBaseSubscribeResponse(): SubscribeResponse {
  return { data: undefined };
}

export const SubscribeResponse = {
  encode(message: SubscribeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    switch (message.data?.$case) {
      case "event":
        PublishEventEnvelope.encode(message.data.event, writer.uint32(10).fork()).ldelim();
        break;
      case "initAck":
        SubscribeResponse_InitAck.encode(message.data.initAck, writer.uint32(18).fork()).ldelim();
        break;
      case "initNotAck":
        SubscribeResponse_InitNotAck.encode(message.data.initNotAck, writer.uint32(26).fork()).ldelim();
        break;
      case "subscribeAck":
        SubscribeResponse_SubscribeAck.encode(message.data.subscribeAck, writer.uint32(34).fork()).ldelim();
        break;
      case "subscribeNotAck":
        SubscribeResponse_SubscribeNotAck.encode(message.data.subscribeNotAck, writer.uint32(42).fork()).ldelim();
        break;
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubscribeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.data = { $case: "event", event: PublishEventEnvelope.decode(reader, reader.uint32()) };
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.data = { $case: "initAck", initAck: SubscribeResponse_InitAck.decode(reader, reader.uint32()) };
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.data = {
            $case: "initNotAck",
            initNotAck: SubscribeResponse_InitNotAck.decode(reader, reader.uint32()),
          };
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.data = {
            $case: "subscribeAck",
            subscribeAck: SubscribeResponse_SubscribeAck.decode(reader, reader.uint32()),
          };
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.data = {
            $case: "subscribeNotAck",
            subscribeNotAck: SubscribeResponse_SubscribeNotAck.decode(reader, reader.uint32()),
          };
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SubscribeResponse {
    return {
      data: isSet(object.event)
        ? { $case: "event", event: PublishEventEnvelope.fromJSON(object.event) }
        : isSet(object.initAck)
        ? { $case: "initAck", initAck: SubscribeResponse_InitAck.fromJSON(object.initAck) }
        : isSet(object.initNotAck)
        ? { $case: "initNotAck", initNotAck: SubscribeResponse_InitNotAck.fromJSON(object.initNotAck) }
        : isSet(object.subscribeAck)
        ? { $case: "subscribeAck", subscribeAck: SubscribeResponse_SubscribeAck.fromJSON(object.subscribeAck) }
        : isSet(object.subscribeNotAck)
        ? {
          $case: "subscribeNotAck",
          subscribeNotAck: SubscribeResponse_SubscribeNotAck.fromJSON(object.subscribeNotAck),
        }
        : undefined,
    };
  },

  toJSON(message: SubscribeResponse): unknown {
    const obj: any = {};
    message.data?.$case === "event" &&
      (obj.event = message.data?.event ? PublishEventEnvelope.toJSON(message.data?.event) : undefined);
    message.data?.$case === "initAck" &&
      (obj.initAck = message.data?.initAck ? SubscribeResponse_InitAck.toJSON(message.data?.initAck) : undefined);
    message.data?.$case === "initNotAck" && (obj.initNotAck = message.data?.initNotAck
      ? SubscribeResponse_InitNotAck.toJSON(message.data?.initNotAck)
      : undefined);
    message.data?.$case === "subscribeAck" && (obj.subscribeAck = message.data?.subscribeAck
      ? SubscribeResponse_SubscribeAck.toJSON(message.data?.subscribeAck)
      : undefined);
    message.data?.$case === "subscribeNotAck" && (obj.subscribeNotAck = message.data?.subscribeNotAck
      ? SubscribeResponse_SubscribeNotAck.toJSON(message.data?.subscribeNotAck)
      : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<SubscribeResponse>, I>>(base?: I): SubscribeResponse {
    return SubscribeResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SubscribeResponse>, I>>(object: I): SubscribeResponse {
    const message = createBaseSubscribeResponse();
    if (object.data?.$case === "event" && object.data?.event !== undefined && object.data?.event !== null) {
      message.data = { $case: "event", event: PublishEventEnvelope.fromPartial(object.data.event) };
    }
    if (object.data?.$case === "initAck" && object.data?.initAck !== undefined && object.data?.initAck !== null) {
      message.data = { $case: "initAck", initAck: SubscribeResponse_InitAck.fromPartial(object.data.initAck) };
    }
    if (
      object.data?.$case === "initNotAck" && object.data?.initNotAck !== undefined && object.data?.initNotAck !== null
    ) {
      message.data = {
        $case: "initNotAck",
        initNotAck: SubscribeResponse_InitNotAck.fromPartial(object.data.initNotAck),
      };
    }
    if (
      object.data?.$case === "subscribeAck" &&
      object.data?.subscribeAck !== undefined &&
      object.data?.subscribeAck !== null
    ) {
      message.data = {
        $case: "subscribeAck",
        subscribeAck: SubscribeResponse_SubscribeAck.fromPartial(object.data.subscribeAck),
      };
    }
    if (
      object.data?.$case === "subscribeNotAck" &&
      object.data?.subscribeNotAck !== undefined &&
      object.data?.subscribeNotAck !== null
    ) {
      message.data = {
        $case: "subscribeNotAck",
        subscribeNotAck: SubscribeResponse_SubscribeNotAck.fromPartial(object.data.subscribeNotAck),
      };
    }
    return message;
  },
};

function createBaseSubscribeResponse_InitAck(): SubscribeResponse_InitAck {
  return {};
}

export const SubscribeResponse_InitAck = {
  encode(_: SubscribeResponse_InitAck, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeResponse_InitAck {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubscribeResponse_InitAck();
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

  fromJSON(_: any): SubscribeResponse_InitAck {
    return {};
  },

  toJSON(_: SubscribeResponse_InitAck): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<SubscribeResponse_InitAck>, I>>(base?: I): SubscribeResponse_InitAck {
    return SubscribeResponse_InitAck.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SubscribeResponse_InitAck>, I>>(_: I): SubscribeResponse_InitAck {
    const message = createBaseSubscribeResponse_InitAck();
    return message;
  },
};

function createBaseSubscribeResponse_InitNotAck(): SubscribeResponse_InitNotAck {
  return { reason: "" };
}

export const SubscribeResponse_InitNotAck = {
  encode(message: SubscribeResponse_InitNotAck, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reason !== "") {
      writer.uint32(10).string(message.reason);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeResponse_InitNotAck {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubscribeResponse_InitNotAck();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): SubscribeResponse_InitNotAck {
    return { reason: isSet(object.reason) ? String(object.reason) : "" };
  },

  toJSON(message: SubscribeResponse_InitNotAck): unknown {
    const obj: any = {};
    message.reason !== undefined && (obj.reason = message.reason);
    return obj;
  },

  create<I extends Exact<DeepPartial<SubscribeResponse_InitNotAck>, I>>(base?: I): SubscribeResponse_InitNotAck {
    return SubscribeResponse_InitNotAck.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SubscribeResponse_InitNotAck>, I>>(object: I): SubscribeResponse_InitNotAck {
    const message = createBaseSubscribeResponse_InitNotAck();
    message.reason = object.reason ?? "";
    return message;
  },
};

function createBaseSubscribeResponse_SubscribeAck(): SubscribeResponse_SubscribeAck {
  return {};
}

export const SubscribeResponse_SubscribeAck = {
  encode(_: SubscribeResponse_SubscribeAck, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeResponse_SubscribeAck {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubscribeResponse_SubscribeAck();
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

  fromJSON(_: any): SubscribeResponse_SubscribeAck {
    return {};
  },

  toJSON(_: SubscribeResponse_SubscribeAck): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<SubscribeResponse_SubscribeAck>, I>>(base?: I): SubscribeResponse_SubscribeAck {
    return SubscribeResponse_SubscribeAck.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SubscribeResponse_SubscribeAck>, I>>(_: I): SubscribeResponse_SubscribeAck {
    const message = createBaseSubscribeResponse_SubscribeAck();
    return message;
  },
};

function createBaseSubscribeResponse_SubscribeNotAck(): SubscribeResponse_SubscribeNotAck {
  return { reason: "" };
}

export const SubscribeResponse_SubscribeNotAck = {
  encode(message: SubscribeResponse_SubscribeNotAck, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reason !== "") {
      writer.uint32(18).string(message.reason);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeResponse_SubscribeNotAck {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubscribeResponse_SubscribeNotAck();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
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

  fromJSON(object: any): SubscribeResponse_SubscribeNotAck {
    return { reason: isSet(object.reason) ? String(object.reason) : "" };
  },

  toJSON(message: SubscribeResponse_SubscribeNotAck): unknown {
    const obj: any = {};
    message.reason !== undefined && (obj.reason = message.reason);
    return obj;
  },

  create<I extends Exact<DeepPartial<SubscribeResponse_SubscribeNotAck>, I>>(
    base?: I,
  ): SubscribeResponse_SubscribeNotAck {
    return SubscribeResponse_SubscribeNotAck.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SubscribeResponse_SubscribeNotAck>, I>>(
    object: I,
  ): SubscribeResponse_SubscribeNotAck {
    const message = createBaseSubscribeResponse_SubscribeNotAck();
    message.reason = object.reason ?? "";
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
