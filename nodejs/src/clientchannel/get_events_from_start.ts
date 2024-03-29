/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "clientchannel";

export interface GetEventsFromStartRequest {
  includedTopics: string[];
  excludedTopics: string[];
}

function createBaseGetEventsFromStartRequest(): GetEventsFromStartRequest {
  return { includedTopics: [], excludedTopics: [] };
}

export const GetEventsFromStartRequest = {
  encode(message: GetEventsFromStartRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.includedTopics) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.excludedTopics) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetEventsFromStartRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetEventsFromStartRequest();
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

  fromJSON(object: any): GetEventsFromStartRequest {
    return {
      includedTopics: Array.isArray(object?.includedTopics) ? object.includedTopics.map((e: any) => String(e)) : [],
      excludedTopics: Array.isArray(object?.excludedTopics) ? object.excludedTopics.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: GetEventsFromStartRequest): unknown {
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

  create<I extends Exact<DeepPartial<GetEventsFromStartRequest>, I>>(base?: I): GetEventsFromStartRequest {
    return GetEventsFromStartRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetEventsFromStartRequest>, I>>(object: I): GetEventsFromStartRequest {
    const message = createBaseGetEventsFromStartRequest();
    message.includedTopics = object.includedTopics?.map((e) => e) || [];
    message.excludedTopics = object.excludedTopics?.map((e) => e) || [];
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
