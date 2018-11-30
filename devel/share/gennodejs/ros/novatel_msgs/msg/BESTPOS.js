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

class BESTPOS {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.header = null;
      this.solution_status = null;
      this.position_type = null;
      this.latitude = null;
      this.longitude = null;
      this.altitude = null;
      this.undulation = null;
      this.datum_id = null;
      this.latitude_std = null;
      this.longitude_std = null;
      this.altitude_std = null;
      this.stn_id = null;
      this.diff_age = null;
      this.sol_age = null;
      this.svs = null;
      this.sol_svs = null;
      this.l1_svs = null;
      this.mult_svs = null;
      this.reserved = null;
      this.extsolstat = null;
      this.gal_sig_mask = null;
      this.sig_mask = null;
    }
    else {
      if (initObj.hasOwnProperty('header')) {
        this.header = initObj.header
      }
      else {
        this.header = new CommonHeader();
      }
      if (initObj.hasOwnProperty('solution_status')) {
        this.solution_status = initObj.solution_status
      }
      else {
        this.solution_status = 0;
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
      if (initObj.hasOwnProperty('datum_id')) {
        this.datum_id = initObj.datum_id
      }
      else {
        this.datum_id = 0;
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
      if (initObj.hasOwnProperty('stn_id')) {
        this.stn_id = initObj.stn_id
      }
      else {
        this.stn_id = new Array(4).fill(0);
      }
      if (initObj.hasOwnProperty('diff_age')) {
        this.diff_age = initObj.diff_age
      }
      else {
        this.diff_age = 0.0;
      }
      if (initObj.hasOwnProperty('sol_age')) {
        this.sol_age = initObj.sol_age
      }
      else {
        this.sol_age = 0.0;
      }
      if (initObj.hasOwnProperty('svs')) {
        this.svs = initObj.svs
      }
      else {
        this.svs = 0;
      }
      if (initObj.hasOwnProperty('sol_svs')) {
        this.sol_svs = initObj.sol_svs
      }
      else {
        this.sol_svs = 0;
      }
      if (initObj.hasOwnProperty('l1_svs')) {
        this.l1_svs = initObj.l1_svs
      }
      else {
        this.l1_svs = 0;
      }
      if (initObj.hasOwnProperty('mult_svs')) {
        this.mult_svs = initObj.mult_svs
      }
      else {
        this.mult_svs = 0;
      }
      if (initObj.hasOwnProperty('reserved')) {
        this.reserved = initObj.reserved
      }
      else {
        this.reserved = 0;
      }
      if (initObj.hasOwnProperty('extsolstat')) {
        this.extsolstat = initObj.extsolstat
      }
      else {
        this.extsolstat = 0;
      }
      if (initObj.hasOwnProperty('gal_sig_mask')) {
        this.gal_sig_mask = initObj.gal_sig_mask
      }
      else {
        this.gal_sig_mask = 0;
      }
      if (initObj.hasOwnProperty('sig_mask')) {
        this.sig_mask = initObj.sig_mask
      }
      else {
        this.sig_mask = 0;
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type BESTPOS
    // Serialize message field [header]
    bufferOffset = CommonHeader.serialize(obj.header, buffer, bufferOffset);
    // Serialize message field [solution_status]
    bufferOffset = _serializer.uint32(obj.solution_status, buffer, bufferOffset);
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
    // Serialize message field [datum_id]
    bufferOffset = _serializer.uint32(obj.datum_id, buffer, bufferOffset);
    // Serialize message field [latitude_std]
    bufferOffset = _serializer.float32(obj.latitude_std, buffer, bufferOffset);
    // Serialize message field [longitude_std]
    bufferOffset = _serializer.float32(obj.longitude_std, buffer, bufferOffset);
    // Serialize message field [altitude_std]
    bufferOffset = _serializer.float32(obj.altitude_std, buffer, bufferOffset);
    // Check that the constant length array field [stn_id] has the right length
    if (obj.stn_id.length !== 4) {
      throw new Error('Unable to serialize array field stn_id - length must be 4')
    }
    // Serialize message field [stn_id]
    bufferOffset = _arraySerializer.char(obj.stn_id, buffer, bufferOffset, 4);
    // Serialize message field [diff_age]
    bufferOffset = _serializer.float32(obj.diff_age, buffer, bufferOffset);
    // Serialize message field [sol_age]
    bufferOffset = _serializer.float32(obj.sol_age, buffer, bufferOffset);
    // Serialize message field [svs]
    bufferOffset = _serializer.uint8(obj.svs, buffer, bufferOffset);
    // Serialize message field [sol_svs]
    bufferOffset = _serializer.uint8(obj.sol_svs, buffer, bufferOffset);
    // Serialize message field [l1_svs]
    bufferOffset = _serializer.uint8(obj.l1_svs, buffer, bufferOffset);
    // Serialize message field [mult_svs]
    bufferOffset = _serializer.uint8(obj.mult_svs, buffer, bufferOffset);
    // Serialize message field [reserved]
    bufferOffset = _serializer.uint8(obj.reserved, buffer, bufferOffset);
    // Serialize message field [extsolstat]
    bufferOffset = _serializer.uint8(obj.extsolstat, buffer, bufferOffset);
    // Serialize message field [gal_sig_mask]
    bufferOffset = _serializer.uint8(obj.gal_sig_mask, buffer, bufferOffset);
    // Serialize message field [sig_mask]
    bufferOffset = _serializer.uint8(obj.sig_mask, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type BESTPOS
    let len;
    let data = new BESTPOS(null);
    // Deserialize message field [header]
    data.header = CommonHeader.deserialize(buffer, bufferOffset);
    // Deserialize message field [solution_status]
    data.solution_status = _deserializer.uint32(buffer, bufferOffset);
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
    // Deserialize message field [datum_id]
    data.datum_id = _deserializer.uint32(buffer, bufferOffset);
    // Deserialize message field [latitude_std]
    data.latitude_std = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [longitude_std]
    data.longitude_std = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [altitude_std]
    data.altitude_std = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [stn_id]
    data.stn_id = _arrayDeserializer.char(buffer, bufferOffset, 4)
    // Deserialize message field [diff_age]
    data.diff_age = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [sol_age]
    data.sol_age = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [svs]
    data.svs = _deserializer.uint8(buffer, bufferOffset);
    // Deserialize message field [sol_svs]
    data.sol_svs = _deserializer.uint8(buffer, bufferOffset);
    // Deserialize message field [l1_svs]
    data.l1_svs = _deserializer.uint8(buffer, bufferOffset);
    // Deserialize message field [mult_svs]
    data.mult_svs = _deserializer.uint8(buffer, bufferOffset);
    // Deserialize message field [reserved]
    data.reserved = _deserializer.uint8(buffer, bufferOffset);
    // Deserialize message field [extsolstat]
    data.extsolstat = _deserializer.uint8(buffer, bufferOffset);
    // Deserialize message field [gal_sig_mask]
    data.gal_sig_mask = _deserializer.uint8(buffer, bufferOffset);
    // Deserialize message field [sig_mask]
    data.sig_mask = _deserializer.uint8(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    return 96;
  }

  static datatype() {
    // Returns string type for a message object
    return 'novatel_msgs/BESTPOS';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '8321b9523105411643891c8653878967';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # message 42
    novatel_msgs/CommonHeader header
    
    # Table 21 in the SPAN on OEM6 manual.
    # See: http://www.novatel.com/assets/Documents/Manuals/OM-20000144UM.pdf#page=99
    uint32 solution_status
    uint32 SOLUTION_STATUS_SOLUTION_COMPUTED=0
    uint32 SOLUTION_STATUS_INSUFFICIENT_OBSERVATIONS=1
    uint32 SOLUTION_STATUS_NO_CONVERGENCE=2
    uint32 SOLUTION_STATUS_SINGULARITY_AT_PARAMETERS_MATRIX=3
    uint32 SOLUTION_STATUS_COVARIANCE_TRACE_EXCEEDS_MAXIMUM=4
    uint32 SOLUTION_STATUS_TEST_DISTANCE_EXCEEDED=5
    uint32 SOLUTION_STATUS_COLD_START=6
    uint32 SOLUTION_STATUS_VELOCITY_OR_HEIGHT_LIMIT_EXCEEDED=7
    uint32 SOLUTION_STATUS_VARIANCE_EXCEEDS_LIMITS=8
    uint32 SOLUTION_STATUS_RESIDUALS_TOO_LARGE=9
    uint32 SOLUTION_STATUS_INTEGRITY_WARNING=13
    uint32 SOLUTION_STATUS_PENDING=18
    uint32 SOLUTION_STATUS_INVALID_FIX=19
    uint32 SOLUTION_STATUS_INVALID_RATE=22
    
    # Table 22 in the SPAN on OEM6 manual.
    # http://www.novatel.com/assets/Documents/Manuals/OM-20000144UM.pdf#page=100
    uint32 position_type
    uint32 POSITION_TYPE_NONE=0
    uint32 POSITION_TYPE_FIXED=1
    uint32 POSITION_TYPE_FIXEDHEIGHT=2
    uint32 POSITION_TYPE_FLOATCONV=4
    uint32 POSITION_TYPE_WIDELANE=5
    uint32 POSITION_TYPE_NARROWLANE=6
    uint32 POSITION_TYPE_DOPPLER_VELOCITY=8
    uint32 POSITION_TYPE_SINGLE=16
    uint32 POSITION_TYPE_PSRDIFF=17
    uint32 POSITION_TYPE_WAAS=18
    uint32 POSITION_TYPE_PROPAGATED=19
    uint32 POSITION_TYPE_OMNISTAR=20
    uint32 POSITION_TYPE_L1_FLOAT=32
    uint32 POSITION_TYPE_IONOFREE_FLOAT=33
    uint32 POSITION_TYPE_NARROW_FLOAT=34
    uint32 POSITION_TYPE_L1_INT=48
    uint32 POSITION_TYPE_WIDE_INT=49
    uint32 POSITION_TYPE_NARROW_INT=50
    uint32 POSITION_TYPE_RTK_DIRECT_INS=51
    uint32 POSITION_TYPE_INS_SBAS=52
    uint32 POSITION_TYPE_INS_PSRSP=53
    uint32 POSITION_TYPE_INS_PSRDIFF=54
    uint32 POSITION_TYPE_INS_RTKFLOAT=55
    uint32 POSITION_TYPE_INS_RTKFIXED=56
    uint32 POSITION_TYPE_INS_OMNISTAR=57
    uint32 POSITION_TYPE_INS_OMNISTAR_HP=58
    uint32 POSITION_TYPE_INS_OMNISTAR_XP=59
    uint32 POSITION_TYPE_OMNISTAR_HP=64
    uint32 POSITION_TYPE_OMNISTAR_XP=65
    uint32 POSITION_TYPE_PPP_CONVERGING=68
    uint32 POSITION_TYPE_PPP=69
    uint32 POSITION_TYPE_INS_PPP_CONVERGING=73
    uint32 POSITION_TYPE_INS_PPP=74
    
    float64 latitude
    float64 longitude
    float64 altitude
    
    float32 undulation
    uint32 datum_id
    
    float32 latitude_std
    float32 longitude_std
    float32 altitude_std
    
    char[4] stn_id
    
    float32 diff_age
    float32 sol_age
    
    uint8 svs
    uint8 sol_svs
    uint8 l1_svs
    uint8 mult_svs
    uint8 reserved
    uint8 extsolstat
    uint8 gal_sig_mask
    uint8 sig_mask
    
    
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
    const resolved = new BESTPOS(null);
    if (msg.header !== undefined) {
      resolved.header = CommonHeader.Resolve(msg.header)
    }
    else {
      resolved.header = new CommonHeader()
    }

    if (msg.solution_status !== undefined) {
      resolved.solution_status = msg.solution_status;
    }
    else {
      resolved.solution_status = 0
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

    if (msg.datum_id !== undefined) {
      resolved.datum_id = msg.datum_id;
    }
    else {
      resolved.datum_id = 0
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

    if (msg.stn_id !== undefined) {
      resolved.stn_id = msg.stn_id;
    }
    else {
      resolved.stn_id = new Array(4).fill(0)
    }

    if (msg.diff_age !== undefined) {
      resolved.diff_age = msg.diff_age;
    }
    else {
      resolved.diff_age = 0.0
    }

    if (msg.sol_age !== undefined) {
      resolved.sol_age = msg.sol_age;
    }
    else {
      resolved.sol_age = 0.0
    }

    if (msg.svs !== undefined) {
      resolved.svs = msg.svs;
    }
    else {
      resolved.svs = 0
    }

    if (msg.sol_svs !== undefined) {
      resolved.sol_svs = msg.sol_svs;
    }
    else {
      resolved.sol_svs = 0
    }

    if (msg.l1_svs !== undefined) {
      resolved.l1_svs = msg.l1_svs;
    }
    else {
      resolved.l1_svs = 0
    }

    if (msg.mult_svs !== undefined) {
      resolved.mult_svs = msg.mult_svs;
    }
    else {
      resolved.mult_svs = 0
    }

    if (msg.reserved !== undefined) {
      resolved.reserved = msg.reserved;
    }
    else {
      resolved.reserved = 0
    }

    if (msg.extsolstat !== undefined) {
      resolved.extsolstat = msg.extsolstat;
    }
    else {
      resolved.extsolstat = 0
    }

    if (msg.gal_sig_mask !== undefined) {
      resolved.gal_sig_mask = msg.gal_sig_mask;
    }
    else {
      resolved.gal_sig_mask = 0
    }

    if (msg.sig_mask !== undefined) {
      resolved.sig_mask = msg.sig_mask;
    }
    else {
      resolved.sig_mask = 0
    }

    return resolved;
    }
};

// Constants for message
BESTPOS.Constants = {
  SOLUTION_STATUS_SOLUTION_COMPUTED: 0,
  SOLUTION_STATUS_INSUFFICIENT_OBSERVATIONS: 1,
  SOLUTION_STATUS_NO_CONVERGENCE: 2,
  SOLUTION_STATUS_SINGULARITY_AT_PARAMETERS_MATRIX: 3,
  SOLUTION_STATUS_COVARIANCE_TRACE_EXCEEDS_MAXIMUM: 4,
  SOLUTION_STATUS_TEST_DISTANCE_EXCEEDED: 5,
  SOLUTION_STATUS_COLD_START: 6,
  SOLUTION_STATUS_VELOCITY_OR_HEIGHT_LIMIT_EXCEEDED: 7,
  SOLUTION_STATUS_VARIANCE_EXCEEDS_LIMITS: 8,
  SOLUTION_STATUS_RESIDUALS_TOO_LARGE: 9,
  SOLUTION_STATUS_INTEGRITY_WARNING: 13,
  SOLUTION_STATUS_PENDING: 18,
  SOLUTION_STATUS_INVALID_FIX: 19,
  SOLUTION_STATUS_INVALID_RATE: 22,
  POSITION_TYPE_NONE: 0,
  POSITION_TYPE_FIXED: 1,
  POSITION_TYPE_FIXEDHEIGHT: 2,
  POSITION_TYPE_FLOATCONV: 4,
  POSITION_TYPE_WIDELANE: 5,
  POSITION_TYPE_NARROWLANE: 6,
  POSITION_TYPE_DOPPLER_VELOCITY: 8,
  POSITION_TYPE_SINGLE: 16,
  POSITION_TYPE_PSRDIFF: 17,
  POSITION_TYPE_WAAS: 18,
  POSITION_TYPE_PROPAGATED: 19,
  POSITION_TYPE_OMNISTAR: 20,
  POSITION_TYPE_L1_FLOAT: 32,
  POSITION_TYPE_IONOFREE_FLOAT: 33,
  POSITION_TYPE_NARROW_FLOAT: 34,
  POSITION_TYPE_L1_INT: 48,
  POSITION_TYPE_WIDE_INT: 49,
  POSITION_TYPE_NARROW_INT: 50,
  POSITION_TYPE_RTK_DIRECT_INS: 51,
  POSITION_TYPE_INS_SBAS: 52,
  POSITION_TYPE_INS_PSRSP: 53,
  POSITION_TYPE_INS_PSRDIFF: 54,
  POSITION_TYPE_INS_RTKFLOAT: 55,
  POSITION_TYPE_INS_RTKFIXED: 56,
  POSITION_TYPE_INS_OMNISTAR: 57,
  POSITION_TYPE_INS_OMNISTAR_HP: 58,
  POSITION_TYPE_INS_OMNISTAR_XP: 59,
  POSITION_TYPE_OMNISTAR_HP: 64,
  POSITION_TYPE_OMNISTAR_XP: 65,
  POSITION_TYPE_PPP_CONVERGING: 68,
  POSITION_TYPE_PPP: 69,
  POSITION_TYPE_INS_PPP_CONVERGING: 73,
  POSITION_TYPE_INS_PPP: 74,
}

module.exports = BESTPOS;
