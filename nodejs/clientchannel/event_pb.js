// source: clientchannel/event.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.Data', null, global);
goog.exportSymbol('proto.Data.GdprMetadata', null, global);
goog.exportSymbol('proto.Data.MetadataCase', null, global);
goog.exportSymbol('proto.Event', null, global);
goog.exportSymbol('proto.EventEnvelope', null, global);
goog.exportSymbol('proto.PublishEventEnvelope', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PublishEventEnvelope = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PublishEventEnvelope, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PublishEventEnvelope.displayName = 'proto.PublishEventEnvelope';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.EventEnvelope = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.EventEnvelope, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.EventEnvelope.displayName = 'proto.EventEnvelope';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Event = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Event, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Event.displayName = 'proto.Event';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Data = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.Data.oneofGroups_);
};
goog.inherits(proto.Data, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Data.displayName = 'proto.Data';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Data.GdprMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Data.GdprMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Data.GdprMetadata.displayName = 'proto.Data.GdprMetadata';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PublishEventEnvelope.prototype.toObject = function(opt_includeInstance) {
  return proto.PublishEventEnvelope.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PublishEventEnvelope} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PublishEventEnvelope.toObject = function(includeInstance, msg) {
  var f, obj = {
    tenantId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    topic: jspb.Message.getFieldWithDefault(msg, 2, ""),
    event: (f = msg.getEvent()) && proto.Event.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PublishEventEnvelope}
 */
proto.PublishEventEnvelope.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PublishEventEnvelope;
  return proto.PublishEventEnvelope.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PublishEventEnvelope} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PublishEventEnvelope}
 */
proto.PublishEventEnvelope.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTenantId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTopic(value);
      break;
    case 3:
      var value = new proto.Event;
      reader.readMessage(value,proto.Event.deserializeBinaryFromReader);
      msg.setEvent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PublishEventEnvelope.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PublishEventEnvelope.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PublishEventEnvelope} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PublishEventEnvelope.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTenantId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTopic();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getEvent();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.Event.serializeBinaryToWriter
    );
  }
};


/**
 * optional string tenant_id = 1;
 * @return {string}
 */
proto.PublishEventEnvelope.prototype.getTenantId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.PublishEventEnvelope} returns this
 */
proto.PublishEventEnvelope.prototype.setTenantId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string topic = 2;
 * @return {string}
 */
proto.PublishEventEnvelope.prototype.getTopic = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.PublishEventEnvelope} returns this
 */
proto.PublishEventEnvelope.prototype.setTopic = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Event event = 3;
 * @return {?proto.Event}
 */
proto.PublishEventEnvelope.prototype.getEvent = function() {
  return /** @type{?proto.Event} */ (
    jspb.Message.getWrapperField(this, proto.Event, 3));
};


/**
 * @param {?proto.Event|undefined} value
 * @return {!proto.PublishEventEnvelope} returns this
*/
proto.PublishEventEnvelope.prototype.setEvent = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.PublishEventEnvelope} returns this
 */
proto.PublishEventEnvelope.prototype.clearEvent = function() {
  return this.setEvent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.PublishEventEnvelope.prototype.hasEvent = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.EventEnvelope.prototype.toObject = function(opt_includeInstance) {
  return proto.EventEnvelope.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.EventEnvelope} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.EventEnvelope.toObject = function(includeInstance, msg) {
  var f, obj = {
    tenantId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    broadcast: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    event: (f = msg.getEvent()) && proto.Event.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.EventEnvelope}
 */
proto.EventEnvelope.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.EventEnvelope;
  return proto.EventEnvelope.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.EventEnvelope} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.EventEnvelope}
 */
proto.EventEnvelope.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTenantId(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBroadcast(value);
      break;
    case 3:
      var value = new proto.Event;
      reader.readMessage(value,proto.Event.deserializeBinaryFromReader);
      msg.setEvent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.EventEnvelope.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.EventEnvelope.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.EventEnvelope} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.EventEnvelope.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTenantId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBroadcast();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getEvent();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.Event.serializeBinaryToWriter
    );
  }
};


/**
 * optional string tenant_id = 1;
 * @return {string}
 */
proto.EventEnvelope.prototype.getTenantId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.EventEnvelope} returns this
 */
proto.EventEnvelope.prototype.setTenantId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool broadcast = 2;
 * @return {boolean}
 */
proto.EventEnvelope.prototype.getBroadcast = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.EventEnvelope} returns this
 */
proto.EventEnvelope.prototype.setBroadcast = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional Event event = 3;
 * @return {?proto.Event}
 */
proto.EventEnvelope.prototype.getEvent = function() {
  return /** @type{?proto.Event} */ (
    jspb.Message.getWrapperField(this, proto.Event, 3));
};


/**
 * @param {?proto.Event|undefined} value
 * @return {!proto.EventEnvelope} returns this
*/
proto.EventEnvelope.prototype.setEvent = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.EventEnvelope} returns this
 */
