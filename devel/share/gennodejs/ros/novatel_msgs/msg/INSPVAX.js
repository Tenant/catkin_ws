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

class INSPVAX {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.header = null;
      this.ins_status = null;
      this.position_type = null;
      this.latitude = null;
      this.longitude = null;
      this.altitude = null;
      this.undulation = null;
      this.north_velocity = null;
      this.east_velocity = null;
      this.up_velocity = null;
      this.roll = null;
      this.pitch = null;
      this.azimuth = null;
      this.latitude_std = null;
      this.longitude_std = null;
      this.altitude_std = null;
      this.north_velocity_std = null;
      this.east_velocity_std = null;
      this.up_velocity_std = null;
      this.roll_std = null;
      this.pitch_std = null;
      this.azimuth_std = null;
      this.extended_status = null;
      this.seconds_since_update = null;
    }
    else {
      if (initObj.hasOwnProperty('header')) {
        this.header = initObj.header
      }
      else {
        this.header = new CommonHeader();
      }
      if (initObj.hasOwnProperty('ins_status')) {
        this.ins_status = initObj.ins_status
      }
      else {
        this.ins_status = 0;
      }
      if (initObj.hasOwnProperty('position_type')) {
        this.position_type = initObj.position_type
      }
      else {
        this.position_type = 0;
      }
      if (initObj.hasOwnProperty('latitude')) {
        this.latitude = initObj.latitude
      }
      else {
        this.latitude = 0.0;
      }
      if (initObj.hasOwnProperty('longitude')) {
        this.longitude = initObj.longitude
      }
      else {
        this.longitude = 0.0;
      }
      if (initObj.hasOwnProperty('altitude')) {
        this.altitude = initObj.altitude
      }
      else {
        this.altitude = 0.0;
      }
      if (initObj.hasOwnProperty('undulation')) {
        this.undulation = initObj.undulation
      }
      else {
        this.undulation = 0.0;
      }
      if (initObj.hasOwnProperty('north_velocity')) {
        this.north_velocity = initObj.north_velocity
      }
      else {
        this.north_velocity = 0.0;
      }
      if (initObj.hasOwnProperty('east_velocity')) {
        this.east_velocity = initObj.east_velocity
      }
      else {
        this.east_velocity = 0.0;
      }
      if (initObj.hasOwnProperty('up_velocity')) {
        this.up_velocity = initObj.up_velocity
      }
      else {
        this.up_velocity = 0.0;
      }
      if (initObj.hasOwnProperty('roll')) {
        this.roll = initObj.roll
      }
      else {
        this.roll = 0.0;
      }
      if (initObj.hasOwnProperty('pitch')) {
        this.pitch = initObj.pitch
      }
      else {
        this.pitch = 0.0;
      }
      if (initObj.hasOwnProperty('azimuth')) {
        this.azimuth = initObj.azimuth
      }
      else {
        this.azimuth = 0.0;
      }
      if (initObj.hasOwnProperty('latitude_std')) {
        this.latitude_std = initObj.latitude_std
      }
      else {
        this.latitude_std = 0.0;
      }
      if (initObj.hasOwnProperty('longitude_std')) {
        this.longitude_std = initObj.longitude_std
      }
      else {
        this.longitude_std = 0.0;
      }
      if (initObj.hasOwnProperty('altitude_std')) {
        this.altitude_std = initObj.altitude_std
      }
      else {
        this.altitude_std = 0.0;
      }
      if (initObj.hasOwnProperty('north_velocity_std')) {
        this.north_velocity_std = initObj.north_velocity_std
      }
      else {
        this.north_velocity_std = 0.0;
      }
      if (initObj.hasOwnProperty('east_velocity_std')) {
        this.east_velocity_std = initObj.east_velocity_std
      }
      else {
        this.east_velocity_std = 0.0;
      }
      if (initObj.hasOwnProperty('up_velocity_std')) {
        this.up_velocity_std = initObj.up_velocity_std
      }
      else {
        this.up_velocity_std = 0.0;
      }
      if (initObj.hasOwnProperty('roll_std')) {
        this.roll_std = initObj.roll_std
      }
      else {
        this.roll_std = 0.0;
      }
      if (initObj.hasOwnProperty('pitch_std')) {
        this.pitch_std = initObj.pitch_std
      }
      else {
        this.pitch_std = 0.0;
      }
      if (initObj.hasOwnProperty('azimuth_std')) {
        this.azimuth_std = initObj.azimuth_std
      }
      else {
        this.azimuth_std = 0.0;
      }
      if (initObj.hasOwnProperty('extended_status')) {
        this.extended_status = initObj.extended_status
      }
      else {
        this.extended_status = 0;
      }
      if (initObj.hasOwnProperty('seconds_since_update')) {
        this.seconds_since_update = initObj.seconds_since_update
      }
      else {
        this.seconds_since_update = 0;
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type INSPVAX
    // Serialize message field [header]
    bufferOffset = CommonHeader.serialize(obj.header, buffer, bufferOffset);
    // Serialize message field [ins_status]
    bufferOffset = _serializer.uint32(obj.ins_status, buffer, bufferOffset);
    // Serialize message field [position_type]
    bufferOffset = _serializer.uint32(obj.position_type, buffer, bufferOffset);
    // Serialize message field [latitude]
    bufferOffset = _serializer.float64(obj.latitude, buffer, bufferOffset);
    // Serialize message field [longitude]
    bufferOffset = _serializer.float64(obj.longitude, buffer, bufferOffset);
    // Serialize message field [altitude]
    bufferOffset = _serializer.float64(obj.altitude, buffer, bufferOffset);
    // Serialize message field [undulation]
    bufferOffset = _serializer.float32(obj.undulation, buffer, bufferOffset);
    // Serialize message field [north_velocity]
    bufferOffset = _serializer.float64(obj.north_velocity, buffer, bufferOffset);
    // Serialize message field [east_velocity]
    bufferOffset = _serializer.float64(obj.east_velocity, buffer, bufferOffset);
    // Serialize message field [up_velocity]
    bufferOffset = _serializer.float64(obj.up_velocity, buffer, bufferOffset);
    // Serialize message field [roll]
    bufferOffset = _serializer.float64(obj.roll, buffer, bufferOffset);
    // Serialize message field [pitch]
    bufferOffset = _serializer.float64(obj.pitch, buffer, bufferOffset);
    // Serialize message field [azimuth]
    bufferOffset = _serializer.float64(obj.azimuth, buffer, bufferOffset);
    // Serialize message field [latitude_std]
    bufferOffset = _serializer.float32(obj.latitude_std, buffer, bufferOffset);
    // Serialize message field [longitude_std]
    bufferOffset = _serializer.float32(obj.longitude_std, buffer, bufferOffset);
    // Serialize message field [altitude_std]
    bufferOffset = _serializer.float32(obj.altitude_std, buffer, bufferOffset);
    // Serialize message field [north_velocity_std]
    bufferOffset = _serializer.float32(obj.north_velocity_std, buffer, bufferOffset);
    // Serialize message field [east_velocity_std]
    bufferOffset = _serializer.float32(obj.east_velocity_std, buffer, bufferOffset);
    // Serialize message field [up_velocity_std]
    bufferOffset = _serializer.float32(obj.up_velocity_std, buffer, bufferOffset);
    // Serialize message field [roll_std]
    bufferOffset = _serializer.float32(obj.roll_std, buffer, bufferOffset);
    // Serialize message field [pitch_std]
    bufferOffset = _serializer.float32(obj.pitch_std, buffer, bufferOffset);
    // Serialize message field [azimuth_std]
    bufferOffset = _serializer.float32(obj.azimuth_std, buffer, bufferOffset);
    // Serialize message field [extended_status]
    bufferOffset = _serializer.uint32(obj.extended_status, buffer, bufferOffset);
    // Serialize message field [seconds_since_update]
    bufferOffset = _serializer.uint16(obj.seconds_since_update, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type INSPVAX
    let len;
    let data = new INSPVAX(null);
    // Deserialize message field [header]
    data.header = CommonHeader.deserialize(buffer, bufferOffset);
    // Deserialize message field [ins_status]
    data.ins_status = _deserializer.uint32(buffer, bufferOffset);
    // Deserialize message field [position_type]
    data.position_type = _deserializer.uint32(buffer, bufferOffset);
    // Deserialize message field [latitude]
    data.latitude = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [longitude]
    data.longitude = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [altitude]
    data.altitude = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [undulation]
    data.undulation = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [north_velocity]
    data.north_velocity = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [east_velocity]
    data.east_velocity = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [up_velocity]
    data.up_velocity = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [roll]
    data.roll = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [pitch]
    data.pitch = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [azimuth]
    data.azimuth = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [latitude_std]
    data.latitude_std = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [longitude_std]
    data.longitude_std = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [altitude_std]
    data.altitude_std = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [north_velocity_std]
    data.north_velocity_std = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [east_velocity_std]
    data.east_velocity_std = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [up_velocity_std]
    data.up_velocity_std = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [roll_std]
    data.roll_std = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [pitch_std]
    data.pitch_std = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [azimuth_std]
    data.azimuth_std = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [extended_status]
    data.extended_status = _deserializer.uint32(buffer, bufferOffset);
    // Deserialize message field [seconds_since_update]
    data.seconds_since_update = _deserializer.uint16(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    return 150;
  }

  static datatype() {
    // Returns string type for a message object
    return 'novatel_msgs/INSPVAX';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'b5d66747957184042a6cca9b7368742f';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # message 1465
    novatel_msgs/CommonHeader header
    
    # Table 29 in the SPAN on OEM6 manual:
    # See: http://www.novatel.com/assets/Documents/Manuals/OM-20000144UM.pdf#page=121
    uint32 ins_status
    uint32 INS_STATUS_INACTIVE=0
    uint32 INS_STATUS_ALIGNING=1
    uint32 INS_STATUS_HIGH_VARIANCE=2
    uint32 INS_STATUS_SOLUTION_GOOD=3
    uint32 INS_STATUS_SOLUTION_FREE=6
    uint32 INS_STATUS_ALIGNMENT_COMPLETE=7
    uint32 INS_STATUS_DETERMINING_ORIENTATION=8
    uint32 INS_STATUS_WAITING_INITIALPOS=9
    
    # Table 30 in the SPAN on OEM6 manual:
    # See: http://www.novatel.com/assets/Documents/Manuals/OM-20000144UM.pdf#page=124
    uint32 position_type
    uint32 POSITION_TYPE_NONE=0
    uint32 POSITION_TYPE_SBAS=52
    uint32 POSITION_TYPE_PSEUDORANGE_SINGLE_POINT=53
    uint32 POSITION_TYPE_PSEUDORANGE_DIFFERENTIAL=54
    uint32 POSITION_TYPE_RTK_FLOAT=55
    uint32 POSITION_TYPE_RTK_FIXED=56
    uint32 POSITION_TYPE_OMNISTAR=57
    uint32 POSITION_TYPE_OMNISTAR_HP=58
    uint32 POSITION_TYPE_OMNISTAR_XP=59
    uint32 POSITION_TYPE_PPP_CONVERGING=73
    uint32 POSITION_TYPE_PPP=74
    
    float64 latitude
    float64 longitude
    float64 altitude
    
    float32 undulation
    
    float64 north_velocity
    float64 east_velocity
    float64 up_velocity
    
    float64 roll
    float64 pitch
    float64 azimuth
    
    float32 latitude_std
    float32 longitude_std
    float32 altitude_std
    
    float32 north_velocity_std
    float32 east_velocity_std
    float32 up_velocity_std
    
    float32 roll_std
    float32 pitch_std
    float32 azimuth_std
    
    uint32 extended_status
    uint32 EXTENDED_STATUS_POSITION_UPDATE_APPLIED=1
    uint32 EXTENDED_STATUS_PHASE_UPDATE_APPLIED=2
    uint32 EXTENDED_STATUS_ZUPT_APPLIED=4
    uint32 EXTENDED_STATUS_WHEEL_SENSOR_APPLIED=8
    uint32 EXTENDED_STATUS_HEADING_UPDATE_APPLIED=16
    uint32 EXTENDED_STATUS_INS_SOLUTION_CONVERGED=64
    
    uint16 seconds_since_update
    
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
    const resolved = new INSPVAX(null);
    if (msg.header !== undefined) {
      resolved.header = CommonHeader.Resolve(msg.header)
    }
    else {
      resolved.header = new CommonHeader()
    }

    if (msg.ins_status !== undefined) {
      resolved.ins_status = msg.ins_status;
    }
    else {
      resolved.ins_status = 0
    }

    if (msg.position_type !== undefined) {
      resolved.position_type = msg.position_type;
    }
    else {
      resolved.position_type = 0
    }

    if (msg.latitude !== undefined) {
      resolved.latitude = msg.latitude;
    }
    else {
      resolved.latitude = 0.0
    }

    if (msg.longitude !== undefined) {
      resolved.longitude = msg.longitude;
    }
    else {
      resolved.longitude = 0.0
    }

    if (msg.altitude !== undefined) {
      resolved.altitude = msg.altitude;
    }
    else {
      resolved.altitude = 0.0
    }

    if (msg.undulation !== undefined) {
      resolved.undulation = msg.undulation;
    }
    else {
      resolved.undulation = 0.0
    }

    if (msg.north_velocity !== undefined) {
      resolved.north_velocity = msg.north_velocity;
    }
    else {
      resolved.north_velocity = 0.0
    }

    if (msg.east_velocity !== undefined) {
      resolved.east_velocity = msg.east_velocity;
    }
    else {
      resolved.east_velocity = 0.0
    }

    if (msg.up_velocity !== undefined) {
      resolved.up_velocity = msg.up_velocity;
    }
    else {
      resolved.up_velocity = 0.0
    }

    if (msg.roll !== undefined) {
      resolved.roll = msg.roll;
    }
    else {
      resolved.roll = 0.0
    }

    if (msg.pitch !== undefined) {
      resolved.pitch = msg.pitch;
    }
    else {
      resolved.pitch = 0.0
    }

    if (msg.azimuth !== undefined) {
      resolved.azimuth = msg.azimuth;
    }
    else {
      resolved.azimuth = 0.0
    }

    if (msg.latitude_std !== undefined) {
      resolved.latitude_std = msg.latitude_std;
    }
    else {
      resolved.latitude_std = 0.0
    }

    if (msg.longitude_std !== undefined) {
      resolved.longitude_std = msg.longitude_std;
    }
    else {
      resolved.longitude_std = 0.0
    }

    if (msg.altitude_std !== undefined) {
      resolved.altitude_std = msg.altitude_std;
    }
    else {
      resolved.altitude_std = 0.0
    }

    if (msg.north_velocity_std !== undefined) {
      resolved.north_velocity_std = msg.north_velocity_std;
    }
    else {
      resolved.north_velocity_std = 0.0
    }

    if (msg.east_velocity_std !== undefined) {
      resolved.east_velocity_std = msg.east_velocity_std;
    }
    else {
      resolved.east_velocity_std = 0.0
    }

    if (msg.up_velocity_std !== undefined) {
      resolved.up_velocity_std = msg.up_velocity_std;
    }
    else {
      resolved.up_velocity_std = 0.0
    }

    if (msg.roll_std !== undefined) {
      resolved.roll_std = msg.roll_std;
    }
    else {
      resolved.roll_std = 0.0
    }

    if (msg.pitch_std !== undefined) {
      resolved.pitch_std = msg.pitch_std;
    }
    else {
      resolved.pitch_std = 0.0
    }

    if (msg.azimuth_std !== undefined) {
      resolved.azimuth_std = msg.azimuth_std;
    }
    else {
      resolved.azimuth_std = 0.0
    }

    if (msg.extended_status !== undefined) {
      resolved.extended_status = msg.extended_status;
    }
    else {
      resolved.extended_status = 0
    }

    if (msg.seconds_since_update !== undefined) {
      resolved.seconds_since_update = msg.seconds_since_update;
    }
    else {
      resolved.seconds_since_update = 0
    }

    return resolved;
    }
};

// Constants for message
INSPVAX.Constants = {
  INS_STATUS_INACTIVE: 0,
  INS_STATUS_ALIGNING: 1,
  INS_STATUS_HIGH_VARIANCE: 2,
  INS_STATUS_SOLUTION_GOOD: 3,
  INS_STATUS_SOLUTION_FREE: 6,
  INS_STATUS_ALIGNMENT_COMPLETE: 7,
  INS_STATUS_DETERMINING_ORIENTATION: 8,
  INS_STATUS_WAITING_INITIALPOS: 9,
  POSITION_TYPE_NONE: 0,
  POSITION_TYPE_SBAS: 52,
  POSITION_TYPE_PSEUDORANGE_SINGLE_POINT: 53,
  POSITION_TYPE_PSEUDORANGE_DIFFERENTIAL: 54,
  POSITION_TYPE_RTK_FLOAT: 55,
  POSITION_TYPE_RTK_FIXED: 56,
  POSITION_TYPE_OMNISTAR: 57,
  POSITION_TYPE_OMNISTAR_HP: 58,
  POSITION_TYPE_OMNISTAR_XP: 59,
  POSITION_TYPE_PPP_CONVERGING: 73,
  POSITION_TYPE_PPP: 74,
  EXTENDED_STATUS_POSITION_UPDATE_APPLIED: 1,
  EXTENDED_STATUS_PHASE_UPDATE_APPLIED: 2,
  EXTENDED_STATUS_ZUPT_APPLIED: 4,
  EXTENDED_STATUS_WHEEL_SENSOR_APPLIED: 8,
  EXTENDED_STATUS_HEADING_UPDATE_APPLIED: 16,
  EXTENDED_STATUS_INS_SOLUTION_CONVERGED: 64,
}

module.exports = INSPVAX;
