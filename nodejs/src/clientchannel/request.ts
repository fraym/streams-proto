/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { EventEnvelope } from "./event";

export const protobufPackage = "clientchannel";

export interface Request {
  payload?:
    | { $case: "init"; init: Request_InitAction }
    | { $case: "publish"; publish: Request_PublishAction }
    | { $case: "subscribe"; subscribe: Request_SubscribeAction }
    | { $case: "invalidateGdpr"; invalidateGdpr: Request_InvalidateGdprAction }
    | { $case: "introduceGdprOnField"; introduceGdprOnField: Request_IntroduceGdprOnFieldAction }
    | { $case: "snapshot"; snapshot: Request_SnapshotAction }
    | { $case: "eventReceived"; eventReceived: Request_EventReceived }
    | { $case: "eventNotReceived"; eventNotReceived: Request_EventNotReceived }
    | { $case: "eventHandled"; eventHandled: Request_EventHandled }
    | { $case: "eventNotHandled"; eventNotHandled: Request_EventNotHandled };
}

export interface Request_InitAction {
  groupId: string;
  subscriberId: string;
}

export interface Request_PublishAction {
  topic: string;
  publishActionId: string;
  events: EventEnvelope[];
}

export interface Request_SubscribeAction {
  includedTopics: string[];
  excludedTopics: string[];
}

export interface Request_SnapshotAction {
  topic: string;
  toTime: string;
}

export interface Request_InvalidateGdprAction {
  tenantId: string;
  topic: string;
  gdprId: string;
}

export interface Request_IntroduceGdprOnFieldAction {
  topic: string;
  eventType: string;
  fieldName: string;
  defaultValue: string;
}

export interface Request_EventReceived {
  tenantId: string;
  topic: string;
  eventId: string;
}

export interface Request_EventNotReceived {
  tenantId: string;
  topic: string;
  eventId: string;
  reason: string;
}

export interface Request_EventHandled {
  tenantId: string;
  topic: string;
  eventId: string;
}

export interface Request_EventNotHandled {
  tenantId: string;
  topic: string;
  eventId: string;
  reason: string;
}

function createBaseRequest(): Request {
  return { payload: undefined };
}

