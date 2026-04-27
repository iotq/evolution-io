import * as $protobuf from "protobufjs";
import Long = require("long");
/** Properties of a HeartBeat. */
export interface IHeartBeat {

    /** HeartBeat ok */
    ok?: (boolean|null);
}

/** Represents a HeartBeat. */
export class HeartBeat implements IHeartBeat {

    /**
     * Constructs a new HeartBeat.
     * @param [properties] Properties to set
     */
    constructor(properties?: IHeartBeat);

    /** HeartBeat ok. */
    public ok: boolean;

    /**
     * Creates a new HeartBeat instance using the specified properties.
     * @param [properties] Properties to set
     * @returns HeartBeat instance
     */
    public static create(properties?: IHeartBeat): HeartBeat;

    /**
     * Encodes the specified HeartBeat message. Does not implicitly {@link HeartBeat.verify|verify} messages.
     * @param message HeartBeat message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IHeartBeat, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified HeartBeat message, length delimited. Does not implicitly {@link HeartBeat.verify|verify} messages.
     * @param message HeartBeat message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IHeartBeat, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a HeartBeat message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns HeartBeat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): HeartBeat;

    /**
     * Decodes a HeartBeat message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns HeartBeat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): HeartBeat;

    /**
     * Verifies a HeartBeat message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a HeartBeat message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns HeartBeat
     */
    public static fromObject(object: { [k: string]: any }): HeartBeat;

    /**
     * Creates a plain object from a HeartBeat message. Also converts values to other types if specified.
     * @param message HeartBeat
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: HeartBeat, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this HeartBeat to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for HeartBeat
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a MoveContent. */
export interface IMoveContent {

    /** MoveContent x */
    x?: (number|null);

    /** MoveContent y */
    y?: (number|null);
}

/** Represents a MoveContent. */
export class MoveContent implements IMoveContent {

    /**
     * Constructs a new MoveContent.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMoveContent);

    /** MoveContent x. */
    public x: number;

    /** MoveContent y. */
    public y: number;

    /**
     * Creates a new MoveContent instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MoveContent instance
     */
    public static create(properties?: IMoveContent): MoveContent;

    /**
     * Encodes the specified MoveContent message. Does not implicitly {@link MoveContent.verify|verify} messages.
     * @param message MoveContent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMoveContent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified MoveContent message, length delimited. Does not implicitly {@link MoveContent.verify|verify} messages.
     * @param message MoveContent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IMoveContent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MoveContent message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MoveContent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MoveContent;

    /**
     * Decodes a MoveContent message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns MoveContent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MoveContent;

    /**
     * Verifies a MoveContent message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a MoveContent message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns MoveContent
     */
    public static fromObject(object: { [k: string]: any }): MoveContent;

    /**
     * Creates a plain object from a MoveContent message. Also converts values to other types if specified.
     * @param message MoveContent
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: MoveContent, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this MoveContent to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for MoveContent
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ChatContent. */
export interface IChatContent {

    /** ChatContent text */
    text?: (string|null);
}

/** Represents a ChatContent. */
export class ChatContent implements IChatContent {

    /**
     * Constructs a new ChatContent.
     * @param [properties] Properties to set
     */
    constructor(properties?: IChatContent);

    /** ChatContent text. */
    public text: string;

    /**
     * Creates a new ChatContent instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ChatContent instance
     */
    public static create(properties?: IChatContent): ChatContent;

    /**
     * Encodes the specified ChatContent message. Does not implicitly {@link ChatContent.verify|verify} messages.
     * @param message ChatContent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IChatContent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ChatContent message, length delimited. Does not implicitly {@link ChatContent.verify|verify} messages.
     * @param message ChatContent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IChatContent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ChatContent message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ChatContent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ChatContent;

    /**
     * Decodes a ChatContent message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ChatContent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ChatContent;

    /**
     * Verifies a ChatContent message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ChatContent message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ChatContent
     */
    public static fromObject(object: { [k: string]: any }): ChatContent;

    /**
     * Creates a plain object from a ChatContent message. Also converts values to other types if specified.
     * @param message ChatContent
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ChatContent, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ChatContent to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ChatContent
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ClientPacket. */
export interface IClientPacket {

    /** ClientPacket id */
    id?: (number|null);

    /** ClientPacket timestamp */
    timestamp?: (number|Long|null);

    /** ClientPacket sender */
    sender?: (string|null);

    /** ClientPacket heartBeat */
    heartBeat?: (IHeartBeat|null);

    /** ClientPacket move */
    move?: (IMoveContent|null);

