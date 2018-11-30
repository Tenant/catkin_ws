// Auto-generated. Do not edit!

// (in-package rcs_msg_wrapper.msg)


"use strict";

const _serializer = _ros_msg_utils.Serialize;
const _arraySerializer = _serializer.Array;
const _deserializer = _ros_msg_utils.Deserialize;
const _arrayDeserializer = _deserializer.Array;
const _finder = _ros_msg_utils.Find;
const _getByteLength = _ros_msg_utils.getByteLength;
let std_msgs = _finder('std_msgs');

//-----------------------------------------------------------

class dwdx {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.header = null;
      this.time_label = null;
      this.global_x = null;
      this.global_y = null;
      this.global_h = null;
      this.zone = null;
      this.longitude = null;
      this.latitude = null;
      this.heading = null;
      this.pitch = null;
      this.roll = null;
      this.global_vx = null;
      this.global_vy = null;
      this.global_vz = null;
      this.global_wx = null;
      this.global_wy = null;
      this.global_wz = null;
      this.mileage = null;
      this.id = null;
    }
    else {
      if (initObj.hasOwnProperty('header')) {
        this.header = initObj.header
      }
      else {
        this.header = new std_msgs.msg.Header();
      }
      if (initObj.hasOwnProperty('time_label')) {
        this.time_label = initObj.time_label
      }
      else {
        this.time_label = 0.0;
      }
      if (initObj.hasOwnProperty('global_x')) {
        this.global_x = initObj.global_x
      }
      else {
        this.global_x = 0;
      }
      if (initObj.hasOwnProperty('global_y')) {
        this.global_y = initObj.global_y
      }
      else {
        this.global_y = 0;
      }
      if (initObj.hasOwnProperty('global_h')) {
        this.global_h = initObj.global_h
      }
      else {
        this.global_h = 0;
      }
      if (initObj.hasOwnProperty('zone')) {
        this.zone = initObj.zone
      }
      else {
        this.zone = 0;
      }
      if (initObj.hasOwnProperty('longitude')) {
        this.longitude = initObj.longitude
      }
      else {
        this.longitude = 0;
      }
      if (initObj.hasOwnProperty('latitude')) {
        this.latitude = initObj.latitude
      }
      else {
        this.latitude = 0;
      }
      if (initObj.hasOwnProperty('heading')) {
        this.heading = initObj.heading
      }
      else {
        this.heading = 0;
      }
      if (initObj.hasOwnProperty('pitch')) {
        this.pitch = initObj.pitch
      }
      else {
        this.pitch = 0;
      }
      if (initObj.hasOwnProperty('roll')) {
        this.roll = initObj.roll
      }
      else {
        this.roll = 0;
      }
      if (initObj.hasOwnProperty('global_vx')) {
        this.global_vx = initObj.global_vx
      }
      else {
        this.global_vx = 0;
      }
      if (initObj.hasOwnProperty('global_vy')) {
        this.global_vy = initObj.global_vy
      }
      else {
        this.global_vy = 0;
      }
      if (initObj.hasOwnProperty('global_vz')) {
        this.global_vz = initObj.global_vz
      }
      else {
        this.global_vz = 0;
      }
      if (initObj.hasOwnProperty('global_wx')) {
        this.global_wx = initObj.global_wx
      }
      else {
        this.global_wx = 0;
      }
      if (initObj.hasOwnProperty('global_wy')) {
        this.global_wy = initObj.global_wy
      }
      else {
        this.global_wy = 0;
      }
      if (initObj.hasOwnProperty('global_wz')) {
        this.global_wz = initObj.global_wz
      }
      else {
        this.global_wz = 0;
      }
      if (initObj.hasOwnProperty('mileage')) {
        this.mileage = initObj.mileage
      }
      else {
        this.mileage = 0;
      }
      if (initObj.hasOwnProperty('id')) {
        this.id = initObj.id
      }
      else {
        this.id = 0;
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type dwdx
    // Serialize message field [header]
    bufferOffset = std_msgs.msg.Header.serialize(obj.header, buffer, bufferOffset);
    // Serialize message field [time_label]
    bufferOffset = _serializer.float64(obj.time_label, buffer, bufferOffset);
    // Serialize message field [global_x]
    bufferOffset = _serializer.uint32(obj.global_x, buffer, bufferOffset);
    // Serialize message field [global_y]
    bufferOffset = _serializer.uint32(obj.global_y, buffer, bufferOffset);
    // Serialize message field [global_h]
    bufferOffset = _serializer.uint32(obj.global_h, buffer, bufferOffset);
    // Serialize message field [zone]
    bufferOffset = _serializer.uint16(obj.zone, buffer, bufferOffset);
    // Serialize message field [longitude]
    bufferOffset = _serializer.int32(obj.longitude, buffer, bufferOffset);
    // Serialize message field [latitude]
    bufferOffset = _serializer.int32(obj.latitude, buffer, bufferOffset);
    // Serialize message field [heading]
    bufferOffset = _serializer.uint16(obj.heading, buffer, bufferOffset);
    // Serialize message field [pitch]
    bufferOffset = _serializer.int16(obj.pitch, buffer, bufferOffset);
    // Serialize message field [roll]
    bufferOffset = _serializer.int16(obj.roll, buffer, bufferOffset);
    // Serialize message field [global_vx]
    bufferOffset = _serializer.int16(obj.global_vx, buffer, bufferOffset);
    // Serialize message field [global_vy]
    bufferOffset = _serializer.int16(obj.global_vy, buffer, bufferOffset);
    // Serialize message field [global_vz]
    bufferOffset = _serializer.int16(obj.global_vz, buffer, bufferOffset);
    // Serialize message field [global_wx]
    bufferOffset = _serializer.int16(obj.global_wx, buffer, bufferOffset);
    // Serialize message field [global_wy]
    bufferOffset = _serializer.int16(obj.global_wy, buffer, bufferOffset);
    // Serialize message field [global_wz]
    bufferOffset = _serializer.int16(obj.global_wz, buffer, bufferOffset);
    // Serialize message field [mileage]
    bufferOffset = _serializer.uint32(obj.mileage, buffer, bufferOffset);
    // Serialize message field [id]
    bufferOffset = _serializer.uint32(obj.id, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type dwdx
    let len;
    let data = new dwdx(null);
    // Deserialize message field [header]
    data.header = std_msgs.msg.Header.deserialize(buffer, bufferOffset);
    // Deserialize message field [time_label]
    data.time_label = _deserializer.float64(buffer, bufferOffset);
    // Deserialize message field [global_x]
    data.global_x = _deserializer.uint32(buffer, bufferOffset);
    // Deserialize message field [global_y]
    data.global_y = _deserializer.uint32(buffer, bufferOffset);
    // Deserialize message field [global_h]
    data.global_h = _deserializer.uint32(buffer, bufferOffset);
    // Deserialize message field [zone]
    data.zone = _deserializer.uint16(buffer, bufferOffset);
    // Deserialize message field [longitude]
    data.longitude = _deserializer.int32(buffer, bufferOffset);
    // Deserialize message field [latitude]
    data.latitude = _deserializer.int32(buffer, bufferOffset);
    // Deserialize message field [heading]
    data.heading = _deserializer.uint16(buffer, bufferOffset);
    // Deserialize message field [pitch]
    data.pitch = _deserializer.int16(buffer, bufferOffset);
    // Deserialize message field [roll]
    data.roll = _deserializer.int16(buffer, bufferOffset);
    // Deserialize message field [global_vx]
    data.global_vx = _deserializer.int16(buffer, bufferOffset);
    // Deserialize message field [global_vy]
    data.global_vy = _deserializer.int16(buffer, bufferOffset);
    // Deserialize message field [global_vz]
    data.global_vz = _deserializer.int16(buffer, bufferOffset);
    // Deserialize message field [global_wx]
    data.global_wx = _deserializer.int16(buffer, bufferOffset);
    // Deserialize message field [global_wy]
    data.global_wy = _deserializer.int16(buffer, bufferOffset);
    // Deserialize message field [global_wz]
    data.global_wz = _deserializer.int16(buffer, bufferOffset);
    // Deserialize message field [mileage]
    data.mileage = _deserializer.uint32(buffer, bufferOffset);
    // Deserialize message field [id]
    data.id = _deserializer.uint32(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    let length = 0;
    length += std_msgs.msg.Header.getMessageSize(object.header);
    return length + 56;
  }

  static datatype() {
    // Returns string type for a message object
    return 'rcs_msg_wrapper/dwdx';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '5892ad3732ec5fee9c5b2efe18dee12c';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # Header needs to be the first field to refer to std_msgs/Header, other msgs here needs to add the package name such as nav_msgs/Odometry
    Header header
    float64 time_label
    uint32 global_x
    uint32 global_y
    uint32 global_h
    uint16 zone
    int32 longitude
    int32 latitude
    uint16 heading
    int16 pitch
    int16 roll
    int16 global_vx
    int16 global_vy
    int16 global_vz
    int16 global_wx
    int16 global_wy
    int16 global_wz
    uint32 mileage
    uint32 id
    
    ================================================================================
    MSG: std_msgs/Header
    # Standard metadata for higher-level stamped data types.
    # This is generally used to communicate timestamped data 
    # in a particular coordinate frame.
    # 
    # sequence ID: consecutively increasing ID 
    uint32 seq
    #Two-integer timestamp that is expressed as:
    # * stamp.sec: seconds (stamp_secs) since epoch (in Python the variable is called 'secs')
    # * stamp.nsec: nanoseconds since stamp_secs (in Python the variable is called 'nsecs')
    # time-handling sugar is provided by the client library
    time stamp
    #Frame this data is associated with
    # 0: no frame
    # 1: global frame
    string frame_id
    
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new dwdx(null);
    if (msg.header !== undefined) {
      resolved.header = std_msgs.msg.Header.Resolve(msg.header)
    }
    else {
      resolved.header = new std_msgs.msg.Header()
    }

    if (msg.time_label !== undefined) {
      resolved.time_label = msg.time_label;
    }
    else {
      resolved.time_label = 0.0
    }

    if (msg.global_x !== undefined) {
      resolved.global_x = msg.global_x;
    }
    else {
      resolved.global_x = 0
    }

    if (msg.global_y !== undefined) {
      resolved.global_y = msg.global_y;
    }
    else {
      resolved.global_y = 0
    }

    if (msg.global_h !== undefined) {
      resolved.global_h = msg.global_h;
    }
    else {
      resolved.global_h = 0
    }

    if (msg.zone !== undefined) {
      resolved.zone = msg.zone;
    }
    else {
      resolved.zone = 0
    }

    if (msg.longitude !== undefined) {
      resolved.longitude = msg.longitude;
    }
    else {
      resolved.longitude = 0
    }

    if (msg.latitude !== undefined) {
      resolved.latitude = msg.latitude;
    }
    else {
      resolved.latitude = 0
    }

    if (msg.heading !== undefined) {
      resolved.heading = msg.heading;
    }
    else {
      resolved.heading = 0
    }

    if (msg.pitch !== undefined) {
      resolved.pitch = msg.pitch;
    }
    else {
      resolved.pitch = 0
    }

    if (msg.roll !== undefined) {
      resolved.roll = msg.roll;
    }
    else {
      resolved.roll = 0
    }

    if (msg.global_vx !== undefined) {
      resolved.global_vx = msg.global_vx;
    }
    else {
      resolved.global_vx = 0
    }

    if (msg.global_vy !== undefined) {
      resolved.global_vy = msg.global_vy;
    }
    else {
      resolved.global_vy = 0
    }

    if (msg.global_vz !== undefined) {
      resolved.global_vz = msg.global_vz;
    }
    else {
      resolved.global_vz = 0
    }

    if (msg.global_wx !== undefined) {
      resolved.global_wx = msg.global_wx;
    }
    else {
      resolved.global_wx = 0
    }

    if (msg.global_wy !== undefined) {
      resolved.global_wy = msg.global_wy;
    }
    else {
      resolved.global_wy = 0
    }

    if (msg.global_wz !== undefined) {
      resolved.global_wz = msg.global_wz;
    }
    else {
      resolved.global_wz = 0
    }

    if (msg.mileage !== undefined) {
      resolved.mileage = msg.mileage;
    }
    else {
      resolved.mileage = 0
    }

    if (msg.id !== undefined) {
      resolved.id = msg.id;
    }
    else {
      resolved.id = 0
    }

    return resolved;
    }
};

module.exports = dwdx;
