// Auto-generated. Do not edit!

// (in-package novatel_msgs.msg)


"use strict";

const _serializer = _ros_msg_utils.Serialize;
const _arraySerializer = _serializer.Array;
const _deserializer = _ros_msg_utils.Deserialize;
const _arrayDeserializer = _deserializer.Array;
const _finder = _ros_msg_utils.Find;
const _getByteLength = _ros_msg_utils.getByteLength;
let CommonHeader = require('./CommonHeader.js');

//-----------------------------------------------------------

class INSCOV {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.header = null;
      this.week = null;
      this.gpssec = null;
      this.pos11 = null;
      this.pos12 = null;
      this.pos13 = null;
      this.pos21 = null;
      this.pos22 = null;
      this.pos23 = null;
      this.pos31 = null;
      this.pos32 = null;
      this.pos33 = null;
      this.att11 = null;
      this.att12 = null;
      this.att13 = null;
      this.att21 = null;
      this.att22 = null;
      this.att23 = null;
      this.att31 = null;
      this.att32 = null;
      this.att33 = null;
      this.vel11 = null;
      this.vel12 = null;
      this.vel13 = null;
      this.vel21 = null;
      this.vel22 = null;
      this.vel23 = null;
      this.vel31 = null;
      this.vel32 = null;
      this.vel33 = null;
    }
    else {
      if (initObj.hasOwnProperty('header')) {
        this.header = initObj.header
      }
      else {
        this.header = new CommonHeader();
      }
      if (initObj.hasOwnProperty('week')) {
        this.week = initObj.week
      }
      else {
        this.week = 0;
      }
      if (initObj.hasOwnProperty('gpssec')) {
        this.gpssec = initObj.gpssec
      }
      else {
        this.gpssec = 0.0;
      }
      if (initObj.hasOwnProperty('pos11')) {
        this.pos11 = initObj.pos11
      }
      else {
        this.pos11 = 0.0;
      }
      if (initObj.hasOwnProperty('pos12')) {
        this.pos12 = initObj.pos12
      }
      else {
        this.pos12 = 0.0;
      }
      if (initObj.hasOwnProperty('pos13')) {
        this.pos13 = initObj.pos13
      }
      else {
        this.pos13 = 0.0;
      }
      if (initObj.hasOwnProperty('pos21')) {
        this.pos21 = initObj.pos21
      }
      else {
        this.pos21 = 0.0;
      }
      if (initObj.hasOwnProperty('pos22')) {
        this.pos22 = initObj.pos22
      }
      else {
        this.pos22 = 0.0;
      }
      if (initObj.hasOwnProperty('pos23')) {
        this.pos23 = initObj.pos23
      }
      else {
        this.pos23 = 0.0;
      }
      if (initObj.hasOwnProperty('pos31')) {
        this.pos31 = initObj.pos31
      }
      else {
        this.pos31 = 0.0;
      }
      if (initObj.hasOwnProperty('pos32')) {
        this.pos32 = initObj.pos32
      }
      else {
        this.pos32 = 0.0;
      }
      if (initObj.hasOwnProperty('pos33')) {
        this.pos33 = initObj.pos33
      }
      else {
        this.pos33 = 0.0;
      }
      if (initObj.hasOwnProperty('att11')) {
        this.att11 = initObj.att11
      }
      else {
        this.att11 = 0.0;
      }
      if (initObj.hasOwnProperty('att12')) {
        this.att12 = initObj.att12
      }
      else {
        this.att12 = 0.0;
      }
      if (initObj.hasOwnProperty('att13')) {
        this.att13 = initObj.att13
      }
      else {
        this.att13 = 0.0;
      }
      if (initObj.hasOwnProperty('att21')) {
        this.att21 = initObj.att21
      }
      else {
        this.att21 = 0.0;
      }
      if (initObj.hasOwnProperty('att22')) {
        this.att22 = initObj.att22
      }
      else {
        this.att22 = 0.0;
      }
      if (initObj.hasOwnProperty('att23')) {
        this.att23 = initObj.att23
      }
      else {
        this.att23 = 0.0;
      }
      if (initObj.hasOwnProperty('att31')) {
        this.att31 = initObj.att31
      }
      else {
        this.att31 = 0.0;
      }
      if (initObj.hasOwnProperty('att32')) {
        this.att32 = initObj.att32
      }
      else {
        this.att32 = 0.0;
      }
      if (initObj.hasOwnProperty('att33')) {
        this.att33 = initObj.att33
      }
      else {
        this.att33 = 0.0;
      }
      if (initObj.hasOwnProperty('vel11')) {
        this.vel11 = initObj.vel11
      }
      else {
        this.vel11 = 0.0;
      }
      if (initObj.hasOwnProperty('vel12')) {
        this.vel12 = initObj.vel12
      }
      else {
        this.vel12 = 0.0;
      }
      if (initObj.hasOwnProperty('vel13')) {
        this.vel13 = initObj.vel13
      }
      else {
        this.vel13 = 0.0;
      }
      if (initObj.hasOwnProperty('vel21')) {
        this.vel21 = initObj.vel21
      }
      else {
        this.vel21 = 0.0;
      }
      if (initObj.hasOwnProperty('vel22')) {
        this.vel22 = initObj.vel22
      }
      else {
        this.vel22 = 0.0;
      }
      if (initObj.hasOwnProperty('vel23')) {
        this.vel23 = initObj.vel23
      }
      else {
        this.vel23 = 0.0;
      }
      if (initObj.hasOwnProperty('vel31')) {
        this.vel31 = initObj.vel31
      }
      else {
        this.vel31 = 0.0;
      }
      if (initObj.hasOwnProperty('vel32')) {
        this.vel32 = initObj.vel32
      }
      else {
        this.vel32 = 0.0;
      }
      if (initObj.hasOwnProperty('vel33')) {
        this.vel33 = initObj.vel33
      }
      else {
        this.vel33 = 0.0;
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type INSCOV
    // Serialize message field [header]
    bufferOffset = CommonHeader.serialize(obj.header, buffer, bufferOffset);
    // Serialize message field [week]
    bufferOffset = _serializer.int32(obj.week, buffer, bufferOffset);
    // Serialize message field [gpssec]
    bufferOffset = _serializer.float64(obj.gpssec, buffer, bufferOffset);
    // Serialize message field [pos11]
    bufferOffset = _serializer.float64(obj.pos11, buffer, bufferOffset);
    // Serialize message field [pos12]
    bufferOffset = _serializer.float64(obj.pos12, buffer, bufferOffset);
    // Serialize message field [pos13]
    bufferOffset = _serializer.float64(obj.pos13, buffer, bufferOffset);
    // Serialize message field [pos21]
    bufferOffset = _serializer.float64(obj.pos21, buffer, bufferOffset);
    // Serialize message field [pos22]
    bufferOffset = _serializer.float64(obj.pos22, buffer, bufferOffset);
    // Serialize message field [pos23]
    bufferOffset = _serializer.float64(obj.pos23, buffer, bufferOffset);
    // Serialize message field [pos31]
    bufferOffset = _serializer.float64(obj.pos31, buffer, bufferOffset);
    // Serialize message field [pos32]
    bufferOffset = _serializer.float64(obj.pos32, buffer, bufferOffset);
    // Serialize message field [pos33]
    bufferOffset = _serializer.float64(obj.pos33, buffer, bufferOffset);
    // Serialize message field [att11]
    bufferOffset = _serializer.float64(obj.att11, buffer, bufferOffset);
    // Serialize message field [att12]
    bufferOffset = _serializer.float64(obj.att12, buffer, bufferOffset);
    // Serialize message field [att13]
    bufferOffset = _serializer.float64(obj.att13, buffer, bufferOffset);
    // Serialize message field [att21]
    bufferOffset = _serializer.float64(obj.att21, buffer, bufferOffset);
    // Serialize message field [att22]
    bufferOffset = _serializer.float64(obj.att22, buffer, bufferOffset);
    // Serialize message field [att23]
    bufferOffset = _serializer.float64(obj.att23, buffer, bufferOffset);
    // Serialize message field [att31]
    bufferOffset = _serializer.float64(obj.att31, buffer, bufferOffset);
    // Serialize message field [att32]
    bufferOffset = _serializer.float64(obj.att32, buffer, bufferOffset);
    // Serialize message field [att33]
    bufferOffset = _serializer.float64(obj.att33, buffer, bufferOffset);
    // Serialize message field [vel11]
    bufferOffset = _serializer.float64(obj.vel11, buffer, bufferOffset);
    // Serialize message field [vel12]
    bufferOffset = _serializer.float64(obj.vel12, buffer, bufferOffset);
    // Serialize message field [vel13]
    bufferOffset = _serializer.float64(obj.vel13, buffer, bufferOffset);
    // Serialize message field [vel21]
    bufferOffset = _serializer.float64(obj.vel21, buffer, bufferOffset);
    // Serialize message field [vel22]
    bufferOffset = _serializer.float64(obj.vel22, buffer, bufferOffset);
    // Serialize message field [vel23]
    bufferOffset = _serializer.float64(obj.vel23, buffer, bufferOffset);
    // Serialize message field [vel31]
    bufferOffset = _serializer.float64(obj.vel31, buffer, bufferOffset);
    // Serialize message field [vel32]
    bufferOffset = _serializer.float64(obj.vel32, buffer, bufferOffset);
    // Serialize message field [vel33]
    bufferOffset = _serializer.float64(obj.vel33, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type INSCOV
    let len;
    let data = new INSCOV(null);
    // Deserialize message field [header]
    data.header = CommonHeader.deserialize(buffer, bufferOffset);
    // Deserialize message field [week]
    data.week = _deserializer.int32(buffer, bufferOffset);
    // Deserialize message field [gpssec]
    data.gpssec = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [pos11]
    data.pos11 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [pos12]
    data.pos12 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [pos13]
    data.pos13 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [pos21]
    data.pos21 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [pos22]
    data.pos22 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [pos23]
    data.pos23 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [pos31]
    data.pos31 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [pos32]
    data.pos32 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [pos33]
    data.pos33 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [att11]
    data.att11 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [att12]
    data.att12 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [att13]
    data.att13 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [att21]
    data.att21 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [att22]
    data.att22 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [att23]
    data.att23 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [att31]
    data.att31 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [att32]
    data.att32 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [att33]
    data.att33 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [vel11]
    data.vel11 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [vel12]
    data.vel12 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [vel13]
    data.vel13 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [vel21]
    data.vel21 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [vel22]
    data.vel22 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [vel23]
    data.vel23 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [vel31]
    data.vel31 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [vel32]
    data.vel32 = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [vel33]
    data.vel33 = _deserializer.float64(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    return 252;
  }

  static datatype() {
    // Returns string type for a message object
    return 'novatel_msgs/INSCOV';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '75d77cf9321af3888caeeab3a756d0ac';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # message 264
    novatel_msgs/CommonHeader header
    
    int32 week
    float64 gpssec
    
    float64 pos11
    float64 pos12
    float64 pos13
    float64 pos21
    float64 pos22
    float64 pos23
    float64 pos31
    float64 pos32
    float64 pos33
    float64 att11
    float64 att12
    float64 att13
    float64 att21
    float64 att22
    float64 att23
    float64 att31
    float64 att32
    float64 att33
    float64 vel11
    float64 vel12
    float64 vel13
    float64 vel21
    float64 vel22
    float64 vel23
    float64 vel31
    float64 vel32
    float64 vel33
    
    ================================================================================
    MSG: novatel_msgs/CommonHeader
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
    const resolved = new INSCOV(null);
    if (msg.header !== undefined) {
      resolved.header = CommonHeader.Resolve(msg.header)
    }
    else {
      resolved.header = new CommonHeader()
    }

    if (msg.week !== undefined) {
      resolved.week = msg.week;
    }
    else {
      resolved.week = 0
    }

    if (msg.gpssec !== undefined) {
      resolved.gpssec = msg.gpssec;
    }
    else {
      resolved.gpssec = 0.0
    }

    if (msg.pos11 !== undefined) {
      resolved.pos11 = msg.pos11;
    }
    else {
      resolved.pos11 = 0.0
    }

    if (msg.pos12 !== undefined) {
      resolved.pos12 = msg.pos12;
    }
    else {
      resolved.pos12 = 0.0
    }

    if (msg.pos13 !== undefined) {
      resolved.pos13 = msg.pos13;
    }
    else {
      resolved.pos13 = 0.0
    }

    if (msg.pos21 !== undefined) {
      resolved.pos21 = msg.pos21;
    }
    else {
      resolved.pos21 = 0.0
    }

    if (msg.pos22 !== undefined) {
      resolved.pos22 = msg.pos22;
    }
    else {
      resolved.pos22 = 0.0
    }

    if (msg.pos23 !== undefined) {
      resolved.pos23 = msg.pos23;
    }
    else {
      resolved.pos23 = 0.0
    }

    if (msg.pos31 !== undefined) {
      resolved.pos31 = msg.pos31;
    }
    else {
      resolved.pos31 = 0.0
    }

    if (msg.pos32 !== undefined) {
      resolved.pos32 = msg.pos32;
    }
    else {
      resolved.pos32 = 0.0
    }

    if (msg.pos33 !== undefined) {
      resolved.pos33 = msg.pos33;
    }
    else {
      resolved.pos33 = 0.0
    }

    if (msg.att11 !== undefined) {
      resolved.att11 = msg.att11;
    }
    else {
      resolved.att11 = 0.0
    }

    if (msg.att12 !== undefined) {
      resolved.att12 = msg.att12;
    }
    else {
      resolved.att12 = 0.0
    }

    if (msg.att13 !== undefined) {
      resolved.att13 = msg.att13;
    }
    else {
      resolved.att13 = 0.0
    }

    if (msg.att21 !== undefined) {
      resolved.att21 = msg.att21;
    }
    else {
      resolved.att21 = 0.0
    }

    if (msg.att22 !== undefined) {
      resolved.att22 = msg.att22;
    }
    else {
      resolved.att22 = 0.0
    }

    if (msg.att23 !== undefined) {
      resolved.att23 = msg.att23;
    }
    else {
      resolved.att23 = 0.0
    }

    if (msg.att31 !== undefined) {
      resolved.att31 = msg.att31;
    }
    else {
      resolved.att31 = 0.0
    }

    if (msg.att32 !== undefined) {
      resolved.att32 = msg.att32;
    }
    else {
      resolved.att32 = 0.0
    }

    if (msg.att33 !== undefined) {
      resolved.att33 = msg.att33;
    }
    else {
      resolved.att33 = 0.0
    }

    if (msg.vel11 !== undefined) {
      resolved.vel11 = msg.vel11;
    }
    else {
      resolved.vel11 = 0.0
    }

    if (msg.vel12 !== undefined) {
      resolved.vel12 = msg.vel12;
    }
    else {
      resolved.vel12 = 0.0
    }

    if (msg.vel13 !== undefined) {
      resolved.vel13 = msg.vel13;
    }
    else {
      resolved.vel13 = 0.0
    }

    if (msg.vel21 !== undefined) {
      resolved.vel21 = msg.vel21;
    }
    else {
      resolved.vel21 = 0.0
    }

    if (msg.vel22 !== undefined) {
      resolved.vel22 = msg.vel22;
    }
    else {
      resolved.vel22 = 0.0
    }

    if (msg.vel23 !== undefined) {
      resolved.vel23 = msg.vel23;
    }
    else {
      resolved.vel23 = 0.0
    }

    if (msg.vel31 !== undefined) {
      resolved.vel31 = msg.vel31;
    }
    else {
      resolved.vel31 = 0.0
    }

    if (msg.vel32 !== undefined) {
      resolved.vel32 = msg.vel32;
    }
    else {
      resolved.vel32 = 0.0
    }

    if (msg.vel33 !== undefined) {
      resolved.vel33 = msg.vel33;
    }
    else {
      resolved.vel33 = 0.0
    }

    return resolved;
    }
};

module.exports = INSCOV;