    /** ClientPacket chat */
    chat?: (IChatContent|null);
}

/** Represents a ClientPacket. */
export class ClientPacket implements IClientPacket {

    /**
     * Constructs a new ClientPacket.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClientPacket);

    /** ClientPacket id. */
    public id: number;

    /** ClientPacket timestamp. */
    public timestamp: (number|Long);

    /** ClientPacket sender. */
    public sender: string;

    /** ClientPacket heartBeat. */
    public heartBeat?: (IHeartBeat|null);

    /** ClientPacket move. */
    public move?: (IMoveContent|null);

    /** ClientPacket chat. */
    public chat?: (IChatContent|null);

    /** ClientPacket content. */
    public content?: ("heartBeat"|"move"|"chat");

    /**
     * Creates a new ClientPacket instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ClientPacket instance
     */
    public static create(properties?: IClientPacket): ClientPacket;

    /**
     * Encodes the specified ClientPacket message. Does not implicitly {@link ClientPacket.verify|verify} messages.
     * @param message ClientPacket message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IClientPacket, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ClientPacket message, length delimited. Does not implicitly {@link ClientPacket.verify|verify} messages.
     * @param message ClientPacket message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IClientPacket, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ClientPacket message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ClientPacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ClientPacket;

    /**
     * Decodes a ClientPacket message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ClientPacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ClientPacket;

    /**
     * Verifies a ClientPacket message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ClientPacket message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ClientPacket
     */
    public static fromObject(object: { [k: string]: any }): ClientPacket;

    /**
     * Creates a plain object from a ClientPacket message. Also converts values to other types if specified.
     * @param message ClientPacket
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ClientPacket, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ClientPacket to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ClientPacket
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a LoginConent. */
export interface ILoginConent {

    /** LoginConent playerId */
    playerId?: (string|null);
}

/** Represents a LoginConent. */
export class LoginConent implements ILoginConent {

    /**
     * Constructs a new LoginConent.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILoginConent);

    /** LoginConent playerId. */
    public playerId: string;

    /**
     * Creates a new LoginConent instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LoginConent instance
     */
    public static create(properties?: ILoginConent): LoginConent;

    /**
     * Encodes the specified LoginConent message. Does not implicitly {@link LoginConent.verify|verify} messages.
     * @param message LoginConent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILoginConent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LoginConent message, length delimited. Does not implicitly {@link LoginConent.verify|verify} messages.
     * @param message LoginConent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILoginConent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LoginConent message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LoginConent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LoginConent;

    /**
     * Decodes a LoginConent message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LoginConent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LoginConent;

    /**
     * Verifies a LoginConent message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LoginConent message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LoginConent
     */
    public static fromObject(object: { [k: string]: any }): LoginConent;

    /**
     * Creates a plain object from a LoginConent message. Also converts values to other types if specified.
     * @param message LoginConent
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LoginConent, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LoginConent to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for LoginConent
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a PlayerContent. */
export interface IPlayerContent {

    /** PlayerContent id */
    id?: (string|null);

    /** PlayerContent x */
    x?: (number|null);

    /** PlayerContent y */
    y?: (number|null);

    /** PlayerContent rotation */
    rotation?: (number|null);

    /** PlayerContent hp */
    hp?: (number|null);
}

/** Represents a PlayerContent. */
export class PlayerContent implements IPlayerContent {

    /**
     * Constructs a new PlayerContent.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPlayerContent);

    /** PlayerContent id. */
    public id: string;

    /** PlayerContent x. */
    public x: number;

    /** PlayerContent y. */
    public y: number;

    /** PlayerContent rotation. */
    public rotation: number;

    /** PlayerContent hp. */
    public hp: number;

    /**
     * Creates a new PlayerContent instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PlayerContent instance
     */
    public static create(properties?: IPlayerContent): PlayerContent;

    /**
     * Encodes the specified PlayerContent message. Does not implicitly {@link PlayerContent.verify|verify} messages.
     * @param message PlayerContent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPlayerContent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PlayerContent message, length delimited. Does not implicitly {@link PlayerContent.verify|verify} messages.
     * @param message PlayerContent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPlayerContent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PlayerContent message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PlayerContent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PlayerContent;

    /**
     * Decodes a PlayerContent message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PlayerContent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PlayerContent;

    /**
     * Verifies a PlayerContent message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PlayerContent message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PlayerContent
     */
    public static fromObject(object: { [k: string]: any }): PlayerContent;

    /**
     * Creates a plain object from a PlayerContent message. Also converts values to other types if specified.
     * @param message PlayerContent
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PlayerContent, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PlayerContent to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for PlayerContent
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a RealtimeContent. */
export interface IRealtimeContent {

