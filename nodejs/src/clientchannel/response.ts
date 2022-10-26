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
    | { $case: "snapshotStarted"; snapshotStarted: Response_SnapshotStarted }
    | { $case: "snapshotNotStarted"; snapshotNotStarted: Response_SnapshotNotStarted }
    | { $case: "snapshotFinished"; snapshotFinished: Response_SnapshotFinished }
    | { $case: "snapshotNotFinished"; snapshotNotFinished: Response_SnapshotNotFinished }
    | { $case: "invalidateGdprAck"; invalidateGdprAck: Response_InvalidateGdprAck }
    | { $case: "invalidateGdprNotAck"; invalidateGdprNotAck: Response_InvalidateGdprNotAck }
    | { $case: "introduceGdprOnFieldStarted"; introduceGdprOnFieldStarted: Response_IntroduceGdprOnFieldStarted }
    | {
      $case: "introduceGdprOnFieldNotStarted";
      introduceGdprOnFieldNotStarted: Response_IntroduceGdprOnFieldNotStarted;
    }
    | { $case: "introduceGdprOnFieldFinished"; introduceGdprOnFieldFinished: Response_IntroduceGdprOnFieldFinished }
    | {
      $case: "introduceGdprOnFieldNotFinished";
      introduceGdprOnFieldNotFinished: Response_IntroduceGdprOnFieldNotFinished;
    };
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

export interface Response_SnapshotStarted {
  topic: string;
  snapshotId: string;
  fromTime: string;
  toTime: string;
}

export interface Response_SnapshotNotStarted {
  topic: string;
  reason: string;
}

export interface Response_SnapshotFinished {
  topic: string;
  snapshotId: string;
  fromTime: string;
  toTime: string;
}

