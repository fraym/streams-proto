// source: clientchannel/get_events_from_start.proto
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

goog.exportSymbol('proto.clientchannel.GetEventsFromStartRequest', null, global);
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
proto.clientchannel.GetEventsFromStartRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.clientchannel.GetEventsFromStartRequest.repeatedFields_, null);
};
goog.inherits(proto.clientchannel.GetEventsFromStartRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clientchannel.GetEventsFromStartRequest.displayName = 'proto.clientchannel.GetEventsFromStartRequest';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.clientchannel.GetEventsFromStartRequest.repeatedFields_ = [1,2];



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
proto.clientchannel.GetEventsFromStartRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.clientchannel.GetEventsFromStartRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clientchannel.GetEventsFromStartRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientchannel.GetEventsFromStartRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    includedTopicsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    excludedTopicsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.clientchannel.GetEventsFromStartRequest}
 */
proto.clientchannel.GetEventsFromStartRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clientchannel.GetEventsFromStartRequest;
  return proto.clientchannel.GetEventsFromStartRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clientchannel.GetEventsFromStartRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clientchannel.GetEventsFromStartRequest}
 */
proto.clientchannel.GetEventsFromStartRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addIncludedTopics(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addExcludedTopics(value);
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
proto.clientchannel.GetEventsFromStartRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clientchannel.GetEventsFromStartRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clientchannel.GetEventsFromStartRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clientchannel.GetEventsFromStartRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIncludedTopicsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getExcludedTopicsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * repeated string included_topics = 1;
 * @return {!Array<string>}
 */
proto.clientchannel.GetEventsFromStartRequest.prototype.getIncludedTopicsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.clientchannel.GetEventsFromStartRequest} returns this
 */
proto.clientchannel.GetEventsFromStartRequest.prototype.setIncludedTopicsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.clientchannel.GetEventsFromStartRequest} returns this
 */
proto.clientchannel.GetEventsFromStartRequest.prototype.addIncludedTopics = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clientchannel.GetEventsFromStartRequest} returns this
 */
proto.clientchannel.GetEventsFromStartRequest.prototype.clearIncludedTopicsList = function() {
  return this.setIncludedTopicsList([]);
};


/**
 * repeated string excluded_topics = 2;
 * @return {!Array<string>}
 */
proto.clientchannel.GetEventsFromStartRequest.prototype.getExcludedTopicsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.clientchannel.GetEventsFromStartRequest} returns this
 */
proto.clientchannel.GetEventsFromStartRequest.prototype.setExcludedTopicsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.clientchannel.GetEventsFromStartRequest} returns this
 */
proto.clientchannel.GetEventsFromStartRequest.prototype.addExcludedTopics = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clientchannel.GetEventsFromStartRequest} returns this
 */
proto.clientchannel.GetEventsFromStartRequest.prototype.clearExcludedTopicsList = function() {
  return this.setExcludedTopicsList([]);
};


goog.object.extend(exports, proto.clientchannel);