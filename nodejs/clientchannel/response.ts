/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { PublishEventEnvelope } from "./event";

export const protobufPackage = "clientchannel";

export interface Response {
  data?:
    | { $case: "event"; event: PublishEventEnvelope }
    | { $case: "initAck"; initAck: Response_InitAck }
    | { $case: "initNotAck"; initNotAck: Response_InitNotAck }
    | { $case: "publishAck"; publishAck: Response_PublishAck }
    | { $case: "publishNotAck"; publishNotAck: Response_PublishNotAck }
    | { $case: "subscribeAck"; subscribeAck: Response_SubscribeAck }
    | { $case: "subscribeNotAck"; subscribeNotAck: Response_SubscribeNotAck }
    | { $case: "snapshotAck"; snapshotAck: Response_SnapshotAck }
    | { $case: "snapshotNotAck"; snapshotNotAck: Response_SnapshotNotAck }
    | { $case: "invalidateGdprAck"; invalidateGdprAck: Response_InvalidateGdprAck }
    | { $case: "invalidateGdprNotAck"; invalidateGdprNotAck: Response_InvalidateGdprNotAck };
}

export interface Response_InitAck {
}

export interface Response_InitNotAck {
  reason: string;
}

export interface Response_PublishAck {
  publishActionId: string;
}

export interface Response_PublishNotAck {
  publishActionId: string;
  reason: string;
}

export interface Response_SubscribeAck {
}

export interface Response_SubscribeNotAck {
  reason: string;
}

export interface Response_SnapshotAck {
  topic: string;
  snapshotId: string;
  fromTime: string;
  toTime: string;
}

export interface Response_SnapshotNotAck {
  topic: string;
  reason: string;
}

export interface Response_InvalidateGdprAck {
  tenantId: string;
  topic: string;
  gdprId: string;
}

export interface Response_InvalidateGdprNotAck {
  tenantId: string;
  topic: string;
  gdprId: string;
  reason: string;
}

function createBaseResponse(): Response {
  return { data: undefined };
}