export interface Response_SnapshotNotFinished {
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

export interface Response_IntroduceGdprOnFieldStarted {
  topic: string;
}

export interface Response_IntroduceGdprOnFieldNotStarted {
  topic: string;
}

export interface Response_IntroduceGdprOnFieldFinished {
  topic: string;
}

export interface Response_IntroduceGdprOnFieldNotFinished {
  topic: string;
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
    if (message.data?.$case === "snapshotStarted") {
      Response_SnapshotStarted.encode(message.data.snapshotStarted, writer.uint32(66).fork()).ldelim();
    }
    if (message.data?.$case === "snapshotNotStarted") {
      Response_SnapshotNotStarted.encode(message.data.snapshotNotStarted, writer.uint32(74).fork()).ldelim();
    }
    if (message.data?.$case === "snapshotFinished") {
      Response_SnapshotFinished.encode(message.data.snapshotFinished, writer.uint32(82).fork()).ldelim();
    }
    if (message.data?.$case === "snapshotNotFinished") {
      Response_SnapshotNotFinished.encode(message.data.snapshotNotFinished, writer.uint32(90).fork()).ldelim();
    }
    if (message.data?.$case === "invalidateGdprAck") {
      Response_InvalidateGdprAck.encode(message.data.invalidateGdprAck, writer.uint32(98).fork()).ldelim();
    }
    if (message.data?.$case === "invalidateGdprNotAck") {
      Response_InvalidateGdprNotAck.encode(message.data.invalidateGdprNotAck, writer.uint32(106).fork()).ldelim();
    }
    if (message.data?.$case === "introduceGdprOnFieldStarted") {
      Response_IntroduceGdprOnFieldStarted.encode(message.data.introduceGdprOnFieldStarted, writer.uint32(114).fork())
        .ldelim();
    }
    if (message.data?.$case === "introduceGdprOnFieldNotStarted") {
      Response_IntroduceGdprOnFieldNotStarted.encode(
        message.data.introduceGdprOnFieldNotStarted,
        writer.uint32(122).fork(),
      ).ldelim();
    }
    if (message.data?.$case === "introduceGdprOnFieldFinished") {
      Response_IntroduceGdprOnFieldFinished.encode(message.data.introduceGdprOnFieldFinished, writer.uint32(130).fork())
        .ldelim();
    }
    if (message.data?.$case === "introduceGdprOnFieldNotFinished") {
      Response_IntroduceGdprOnFieldNotFinished.encode(
        message.data.introduceGdprOnFieldNotFinished,
        writer.uint32(138).fork(),
      ).ldelim();
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
          message.data = {
            $case: "snapshotStarted",
            snapshotStarted: Response_SnapshotStarted.decode(reader, reader.uint32()),
          };
          break;
        case 9:
          message.data = {
            $case: "snapshotNotStarted",
            snapshotNotStarted: Response_SnapshotNotStarted.decode(reader, reader.uint32()),
          };
          break;
        case 10:
          message.data = {
            $case: "snapshotFinished",
            snapshotFinished: Response_SnapshotFinished.decode(reader, reader.uint32()),
          };
          break;
        case 11:
          message.data = {
            $case: "snapshotNotFinished",
            snapshotNotFinished: Response_SnapshotNotFinished.decode(reader, reader.uint32()),
          };
          break;
        case 12:
          message.data = {
            $case: "invalidateGdprAck",
            invalidateGdprAck: Response_InvalidateGdprAck.decode(reader, reader.uint32()),
          };
          break;
        case 13:
          message.data = {
            $case: "invalidateGdprNotAck",
            invalidateGdprNotAck: Response_InvalidateGdprNotAck.decode(reader, reader.uint32()),
          };
          break;
        case 14:
          message.data = {
            $case: "introduceGdprOnFieldStarted",
            introduceGdprOnFieldStarted: Response_IntroduceGdprOnFieldStarted.decode(reader, reader.uint32()),
          };
          break;
        case 15:
          message.data = {
            $case: "introduceGdprOnFieldNotStarted",
            introduceGdprOnFieldNotStarted: Response_IntroduceGdprOnFieldNotStarted.decode(reader, reader.uint32()),
          };
          break;
        case 16:
          message.data = {
            $case: "introduceGdprOnFieldFinished",
            introduceGdprOnFieldFinished: Response_IntroduceGdprOnFieldFinished.decode(reader, reader.uint32()),
          };
          break;
        case 17:
          message.data = {
            $case: "introduceGdprOnFieldNotFinished",
            introduceGdprOnFieldNotFinished: Response_IntroduceGdprOnFieldNotFinished.decode(reader, reader.uint32()),
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
        : isSet(object.snapshotStarted)
        ? { $case: "snapshotStarted", snapshotStarted: Response_SnapshotStarted.fromJSON(object.snapshotStarted) }
        : isSet(object.snapshotNotStarted)
        ? {
          $case: "snapshotNotStarted",
          snapshotNotStarted: Response_SnapshotNotStarted.fromJSON(object.snapshotNotStarted),
        }
        : isSet(object.snapshotFinished)
        ? { $case: "snapshotFinished", snapshotFinished: Response_SnapshotFinished.fromJSON(object.snapshotFinished) }
        : isSet(object.snapshotNotFinished)
        ? {
          $case: "snapshotNotFinished",
          snapshotNotFinished: Response_SnapshotNotFinished.fromJSON(object.snapshotNotFinished),
        }
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
        : isSet(object.introduceGdprOnFieldStarted)
        ? {
          $case: "introduceGdprOnFieldStarted",
          introduceGdprOnFieldStarted: Response_IntroduceGdprOnFieldStarted.fromJSON(
            object.introduceGdprOnFieldStarted,
          ),
        }
        : isSet(object.introduceGdprOnFieldNotStarted)
        ? {
          $case: "introduceGdprOnFieldNotStarted",
          introduceGdprOnFieldNotStarted: Response_IntroduceGdprOnFieldNotStarted.fromJSON(
            object.introduceGdprOnFieldNotStarted,
          ),
        }
        : isSet(object.introduceGdprOnFieldFinished)
        ? {
          $case: "introduceGdprOnFieldFinished",
          introduceGdprOnFieldFinished: Response_IntroduceGdprOnFieldFinished.fromJSON(
            object.introduceGdprOnFieldFinished,
          ),
        }
        : isSet(object.introduceGdprOnFieldNotFinished)
        ? {
          $case: "introduceGdprOnFieldNotFinished",
          introduceGdprOnFieldNotFinished: Response_IntroduceGdprOnFieldNotFinished.fromJSON(
            object.introduceGdprOnFieldNotFinished,
          ),
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
    message.data?.$case === "snapshotStarted" && (obj.snapshotStarted = message.data?.snapshotStarted
      ? Response_SnapshotStarted.toJSON(message.data?.snapshotStarted)
      : undefined);
    message.data?.$case === "snapshotNotStarted" && (obj.snapshotNotStarted = message.data?.snapshotNotStarted
      ? Response_SnapshotNotStarted.toJSON(message.data?.snapshotNotStarted)
      : undefined);
    message.data?.$case === "snapshotFinished" && (obj.snapshotFinished = message.data?.snapshotFinished
      ? Response_SnapshotFinished.toJSON(message.data?.snapshotFinished)
      : undefined);
    message.data?.$case === "snapshotNotFinished" && (obj.snapshotNotFinished = message.data?.snapshotNotFinished
      ? Response_SnapshotNotFinished.toJSON(message.data?.snapshotNotFinished)
      : undefined);
    message.data?.$case === "invalidateGdprAck" && (obj.invalidateGdprAck = message.data?.invalidateGdprAck
      ? Response_InvalidateGdprAck.toJSON(message.data?.invalidateGdprAck)
      : undefined);
    message.data?.$case === "invalidateGdprNotAck" && (obj.invalidateGdprNotAck = message.data?.invalidateGdprNotAck
      ? Response_InvalidateGdprNotAck.toJSON(message.data?.invalidateGdprNotAck)
      : undefined);
    message.data?.$case === "introduceGdprOnFieldStarted" &&
      (obj.introduceGdprOnFieldStarted = message.data?.introduceGdprOnFieldStarted
        ? Response_IntroduceGdprOnFieldStarted.toJSON(message.data?.introduceGdprOnFieldStarted)
        : undefined);
    message.data?.$case === "introduceGdprOnFieldNotStarted" &&
      (obj.introduceGdprOnFieldNotStarted = message.data?.introduceGdprOnFieldNotStarted
        ? Response_IntroduceGdprOnFieldNotStarted.toJSON(message.data?.introduceGdprOnFieldNotStarted)
        : undefined);
    message.data?.$case === "introduceGdprOnFieldFinished" &&
      (obj.introduceGdprOnFieldFinished = message.data?.introduceGdprOnFieldFinished
        ? Response_IntroduceGdprOnFieldFinished.toJSON(message.data?.introduceGdprOnFieldFinished)
        : undefined);
    message.data?.$case === "introduceGdprOnFieldNotFinished" &&
      (obj.introduceGdprOnFieldNotFinished = message.data?.introduceGdprOnFieldNotFinished
        ? Response_IntroduceGdprOnFieldNotFinished.toJSON(message.data?.introduceGdprOnFieldNotFinished)
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
      object.data?.$case === "snapshotStarted" &&
      object.data?.snapshotStarted !== undefined &&
      object.data?.snapshotStarted !== null
    ) {
      message.data = {
        $case: "snapshotStarted",
        snapshotStarted: Response_SnapshotStarted.fromPartial(object.data.snapshotStarted),
      };
    }
    if (
      object.data?.$case === "snapshotNotStarted" &&
      object.data?.snapshotNotStarted !== undefined &&
      object.data?.snapshotNotStarted !== null
    ) {
      message.data = {
        $case: "snapshotNotStarted",
        snapshotNotStarted: Response_SnapshotNotStarted.fromPartial(object.data.snapshotNotStarted),
      };
    }
    if (
      object.data?.$case === "snapshotFinished" &&
      object.data?.snapshotFinished !== undefined &&
      object.data?.snapshotFinished !== null
    ) {
      message.data = {
        $case: "snapshotFinished",
        snapshotFinished: Response_SnapshotFinished.fromPartial(object.data.snapshotFinished),
      };
    }
    if (
      object.data?.$case === "snapshotNotFinished" &&
      object.data?.snapshotNotFinished !== undefined &&
      object.data?.snapshotNotFinished !== null
    ) {
      message.data = {
        $case: "snapshotNotFinished",
        snapshotNotFinished: Response_SnapshotNotFinished.fromPartial(object.data.snapshotNotFinished),
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
    if (
      object.data?.$case === "introduceGdprOnFieldStarted" &&
      object.data?.introduceGdprOnFieldStarted !== undefined &&
      object.data?.introduceGdprOnFieldStarted !== null
    ) {
      message.data = {
        $case: "introduceGdprOnFieldStarted",
        introduceGdprOnFieldStarted: Response_IntroduceGdprOnFieldStarted.fromPartial(
          object.data.introduceGdprOnFieldStarted,
        ),
      };
    }
    if (
      object.data?.$case === "introduceGdprOnFieldNotStarted" &&
      object.data?.introduceGdprOnFieldNotStarted !== undefined &&
      object.data?.introduceGdprOnFieldNotStarted !== null
    ) {
      message.data = {
        $case: "introduceGdprOnFieldNotStarted",
        introduceGdprOnFieldNotStarted: Response_IntroduceGdprOnFieldNotStarted.fromPartial(
          object.data.introduceGdprOnFieldNotStarted,
        ),
      };
    }
    if (
      object.data?.$case === "introduceGdprOnFieldFinished" &&
      object.data?.introduceGdprOnFieldFinished !== undefined &&
      object.data?.introduceGdprOnFieldFinished !== null
    ) {
      message.data = {
        $case: "introduceGdprOnFieldFinished",
        introduceGdprOnFieldFinished: Response_IntroduceGdprOnFieldFinished.fromPartial(
          object.data.introduceGdprOnFieldFinished,
        ),
      };
    }
    if (
      object.data?.$case === "introduceGdprOnFieldNotFinished" &&
      object.data?.introduceGdprOnFieldNotFinished !== undefined &&
      object.data?.introduceGdprOnFieldNotFinished !== null
    ) {
      message.data = {
        $case: "introduceGdprOnFieldNotFinished",
        introduceGdprOnFieldNotFinished: Response_IntroduceGdprOnFieldNotFinished.fromPartial(
          object.data.introduceGdprOnFieldNotFinished,
        ),
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

function createBaseResponse_SnapshotStarted(): Response_SnapshotStarted {
  return { topic: "", snapshotId: "", fromTime: "", toTime: "" };
}

export const Response_SnapshotStarted = {
  encode(message: Response_SnapshotStarted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Response_SnapshotStarted {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponse_SnapshotStarted();
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

  fromJSON(object: any): Response_SnapshotStarted {
    return {
      topic: isSet(object.topic) ? String(object.topic) : "",
      snapshotId: isSet(object.snapshotId) ? String(object.snapshotId) : "",
      fromTime: isSet(object.fromTime) ? String(object.fromTime) : "",
      toTime: isSet(object.toTime) ? String(object.toTime) : "",
    };
  },

  toJSON(message: Response_SnapshotStarted): unknown {
    const obj: any = {};
    message.topic !== undefined && (obj.topic = message.topic);
    message.snapshotId !== undefined && (obj.snapshotId = message.snapshotId);
    message.fromTime !== undefined && (obj.fromTime = message.fromTime);
    message.toTime !== undefined && (obj.toTime = message.toTime);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Response_SnapshotStarted>, I>>(object: I): Response_SnapshotStarted {
    const message = createBaseResponse_SnapshotStarted();
    message.topic = object.topic ?? "";
    message.snapshotId = object.snapshotId ?? "";
    message.fromTime = object.fromTime ?? "";
    message.toTime = object.toTime ?? "";
    return message;
  },
};

function createBaseResponse_SnapshotNotStarted(): Response_SnapshotNotStarted {
  return { topic: "", reason: "" };
}

export const Response_SnapshotNotStarted = {
  encode(message: Response_SnapshotNotStarted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.topic !== "") {
      writer.uint32(10).string(message.topic);
    }
    if (message.reason !== "") {
      writer.uint32(18).string(message.reason);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Response_SnapshotNotStarted {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponse_SnapshotNotStarted();
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

  fromJSON(object: any): Response_SnapshotNotStarted {
    return {
      topic: isSet(object.topic) ? String(object.topic) : "",
      reason: isSet(object.reason) ? String(object.reason) : "",
    };
  },

  toJSON(message: Response_SnapshotNotStarted): unknown {
    const obj: any = {};
    message.topic !== undefined && (obj.topic = message.topic);
    message.reason !== undefined && (obj.reason = message.reason);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Response_SnapshotNotStarted>, I>>(object: I): Response_SnapshotNotStarted {
    const message = createBaseResponse_SnapshotNotStarted();
    message.topic = object.topic ?? "";
    message.reason = object.reason ?? "";
    return message;
  },
};

function createBaseResponse_SnapshotFinished(): Response_SnapshotFinished {
  return { topic: "", snapshotId: "", fromTime: "", toTime: "" };
}

export const Response_SnapshotFinished = {
  encode(message: Response_SnapshotFinished, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Response_SnapshotFinished {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponse_SnapshotFinished();
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

  fromJSON(object: any): Response_SnapshotFinished {
    return {
      topic: isSet(object.topic) ? String(object.topic) : "",
      snapshotId: isSet(object.snapshotId) ? String(object.snapshotId) : "",
      fromTime: isSet(object.fromTime) ? String(object.fromTime) : "",
      toTime: isSet(object.toTime) ? String(object.toTime) : "",
    };
  },

  toJSON(message: Response_SnapshotFinished): unknown {
    const obj: any = {};
    message.topic !== undefined && (obj.topic = message.topic);
    message.snapshotId !== undefined && (obj.snapshotId = message.snapshotId);
    message.fromTime !== undefined && (obj.fromTime = message.fromTime);
    message.toTime !== undefined && (obj.toTime = message.toTime);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Response_SnapshotFinished>, I>>(object: I): Response_SnapshotFinished {
    const message = createBaseResponse_SnapshotFinished();
    message.topic = object.topic ?? "";
    message.snapshotId = object.snapshotId ?? "";
    message.fromTime = object.fromTime ?? "";
    message.toTime = object.toTime ?? "";
    return message;
  },
};

function createBaseResponse_SnapshotNotFinished(): Response_SnapshotNotFinished {
  return { topic: "", reason: "" };
}

export const Response_SnapshotNotFinished = {
  encode(message: Response_SnapshotNotFinished, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.topic !== "") {
      writer.uint32(10).string(message.topic);
    }
    if (message.reason !== "") {
      writer.uint32(18).string(message.reason);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Response_SnapshotNotFinished {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponse_SnapshotNotFinished();
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

  fromJSON(object: any): Response_SnapshotNotFinished {
    return {
      topic: isSet(object.topic) ? String(object.topic) : "",
      reason: isSet(object.reason) ? String(object.reason) : "",
    };
  },

  toJSON(message: Response_SnapshotNotFinished): unknown {
    const obj: any = {};
    message.topic !== undefined && (obj.topic = message.topic);
    message.reason !== undefined && (obj.reason = message.reason);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Response_SnapshotNotFinished>, I>>(object: I): Response_SnapshotNotFinished {
    const message = createBaseResponse_SnapshotNotFinished();
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

function createBaseResponse_IntroduceGdprOnFieldStarted(): Response_IntroduceGdprOnFieldStarted {
  return { topic: "" };
}

export const Response_IntroduceGdprOnFieldStarted = {
  encode(message: Response_IntroduceGdprOnFieldStarted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.topic !== "") {
      writer.uint32(10).string(message.topic);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Response_IntroduceGdprOnFieldStarted {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponse_IntroduceGdprOnFieldStarted();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.topic = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Response_IntroduceGdprOnFieldStarted {
    return { topic: isSet(object.topic) ? String(object.topic) : "" };
  },

  toJSON(message: Response_IntroduceGdprOnFieldStarted): unknown {
    const obj: any = {};
    message.topic !== undefined && (obj.topic = message.topic);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Response_IntroduceGdprOnFieldStarted>, I>>(
    object: I,
  ): Response_IntroduceGdprOnFieldStarted {
    const message = createBaseResponse_IntroduceGdprOnFieldStarted();
    message.topic = object.topic ?? "";
    return message;
  },
};

function createBaseResponse_IntroduceGdprOnFieldNotStarted(): Response_IntroduceGdprOnFieldNotStarted {
  return { topic: "" };
}

export const Response_IntroduceGdprOnFieldNotStarted = {
  encode(message: Response_IntroduceGdprOnFieldNotStarted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.topic !== "") {
      writer.uint32(10).string(message.topic);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Response_IntroduceGdprOnFieldNotStarted {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponse_IntroduceGdprOnFieldNotStarted();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.topic = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Response_IntroduceGdprOnFieldNotStarted {
    return { topic: isSet(object.topic) ? String(object.topic) : "" };
  },

  toJSON(message: Response_IntroduceGdprOnFieldNotStarted): unknown {
    const obj: any = {};
    message.topic !== undefined && (obj.topic = message.topic);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Response_IntroduceGdprOnFieldNotStarted>, I>>(
    object: I,
  ): Response_IntroduceGdprOnFieldNotStarted {
    const message = createBaseResponse_IntroduceGdprOnFieldNotStarted();
    message.topic = object.topic ?? "";
    return message;
  },
};

function createBaseResponse_IntroduceGdprOnFieldFinished(): Response_IntroduceGdprOnFieldFinished {
  return { topic: "" };
}

export const Response_IntroduceGdprOnFieldFinished = {
  encode(message: Response_IntroduceGdprOnFieldFinished, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.topic !== "") {
      writer.uint32(10).string(message.topic);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Response_IntroduceGdprOnFieldFinished {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponse_IntroduceGdprOnFieldFinished();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.topic = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Response_IntroduceGdprOnFieldFinished {
    return { topic: isSet(object.topic) ? String(object.topic) : "" };
  },

  toJSON(message: Response_IntroduceGdprOnFieldFinished): unknown {
    const obj: any = {};
    message.topic !== undefined && (obj.topic = message.topic);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Response_IntroduceGdprOnFieldFinished>, I>>(
    object: I,
  ): Response_IntroduceGdprOnFieldFinished {
    const message = createBaseResponse_IntroduceGdprOnFieldFinished();
    message.topic = object.topic ?? "";
    return message;
  },
};

function createBaseResponse_IntroduceGdprOnFieldNotFinished(): Response_IntroduceGdprOnFieldNotFinished {
  return { topic: "" };
}

export const Response_IntroduceGdprOnFieldNotFinished = {
  encode(message: Response_IntroduceGdprOnFieldNotFinished, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.topic !== "") {
      writer.uint32(10).string(message.topic);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Response_IntroduceGdprOnFieldNotFinished {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponse_IntroduceGdprOnFieldNotFinished();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.topic = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Response_IntroduceGdprOnFieldNotFinished {
    return { topic: isSet(object.topic) ? String(object.topic) : "" };
  },

  toJSON(message: Response_IntroduceGdprOnFieldNotFinished): unknown {
    const obj: any = {};
    message.topic !== undefined && (obj.topic = message.topic);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Response_IntroduceGdprOnFieldNotFinished>, I>>(
    object: I,
  ): Response_IntroduceGdprOnFieldNotFinished {
    const message = createBaseResponse_IntroduceGdprOnFieldNotFinished();
    message.topic = object.topic ?? "";
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