proto.EventEnvelope.prototype.clearEvent = function() {
  return this.setEvent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.EventEnvelope.prototype.hasEvent = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Event.prototype.toObject = function(opt_includeInstance) {
  return proto.Event.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Event} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Event.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, ""),
    stream: jspb.Message.getFieldWithDefault(msg, 3, ""),
    correlationId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    causationId: jspb.Message.getFieldWithDefault(msg, 5, ""),
    raisedAt: jspb.Message.getFieldWithDefault(msg, 6, ""),
    payloadMap: (f = msg.getPayloadMap()) ? f.toObject(includeInstance, proto.Data.toObject) : [],
    reason: jspb.Message.getFieldWithDefault(msg, 8, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Event}
 */
proto.Event.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Event;
  return proto.Event.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Event} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Event}
 */
proto.Event.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setStream(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCorrelationId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCausationId(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setRaisedAt(value);
      break;
    case 7:
      var value = msg.getPayloadMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.Data.deserializeBinaryFromReader, "", new proto.Data());
         });
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Event.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Event.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Event} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Event.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStream();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCorrelationId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCausationId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getRaisedAt();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getPayloadMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(7, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.Data.serializeBinaryToWriter);
  }
  f = message.getReason();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.Event.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.Event} returns this
 */
proto.Event.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string type = 2;
 * @return {string}
 */
proto.Event.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.Event} returns this
 */
proto.Event.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string stream = 3;
 * @return {string}
 */
proto.Event.prototype.getStream = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.Event} returns this
 */
proto.Event.prototype.setStream = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string correlation_id = 4;
 * @return {string}
 */
proto.Event.prototype.getCorrelationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.Event} returns this
 */
proto.Event.prototype.setCorrelationId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string causation_id = 5;
 * @return {string}
 */
proto.Event.prototype.getCausationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.Event} returns this
 */
proto.Event.prototype.setCausationId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string raised_at = 6;
 * @return {string}
 */
proto.Event.prototype.getRaisedAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.Event} returns this
 */
proto.Event.prototype.setRaisedAt = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * map<string, Data> payload = 7;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.Data>}
 */
proto.Event.prototype.getPayloadMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.Data>} */ (
      jspb.Message.getMapField(this, 7, opt_noLazyCreate,
      proto.Data));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.Event} returns this
 */
proto.Event.prototype.clearPayloadMap = function() {
  this.getPayloadMap().clear();
  return this;};


/**
 * optional string reason = 8;
 * @return {string}
 */
proto.Event.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.Event} returns this
 */
proto.Event.prototype.setReason = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.Data.oneofGroups_ = [[4]];

/**
 * @enum {number}
 */
proto.Data.MetadataCase = {
  METADATA_NOT_SET: 0,
  GDPR: 4
};

/**
 * @return {proto.Data.MetadataCase}
 */
proto.Data.prototype.getMetadataCase = function() {
  return /** @type {proto.Data.MetadataCase} */(jspb.Message.computeOneofCase(this, proto.Data.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Data.prototype.toObject = function(opt_includeInstance) {
  return proto.Data.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Data} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Data.toObject = function(includeInstance, msg) {
  var f, obj = {
    gdpr: (f = msg.getGdpr()) && proto.Data.GdprMetadata.toObject(includeInstance, f),
    value: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Data}
 */
proto.Data.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Data;
  return proto.Data.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Data} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Data}
 */
proto.Data.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 4:
      var value = new proto.Data.GdprMetadata;
      reader.readMessage(value,proto.Data.GdprMetadata.deserializeBinaryFromReader);
      msg.setGdpr(value);
      break;
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Data.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Data.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Data} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Data.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGdpr();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.Data.GdprMetadata.serializeBinaryToWriter
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Data.GdprMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.Data.GdprMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Data.GdprMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Data.GdprMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    pb_default: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Data.GdprMetadata}
 */
proto.Data.GdprMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Data.GdprMetadata;
  return proto.Data.GdprMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Data.GdprMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Data.GdprMetadata}
 */
proto.Data.GdprMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefault(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Data.GdprMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Data.GdprMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Data.GdprMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Data.GdprMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDefault();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string default = 3;
 * @return {string}
 */
proto.Data.GdprMetadata.prototype.getDefault = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.Data.GdprMetadata} returns this
 */
proto.Data.GdprMetadata.prototype.setDefault = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional GdprMetadata gdpr = 4;
 * @return {?proto.Data.GdprMetadata}
 */
proto.Data.prototype.getGdpr = function() {
  return /** @type{?proto.Data.GdprMetadata} */ (
    jspb.Message.getWrapperField(this, proto.Data.GdprMetadata, 4));
};


/**
 * @param {?proto.Data.GdprMetadata|undefined} value
 * @return {!proto.Data} returns this
*/
proto.Data.prototype.setGdpr = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.Data.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Data} returns this
 */
proto.Data.prototype.clearGdpr = function() {
  return this.setGdpr(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Data.prototype.hasGdpr = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string value = 1;
 * @return {string}
 */
proto.Data.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.Data} returns this
 */
proto.Data.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


goog.object.extend(exports, proto);