export const Response = {
  encode(message: Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data?.$case === "event") {
      PublishEventEnvelope.encode(message.data.event, writer.uint32(10).fork()).ldelim();
    }
    if (message.data?.$case === "initAck") {
      Response_InitAck.encode(message.data.initAck, writer.uint32(18).fork()).ldelim();
    }
    if (message.data?.$case === "initNotAck") {
      Response_InitNotAck.encode(message.data.initNotAck, writer.uint32(26).fork()).ldelim();
    }
    if (message.data?.$case === "publishAck") {
      Response_PublishAck.encode(message.data.publishAck, writer.uint32(34).fork()).ldelim();
    }
    if (message.data?.$case === "publishNotAck") {
      Response_PublishNotAck.encode(message.data.publishNotAck, writer.uint32(42).fork()).ldelim();
    }
    if (message.data?.$case === "subscribeAck") {
      Response_SubscribeAck.encode(message.data.subscribeAck, writer.uint32(50).fork()).ldelim();
    }
    if (message.data?.$case === "subscribeNotAck") {
      Response_SubscribeNotAck.encode(message.data.subscribeNotAck, writer.uint32(58).fork()).ldelim();
    }
    if (message.data?.$case === "snapshotAck") {
      Response_SnapshotAck.encode(message.data.snapshotAck, writer.uint32(66).fork()).ldelim();
    }
    if (message.data?.$case === "snapshotNotAck") {
      Response_SnapshotNotAck.encode(message.data.snapshotNotAck, writer.uint32(74).fork()).ldelim();
    }
    if (message.data?.$case === "invalidateGdprAck") {
      Response_InvalidateGdprAck.encode(message.data.invalidateGdprAck, writer.uint32(82).fork()).ldelim();
    }
    if (message.data?.$case === "invalidateGdprNotAck") {
      Response_InvalidateGdprNotAck.encode(message.data.invalidateGdprNotAck, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Response {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = { $case: "event", event: PublishEventEnvelope.decode(reader, reader.uint32()) };
          break;
        case 2:
          message.data = { $case: "initAck", initAck: Response_InitAck.decode(reader, reader.uint32()) };
          break;
        case 3:
          message.data = { $case: "initNotAck", initNotAck: Response_InitNotAck.decode(reader, reader.uint32()) };
          break;
        case 4:
          message.data = { $case: "publishAck", publishAck: Response_PublishAck.decode(reader, reader.uint32()) };
          break;
        case 5:
          message.data = {
            $case: "publishNotAck",
            publishNotAck: Response_PublishNotAck.decode(reader, reader.uint32()),
          };
          break;
        case 6:
          message.data = { $case: "subscribeAck", subscribeAck: Response_SubscribeAck.decode(reader, reader.uint32()) };
          break;
        case 7:
          message.data = {
            $case: "subscribeNotAck",
            subscribeNotAck: Response_SubscribeNotAck.decode(reader, reader.uint32()),
          };
          break;
        case 8:
          message.data = { $case: "snapshotAck", snapshotAck: Response_SnapshotAck.decode(reader, reader.uint32()) };
          break;
        case 9:
          message.data = {
            $case: "snapshotNotAck",
            snapshotNotAck: Response_SnapshotNotAck.decode(reader, reader.uint32()),
          };
          break;
        case 10:
          message.data = {
            $case: "invalidateGdprAck",
            invalidateGdprAck: Response_InvalidateGdprAck.decode(reader, reader.uint32()),
          };
          break;
        case 11:
          message.data = {
            $case: "invalidateGdprNotAck",
            invalidateGdprNotAck: Response_InvalidateGdprNotAck.decode(reader, reader.uint32()),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Response {
    return {
      data: isSet(object.event)
        ? { $case: "event", event: PublishEventEnvelope.fromJSON(object.event) }
        : isSet(object.initAck)
        ? { $case: "initAck", initAck: Response_InitAck.fromJSON(object.initAck) }
        : isSet(object.initNotAck)
        ? { $case: "initNotAck", initNotAck: Response_InitNotAck.fromJSON(object.initNotAck) }
        : isSet(object.publishAck)
        ? { $case: "publishAck", publishAck: Response_PublishAck.fromJSON(object.publishAck) }
        : isSet(object.publishNotAck)
        ? { $case: "publishNotAck", publishNotAck: Response_PublishNotAck.fromJSON(object.publishNotAck) }
        : isSet(object.subscribeAck)
        ? { $case: "subscribeAck", subscribeAck: Response_SubscribeAck.fromJSON(object.subscribeAck) }
        : isSet(object.subscribeNotAck)
        ? { $case: "subscribeNotAck", subscribeNotAck: Response_SubscribeNotAck.fromJSON(object.subscribeNotAck) }
        : isSet(object.snapshotAck)
        ? { $case: "snapshotAck", snapshotAck: Response_SnapshotAck.fromJSON(object.snapshotAck) }
        : isSet(object.snapshotNotAck)
        ? { $case: "snapshotNotAck", snapshotNotAck: Response_SnapshotNotAck.fromJSON(object.snapshotNotAck) }
        : isSet(object.invalidateGdprAck)
        ? {
          $case: "invalidateGdprAck",
          invalidateGdprAck: Response_InvalidateGdprAck.fromJSON(object.invalidateGdprAck),
        }
        : isSet(object.invalidateGdprNotAck)
        ? {
          $case: "invalidateGdprNotAck",
          invalidateGdprNotAck: Response_InvalidateGdprNotAck.fromJSON(object.invalidateGdprNotAck),
        }
        : undefined,
    };
  },

  toJSON(message: Response): unknown {
    const obj: any = {};
    message.data?.$case === "event" &&
      (obj.event = message.data?.event ? PublishEventEnvelope.toJSON(message.data?.event) : undefined);
    message.data?.$case === "initAck" &&
      (obj.initAck = message.data?.initAck ? Response_InitAck.toJSON(message.data?.initAck) : undefined);
    message.data?.$case === "initNotAck" &&
      (obj.initNotAck = message.data?.initNotAck ? Response_InitNotAck.toJSON(message.data?.initNotAck) : undefined);
    message.data?.$case === "publishAck" &&
      (obj.publishAck = message.data?.publishAck ? Response_PublishAck.toJSON(message.data?.publishAck) : undefined);
    message.data?.$case === "publishNotAck" && (obj.publishNotAck = message.data?.publishNotAck
      ? Response_PublishNotAck.toJSON(message.data?.publishNotAck)
      : undefined);
    message.data?.$case === "subscribeAck" && (obj.subscribeAck = message.data?.subscribeAck
      ? Response_SubscribeAck.toJSON(message.data?.subscribeAck)
      : undefined);
    message.data?.$case === "subscribeNotAck" && (obj.subscribeNotAck = message.data?.subscribeNotAck
      ? Response_SubscribeNotAck.toJSON(message.data?.subscribeNotAck)
      : undefined);
    message.data?.$case === "snapshotAck" &&
      (obj.snapshotAck = message.data?.snapshotAck
        ? Response_SnapshotAck.toJSON(message.data?.snapshotAck)
        : undefined);
    message.data?.$case === "snapshotNotAck" && (obj.snapshotNotAck = message.data?.snapshotNotAck
      ? Response_SnapshotNotAck.toJSON(message.data?.snapshotNotAck)
      : undefined);
    message.data?.$case === "invalidateGdprAck" && (obj.invalidateGdprAck = message.data?.invalidateGdprAck
      ? Response_InvalidateGdprAck.toJSON(message.data?.invalidateGdprAck)
      : undefined);
    message.data?.$case === "invalidateGdprNotAck" && (obj.invalidateGdprNotAck = message.data?.invalidateGdprNotAck
      ? Response_InvalidateGdprNotAck.toJSON(message.data?.invalidateGdprNotAck)
      : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Response>, I>>(object: I): Response {
    const message = createBaseResponse();
    if (object.data?.$case === "event" && object.data?.event !== undefined && object.data?.event !== null) {
      message.data = { $case: "event", event: PublishEventEnvelope.fromPartial(object.data.event) };
    }
    if (object.data?.$case === "initAck" && object.data?.initAck !== undefined && object.data?.initAck !== null) {
      message.data = { $case: "initAck", initAck: Response_InitAck.fromPartial(object.data.initAck) };
    }
    if (
      object.data?.$case === "initNotAck" && object.data?.initNotAck !== undefined && object.data?.initNotAck !== null
    ) {
      message.data = { $case: "initNotAck", initNotAck: Response_InitNotAck.fromPartial(object.data.initNotAck) };
    }
    if (
      object.data?.$case === "publishAck" && object.data?.publishAck !== undefined && object.data?.publishAck !== null
    ) {
      message.data = { $case: "publishAck", publishAck: Response_PublishAck.fromPartial(object.data.publishAck) };
    }
    if (
      object.data?.$case === "publishNotAck" &&
      object.data?.publishNotAck !== undefined &&
      object.data?.publishNotAck !== null
    ) {
      message.data = {
        $case: "publishNotAck",
        publishNotAck: Response_PublishNotAck.fromPartial(object.data.publishNotAck),
      };
    }
    if (
      object.data?.$case === "subscribeAck" &&
      object.data?.subscribeAck !== undefined &&
      object.data?.subscribeAck !== null
    ) {
      message.data = {
        $case: "subscribeAck",
        subscribeAck: Response_SubscribeAck.fromPartial(object.data.subscribeAck),
      };
    }
    if (
      object.data?.$case === "subscribeNotAck" &&
      object.data?.subscribeNotAck !== undefined &&
      object.data?.subscribeNotAck !== null
    ) {
      message.data = {
        $case: "subscribeNotAck",
        subscribeNotAck: Response_SubscribeNotAck.fromPartial(object.data.subscribeNotAck),
      };
    }
    if (
      object.data?.$case === "snapshotAck" &&
      object.data?.snapshotAck !== undefined &&
      object.data?.snapshotAck !== null
    ) {
      message.data = { $case: "snapshotAck", snapshotAck: Response_SnapshotAck.fromPartial(object.data.snapshotAck) };
    }
    if (
      object.data?.$case === "snapshotNotAck" &&
      object.data?.snapshotNotAck !== undefined &&
      object.data?.snapshotNotAck !== null
    ) {
      message.data = {
        $case: "snapshotNotAck",
        snapshotNotAck: Response_SnapshotNotAck.fromPartial(object.data.snapshotNotAck),
      };
    }
    if (
      object.data?.$case === "invalidateGdprAck" &&
      object.data?.invalidateGdprAck !== undefined &&
      object.data?.invalidateGdprAck !== null
    ) {
      message.data = {
        $case: "invalidateGdprAck",
        invalidateGdprAck: Response_InvalidateGdprAck.fromPartial(object.data.invalidateGdprAck),
      };
    }
    if (
      object.data?.$case === "invalidateGdprNotAck" &&
      object.data?.invalidateGdprNotAck !== undefined &&
      object.data?.invalidateGdprNotAck !== null
    ) {
      message.data = {
        $case: "invalidateGdprNotAck",
        invalidateGdprNotAck: Response_InvalidateGdprNotAck.fromPartial(object.data.invalidateGdprNotAck),
      };
    }
    return message;
  },
};

function createBaseResponse_InitAck(): Response_InitAck {
  return {};
}

export const Response_InitAck = {
  encode(_: Response_InitAck, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Response_InitAck {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponse_InitAck();
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

  fromJSON(_: any): Response_InitAck {
    return {};
  },

  toJSON(_: Response_InitAck): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Response_InitAck>, I>>(_: I): Response_InitAck {
    const message = createBaseResponse_InitAck();
    return message;
  },
};

function createBaseResponse_InitNotAck(): Response_InitNotAck {
  return { reason: "" };
}

export const Response_InitNotAck = {
  encode(message: Response_InitNotAck, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reason !== "") {
      writer.uint32(10).string(message.reason);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Response_InitNotAck {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponse_InitNotAck();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Response_InitNotAck {
    return { reason: isSet(object.reason) ? String(object.reason) : "" };
  },

  toJSON(message: Response_InitNotAck): unknown {
    const obj: any = {};
    message.reason !== undefined && (obj.reason = message.reason);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Response_InitNotAck>, I>>(object: I): Response_InitNotAck {
    const message = createBaseResponse_InitNotAck();
    message.reason = object.reason ?? "";
    return message;
  },
};

function createBaseResponse_PublishAck(): Response_PublishAck {
  return { publishActionId: "" };
}

export const Response_PublishAck = {
  encode(message: Response_PublishAck, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.publishActionId !== "") {
      writer.uint32(10).string(message.publishActionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Response_PublishAck {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponse_PublishAck();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.publishActionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Response_PublishAck {
    return { publishActionId: isSet(object.publishActionId) ? String(object.publishActionId) : "" };
  },

  toJSON(message: Response_PublishAck): unknown {
    const obj: any = {};
    message.publishActionId !== undefined && (obj.publishActionId = message.publishActionId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Response_PublishAck>, I>>(object: I): Response_PublishAck {
    const message = createBaseResponse_PublishAck();
    message.publishActionId = object.publishActionId ?? "";
    return message;
  },
};

function createBaseResponse_PublishNotAck(): Response_PublishNotAck {
  return { publishActionId: "", reason: "" };
}

export const Response_PublishNotAck = {
  encode(message: Response_PublishNotAck, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.publishActionId !== "") {
      writer.uint32(10).string(message.publishActionId);
    }
    if (message.reason !== "") {
      writer.uint32(18).string(message.reason);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Response_PublishNotAck {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponse_PublishNotAck();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.publishActionId = reader.string();
          break;
        case 2:
          message.reason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Response_PublishNotAck {
    return {
      publishActionId: isSet(object.publishActionId) ? String(object.publishActionId) : "",
      reason: isSet(object.reason) ? String(object.reason) : "",
    };
  },

  toJSON(message: Response_PublishNotAck): unknown {
    const obj: any = {};
    message.publishActionId !== undefined && (obj.publishActionId = message.publishActionId);
    message.reason !== undefined && (obj.reason = message.reason);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Response_PublishNotAck>, I>>(object: I): Response_PublishNotAck {
    const message = createBaseResponse_PublishNotAck();
    message.publishActionId = object.publishActionId ?? "";
    message.reason = object.reason ?? "";
    return message;
  },
};

function createBaseResponse_SubscribeAck(): Response_SubscribeAck {
  return {};
}

export const Response_SubscribeAck = {
  encode(_: Response_SubscribeAck, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Response_SubscribeAck {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponse_SubscribeAck();
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

  fromJSON(_: any): Response_SubscribeAck {
    return {};
  },

  toJSON(_: Response_SubscribeAck): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Response_SubscribeAck>, I>>(_: I): Response_SubscribeAck {
    const message = createBaseResponse_SubscribeAck();
    return message;
  },
};

function createBaseResponse_SubscribeNotAck(): Response_SubscribeNotAck {
  return { reason: "" };
}

export const Response_SubscribeNotAck = {
  encode(message: Response_SubscribeNotAck, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reason !== "") {
      writer.uint32(18).string(message.reason);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Response_SubscribeNotAck {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponse_SubscribeNotAck();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.reason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Response_SubscribeNotAck {
    return { reason: isSet(object.reason) ? String(object.reason) : "" };
  },

  toJSON(message: Response_SubscribeNotAck): unknown {
    const obj: any = {};
    message.reason !== undefined && (obj.reason = message.reason);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Response_SubscribeNotAck>, I>>(object: I): Response_SubscribeNotAck {
    const message = createBaseResponse_SubscribeNotAck();
    message.reason = object.reason ?? "";
    return message;
  },
};

function createBaseResponse_SnapshotAck(): Response_SnapshotAck {
  return { topic: "", snapshotId: "", fromTime: "", toTime: "" };
}

export const Response_SnapshotAck = {
  encode(message: Response_SnapshotAck, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.topic !== "") {
      writer.uint32(10).string(message.topic);
    }
    if (message.snapshotId !== "") {
      writer.uint32(18).string(message.snapshotId);
    }
    if (message.fromTime !== "") {
      writer.uint32(26).string(message.fromTime);
    }
    if (message.toTime !== "") {
      writer.uint32(34).string(message.toTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Response_SnapshotAck {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponse_SnapshotAck();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.topic = reader.string();
          break;
        case 2:
          message.snapshotId = reader.string();
          break;
        case 3:
          message.fromTime = reader.string();
          break;
        case 4:
          message.toTime = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Response_SnapshotAck {
    return {
      topic: isSet(object.topic) ? String(object.topic) : "",
      snapshotId: isSet(object.snapshotId) ? String(object.snapshotId) : "",
      fromTime: isSet(object.fromTime) ? String(object.fromTime) : "",
      toTime: isSet(object.toTime) ? String(object.toTime) : "",
    };
  },

  toJSON(message: Response_SnapshotAck): unknown {
    const obj: any = {};
    message.topic !== undefined && (obj.topic = message.topic);
    message.snapshotId !== undefined && (obj.snapshotId = message.snapshotId);
    message.fromTime !== undefined && (obj.fromTime = message.fromTime);
    message.toTime !== undefined && (obj.toTime = message.toTime);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Response_SnapshotAck>, I>>(object: I): Response_SnapshotAck {
    const message = createBaseResponse_SnapshotAck();
    message.topic = object.topic ?? "";
    message.snapshotId = object.snapshotId ?? "";
    message.fromTime = object.fromTime ?? "";
    message.toTime = object.toTime ?? "";
    return message;
  },
};

function createBaseResponse_SnapshotNotAck(): Response_SnapshotNotAck {
  return { topic: "", reason: "" };
}

export const Response_SnapshotNotAck = {
  encode(message: Response_SnapshotNotAck, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.topic !== "") {
      writer.uint32(10).string(message.topic);
    }
    if (message.reason !== "") {
      writer.uint32(18).string(message.reason);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Response_SnapshotNotAck {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponse_SnapshotNotAck();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.topic = reader.string();
          break;
        case 2:
          message.reason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Response_SnapshotNotAck {
    return {
      topic: isSet(object.topic) ? String(object.topic) : "",
      reason: isSet(object.reason) ? String(object.reason) : "",
    };
  },

  toJSON(message: Response_SnapshotNotAck): unknown {
    const obj: any = {};
    message.topic !== undefined && (obj.topic = message.topic);
    message.reason !== undefined && (obj.reason = message.reason);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Response_SnapshotNotAck>, I>>(object: I): Response_SnapshotNotAck {
    const message = createBaseResponse_SnapshotNotAck();
    message.topic = object.topic ?? "";
    message.reason = object.reason ?? "";
    return message;
  },
};

function createBaseResponse_InvalidateGdprAck(): Response_InvalidateGdprAck {
  return { tenantId: "", topic: "", gdprId: "" };
}

export const Response_InvalidateGdprAck = {
  encode(message: Response_InvalidateGdprAck, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Response_InvalidateGdprAck {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponse_InvalidateGdprAck();
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

  fromJSON(object: any): Response_InvalidateGdprAck {
    return {
      tenantId: isSet(object.tenantId) ? String(object.tenantId) : "",
      topic: isSet(object.topic) ? String(object.topic) : "",
      gdprId: isSet(object.gdprId) ? String(object.gdprId) : "",
    };
  },

  toJSON(message: Response_InvalidateGdprAck): unknown {
    const obj: any = {};
    message.tenantId !== undefined && (obj.tenantId = message.tenantId);
    message.topic !== undefined && (obj.topic = message.topic);
    message.gdprId !== undefined && (obj.gdprId = message.gdprId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Response_InvalidateGdprAck>, I>>(object: I): Response_InvalidateGdprAck {
    const message = createBaseResponse_InvalidateGdprAck();
    message.tenantId = object.tenantId ?? "";
    message.topic = object.topic ?? "";
    message.gdprId = object.gdprId ?? "";
    return message;
  },
};

function createBaseResponse_InvalidateGdprNotAck(): Response_InvalidateGdprNotAck {
  return { tenantId: "", topic: "", gdprId: "", reason: "" };
}

export const Response_InvalidateGdprNotAck = {
  encode(message: Response_InvalidateGdprNotAck, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tenantId !== "") {
      writer.uint32(10).string(message.tenantId);
    }
    if (message.topic !== "") {
      writer.uint32(18).string(message.topic);
    }
    if (message.gdprId !== "") {
      writer.uint32(26).string(message.gdprId);
    }
    if (message.reason !== "") {
      writer.uint32(34).string(message.reason);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Response_InvalidateGdprNotAck {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponse_InvalidateGdprNotAck();
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

  fromJSON(object: any): Response_InvalidateGdprNotAck {
    return {
      tenantId: isSet(object.tenantId) ? String(object.tenantId) : "",
      topic: isSet(object.topic) ? String(object.topic) : "",
      gdprId: isSet(object.gdprId) ? String(object.gdprId) : "",
      reason: isSet(object.reason) ? String(object.reason) : "",
    };
  },

  toJSON(message: Response_InvalidateGdprNotAck): unknown {
    const obj: any = {};
    message.tenantId !== undefined && (obj.tenantId = message.tenantId);
    message.topic !== undefined && (obj.topic = message.topic);
    message.gdprId !== undefined && (obj.gdprId = message.gdprId);
    message.reason !== undefined && (obj.reason = message.reason);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Response_InvalidateGdprNotAck>, I>>(
    object: I,
  ): Response_InvalidateGdprNotAck {
    const message = createBaseResponse_InvalidateGdprNotAck();
    message.tenantId = object.tenantId ?? "";
    message.topic = object.topic ?? "";
    message.gdprId = object.gdprId ?? "";
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
