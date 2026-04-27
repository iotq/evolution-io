/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.HeartBeat = (function() {

    /**
     * Properties of a HeartBeat.
     * @exports IHeartBeat
     * @interface IHeartBeat
     * @property {boolean|null} [ok] HeartBeat ok
     */

    /**
     * Constructs a new HeartBeat.
     * @exports HeartBeat
     * @classdesc Represents a HeartBeat.
     * @implements IHeartBeat
     * @constructor
     * @param {IHeartBeat=} [properties] Properties to set
     */
    function HeartBeat(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * HeartBeat ok.
     * @member {boolean} ok
     * @memberof HeartBeat
     * @instance
     */
    HeartBeat.prototype.ok = false;

    /**
     * Creates a new HeartBeat instance using the specified properties.
     * @function create
     * @memberof HeartBeat
     * @static
     * @param {IHeartBeat=} [properties] Properties to set
     * @returns {HeartBeat} HeartBeat instance
     */
    HeartBeat.create = function create(properties) {
        return new HeartBeat(properties);
    };

    /**
     * Encodes the specified HeartBeat message. Does not implicitly {@link HeartBeat.verify|verify} messages.
     * @function encode
     * @memberof HeartBeat
     * @static
     * @param {IHeartBeat} message HeartBeat message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    HeartBeat.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.ok != null && Object.hasOwnProperty.call(message, "ok"))
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.ok);
        return writer;
    };

    /**
     * Encodes the specified HeartBeat message, length delimited. Does not implicitly {@link HeartBeat.verify|verify} messages.
     * @function encodeDelimited
     * @memberof HeartBeat
     * @static
     * @param {IHeartBeat} message HeartBeat message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    HeartBeat.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a HeartBeat message from the specified reader or buffer.
     * @function decode
     * @memberof HeartBeat
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {HeartBeat} HeartBeat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    HeartBeat.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.HeartBeat();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.ok = reader.bool();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a HeartBeat message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof HeartBeat
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {HeartBeat} HeartBeat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    HeartBeat.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a HeartBeat message.
     * @function verify
     * @memberof HeartBeat
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    HeartBeat.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.ok != null && message.hasOwnProperty("ok"))
            if (typeof message.ok !== "boolean")
                return "ok: boolean expected";
        return null;
    };

    /**
     * Creates a HeartBeat message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof HeartBeat
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {HeartBeat} HeartBeat
     */
    HeartBeat.fromObject = function fromObject(object) {
        if (object instanceof $root.HeartBeat)
            return object;
        var message = new $root.HeartBeat();
        if (object.ok != null)
            message.ok = Boolean(object.ok);
        return message;
    };

    /**
     * Creates a plain object from a HeartBeat message. Also converts values to other types if specified.
     * @function toObject
     * @memberof HeartBeat
     * @static
     * @param {HeartBeat} message HeartBeat
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    HeartBeat.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.ok = false;
        if (message.ok != null && message.hasOwnProperty("ok"))
            object.ok = message.ok;
        return object;
    };

    /**
     * Converts this HeartBeat to JSON.
     * @function toJSON
     * @memberof HeartBeat
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    HeartBeat.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for HeartBeat
     * @function getTypeUrl
     * @memberof HeartBeat
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    HeartBeat.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/HeartBeat";
    };

    return HeartBeat;
})();

$root.MoveContent = (function() {

    /**
     * Properties of a MoveContent.
     * @exports IMoveContent
     * @interface IMoveContent
     * @property {number|null} [x] MoveContent x
     * @property {number|null} [y] MoveContent y
     */

    /**
     * Constructs a new MoveContent.
     * @exports MoveContent
     * @classdesc Represents a MoveContent.
     * @implements IMoveContent
     * @constructor
     * @param {IMoveContent=} [properties] Properties to set
     */
    function MoveContent(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * MoveContent x.
     * @member {number} x
     * @memberof MoveContent
     * @instance
     */
    MoveContent.prototype.x = 0;

    /**
     * MoveContent y.
     * @member {number} y
     * @memberof MoveContent
     * @instance
     */
    MoveContent.prototype.y = 0;

    /**
     * Creates a new MoveContent instance using the specified properties.
     * @function create
     * @memberof MoveContent
     * @static
     * @param {IMoveContent=} [properties] Properties to set
     * @returns {MoveContent} MoveContent instance
     */
    MoveContent.create = function create(properties) {
        return new MoveContent(properties);
    };

    /**
     * Encodes the specified MoveContent message. Does not implicitly {@link MoveContent.verify|verify} messages.
     * @function encode
     * @memberof MoveContent
     * @static
     * @param {IMoveContent} message MoveContent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MoveContent.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.x != null && Object.hasOwnProperty.call(message, "x"))
            writer.uint32(/* id 1, wireType 5 =*/13).float(message.x);
        if (message.y != null && Object.hasOwnProperty.call(message, "y"))
            writer.uint32(/* id 2, wireType 5 =*/21).float(message.y);
        return writer;
    };

    /**
     * Encodes the specified MoveContent message, length delimited. Does not implicitly {@link MoveContent.verify|verify} messages.
     * @function encodeDelimited
     * @memberof MoveContent
     * @static
     * @param {IMoveContent} message MoveContent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MoveContent.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a MoveContent message from the specified reader or buffer.
     * @function decode
     * @memberof MoveContent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {MoveContent} MoveContent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MoveContent.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MoveContent();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.x = reader.float();
                    break;
                }
            case 2: {
                    message.y = reader.float();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a MoveContent message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof MoveContent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {MoveContent} MoveContent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MoveContent.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a MoveContent message.
     * @function verify
     * @memberof MoveContent
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    MoveContent.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.x != null && message.hasOwnProperty("x"))
            if (typeof message.x !== "number")
                return "x: number expected";
        if (message.y != null && message.hasOwnProperty("y"))
            if (typeof message.y !== "number")
                return "y: number expected";
        return null;
    };

    /**
     * Creates a MoveContent message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof MoveContent
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {MoveContent} MoveContent
     */
    MoveContent.fromObject = function fromObject(object) {
        if (object instanceof $root.MoveContent)
            return object;
        var message = new $root.MoveContent();
        if (object.x != null)
            message.x = Number(object.x);
        if (object.y != null)
            message.y = Number(object.y);
        return message;
    };

    /**
     * Creates a plain object from a MoveContent message. Also converts values to other types if specified.
     * @function toObject
     * @memberof MoveContent
     * @static
     * @param {MoveContent} message MoveContent
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    MoveContent.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.x = 0;
            object.y = 0;
        }
        if (message.x != null && message.hasOwnProperty("x"))
            object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
        if (message.y != null && message.hasOwnProperty("y"))
            object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
        return object;
    };

    /**
     * Converts this MoveContent to JSON.
     * @function toJSON
     * @memberof MoveContent
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    MoveContent.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for MoveContent
     * @function getTypeUrl
     * @memberof MoveContent
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    MoveContent.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/MoveContent";
    };

    return MoveContent;
})();

$root.ChatContent = (function() {

    /**
     * Properties of a ChatContent.
     * @exports IChatContent
     * @interface IChatContent
     * @property {string|null} [text] ChatContent text
     */

    /**
     * Constructs a new ChatContent.
     * @exports ChatContent
     * @classdesc Represents a ChatContent.
     * @implements IChatContent
     * @constructor
     * @param {IChatContent=} [properties] Properties to set
     */
    function ChatContent(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ChatContent text.
     * @member {string} text
     * @memberof ChatContent
     * @instance
     */
    ChatContent.prototype.text = "";

    /**
     * Creates a new ChatContent instance using the specified properties.
     * @function create
     * @memberof ChatContent
     * @static
     * @param {IChatContent=} [properties] Properties to set
     * @returns {ChatContent} ChatContent instance
     */
    ChatContent.create = function create(properties) {
        return new ChatContent(properties);
    };

    /**
     * Encodes the specified ChatContent message. Does not implicitly {@link ChatContent.verify|verify} messages.
     * @function encode
     * @memberof ChatContent
     * @static
     * @param {IChatContent} message ChatContent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ChatContent.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.text != null && Object.hasOwnProperty.call(message, "text"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.text);
        return writer;
    };

    /**
     * Encodes the specified ChatContent message, length delimited. Does not implicitly {@link ChatContent.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ChatContent
     * @static
     * @param {IChatContent} message ChatContent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ChatContent.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ChatContent message from the specified reader or buffer.
     * @function decode
     * @memberof ChatContent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ChatContent} ChatContent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ChatContent.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ChatContent();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.text = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ChatContent message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ChatContent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ChatContent} ChatContent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ChatContent.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ChatContent message.
     * @function verify
     * @memberof ChatContent
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ChatContent.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.text != null && message.hasOwnProperty("text"))
            if (!$util.isString(message.text))
                return "text: string expected";
        return null;
    };

    /**
     * Creates a ChatContent message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ChatContent
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ChatContent} ChatContent
     */
    ChatContent.fromObject = function fromObject(object) {
        if (object instanceof $root.ChatContent)
            return object;
        var message = new $root.ChatContent();
        if (object.text != null)
            message.text = String(object.text);
        return message;
    };

    /**
     * Creates a plain object from a ChatContent message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ChatContent
     * @static
     * @param {ChatContent} message ChatContent
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ChatContent.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.text = "";
        if (message.text != null && message.hasOwnProperty("text"))
            object.text = message.text;
        return object;
    };

    /**
     * Converts this ChatContent to JSON.
     * @function toJSON
     * @memberof ChatContent
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ChatContent.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ChatContent
     * @function getTypeUrl
     * @memberof ChatContent
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ChatContent.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ChatContent";
    };

    return ChatContent;
})();

$root.ClientPacket = (function() {

    /**
     * Properties of a ClientPacket.
     * @exports IClientPacket
     * @interface IClientPacket
     * @property {number|null} [id] ClientPacket id
     * @property {number|Long|null} [timestamp] ClientPacket timestamp
     * @property {string|null} [sender] ClientPacket sender
     * @property {IHeartBeat|null} [heartBeat] ClientPacket heartBeat
     * @property {IMoveContent|null} [move] ClientPacket move
     * @property {IChatContent|null} [chat] ClientPacket chat
     */

    /**
     * Constructs a new ClientPacket.
     * @exports ClientPacket
     * @classdesc Represents a ClientPacket.
     * @implements IClientPacket
     * @constructor
     * @param {IClientPacket=} [properties] Properties to set
     */
    function ClientPacket(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ClientPacket id.
     * @member {number} id
     * @memberof ClientPacket
     * @instance
     */
    ClientPacket.prototype.id = 0;

    /**
     * ClientPacket timestamp.
     * @member {number|Long} timestamp
     * @memberof ClientPacket
     * @instance
     */
    ClientPacket.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * ClientPacket sender.
     * @member {string} sender
     * @memberof ClientPacket
     * @instance
     */
    ClientPacket.prototype.sender = "";

    /**
     * ClientPacket heartBeat.
     * @member {IHeartBeat|null|undefined} heartBeat
     * @memberof ClientPacket
     * @instance
     */
    ClientPacket.prototype.heartBeat = null;

    /**
     * ClientPacket move.
     * @member {IMoveContent|null|undefined} move
     * @memberof ClientPacket
     * @instance
     */
    ClientPacket.prototype.move = null;

    /**
     * ClientPacket chat.
     * @member {IChatContent|null|undefined} chat
     * @memberof ClientPacket
     * @instance
     */
    ClientPacket.prototype.chat = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * ClientPacket content.
     * @member {"heartBeat"|"move"|"chat"|undefined} content
     * @memberof ClientPacket
     * @instance
     */
    Object.defineProperty(ClientPacket.prototype, "content", {
        get: $util.oneOfGetter($oneOfFields = ["heartBeat", "move", "chat"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new ClientPacket instance using the specified properties.
     * @function create
     * @memberof ClientPacket
     * @static
     * @param {IClientPacket=} [properties] Properties to set
     * @returns {ClientPacket} ClientPacket instance
     */
    ClientPacket.create = function create(properties) {
        return new ClientPacket(properties);
    };

    /**
     * Encodes the specified ClientPacket message. Does not implicitly {@link ClientPacket.verify|verify} messages.
     * @function encode
     * @memberof ClientPacket
     * @static
     * @param {IClientPacket} message ClientPacket message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClientPacket.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.timestamp);
        if (message.sender != null && Object.hasOwnProperty.call(message, "sender"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.sender);
        if (message.heartBeat != null && Object.hasOwnProperty.call(message, "heartBeat"))
            $root.HeartBeat.encode(message.heartBeat, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.move != null && Object.hasOwnProperty.call(message, "move"))
            $root.MoveContent.encode(message.move, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.chat != null && Object.hasOwnProperty.call(message, "chat"))
            $root.ChatContent.encode(message.chat, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ClientPacket message, length delimited. Does not implicitly {@link ClientPacket.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ClientPacket
     * @static
     * @param {IClientPacket} message ClientPacket message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClientPacket.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ClientPacket message from the specified reader or buffer.
     * @function decode
     * @memberof ClientPacket
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ClientPacket} ClientPacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClientPacket.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ClientPacket();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.id = reader.int32();
                    break;
                }
            case 2: {
                    message.timestamp = reader.int64();
                    break;
                }
            case 3: {
                    message.sender = reader.string();
                    break;
                }
            case 4: {
                    message.heartBeat = $root.HeartBeat.decode(reader, reader.uint32());
                    break;
                }
            case 5: {
                    message.move = $root.MoveContent.decode(reader, reader.uint32());
                    break;
                }
            case 6: {
                    message.chat = $root.ChatContent.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ClientPacket message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ClientPacket
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ClientPacket} ClientPacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClientPacket.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ClientPacket message.
     * @function verify
     * @memberof ClientPacket
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ClientPacket.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                return "timestamp: integer|Long expected";
        if (message.sender != null && message.hasOwnProperty("sender"))
            if (!$util.isString(message.sender))
                return "sender: string expected";
        if (message.heartBeat != null && message.hasOwnProperty("heartBeat")) {
            properties.content = 1;
            {
                var error = $root.HeartBeat.verify(message.heartBeat);
                if (error)
                    return "heartBeat." + error;
            }
        }
        if (message.move != null && message.hasOwnProperty("move")) {
            if (properties.content === 1)
                return "content: multiple values";
            properties.content = 1;
            {
                var error = $root.MoveContent.verify(message.move);
                if (error)
                    return "move." + error;
            }
        }
        if (message.chat != null && message.hasOwnProperty("chat")) {
            if (properties.content === 1)
                return "content: multiple values";
            properties.content = 1;
            {
                var error = $root.ChatContent.verify(message.chat);
                if (error)
                    return "chat." + error;
            }
        }
        return null;
    };

    /**
     * Creates a ClientPacket message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ClientPacket
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ClientPacket} ClientPacket
     */
    ClientPacket.fromObject = function fromObject(object) {
        if (object instanceof $root.ClientPacket)
            return object;
        var message = new $root.ClientPacket();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.timestamp != null)
            if ($util.Long)
                (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
            else if (typeof object.timestamp === "string")
                message.timestamp = parseInt(object.timestamp, 10);
            else if (typeof object.timestamp === "number")
                message.timestamp = object.timestamp;
            else if (typeof object.timestamp === "object")
                message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
        if (object.sender != null)
            message.sender = String(object.sender);
        if (object.heartBeat != null) {
            if (typeof object.heartBeat !== "object")
                throw TypeError(".ClientPacket.heartBeat: object expected");
            message.heartBeat = $root.HeartBeat.fromObject(object.heartBeat);
        }
        if (object.move != null) {
            if (typeof object.move !== "object")
                throw TypeError(".ClientPacket.move: object expected");
            message.move = $root.MoveContent.fromObject(object.move);
        }
        if (object.chat != null) {
            if (typeof object.chat !== "object")
                throw TypeError(".ClientPacket.chat: object expected");
            message.chat = $root.ChatContent.fromObject(object.chat);
        }
        return message;
    };

    /**
     * Creates a plain object from a ClientPacket message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ClientPacket
     * @static
     * @param {ClientPacket} message ClientPacket
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ClientPacket.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.timestamp = options.longs === String ? "0" : 0;
            object.sender = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            if (typeof message.timestamp === "number")
                object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
            else
                object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
        if (message.sender != null && message.hasOwnProperty("sender"))
            object.sender = message.sender;
        if (message.heartBeat != null && message.hasOwnProperty("heartBeat")) {
            object.heartBeat = $root.HeartBeat.toObject(message.heartBeat, options);
            if (options.oneofs)
                object.content = "heartBeat";
        }
        if (message.move != null && message.hasOwnProperty("move")) {
            object.move = $root.MoveContent.toObject(message.move, options);
            if (options.oneofs)
                object.content = "move";
        }
        if (message.chat != null && message.hasOwnProperty("chat")) {
            object.chat = $root.ChatContent.toObject(message.chat, options);
            if (options.oneofs)
                object.content = "chat";
        }
        return object;
    };

    /**
     * Converts this ClientPacket to JSON.
     * @function toJSON
     * @memberof ClientPacket
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ClientPacket.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ClientPacket
     * @function getTypeUrl
     * @memberof ClientPacket
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ClientPacket.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ClientPacket";
    };

    return ClientPacket;
})();

$root.LoginConent = (function() {

    /**
     * Properties of a LoginConent.
     * @exports ILoginConent
     * @interface ILoginConent
     * @property {string|null} [playerId] LoginConent playerId
     */

    /**
     * Constructs a new LoginConent.
     * @exports LoginConent
     * @classdesc Represents a LoginConent.
     * @implements ILoginConent
     * @constructor
     * @param {ILoginConent=} [properties] Properties to set
     */
    function LoginConent(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * LoginConent playerId.
     * @member {string} playerId
     * @memberof LoginConent
     * @instance
     */
    LoginConent.prototype.playerId = "";

    /**
     * Creates a new LoginConent instance using the specified properties.
     * @function create
     * @memberof LoginConent
     * @static
     * @param {ILoginConent=} [properties] Properties to set
     * @returns {LoginConent} LoginConent instance
     */
    LoginConent.create = function create(properties) {
        return new LoginConent(properties);
    };

    /**
     * Encodes the specified LoginConent message. Does not implicitly {@link LoginConent.verify|verify} messages.
     * @function encode
     * @memberof LoginConent
     * @static
     * @param {ILoginConent} message LoginConent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LoginConent.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.playerId);
        return writer;
    };

    /**
     * Encodes the specified LoginConent message, length delimited. Does not implicitly {@link LoginConent.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LoginConent
     * @static
     * @param {ILoginConent} message LoginConent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LoginConent.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LoginConent message from the specified reader or buffer.
     * @function decode
     * @memberof LoginConent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LoginConent} LoginConent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LoginConent.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LoginConent();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.playerId = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a LoginConent message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LoginConent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LoginConent} LoginConent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LoginConent.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LoginConent message.
     * @function verify
     * @memberof LoginConent
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LoginConent.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.playerId != null && message.hasOwnProperty("playerId"))
            if (!$util.isString(message.playerId))
                return "playerId: string expected";
        return null;
    };

    /**
     * Creates a LoginConent message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LoginConent
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LoginConent} LoginConent
     */
    LoginConent.fromObject = function fromObject(object) {
        if (object instanceof $root.LoginConent)
            return object;
        var message = new $root.LoginConent();
        if (object.playerId != null)
            message.playerId = String(object.playerId);
        return message;
    };

    /**
     * Creates a plain object from a LoginConent message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LoginConent
     * @static
     * @param {LoginConent} message LoginConent
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LoginConent.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.playerId = "";
        if (message.playerId != null && message.hasOwnProperty("playerId"))
            object.playerId = message.playerId;
        return object;
    };

    /**
     * Converts this LoginConent to JSON.
     * @function toJSON
     * @memberof LoginConent
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LoginConent.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for LoginConent
     * @function getTypeUrl
     * @memberof LoginConent
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    LoginConent.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/LoginConent";
    };

    return LoginConent;
})();

$root.PlayerContent = (function() {

    /**
     * Properties of a PlayerContent.
     * @exports IPlayerContent
     * @interface IPlayerContent
     * @property {string|null} [id] PlayerContent id
     * @property {number|null} [x] PlayerContent x
     * @property {number|null} [y] PlayerContent y
     * @property {number|null} [rotation] PlayerContent rotation
     * @property {number|null} [hp] PlayerContent hp
     */

    /**
     * Constructs a new PlayerContent.
     * @exports PlayerContent
     * @classdesc Represents a PlayerContent.
     * @implements IPlayerContent
     * @constructor
     * @param {IPlayerContent=} [properties] Properties to set
     */
    function PlayerContent(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PlayerContent id.
     * @member {string} id
     * @memberof PlayerContent
     * @instance
     */
    PlayerContent.prototype.id = "";

    /**
     * PlayerContent x.
     * @member {number} x
     * @memberof PlayerContent
     * @instance
     */
    PlayerContent.prototype.x = 0;

    /**
     * PlayerContent y.
     * @member {number} y
     * @memberof PlayerContent
     * @instance
     */
    PlayerContent.prototype.y = 0;

    /**
     * PlayerContent rotation.
     * @member {number} rotation
     * @memberof PlayerContent
     * @instance
     */
    PlayerContent.prototype.rotation = 0;

    /**
     * PlayerContent hp.
     * @member {number} hp
     * @memberof PlayerContent
     * @instance
     */
    PlayerContent.prototype.hp = 0;

    /**
     * Creates a new PlayerContent instance using the specified properties.
     * @function create
     * @memberof PlayerContent
     * @static
     * @param {IPlayerContent=} [properties] Properties to set
     * @returns {PlayerContent} PlayerContent instance
     */
    PlayerContent.create = function create(properties) {
        return new PlayerContent(properties);
    };

    /**
     * Encodes the specified PlayerContent message. Does not implicitly {@link PlayerContent.verify|verify} messages.
     * @function encode
     * @memberof PlayerContent
     * @static
     * @param {IPlayerContent} message PlayerContent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PlayerContent.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.x != null && Object.hasOwnProperty.call(message, "x"))
            writer.uint32(/* id 2, wireType 5 =*/21).float(message.x);
        if (message.y != null && Object.hasOwnProperty.call(message, "y"))
            writer.uint32(/* id 3, wireType 5 =*/29).float(message.y);
        if (message.rotation != null && Object.hasOwnProperty.call(message, "rotation"))
            writer.uint32(/* id 4, wireType 5 =*/37).float(message.rotation);
        if (message.hp != null && Object.hasOwnProperty.call(message, "hp"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.hp);
        return writer;
    };

    /**
     * Encodes the specified PlayerContent message, length delimited. Does not implicitly {@link PlayerContent.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PlayerContent
     * @static
     * @param {IPlayerContent} message PlayerContent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PlayerContent.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PlayerContent message from the specified reader or buffer.
     * @function decode
     * @memberof PlayerContent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PlayerContent} PlayerContent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PlayerContent.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PlayerContent();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.id = reader.string();
                    break;
                }
            case 2: {
                    message.x = reader.float();
                    break;
                }
            case 3: {
                    message.y = reader.float();
                    break;
                }
            case 4: {
                    message.rotation = reader.float();
                    break;
                }
            case 5: {
                    message.hp = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a PlayerContent message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PlayerContent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PlayerContent} PlayerContent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PlayerContent.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PlayerContent message.
     * @function verify
     * @memberof PlayerContent
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PlayerContent.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.x != null && message.hasOwnProperty("x"))
            if (typeof message.x !== "number")
                return "x: number expected";
        if (message.y != null && message.hasOwnProperty("y"))
            if (typeof message.y !== "number")
                return "y: number expected";
        if (message.rotation != null && message.hasOwnProperty("rotation"))
            if (typeof message.rotation !== "number")
                return "rotation: number expected";
        if (message.hp != null && message.hasOwnProperty("hp"))
            if (!$util.isInteger(message.hp))
                return "hp: integer expected";
        return null;
    };

    /**
     * Creates a PlayerContent message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PlayerContent
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PlayerContent} PlayerContent
     */
    PlayerContent.fromObject = function fromObject(object) {
        if (object instanceof $root.PlayerContent)
            return object;
        var message = new $root.PlayerContent();
        if (object.id != null)
            message.id = String(object.id);
        if (object.x != null)
            message.x = Number(object.x);
        if (object.y != null)
            message.y = Number(object.y);
        if (object.rotation != null)
            message.rotation = Number(object.rotation);
        if (object.hp != null)
            message.hp = object.hp | 0;
        return message;
    };

    /**
     * Creates a plain object from a PlayerContent message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PlayerContent
     * @static
     * @param {PlayerContent} message PlayerContent
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PlayerContent.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = "";
            object.x = 0;
            object.y = 0;
            object.rotation = 0;
            object.hp = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.x != null && message.hasOwnProperty("x"))
            object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
        if (message.y != null && message.hasOwnProperty("y"))
            object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
        if (message.rotation != null && message.hasOwnProperty("rotation"))
            object.rotation = options.json && !isFinite(message.rotation) ? String(message.rotation) : message.rotation;
        if (message.hp != null && message.hasOwnProperty("hp"))
            object.hp = message.hp;
        return object;
    };

    /**
     * Converts this PlayerContent to JSON.
     * @function toJSON
     * @memberof PlayerContent
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PlayerContent.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for PlayerContent
     * @function getTypeUrl
     * @memberof PlayerContent
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    PlayerContent.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/PlayerContent";
    };

    return PlayerContent;
})();

$root.RealtimeContent = (function() {

    /**
     * Properties of a RealtimeContent.
     * @exports IRealtimeContent
     * @interface IRealtimeContent
     * @property {Array.<IPlayerContent>|null} [players] RealtimeContent players
     */

    /**
     * Constructs a new RealtimeContent.
     * @exports RealtimeContent
     * @classdesc Represents a RealtimeContent.
     * @implements IRealtimeContent
     * @constructor
     * @param {IRealtimeContent=} [properties] Properties to set
     */
    function RealtimeContent(properties) {
        this.players = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RealtimeContent players.
     * @member {Array.<IPlayerContent>} players
     * @memberof RealtimeContent
     * @instance
     */
    RealtimeContent.prototype.players = $util.emptyArray;

    /**
     * Creates a new RealtimeContent instance using the specified properties.
     * @function create
     * @memberof RealtimeContent
     * @static
     * @param {IRealtimeContent=} [properties] Properties to set
     * @returns {RealtimeContent} RealtimeContent instance
     */
    RealtimeContent.create = function create(properties) {
        return new RealtimeContent(properties);
    };

    /**
     * Encodes the specified RealtimeContent message. Does not implicitly {@link RealtimeContent.verify|verify} messages.
     * @function encode
     * @memberof RealtimeContent
     * @static
     * @param {IRealtimeContent} message RealtimeContent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RealtimeContent.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.players != null && message.players.length)
            for (var i = 0; i < message.players.length; ++i)
                $root.PlayerContent.encode(message.players[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified RealtimeContent message, length delimited. Does not implicitly {@link RealtimeContent.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RealtimeContent
     * @static
     * @param {IRealtimeContent} message RealtimeContent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RealtimeContent.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RealtimeContent message from the specified reader or buffer.
     * @function decode
     * @memberof RealtimeContent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RealtimeContent} RealtimeContent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RealtimeContent.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RealtimeContent();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    if (!(message.players && message.players.length))
                        message.players = [];
                    message.players.push($root.PlayerContent.decode(reader, reader.uint32()));
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a RealtimeContent message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RealtimeContent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RealtimeContent} RealtimeContent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RealtimeContent.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RealtimeContent message.
     * @function verify
     * @memberof RealtimeContent
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RealtimeContent.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.players != null && message.hasOwnProperty("players")) {
            if (!Array.isArray(message.players))
                return "players: array expected";
            for (var i = 0; i < message.players.length; ++i) {
                var error = $root.PlayerContent.verify(message.players[i]);
                if (error)
                    return "players." + error;
            }
        }
        return null;
    };

    /**
     * Creates a RealtimeContent message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RealtimeContent
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RealtimeContent} RealtimeContent
     */
    RealtimeContent.fromObject = function fromObject(object) {
        if (object instanceof $root.RealtimeContent)
            return object;
        var message = new $root.RealtimeContent();
        if (object.players) {
            if (!Array.isArray(object.players))
                throw TypeError(".RealtimeContent.players: array expected");
            message.players = [];
            for (var i = 0; i < object.players.length; ++i) {
                if (typeof object.players[i] !== "object")
                    throw TypeError(".RealtimeContent.players: object expected");
                message.players[i] = $root.PlayerContent.fromObject(object.players[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a RealtimeContent message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RealtimeContent
     * @static
     * @param {RealtimeContent} message RealtimeContent
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RealtimeContent.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.players = [];
        if (message.players && message.players.length) {
            object.players = [];
            for (var j = 0; j < message.players.length; ++j)
                object.players[j] = $root.PlayerContent.toObject(message.players[j], options);
        }
        return object;
    };

    /**
     * Converts this RealtimeContent to JSON.
     * @function toJSON
     * @memberof RealtimeContent
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RealtimeContent.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for RealtimeContent
     * @function getTypeUrl
     * @memberof RealtimeContent
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    RealtimeContent.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/RealtimeContent";
    };

    return RealtimeContent;
})();

$root.EnterContent = (function() {

    /**
     * Properties of an EnterContent.
     * @exports IEnterContent
     * @interface IEnterContent
     * @property {string|null} [playerId] EnterContent playerId
     */

    /**
     * Constructs a new EnterContent.
     * @exports EnterContent
     * @classdesc Represents an EnterContent.
     * @implements IEnterContent
     * @constructor
     * @param {IEnterContent=} [properties] Properties to set
     */
    function EnterContent(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EnterContent playerId.
     * @member {string} playerId
     * @memberof EnterContent
     * @instance
     */
    EnterContent.prototype.playerId = "";

    /**
     * Creates a new EnterContent instance using the specified properties.
     * @function create
     * @memberof EnterContent
     * @static
     * @param {IEnterContent=} [properties] Properties to set
     * @returns {EnterContent} EnterContent instance
     */
    EnterContent.create = function create(properties) {
        return new EnterContent(properties);
    };

    /**
     * Encodes the specified EnterContent message. Does not implicitly {@link EnterContent.verify|verify} messages.
     * @function encode
     * @memberof EnterContent
     * @static
     * @param {IEnterContent} message EnterContent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EnterContent.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.playerId);
        return writer;
    };

    /**
     * Encodes the specified EnterContent message, length delimited. Does not implicitly {@link EnterContent.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EnterContent
     * @static
     * @param {IEnterContent} message EnterContent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EnterContent.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EnterContent message from the specified reader or buffer.
     * @function decode
     * @memberof EnterContent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EnterContent} EnterContent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EnterContent.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EnterContent();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.playerId = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an EnterContent message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EnterContent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EnterContent} EnterContent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EnterContent.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EnterContent message.
     * @function verify
     * @memberof EnterContent
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EnterContent.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.playerId != null && message.hasOwnProperty("playerId"))
            if (!$util.isString(message.playerId))
                return "playerId: string expected";
        return null;
    };

    /**
     * Creates an EnterContent message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EnterContent
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EnterContent} EnterContent
     */
    EnterContent.fromObject = function fromObject(object) {
        if (object instanceof $root.EnterContent)
            return object;
        var message = new $root.EnterContent();
        if (object.playerId != null)
            message.playerId = String(object.playerId);
        return message;
    };

    /**
     * Creates a plain object from an EnterContent message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EnterContent
     * @static
     * @param {EnterContent} message EnterContent
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EnterContent.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.playerId = "";
        if (message.playerId != null && message.hasOwnProperty("playerId"))
            object.playerId = message.playerId;
        return object;
    };

    /**
     * Converts this EnterContent to JSON.
     * @function toJSON
     * @memberof EnterContent
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EnterContent.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for EnterContent
     * @function getTypeUrl
     * @memberof EnterContent
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    EnterContent.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/EnterContent";
    };

    return EnterContent;
})();

$root.ServerPacket = (function() {

    /**
     * Properties of a ServerPacket.
     * @exports IServerPacket
     * @interface IServerPacket
     * @property {number|null} [id] ServerPacket id
     * @property {number|Long|null} [timestamp] ServerPacket timestamp
     * @property {ILoginConent|null} [login] ServerPacket login
     * @property {IEnterContent|null} [enter] ServerPacket enter
     * @property {IRealtimeContent|null} [realtime] ServerPacket realtime
     */

    /**
     * Constructs a new ServerPacket.
     * @exports ServerPacket
     * @classdesc Represents a ServerPacket.
     * @implements IServerPacket
     * @constructor
     * @param {IServerPacket=} [properties] Properties to set
     */
    function ServerPacket(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ServerPacket id.
     * @member {number} id
     * @memberof ServerPacket
     * @instance
     */
    ServerPacket.prototype.id = 0;

    /**
     * ServerPacket timestamp.
     * @member {number|Long} timestamp
     * @memberof ServerPacket
     * @instance
     */
    ServerPacket.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * ServerPacket login.
     * @member {ILoginConent|null|undefined} login
     * @memberof ServerPacket
     * @instance
     */
    ServerPacket.prototype.login = null;

    /**
     * ServerPacket enter.
     * @member {IEnterContent|null|undefined} enter
     * @memberof ServerPacket
     * @instance
     */
    ServerPacket.prototype.enter = null;

    /**
     * ServerPacket realtime.
     * @member {IRealtimeContent|null|undefined} realtime
     * @memberof ServerPacket
     * @instance
     */
    ServerPacket.prototype.realtime = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * ServerPacket content.
     * @member {"login"|"enter"|"realtime"|undefined} content
     * @memberof ServerPacket
     * @instance
     */
    Object.defineProperty(ServerPacket.prototype, "content", {
        get: $util.oneOfGetter($oneOfFields = ["login", "enter", "realtime"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new ServerPacket instance using the specified properties.
     * @function create
     * @memberof ServerPacket
     * @static
     * @param {IServerPacket=} [properties] Properties to set
     * @returns {ServerPacket} ServerPacket instance
     */
    ServerPacket.create = function create(properties) {
        return new ServerPacket(properties);
    };

    /**
     * Encodes the specified ServerPacket message. Does not implicitly {@link ServerPacket.verify|verify} messages.
     * @function encode
     * @memberof ServerPacket
     * @static
     * @param {IServerPacket} message ServerPacket message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ServerPacket.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.timestamp);
        if (message.login != null && Object.hasOwnProperty.call(message, "login"))
            $root.LoginConent.encode(message.login, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.enter != null && Object.hasOwnProperty.call(message, "enter"))
            $root.EnterContent.encode(message.enter, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.realtime != null && Object.hasOwnProperty.call(message, "realtime"))
            $root.RealtimeContent.encode(message.realtime, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ServerPacket message, length delimited. Does not implicitly {@link ServerPacket.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ServerPacket
     * @static
     * @param {IServerPacket} message ServerPacket message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ServerPacket.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ServerPacket message from the specified reader or buffer.
     * @function decode
     * @memberof ServerPacket
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ServerPacket} ServerPacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ServerPacket.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ServerPacket();
        while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.id = reader.int32();
                    break;
                }
            case 2: {
                    message.timestamp = reader.int64();
                    break;
                }
            case 3: {
                    message.login = $root.LoginConent.decode(reader, reader.uint32());
                    break;
                }
            case 4: {
                    message.enter = $root.EnterContent.decode(reader, reader.uint32());
                    break;
                }
            case 5: {
                    message.realtime = $root.RealtimeContent.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ServerPacket message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ServerPacket
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ServerPacket} ServerPacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ServerPacket.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ServerPacket message.
     * @function verify
     * @memberof ServerPacket
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ServerPacket.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                return "timestamp: integer|Long expected";
        if (message.login != null && message.hasOwnProperty("login")) {
            properties.content = 1;
            {
                var error = $root.LoginConent.verify(message.login);
                if (error)
                    return "login." + error;
            }
        }
        if (message.enter != null && message.hasOwnProperty("enter")) {
            if (properties.content === 1)
                return "content: multiple values";
            properties.content = 1;
            {
                var error = $root.EnterContent.verify(message.enter);
                if (error)
                    return "enter." + error;
            }
        }
        if (message.realtime != null && message.hasOwnProperty("realtime")) {
            if (properties.content === 1)
                return "content: multiple values";
            properties.content = 1;
            {
                var error = $root.RealtimeContent.verify(message.realtime);
                if (error)
                    return "realtime." + error;
            }
        }
        return null;
    };

    /**
     * Creates a ServerPacket message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ServerPacket
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ServerPacket} ServerPacket
     */
    ServerPacket.fromObject = function fromObject(object) {
        if (object instanceof $root.ServerPacket)
            return object;
        var message = new $root.ServerPacket();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.timestamp != null)
            if ($util.Long)
                (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
            else if (typeof object.timestamp === "string")
                message.timestamp = parseInt(object.timestamp, 10);
            else if (typeof object.timestamp === "number")
                message.timestamp = object.timestamp;
            else if (typeof object.timestamp === "object")
                message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
        if (object.login != null) {
            if (typeof object.login !== "object")
                throw TypeError(".ServerPacket.login: object expected");
            message.login = $root.LoginConent.fromObject(object.login);
        }
        if (object.enter != null) {
            if (typeof object.enter !== "object")
                throw TypeError(".ServerPacket.enter: object expected");
            message.enter = $root.EnterContent.fromObject(object.enter);
        }
        if (object.realtime != null) {
            if (typeof object.realtime !== "object")
                throw TypeError(".ServerPacket.realtime: object expected");
            message.realtime = $root.RealtimeContent.fromObject(object.realtime);
        }
        return message;
    };

    /**
     * Creates a plain object from a ServerPacket message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ServerPacket
     * @static
     * @param {ServerPacket} message ServerPacket
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ServerPacket.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.timestamp = options.longs === String ? "0" : 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            if (typeof message.timestamp === "number")
                object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
            else
                object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
        if (message.login != null && message.hasOwnProperty("login")) {
            object.login = $root.LoginConent.toObject(message.login, options);
            if (options.oneofs)
                object.content = "login";
        }
        if (message.enter != null && message.hasOwnProperty("enter")) {
            object.enter = $root.EnterContent.toObject(message.enter, options);
            if (options.oneofs)
                object.content = "enter";
        }
        if (message.realtime != null && message.hasOwnProperty("realtime")) {
            object.realtime = $root.RealtimeContent.toObject(message.realtime, options);
            if (options.oneofs)
                object.content = "realtime";
        }
        return object;
    };

    /**
     * Converts this ServerPacket to JSON.
     * @function toJSON
     * @memberof ServerPacket
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ServerPacket.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ServerPacket
     * @function getTypeUrl
     * @memberof ServerPacket
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ServerPacket.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ServerPacket";
    };

    return ServerPacket;
})();

module.exports = $root;
