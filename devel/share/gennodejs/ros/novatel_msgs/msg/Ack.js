// Auto-generated. Do not edit!

// (in-package novatel_msgs.msg)


"use strict";

const _serializer = _ros_msg_utils.Serialize;
const _arraySerializer = _serializer.Array;
const _deserializer = _ros_msg_utils.Deserialize;
const _arrayDeserializer = _deserializer.Array;
const _finder = _ros_msg_utils.Find;
const _getByteLength = _ros_msg_utils.getByteLength;

//-----------------------------------------------------------

class Ack {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.transaction = null;
      this.id = null;
      this.response_code = null;
      this.params_status = null;
      this.error_parameter_name = null;
    }
    else {
      if (initObj.hasOwnProperty('transaction')) {
        this.transaction = initObj.transaction
      }
      else {
        this.transaction = 0;
      }
      if (initObj.hasOwnProperty('id')) {
        this.id = initObj.id
      }
      else {
        this.id = 0;
      }
      if (initObj.hasOwnProperty('response_code')) {
        this.response_code = initObj.response_code
      }
      else {
        this.response_code = 0;
      }
      if (initObj.hasOwnProperty('params_status')) {
        this.params_status = initObj.params_status
      }
      else {
        this.params_status = 0;
      }
      if (initObj.hasOwnProperty('error_parameter_name')) {
        this.error_parameter_name = initObj.error_parameter_name
      }
      else {
        this.error_parameter_name = new Array(32).fill(0);
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type Ack
    // Serialize message field [transaction]
    bufferOffset = _serializer.uint16(obj.transaction, buffer, bufferOffset);
    // Serialize message field [id]
    bufferOffset = _serializer.uint16(obj.id, buffer, bufferOffset);
    // Serialize message field [response_code]
    bufferOffset = _serializer.uint16(obj.response_code, buffer, bufferOffset);
    // Serialize message field [params_status]
    bufferOffset = _serializer.uint8(obj.params_status, buffer, bufferOffset);
    // Check that the constant length array field [error_parameter_name] has the right length
    if (obj.error_parameter_name.length !== 32) {
      throw new Error('Unable to serialize array field error_parameter_name - length must be 32')
    }
    // Serialize message field [error_parameter_name]
    bufferOffset = _arraySerializer.uint8(obj.error_parameter_name, buffer, bufferOffset, 32);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type Ack
    let len;
    let data = new Ack(null);
    // Deserialize message field [transaction]
    data.transaction = _deserializer.uint16(buffer, bufferOffset);
    // Deserialize message field [id]
    data.id = _deserializer.uint16(buffer, bufferOffset);
    // Deserialize message field [response_code]
    data.response_code = _deserializer.uint16(buffer, bufferOffset);
    // Deserialize message field [params_status]
    data.params_status = _deserializer.uint8(buffer, bufferOffset);
    // Deserialize message field [error_parameter_name]
    data.error_parameter_name = _arrayDeserializer.uint8(buffer, bufferOffset, 32)
    return data;
  }

  static getMessageSize(object) {
    return 39;
  }

  static datatype() {
    // Returns string type for a message object
    return 'novatel_msgs/Ack';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'f84607dc6beaf1cb6772d23af7221bdf';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    uint16 transaction
    uint16 id
    
    uint16 RESPONSE_NOT_APPLICABLE=0
    uint16 RESPONSE_ACCEPTED=1
    uint16 RESPONSE_ACCEPTED_TOO_LONG=2
    uint16 RESPONSE_ACCEPTED_TOO_SHORT=3
    uint16 RESPONSE_PARAM_ERROR=4
    uint16 RESPONSE_NOT_APPLICABLE_IN_CURRENT_STATE=5
    uint16 RESPONSE_DATA_NOT_AVAILABLE=6
    uint16 RESPONSE_MESSAGE_START_ERROR=7
    uint16 RESPONSE_MESSAGE_END_ERROR=8
    uint16 RESPONSE_BYTE_COUNT_ERROR=9
    uint16 RESPONSE_CHECKSUM_ERROR=10
    uint16 response_code
    
    uint8 PARAMS_NO_CHANGE=0
    uint8 PARAMS_CHANGE=1
    uint8 params_status
    
    uint8[32] error_parameter_name
    
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new Ack(null);
    if (msg.transaction !== undefined) {
      resolved.transaction = msg.transaction;
    }
    else {
      resolved.transaction = 0
    }

    if (msg.id !== undefined) {
      resolved.id = msg.id;
    }
    else {
      resolved.id = 0
    }

    if (msg.response_code !== undefined) {
      resolved.response_code = msg.response_code;
    }
    else {
      resolved.response_code = 0
    }

    if (msg.params_status !== undefined) {
      resolved.params_status = msg.params_status;
    }
    else {
      resolved.params_status = 0
    }

    if (msg.error_parameter_name !== undefined) {
      resolved.error_parameter_name = msg.error_parameter_name;
    }
    else {
      resolved.error_parameter_name = new Array(32).fill(0)
    }

    return resolved;
    }
};

// Constants for message
Ack.Constants = {
  RESPONSE_NOT_APPLICABLE: 0,
  RESPONSE_ACCEPTED: 1,
  RESPONSE_ACCEPTED_TOO_LONG: 2,
  RESPONSE_ACCEPTED_TOO_SHORT: 3,
  RESPONSE_PARAM_ERROR: 4,
  RESPONSE_NOT_APPLICABLE_IN_CURRENT_STATE: 5,
  RESPONSE_DATA_NOT_AVAILABLE: 6,
  RESPONSE_MESSAGE_START_ERROR: 7,
  RESPONSE_MESSAGE_END_ERROR: 8,
  RESPONSE_BYTE_COUNT_ERROR: 9,
  RESPONSE_CHECKSUM_ERROR: 10,
  PARAMS_NO_CHANGE: 0,
  PARAMS_CHANGE: 1,
}

module.exports = Ack;
