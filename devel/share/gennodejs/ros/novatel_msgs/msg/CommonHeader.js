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

class CommonHeader {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.id = null;
      this.msg_type = null;
      this.port_addr = null;
      this.length = null;
      this.sequence = null;
      this.idle_time = null;
      this.time_status = null;
      this.gps_week = null;
      this.gps_week_seconds = null;
      this.receiver_status = null;
      this.reserved = null;
      this.software_version = null;
    }
    else {
      if (initObj.hasOwnProperty('id')) {
        this.id = initObj.id
      }
      else {
        this.id = 0;
      }
      if (initObj.hasOwnProperty('msg_type')) {
        this.msg_type = initObj.msg_type
      }
      else {
        this.msg_type = 0;
      }
      if (initObj.hasOwnProperty('port_addr')) {
        this.port_addr = initObj.port_addr
      }
      else {
        this.port_addr = 0;
      }
      if (initObj.hasOwnProperty('length')) {
        this.length = initObj.length
      }
      else {
        this.length = 0;
      }
      if (initObj.hasOwnProperty('sequence')) {
        this.sequence = initObj.sequence
      }
      else {
        this.sequence = 0;
      }
      if (initObj.hasOwnProperty('idle_time')) {
        this.idle_time = initObj.idle_time
      }
      else {
        this.idle_time = 0;
      }
      if (initObj.hasOwnProperty('time_status')) {
        this.time_status = initObj.time_status
      }
      else {
        this.time_status = 0;
      }
      if (initObj.hasOwnProperty('gps_week')) {
        this.gps_week = initObj.gps_week
      }
      else {
        this.gps_week = 0;
      }
      if (initObj.hasOwnProperty('gps_week_seconds')) {
        this.gps_week_seconds = initObj.gps_week_seconds
      }
      else {
        this.gps_week_seconds = 0;
      }
      if (initObj.hasOwnProperty('receiver_status')) {
        this.receiver_status = initObj.receiver_status
      }
      else {
        this.receiver_status = 0;
      }
      if (initObj.hasOwnProperty('reserved')) {
        this.reserved = initObj.reserved
      }
      else {
        this.reserved = 0;
      }
      if (initObj.hasOwnProperty('software_version')) {
        this.software_version = initObj.software_version
      }
      else {
        this.software_version = 0;
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type CommonHeader
    // Serialize message field [id]
    bufferOffset = _serializer.uint16(obj.id, buffer, bufferOffset);
    // Serialize message field [msg_type]
    bufferOffset = _serializer.uint8(obj.msg_type, buffer, bufferOffset);
    // Serialize message field [port_addr]
    bufferOffset = _serializer.uint8(obj.port_addr, buffer, bufferOffset);
    // Serialize message field [length]
    bufferOffset = _serializer.uint16(obj.length, buffer, bufferOffset);
    // Serialize message field [sequence]
    bufferOffset = _serializer.uint16(obj.sequence, buffer, bufferOffset);
    // Serialize message field [idle_time]
    bufferOffset = _serializer.uint8(obj.idle_time, buffer, bufferOffset);
    // Serialize message field [time_status]
    bufferOffset = _serializer.uint8(obj.time_status, buffer, bufferOffset);
    // Serialize message field [gps_week]
    bufferOffset = _serializer.uint16(obj.gps_week, buffer, bufferOffset);
    // Serialize message field [gps_week_seconds]
    bufferOffset = _serializer.uint32(obj.gps_week_seconds, buffer, bufferOffset);
    // Serialize message field [receiver_status]
    bufferOffset = _serializer.uint32(obj.receiver_status, buffer, bufferOffset);
    // Serialize message field [reserved]
    bufferOffset = _serializer.uint16(obj.reserved, buffer, bufferOffset);
    // Serialize message field [software_version]
    bufferOffset = _serializer.uint16(obj.software_version, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type CommonHeader
    let len;
    let data = new CommonHeader(null);
    // Deserialize message field [id]
    data.id = _deserializer.uint16(buffer, bufferOffset);
    // Deserialize message field [msg_type]
    data.msg_type = _deserializer.uint8(buffer, bufferOffset);
    // Deserialize message field [port_addr]
    data.port_addr = _deserializer.uint8(buffer, bufferOffset);
    // Deserialize message field [length]
    data.length = _deserializer.uint16(buffer, bufferOffset);
    // Deserialize message field [sequence]
    data.sequence = _deserializer.uint16(buffer, bufferOffset);
    // Deserialize message field [idle_time]
    data.idle_time = _deserializer.uint8(buffer, bufferOffset);
    // Deserialize message field [time_status]
    data.time_status = _deserializer.uint8(buffer, bufferOffset);
    // Deserialize message field [gps_week]
    data.gps_week = _deserializer.uint16(buffer, bufferOffset);
    // Deserialize message field [gps_week_seconds]
    data.gps_week_seconds = _deserializer.uint32(buffer, bufferOffset);
    // Deserialize message field [receiver_status]
    data.receiver_status = _deserializer.uint32(buffer, bufferOffset);
    // Deserialize message field [reserved]
    data.reserved = _deserializer.uint16(buffer, bufferOffset);
    // Deserialize message field [software_version]
    data.software_version = _deserializer.uint16(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    return 24;
  }

  static datatype() {
    // Returns string type for a message object
    return 'novatel_msgs/CommonHeader';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '9e2cebab6fb8a68faebdd0703445eea6';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # On the wire, this header is preceeded by three sync bytes,
    # which are 0xAA 0x44 0x12, and a uint8 which is the header length.
    
    # Message ID of the log being output.
    uint16 id
    
    # Measurement source, format, response bit.
    uint8 msg_type
    
    uint8 port_addr
    uint16 length
    uint16 sequence
    
    uint8 idle_time
    uint8 time_status
    
    uint16 gps_week
    uint32 gps_week_seconds
    
    # Table 3 in the SPAN on OEM6 manual.
    # See: http://www.novatel.com/assets/Documents/Manuals/OM-20000144UM.pdf#page=13
    uint32 receiver_status
    uint32 RECEIVER_STATUS_ERROR=1
    uint32 RECEIVER_STATUS_TEMPERATURE_WARNING=2
    uint32 RECEIVER_STATUS_VOLTAGE_SUPPLY_WARNING=4
    uint32 RECEIVER_STATUS_ANTENNA_UNPOWERED=8
    uint32 RECEIVER_STATUS_LNA_FAILURE=16
    uint32 RECEIVER_STATUS_ANTENNA_OPEN=32
    uint32 RECEIVER_STATUS_ANTENNA_SHORTED=64
    uint32 RECEIVER_STATUS_CPU_OVERLOADED=128
    uint32 RECEIVER_STATUS_COM1_BUFFER_OVERRUN=256
    uint32 RECEIVER_STATUS_COM2_BUFFER_OVERRUN=512
    uint32 RECEIVER_STATUS_COM3_BUFFER_OVERRUN=1024
    uint32 RECEIVER_STATUS_LINK_OVERLOAD=2048
    uint32 RECEIVER_STATUS_AUX_TRANSMIT_OVERRUN=8192
    uint32 RECEIVER_STATUS_AGC_OUT_OF_RANGE=16384
    uint32 RECEIVER_STATUS_INS_RESET=65536
    uint32 RECEIVER_STATUS_ALMANAC_INVALID=262144
    uint32 RECEIVER_STATUS_POSITION_SOLUTION_INVALID=524288
    uint32 RECEIVER_STATUS_POSITION_NOT_FIXED=1048576
    uint32 RECEIVER_STATUS_CLOCK_STEERING_DISABLED=2097152
    uint32 RECEIVER_STATUS_CLOCK_MODEL_INVALID=4194304
    uint32 RECEIVER_STATUS_EXTERNAL_OSCILLATOR_LOCKED=8388608
    uint32 RECEIVER_STATUS_SOFTWARE_RESOURCE_WARNING=16777216
    uint32 RECEIVER_STATUS_AUXILIARY3_EVENT=536870912
    uint32 RECEIVER_STATUS_AUXILIARY2_EVENT=1073741824
    uint32 RECEIVER_STATUS_AUXILIARY1_EVENT=2147483648
    
    uint16 reserved
    uint16 software_version
    
    
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new CommonHeader(null);
    if (msg.id !== undefined) {
      resolved.id = msg.id;
    }
    else {
      resolved.id = 0
    }

    if (msg.msg_type !== undefined) {
      resolved.msg_type = msg.msg_type;
    }
    else {
      resolved.msg_type = 0
    }

    if (msg.port_addr !== undefined) {
      resolved.port_addr = msg.port_addr;
    }
    else {
      resolved.port_addr = 0
    }

    if (msg.length !== undefined) {
      resolved.length = msg.length;
    }
    else {
      resolved.length = 0
    }

    if (msg.sequence !== undefined) {
      resolved.sequence = msg.sequence;
    }
    else {
      resolved.sequence = 0
    }

    if (msg.idle_time !== undefined) {
      resolved.idle_time = msg.idle_time;
    }
    else {
      resolved.idle_time = 0
    }

    if (msg.time_status !== undefined) {
      resolved.time_status = msg.time_status;
    }
    else {
      resolved.time_status = 0
    }

    if (msg.gps_week !== undefined) {
      resolved.gps_week = msg.gps_week;
    }
    else {
      resolved.gps_week = 0
    }

    if (msg.gps_week_seconds !== undefined) {
      resolved.gps_week_seconds = msg.gps_week_seconds;
    }
    else {
      resolved.gps_week_seconds = 0
    }

    if (msg.receiver_status !== undefined) {
      resolved.receiver_status = msg.receiver_status;
    }
    else {
      resolved.receiver_status = 0
    }

    if (msg.reserved !== undefined) {
      resolved.reserved = msg.reserved;
    }
    else {
      resolved.reserved = 0
    }

    if (msg.software_version !== undefined) {
      resolved.software_version = msg.software_version;
    }
    else {
      resolved.software_version = 0
    }

    return resolved;
    }
};

// Constants for message
CommonHeader.Constants = {
  RECEIVER_STATUS_ERROR: 1,
  RECEIVER_STATUS_TEMPERATURE_WARNING: 2,
  RECEIVER_STATUS_VOLTAGE_SUPPLY_WARNING: 4,
  RECEIVER_STATUS_ANTENNA_UNPOWERED: 8,
  RECEIVER_STATUS_LNA_FAILURE: 16,
  RECEIVER_STATUS_ANTENNA_OPEN: 32,
  RECEIVER_STATUS_ANTENNA_SHORTED: 64,
  RECEIVER_STATUS_CPU_OVERLOADED: 128,
  RECEIVER_STATUS_COM1_BUFFER_OVERRUN: 256,
  RECEIVER_STATUS_COM2_BUFFER_OVERRUN: 512,
  RECEIVER_STATUS_COM3_BUFFER_OVERRUN: 1024,
  RECEIVER_STATUS_LINK_OVERLOAD: 2048,
  RECEIVER_STATUS_AUX_TRANSMIT_OVERRUN: 8192,
  RECEIVER_STATUS_AGC_OUT_OF_RANGE: 16384,
  RECEIVER_STATUS_INS_RESET: 65536,
  RECEIVER_STATUS_ALMANAC_INVALID: 262144,
  RECEIVER_STATUS_POSITION_SOLUTION_INVALID: 524288,
  RECEIVER_STATUS_POSITION_NOT_FIXED: 1048576,
  RECEIVER_STATUS_CLOCK_STEERING_DISABLED: 2097152,
  RECEIVER_STATUS_CLOCK_MODEL_INVALID: 4194304,
  RECEIVER_STATUS_EXTERNAL_OSCILLATOR_LOCKED: 8388608,
  RECEIVER_STATUS_SOFTWARE_RESOURCE_WARNING: 16777216,
  RECEIVER_STATUS_AUXILIARY3_EVENT: 536870912,
  RECEIVER_STATUS_AUXILIARY2_EVENT: 1073741824,
  RECEIVER_STATUS_AUXILIARY1_EVENT: 2147483648,
}

module.exports = CommonHeader;
