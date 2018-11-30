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

class CORRIMUDATA {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.header = null;
      this.week = null;
      this.gpssec = null;
      this.pitch_rate = null;
      this.roll_rate = null;
      this.yaw_rate = null;
      this.x_accel = null;
      this.y_accel = null;
      this.z_accel = null;
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
      if (initObj.hasOwnProperty('pitch_rate')) {
        this.pitch_rate = initObj.pitch_rate
      }
      else {
        this.pitch_rate = 0.0;
      }
      if (initObj.hasOwnProperty('roll_rate')) {
        this.roll_rate = initObj.roll_rate
      }
      else {
        this.roll_rate = 0.0;
      }
      if (initObj.hasOwnProperty('yaw_rate')) {
        this.yaw_rate = initObj.yaw_rate
      }
      else {
        this.yaw_rate = 0.0;
      }
      if (initObj.hasOwnProperty('x_accel')) {
        this.x_accel = initObj.x_accel
      }
      else {
        this.x_accel = 0.0;
      }
      if (initObj.hasOwnProperty('y_accel')) {
        this.y_accel = initObj.y_accel
      }
      else {
        this.y_accel = 0.0;
      }
      if (initObj.hasOwnProperty('z_accel')) {
        this.z_accel = initObj.z_accel
      }
      else {
        this.z_accel = 0.0;
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type CORRIMUDATA
    // Serialize message field [header]
    bufferOffset = CommonHeader.serialize(obj.header, buffer, bufferOffset);
    // Serialize message field [week]
    bufferOffset = _serializer.int32(obj.week, buffer, bufferOffset);
    // Serialize message field [gpssec]
    bufferOffset = _serializer.float64(obj.gpssec, buffer, bufferOffset);
    // Serialize message field [pitch_rate]
    bufferOffset = _serializer.float64(obj.pitch_rate, buffer, bufferOffset);
    // Serialize message field [roll_rate]
    bufferOffset = _serializer.float64(obj.roll_rate, buffer, bufferOffset);
    // Serialize message field [yaw_rate]
    bufferOffset = _serializer.float64(obj.yaw_rate, buffer, bufferOffset);
    // Serialize message field [x_accel]
    bufferOffset = _serializer.float64(obj.x_accel, buffer, bufferOffset);
    // Serialize message field [y_accel]
    bufferOffset = _serializer.float64(obj.y_accel, buffer, bufferOffset);
    // Serialize message field [z_accel]
    bufferOffset = _serializer.float64(obj.z_accel, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type CORRIMUDATA
    let len;
    let data = new CORRIMUDATA(null);
    // Deserialize message field [header]
    data.header = CommonHeader.deserialize(buffer, bufferOffset);
    // Deserialize message field [week]
    data.week = _deserializer.int32(buffer, bufferOffset);
    // Deserialize message field [gpssec]
    data.gpssec = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [pitch_rate]
    data.pitch_rate = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [roll_rate]
    data.roll_rate = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [yaw_rate]
    data.yaw_rate = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [x_accel]
    data.x_accel = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [y_accel]
    data.y_accel = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [z_accel]
    data.z_accel = _deserializer.float64(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    return 84;
  }

  static datatype() {
    // Returns string type for a message object
    return 'novatel_msgs/CORRIMUDATA';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '8ca3f26f898322425170fe621393f009';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # message 812
    # Contains the RAWIMU data corrected for gravity, 
    # the earth's rotation and estimated sensor errors.
    novatel_msgs/CommonHeader header
    
    int32 week
    float64 gpssec
    
    # Gyro values are instantaneous and in radians, must
    # multiply by datarate to get rad/s.
    float64 pitch_rate
    float64 roll_rate
    float64 yaw_rate
    
    float64 x_accel
    float64 y_accel
    float64 z_accel
    
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
    const resolved = new CORRIMUDATA(null);
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

    if (msg.pitch_rate !== undefined) {
      resolved.pitch_rate = msg.pitch_rate;
    }
    else {
      resolved.pitch_rate = 0.0
    }

    if (msg.roll_rate !== undefined) {
      resolved.roll_rate = msg.roll_rate;
    }
    else {
      resolved.roll_rate = 0.0
    }

    if (msg.yaw_rate !== undefined) {
      resolved.yaw_rate = msg.yaw_rate;
    }
    else {
      resolved.yaw_rate = 0.0
    }

    if (msg.x_accel !== undefined) {
      resolved.x_accel = msg.x_accel;
    }
    else {
      resolved.x_accel = 0.0
    }

    if (msg.y_accel !== undefined) {
      resolved.y_accel = msg.y_accel;
    }
    else {
      resolved.y_accel = 0.0
    }

    if (msg.z_accel !== undefined) {
      resolved.z_accel = msg.z_accel;
    }
    else {
      resolved.z_accel = 0.0
    }

    return resolved;
    }
};

module.exports = CORRIMUDATA;
