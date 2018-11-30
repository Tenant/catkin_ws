# This Python file uses the following encoding: utf-8
"""autogenerated by genpy from rcs_msg_wrapper/dwdx.msg. Do not edit."""
import sys
python3 = True if sys.hexversion > 0x03000000 else False
import genpy
import struct

import std_msgs.msg

class dwdx(genpy.Message):
  _md5sum = "5892ad3732ec5fee9c5b2efe18dee12c"
  _type = "rcs_msg_wrapper/dwdx"
  _has_header = True #flag to mark the presence of a Header object
  _full_text = """# Header needs to be the first field to refer to std_msgs/Header, other msgs here needs to add the package name such as nav_msgs/Odometry
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
"""
  __slots__ = ['header','time_label','global_x','global_y','global_h','zone','longitude','latitude','heading','pitch','roll','global_vx','global_vy','global_vz','global_wx','global_wy','global_wz','mileage','id']
  _slot_types = ['std_msgs/Header','float64','uint32','uint32','uint32','uint16','int32','int32','uint16','int16','int16','int16','int16','int16','int16','int16','int16','uint32','uint32']

  def __init__(self, *args, **kwds):
    """
    Constructor. Any message fields that are implicitly/explicitly
    set to None will be assigned a default value. The recommend
    use is keyword arguments as this is more robust to future message
    changes.  You cannot mix in-order arguments and keyword arguments.

    The available fields are:
       header,time_label,global_x,global_y,global_h,zone,longitude,latitude,heading,pitch,roll,global_vx,global_vy,global_vz,global_wx,global_wy,global_wz,mileage,id

    :param args: complete set of field values, in .msg order
    :param kwds: use keyword arguments corresponding to message field names
    to set specific fields.
    """
    if args or kwds:
      super(dwdx, self).__init__(*args, **kwds)
      #message fields cannot be None, assign default values for those that are
      if self.header is None:
        self.header = std_msgs.msg.Header()
      if self.time_label is None:
        self.time_label = 0.
      if self.global_x is None:
        self.global_x = 0
      if self.global_y is None:
        self.global_y = 0
      if self.global_h is None:
        self.global_h = 0
      if self.zone is None:
        self.zone = 0
      if self.longitude is None:
        self.longitude = 0
      if self.latitude is None:
        self.latitude = 0
      if self.heading is None:
        self.heading = 0
      if self.pitch is None:
        self.pitch = 0
      if self.roll is None:
        self.roll = 0
      if self.global_vx is None:
        self.global_vx = 0
      if self.global_vy is None:
        self.global_vy = 0
      if self.global_vz is None:
        self.global_vz = 0
      if self.global_wx is None:
        self.global_wx = 0
      if self.global_wy is None:
        self.global_wy = 0
      if self.global_wz is None:
        self.global_wz = 0
      if self.mileage is None:
        self.mileage = 0
      if self.id is None:
        self.id = 0
    else:
      self.header = std_msgs.msg.Header()
      self.time_label = 0.
      self.global_x = 0
      self.global_y = 0
      self.global_h = 0
      self.zone = 0
      self.longitude = 0
      self.latitude = 0
      self.heading = 0
      self.pitch = 0
      self.roll = 0
      self.global_vx = 0
      self.global_vy = 0
      self.global_vz = 0
      self.global_wx = 0
      self.global_wy = 0
      self.global_wz = 0
      self.mileage = 0
      self.id = 0

  def _get_types(self):
    """
    internal API method
    """
    return self._slot_types

  def serialize(self, buff):
    """
    serialize message into buffer
    :param buff: buffer, ``StringIO``
    """
    try:
      _x = self
      buff.write(_get_struct_3I().pack(_x.header.seq, _x.header.stamp.secs, _x.header.stamp.nsecs))
      _x = self.header.frame_id
      length = len(_x)
      if python3 or type(_x) == unicode:
        _x = _x.encode('utf-8')
        length = len(_x)
      buff.write(struct.pack('<I%ss'%length, length, _x))
      _x = self
      buff.write(_get_struct_d3IH2iH8h2I().pack(_x.time_label, _x.global_x, _x.global_y, _x.global_h, _x.zone, _x.longitude, _x.latitude, _x.heading, _x.pitch, _x.roll, _x.global_vx, _x.global_vy, _x.global_vz, _x.global_wx, _x.global_wy, _x.global_wz, _x.mileage, _x.id))
    except struct.error as se: self._check_types(struct.error("%s: '%s' when writing '%s'" % (type(se), str(se), str(locals().get('_x', self)))))
    except TypeError as te: self._check_types(ValueError("%s: '%s' when writing '%s'" % (type(te), str(te), str(locals().get('_x', self)))))

  def deserialize(self, str):
    """
    unpack serialized message in str into this message instance
    :param str: byte array of serialized message, ``str``
    """
    try:
      if self.header is None:
        self.header = std_msgs.msg.Header()
      end = 0
      _x = self
      start = end
      end += 12
      (_x.header.seq, _x.header.stamp.secs, _x.header.stamp.nsecs,) = _get_struct_3I().unpack(str[start:end])
      start = end
      end += 4
      (length,) = _struct_I.unpack(str[start:end])
      start = end
      end += length
      if python3:
        self.header.frame_id = str[start:end].decode('utf-8')
      else:
        self.header.frame_id = str[start:end]
      _x = self
      start = end
      end += 56
      (_x.time_label, _x.global_x, _x.global_y, _x.global_h, _x.zone, _x.longitude, _x.latitude, _x.heading, _x.pitch, _x.roll, _x.global_vx, _x.global_vy, _x.global_vz, _x.global_wx, _x.global_wy, _x.global_wz, _x.mileage, _x.id,) = _get_struct_d3IH2iH8h2I().unpack(str[start:end])
      return self
    except struct.error as e:
      raise genpy.DeserializationError(e) #most likely buffer underfill


  def serialize_numpy(self, buff, numpy):
    """
    serialize message with numpy array types into buffer
    :param buff: buffer, ``StringIO``
    :param numpy: numpy python module
    """
    try:
      _x = self
      buff.write(_get_struct_3I().pack(_x.header.seq, _x.header.stamp.secs, _x.header.stamp.nsecs))
      _x = self.header.frame_id
      length = len(_x)
      if python3 or type(_x) == unicode:
        _x = _x.encode('utf-8')
        length = len(_x)
      buff.write(struct.pack('<I%ss'%length, length, _x))
      _x = self
      buff.write(_get_struct_d3IH2iH8h2I().pack(_x.time_label, _x.global_x, _x.global_y, _x.global_h, _x.zone, _x.longitude, _x.latitude, _x.heading, _x.pitch, _x.roll, _x.global_vx, _x.global_vy, _x.global_vz, _x.global_wx, _x.global_wy, _x.global_wz, _x.mileage, _x.id))
    except struct.error as se: self._check_types(struct.error("%s: '%s' when writing '%s'" % (type(se), str(se), str(locals().get('_x', self)))))
    except TypeError as te: self._check_types(ValueError("%s: '%s' when writing '%s'" % (type(te), str(te), str(locals().get('_x', self)))))

  def deserialize_numpy(self, str, numpy):
    """
    unpack serialized message in str into this message instance using numpy for array types
    :param str: byte array of serialized message, ``str``
    :param numpy: numpy python module
    """
    try:
      if self.header is None:
        self.header = std_msgs.msg.Header()
      end = 0
      _x = self
      start = end
      end += 12
      (_x.header.seq, _x.header.stamp.secs, _x.header.stamp.nsecs,) = _get_struct_3I().unpack(str[start:end])
      start = end
      end += 4
      (length,) = _struct_I.unpack(str[start:end])
      start = end
      end += length
      if python3:
        self.header.frame_id = str[start:end].decode('utf-8')
      else:
        self.header.frame_id = str[start:end]
      _x = self
      start = end
      end += 56
      (_x.time_label, _x.global_x, _x.global_y, _x.global_h, _x.zone, _x.longitude, _x.latitude, _x.heading, _x.pitch, _x.roll, _x.global_vx, _x.global_vy, _x.global_vz, _x.global_wx, _x.global_wy, _x.global_wz, _x.mileage, _x.id,) = _get_struct_d3IH2iH8h2I().unpack(str[start:end])
      return self
    except struct.error as e:
      raise genpy.DeserializationError(e) #most likely buffer underfill

_struct_I = genpy.struct_I
def _get_struct_I():
    global _struct_I
    return _struct_I
_struct_d3IH2iH8h2I = None
def _get_struct_d3IH2iH8h2I():
    global _struct_d3IH2iH8h2I
    if _struct_d3IH2iH8h2I is None:
        _struct_d3IH2iH8h2I = struct.Struct("<d3IH2iH8h2I")
    return _struct_d3IH2iH8h2I
_struct_3I = None
def _get_struct_3I():
    global _struct_3I
    if _struct_3I is None:
        _struct_3I = struct.Struct("<3I")
    return _struct_3I