export const Request = {
  encode(message: Request, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.payload?.$case === "init") {
      Request_InitAction.encode(message.payload.init, writer.uint32(10).fork()).ldelim();
    }
    if (message.payload?.$case === "publish") {
      Request_PublishAction.encode(message.payload.publish, writer.uint32(18).fork()).ldelim();
    }
    if (message.payload?.$case === "subscribe") {
      Request_SubscribeAction.encode(message.payload.subscribe, writer.uint32(26).fork()).ldelim();
    }
    if (message.payload?.$case === "invalidateGdpr") {
      Request_InvalidateGdprAction.encode(message.payload.invalidateGdpr, writer.uint32(42).fork()).ldelim();
    }
    if (message.payload?.$case === "introduceGdprOnField") {
      Request_IntroduceGdprOnFieldAction.encode(message.payload.introduceGdprOnField, writer.uint32(50).fork())
        .ldelim();
    }
    if (message.payload?.$case === "snapshot") {
      Request_SnapshotAction.encode(message.payload.snapshot, writer.uint32(58).fork()).ldelim();
    }
    if (message.payload?.$case === "eventReceived") {
      Request_EventReceived.encode(message.payload.eventReceived, writer.uint32(66).fork()).ldelim();
    }
    if (message.payload?.$case === "eventNotReceived") {
      Request_EventNotReceived.encode(message.payload.eventNotReceived, writer.uint32(74).fork()).ldelim();
    }
    if (message.payload?.$case === "eventHandled") {
      Request_EventHandled.encode(message.payload.eventHandled, writer.uint32(82).fork()).ldelim();
    }
    if (message.payload?.$case === "eventNotHandled") {
      Request_EventNotHandled.encode(message.payload.eventNotHandled, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Request {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payload = { $case: "init", init: Request_InitAction.decode(reader, reader.uint32()) };
          break;
        case 2:
          message.payload = { $case: "publish", publish: Request_PublishAction.decode(reader, reader.uint32()) };
          break;
        case 3:
          message.payload = { $case: "subscribe", subscribe: Request_SubscribeAction.decode(reader, reader.uint32()) };
          break;
        case 5:
          message.payload = {
            $case: "invalidateGdpr",
            invalidateGdpr: Request_InvalidateGdprAction.decode(reader, reader.uint32()),
          };
          break;
        case 6:
          message.payload = {
            $case: "introduceGdprOnField",
            introduceGdprOnField: Request_IntroduceGdprOnFieldAction.decode(reader, reader.uint32()),
          };
          break;
        case 7:
          message.payload = { $case: "snapshot", snapshot: Request_SnapshotAction.decode(reader, reader.uint32()) };
          break;
        case 8:
          message.payload = {
            $case: "eventReceived",
            eventReceived: Request_EventReceived.decode(reader, reader.uint32()),
          };
          break;
        case 9:
          message.payload = {
            $case: "eventNotReceived",
            eventNotReceived: Request_EventNotReceived.decode(reader, reader.uint32()),
          };
          break;
        case 10:
          message.payload = {
            $case: "eventHandled",
            eventHandled: Request_EventHandled.decode(reader, reader.uint32()),
          };
          break;
        case 11:
          message.payload = {
            $case: "eventNotHandled",
            eventNotHandled: Request_EventNotHandled.decode(reader, reader.uint32()),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Request {
    return {
      payload: isSet(object.init)
        ? { $case: "init", init: Request_InitAction.fromJSON(object.init) }
        : isSet(object.publish)
        ? { $case: "publish", publish: Request_PublishAction.fromJSON(object.publish) }
        : isSet(object.subscribe)
        ? { $case: "subscribe", subscribe: Request_SubscribeAction.fromJSON(object.subscribe) }
        : isSet(object.invalidateGdpr)
        ? { $case: "invalidateGdpr", invalidateGdpr: Request_InvalidateGdprAction.fromJSON(object.invalidateGdpr) }
        : isSet(object.introduceGdprOnField)
        ? {
          $case: "introduceGdprOnField",
          introduceGdprOnField: Request_IntroduceGdprOnFieldAction.fromJSON(object.introduceGdprOnField),
        }
        : isSet(object.snapshot)
        ? { $case: "snapshot", snapshot: Request_SnapshotAction.fromJSON(object.snapshot) }
        : isSet(object.eventReceived)
        ? { $case: "eventReceived", eventReceived: Request_EventReceived.fromJSON(object.eventReceived) }
        : isSet(object.eventNotReceived)
        ? { $case: "eventNotReceived", eventNotReceived: Request_EventNotReceived.fromJSON(object.eventNotReceived) }
        : isSet(object.eventHandled)
        ? { $case: "eventHandled", eventHandled: Request_EventHandled.fromJSON(object.eventHandled) }
        : isSet(object.eventNotHandled)
        ? { $case: "eventNotHandled", eventNotHandled: Request_EventNotHandled.fromJSON(object.eventNotHandled) }
        : undefined,
    };
  },

  toJSON(message: Request): unknown {
    const obj: any = {};
    message.payload?.$case === "init" &&
      (obj.init = message.payload?.init ? Request_InitAction.toJSON(message.payload?.init) : undefined);
    message.payload?.$case === "publish" &&
      (obj.publish = message.payload?.publish ? Request_PublishAction.toJSON(message.payload?.publish) : undefined);
    message.payload?.$case === "subscribe" && (obj.subscribe = message.payload?.subscribe
      ? Request_SubscribeAction.toJSON(message.payload?.subscribe)
      : undefined);
    message.payload?.$case === "invalidateGdpr" && (obj.invalidateGdpr = message.payload?.invalidateGdpr
      ? Request_InvalidateGdprAction.toJSON(message.payload?.invalidateGdpr)
      : undefined);
    message.payload?.$case === "introduceGdprOnField" &&
      (obj.introduceGdprOnField = message.payload?.introduceGdprOnField
        ? Request_IntroduceGdprOnFieldAction.toJSON(message.payload?.introduceGdprOnField)
        : undefined);
    message.payload?.$case === "snapshot" &&
      (obj.snapshot = message.payload?.snapshot ? Request_SnapshotAction.toJSON(message.payload?.snapshot) : undefined);
    message.payload?.$case === "eventReceived" && (obj.eventReceived = message.payload?.eventReceived
      ? Request_EventReceived.toJSON(message.payload?.eventReceived)
      : undefined);
    message.payload?.$case === "eventNotReceived" && (obj.eventNotReceived = message.payload?.eventNotReceived
      ? Request_EventNotReceived.toJSON(message.payload?.eventNotReceived)
      : undefined);
    message.payload?.$case === "eventHandled" && (obj.eventHandled = message.payload?.eventHandled
      ? Request_EventHandled.toJSON(message.payload?.eventHandled)
      : undefined);
    message.payload?.$case === "eventNotHandled" && (obj.eventNotHandled = message.payload?.eventNotHandled
      ? Request_EventNotHandled.toJSON(message.payload?.eventNotHandled)
      : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Request>, I>>(object: I): Request {
    const message = createBaseRequest();
    if (object.payload?.$case === "init" && object.payload?.init !== undefined && object.payload?.init !== null) {
      message.payload = { $case: "init", init: Request_InitAction.fromPartial(object.payload.init) };
    }
    if (
      object.payload?.$case === "publish" && object.payload?.publish !== undefined && object.payload?.publish !== null
    ) {
      message.payload = { $case: "publish", publish: Request_PublishAction.fromPartial(object.payload.publish) };
    }
    if (
      object.payload?.$case === "subscribe" &&
      object.payload?.subscribe !== undefined &&
      object.payload?.subscribe !== null
    ) {
      message.payload = {
        $case: "subscribe",
        subscribe: Request_SubscribeAction.fromPartial(object.payload.subscribe),
      };
    }
    if (
      object.payload?.$case === "invalidateGdpr" &&
      object.payload?.invalidateGdpr !== undefined &&
      object.payload?.invalidateGdpr !== null
    ) {
      message.payload = {
        $case: "invalidateGdpr",
        invalidateGdpr: Request_InvalidateGdprAction.fromPartial(object.payload.invalidateGdpr),
      };
    }
    if (
      object.payload?.$case === "introduceGdprOnField" &&
      object.payload?.introduceGdprOnField !== undefined &&
      object.payload?.introduceGdprOnField !== null
    ) {
      message.payload = {
        $case: "introduceGdprOnField",
        introduceGdprOnField: Request_IntroduceGdprOnFieldAction.fromPartial(object.payload.introduceGdprOnField),
      };
    }
    if (
      object.payload?.$case === "snapshot" &&
      object.payload?.snapshot !== undefined &&
      object.payload?.snapshot !== null
    ) {
      message.payload = { $case: "snapshot", snapshot: Request_SnapshotAction.fromPartial(object.payload.snapshot) };
    }
    if (
      object.payload?.$case === "eventReceived" &&
      object.payload?.eventReceived !== undefined &&
      object.payload?.eventReceived !== null
    ) {
      message.payload = {
        $case: "eventReceived",
        eventReceived: Request_EventReceived.fromPartial(object.payload.eventReceived),
      };
    }
    if (
      object.payload?.$case === "eventNotReceived" &&
      object.payload?.eventNotReceived !== undefined &&
      object.payload?.eventNotReceived !== null
    ) {
      message.payload = {
        $case: "eventNotReceived",
        eventNotReceived: Request_EventNotReceived.fromPartial(object.payload.eventNotReceived),
      };
    }
    if (
      object.payload?.$case === "eventHandled" &&
      object.payload?.eventHandled !== undefined &&
      object.payload?.eventHandled !== null
    ) {
      message.payload = {
        $case: "eventHandled",
        eventHandled: Request_EventHandled.fromPartial(object.payload.eventHandled),
      };
    }
    if (
      object.payload?.$case === "eventNotHandled" &&
      object.payload?.eventNotHandled !== undefined &&
      object.payload?.eventNotHandled !== null
    ) {
      message.payload = {
        $case: "eventNotHandled",
        eventNotHandled: Request_EventNotHandled.fromPartial(object.payload.eventNotHandled),
      };
    }
    return message;
  },
};

function createBaseRequest_InitAction(): Request_InitAction {
  return { groupId: "", subscriberId: "" };
}

export const Request_InitAction = {
  encode(message: Request_InitAction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.groupId !== "") {
      writer.uint32(10).string(message.groupId);
    }
    if (message.subscriberId !== "") {
      writer.uint32(18).string(message.subscriberId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Request_InitAction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequest_InitAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.string();
          break;
        case 2:
          message.subscriberId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Request_InitAction {
    return {
      groupId: isSet(object.groupId) ? String(object.groupId) : "",
      subscriberId: isSet(object.subscriberId) ? String(object.subscriberId) : "",
    };
  },

  toJSON(message: Request_InitAction): unknown {
    const obj: any = {};
    message.groupId !== undefined && (obj.groupId = message.groupId);
    message.subscriberId !== undefined && (obj.subscriberId = message.subscriberId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Request_InitAction>, I>>(object: I): Request_InitAction {
    const message = createBaseRequest_InitAction();
    message.groupId = object.groupId ?? "";
    message.subscriberId = object.subscriberId ?? "";
    return message;
  },
};

function createBaseRequest_PublishAction(): Request_PublishAction {
  return { topic: "", publishActionId: "", events: [] };
}

export const Request_PublishAction = {
  encode(message: Request_PublishAction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.topic !== "") {
      writer.uint32(10).string(message.topic);
    }
    if (message.publishActionId !== "") {
      writer.uint32(18).string(message.publishActionId);
    }
    for (const v of message.events) {
      EventEnvelope.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Request_PublishAction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequest_PublishAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.topic = reader.string();
          break;
        case 2:
          message.publishActionId = reader.string();
          break;
        case 3:
          message.events.push(EventEnvelope.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Request_PublishAction {
    return {
      topic: isSet(object.topic) ? String(object.topic) : "",
      publishActionId: isSet(object.publishActionId) ? String(object.publishActionId) : "",
      events: Array.isArray(object?.events) ? object.events.map((e: any) => EventEnvelope.fromJSON(e)) : [],
    };
  },

  toJSON(message: Request_PublishAction): unknown {
    const obj: any = {};
    message.topic !== undefined && (obj.topic = message.topic);
    message.publishActionId !== undefined && (obj.publishActionId = message.publishActionId);
    if (message.events) {
      obj.events = message.events.map((e) => e ? EventEnvelope.toJSON(e) : undefined);
    } else {
      obj.events = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Request_PublishAction>, I>>(object: I): Request_PublishAction {
    const message = createBaseRequest_PublishAction();
    message.topic = object.topic ?? "";
    message.publishActionId = object.publishActionId ?? "";
    message.events = object.events?.map((e) => EventEnvelope.fromPartial(e)) || [];
    return message;
  },
};

function createBaseRequest_SubscribeAction(): Request_SubscribeAction {
  return { includedTopics: [], excludedTopics: [] };
}

export const Request_SubscribeAction = {
  encode(message: Request_SubscribeAction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.includedTopics) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.excludedTopics) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Request_SubscribeAction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequest_SubscribeAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.includedTopics.push(reader.string());
          break;
        case 2:
          message.excludedTopics.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Request_SubscribeAction {
    return {
      includedTopics: Array.isArray(object?.includedTopics) ? object.includedTopics.map((e: any) => String(e)) : [],
      excludedTopics: Array.isArray(object?.excludedTopics) ? object.excludedTopics.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: Request_SubscribeAction): unknown {
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

  fromPartial<I extends Exact<DeepPartial<Request_SubscribeAction>, I>>(object: I): Request_SubscribeAction {
    const message = createBaseRequest_SubscribeAction();
    message.includedTopics = object.includedTopics?.map((e) => e) || [];
    message.excludedTopics = object.excludedTopics?.map((e) => e) || [];
    return message;
  },
};

function createBaseRequest_SnapshotAction(): Request_SnapshotAction {
  return { topic: "", toTime: "" };
}

export const Request_SnapshotAction = {
  encode(message: Request_SnapshotAction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.topic !== "") {
      writer.uint32(10).string(message.topic);
    }
    if (message.toTime !== "") {
      writer.uint32(18).string(message.toTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Request_SnapshotAction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequest_SnapshotAction();
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

  fromJSON(object: any): Request_SnapshotAction {
    return {
      topic: isSet(object.topic) ? String(object.topic) : "",
      toTime: isSet(object.toTime) ? String(object.toTime) : "",
    };
  },

  toJSON(message: Request_SnapshotAction): unknown {
    const obj: any = {};
    message.topic !== undefined && (obj.topic = message.topic);
    message.toTime !== undefined && (obj.toTime = message.toTime);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Request_SnapshotAction>, I>>(object: I): Request_SnapshotAction {
    const message = createBaseRequest_SnapshotAction();
    message.topic = object.topic ?? "";
    message.toTime = object.toTime ?? "";
    return message;
  },
};

function createBaseRequest_InvalidateGdprAction(): Request_InvalidateGdprAction {
  return { tenantId: "", topic: "", gdprId: "" };
}

export const Request_InvalidateGdprAction = {
  encode(message: Request_InvalidateGdprAction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Request_InvalidateGdprAction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequest_InvalidateGdprAction();
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

  fromJSON(object: any): Request_InvalidateGdprAction {
    return {
      tenantId: isSet(object.tenantId) ? String(object.tenantId) : "",
      topic: isSet(object.topic) ? String(object.topic) : "",
      gdprId: isSet(object.gdprId) ? String(object.gdprId) : "",
    };
  },

  toJSON(message: Request_InvalidateGdprAction): unknown {
    const obj: any = {};
    message.tenantId !== undefined && (obj.tenantId = message.tenantId);
    message.topic !== undefined && (obj.topic = message.topic);
    message.gdprId !== undefined && (obj.gdprId = message.gdprId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Request_InvalidateGdprAction>, I>>(object: I): Request_InvalidateGdprAction {
    const message = createBaseRequest_InvalidateGdprAction();
    message.tenantId = object.tenantId ?? "";
    message.topic = object.topic ?? "";
    message.gdprId = object.gdprId ?? "";
    return message;
  },
};

function createBaseRequest_IntroduceGdprOnFieldAction(): Request_IntroduceGdprOnFieldAction {
  return { topic: "", eventType: "", fieldName: "", defaultValue: "" };
}

export const Request_IntroduceGdprOnFieldAction = {
  encode(message: Request_IntroduceGdprOnFieldAction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Request_IntroduceGdprOnFieldAction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequest_IntroduceGdprOnFieldAction();
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

  fromJSON(object: any): Request_IntroduceGdprOnFieldAction {
    return {
      topic: isSet(object.topic) ? String(object.topic) : "",
      eventType: isSet(object.eventType) ? String(object.eventType) : "",
      fieldName: isSet(object.fieldName) ? String(object.fieldName) : "",
      defaultValue: isSet(object.defaultValue) ? String(object.defaultValue) : "",
    };
  },

  toJSON(message: Request_IntroduceGdprOnFieldAction): unknown {
    const obj: any = {};
    message.topic !== undefined && (obj.topic = message.topic);
    message.eventType !== undefined && (obj.eventType = message.eventType);
    message.fieldName !== undefined && (obj.fieldName = message.fieldName);
    message.defaultValue !== undefined && (obj.defaultValue = message.defaultValue);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Request_IntroduceGdprOnFieldAction>, I>>(
    object: I,
  ): Request_IntroduceGdprOnFieldAction {
    const message = createBaseRequest_IntroduceGdprOnFieldAction();
    message.topic = object.topic ?? "";
    message.eventType = object.eventType ?? "";
    message.fieldName = object.fieldName ?? "";
    message.defaultValue = object.defaultValue ?? "";
    return message;
  },
};

function createBaseRequest_EventReceived(): Request_EventReceived {
  return { tenantId: "", topic: "", eventId: "" };
}

export const Request_EventReceived = {
  encode(message: Request_EventReceived, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Request_EventReceived {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequest_EventReceived();
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
          message.eventId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Request_EventReceived {
    return {
      tenantId: isSet(object.tenantId) ? String(object.tenantId) : "",
      topic: isSet(object.topic) ? String(object.topic) : "",
      eventId: isSet(object.eventId) ? String(object.eventId) : "",
    };
  },

  toJSON(message: Request_EventReceived): unknown {
    const obj: any = {};
    message.tenantId !== undefined && (obj.tenantId = message.tenantId);
    message.topic !== undefined && (obj.topic = message.topic);
    message.eventId !== undefined && (obj.eventId = message.eventId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Request_EventReceived>, I>>(object: I): Request_EventReceived {
    const message = createBaseRequest_EventReceived();
    message.tenantId = object.tenantId ?? "";
    message.topic = object.topic ?? "";
    message.eventId = object.eventId ?? "";
    return message;
  },
};

function createBaseRequest_EventNotReceived(): Request_EventNotReceived {
  return { tenantId: "", topic: "", eventId: "", reason: "" };
}

export const Request_EventNotReceived = {
  encode(message: Request_EventNotReceived, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Request_EventNotReceived {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequest_EventNotReceived();
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
          message.eventId = reader.string();
          break;
        case 4:
          message.reason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Request_EventNotReceived {
    return {
      tenantId: isSet(object.tenantId) ? String(object.tenantId) : "",
      topic: isSet(object.topic) ? String(object.topic) : "",
      eventId: isSet(object.eventId) ? String(object.eventId) : "",
      reason: isSet(object.reason) ? String(object.reason) : "",
    };
  },

  toJSON(message: Request_EventNotReceived): unknown {
    const obj: any = {};
    message.tenantId !== undefined && (obj.tenantId = message.tenantId);
    message.topic !== undefined && (obj.topic = message.topic);
    message.eventId !== undefined && (obj.eventId = message.eventId);
    message.reason !== undefined && (obj.reason = message.reason);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Request_EventNotReceived>, I>>(object: I): Request_EventNotReceived {
    const message = createBaseRequest_EventNotReceived();
    message.tenantId = object.tenantId ?? "";
    message.topic = object.topic ?? "";
    message.eventId = object.eventId ?? "";
    message.reason = object.reason ?? "";
    return message;
  },
};

function createBaseRequest_EventHandled(): Request_EventHandled {
  return { tenantId: "", topic: "", eventId: "" };
}

export const Request_EventHandled = {
  encode(message: Request_EventHandled, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Request_EventHandled {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequest_EventHandled();
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
          message.eventId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Request_EventHandled {
    return {
      tenantId: isSet(object.tenantId) ? String(object.tenantId) : "",
      topic: isSet(object.topic) ? String(object.topic) : "",
      eventId: isSet(object.eventId) ? String(object.eventId) : "",
    };
  },

  toJSON(message: Request_EventHandled): unknown {
    const obj: any = {};
    message.tenantId !== undefined && (obj.tenantId = message.tenantId);
    message.topic !== undefined && (obj.topic = message.topic);
    message.eventId !== undefined && (obj.eventId = message.eventId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Request_EventHandled>, I>>(object: I): Request_EventHandled {
    const message = createBaseRequest_EventHandled();
    message.tenantId = object.tenantId ?? "";
    message.topic = object.topic ?? "";
    message.eventId = object.eventId ?? "";
    return message;
  },
};

function createBaseRequest_EventNotHandled(): Request_EventNotHandled {
  return { tenantId: "", topic: "", eventId: "", reason: "" };
}

export const Request_EventNotHandled = {
  encode(message: Request_EventNotHandled, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Request_EventNotHandled {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequest_EventNotHandled();
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
          message.eventId = reader.string();
          break;
        case 4:
          message.reason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Request_EventNotHandled {
    return {
      tenantId: isSet(object.tenantId) ? String(object.tenantId) : "",
      topic: isSet(object.topic) ? String(object.topic) : "",
      eventId: isSet(object.eventId) ? String(object.eventId) : "",
      reason: isSet(object.reason) ? String(object.reason) : "",
    };
  },

  toJSON(message: Request_EventNotHandled): unknown {
    const obj: any = {};
    message.tenantId !== undefined && (obj.tenantId = message.tenantId);
    message.topic !== undefined && (obj.topic = message.topic);
    message.eventId !== undefined && (obj.eventId = message.eventId);
    message.reason !== undefined && (obj.reason = message.reason);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Request_EventNotHandled>, I>>(object: I): Request_EventNotHandled {
    const message = createBaseRequest_EventNotHandled();
    message.tenantId = object.tenantId ?? "";
    message.topic = object.topic ?? "";
    message.eventId = object.eventId ?? "";
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