    /** RealtimeContent players */
    players?: (IPlayerContent[]|null);
}

/** Represents a RealtimeContent. */
export class RealtimeContent implements IRealtimeContent {

    /**
     * Constructs a new RealtimeContent.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRealtimeContent);

    /** RealtimeContent players. */
    public players: IPlayerContent[];

    /**
     * Creates a new RealtimeContent instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RealtimeContent instance
     */
    public static create(properties?: IRealtimeContent): RealtimeContent;

    /**
     * Encodes the specified RealtimeContent message. Does not implicitly {@link RealtimeContent.verify|verify} messages.
     * @param message RealtimeContent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRealtimeContent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RealtimeContent message, length delimited. Does not implicitly {@link RealtimeContent.verify|verify} messages.
     * @param message RealtimeContent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRealtimeContent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RealtimeContent message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RealtimeContent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RealtimeContent;

    /**
     * Decodes a RealtimeContent message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RealtimeContent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RealtimeContent;

    /**
     * Verifies a RealtimeContent message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RealtimeContent message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RealtimeContent
     */
    public static fromObject(object: { [k: string]: any }): RealtimeContent;

    /**
     * Creates a plain object from a RealtimeContent message. Also converts values to other types if specified.
     * @param message RealtimeContent
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RealtimeContent, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RealtimeContent to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for RealtimeContent
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of an EnterContent. */
export interface IEnterContent {

    /** EnterContent playerId */
    playerId?: (string|null);
}

/** Represents an EnterContent. */
export class EnterContent implements IEnterContent {

    /**
     * Constructs a new EnterContent.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEnterContent);

    /** EnterContent playerId. */
    public playerId: string;

    /**
     * Creates a new EnterContent instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EnterContent instance
     */
    public static create(properties?: IEnterContent): EnterContent;

    /**
     * Encodes the specified EnterContent message. Does not implicitly {@link EnterContent.verify|verify} messages.
     * @param message EnterContent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEnterContent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified EnterContent message, length delimited. Does not implicitly {@link EnterContent.verify|verify} messages.
     * @param message EnterContent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEnterContent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an EnterContent message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EnterContent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EnterContent;

    /**
     * Decodes an EnterContent message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EnterContent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EnterContent;

    /**
     * Verifies an EnterContent message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an EnterContent message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EnterContent
     */
    public static fromObject(object: { [k: string]: any }): EnterContent;

    /**
     * Creates a plain object from an EnterContent message. Also converts values to other types if specified.
     * @param message EnterContent
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: EnterContent, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this EnterContent to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for EnterContent
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ServerPacket. */
export interface IServerPacket {

    /** ServerPacket id */
    id?: (number|null);

    /** ServerPacket timestamp */
    timestamp?: (number|Long|null);

    /** ServerPacket login */
    login?: (ILoginConent|null);

    /** ServerPacket enter */
    enter?: (IEnterContent|null);

    /** ServerPacket realtime */
    realtime?: (IRealtimeContent|null);
}

/** Represents a ServerPacket. */
export class ServerPacket implements IServerPacket {

    /**
     * Constructs a new ServerPacket.
     * @param [properties] Properties to set
     */
    constructor(properties?: IServerPacket);

    /** ServerPacket id. */
    public id: number;

    /** ServerPacket timestamp. */
    public timestamp: (number|Long);

    /** ServerPacket login. */
    public login?: (ILoginConent|null);

    /** ServerPacket enter. */
    public enter?: (IEnterContent|null);

    /** ServerPacket realtime. */
    public realtime?: (IRealtimeContent|null);

    /** ServerPacket content. */
    public content?: ("login"|"enter"|"realtime");

    /**
     * Creates a new ServerPacket instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ServerPacket instance
     */
    public static create(properties?: IServerPacket): ServerPacket;

    /**
     * Encodes the specified ServerPacket message. Does not implicitly {@link ServerPacket.verify|verify} messages.
     * @param message ServerPacket message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IServerPacket, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ServerPacket message, length delimited. Does not implicitly {@link ServerPacket.verify|verify} messages.
     * @param message ServerPacket message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IServerPacket, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ServerPacket message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ServerPacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerPacket;

    /**
     * Decodes a ServerPacket message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ServerPacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServerPacket;

    /**
     * Verifies a ServerPacket message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ServerPacket message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ServerPacket
     */
    public static fromObject(object: { [k: string]: any }): ServerPacket;

    /**
     * Creates a plain object from a ServerPacket message. Also converts values to other types if specified.
     * @param message ServerPacket
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ServerPacket, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ServerPacket to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ServerPacket
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}
