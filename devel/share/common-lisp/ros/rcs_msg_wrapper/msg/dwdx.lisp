; Auto-generated. Do not edit!


(cl:in-package rcs_msg_wrapper-msg)


;//! \htmlinclude dwdx.msg.html

(cl:defclass <dwdx> (roslisp-msg-protocol:ros-message)
  ((header
    :reader header
    :initarg :header
    :type std_msgs-msg:Header
    :initform (cl:make-instance 'std_msgs-msg:Header))
   (time_label
    :reader time_label
    :initarg :time_label
    :type cl:float
    :initform 0.0)
   (global_x
    :reader global_x
    :initarg :global_x
    :type cl:integer
    :initform 0)
   (global_y
    :reader global_y
    :initarg :global_y
    :type cl:integer
    :initform 0)
   (global_h
    :reader global_h
    :initarg :global_h
    :type cl:integer
    :initform 0)
   (zone
    :reader zone
    :initarg :zone
    :type cl:fixnum
    :initform 0)
   (longitude
    :reader longitude
    :initarg :longitude
    :type cl:integer
    :initform 0)
   (latitude
    :reader latitude
    :initarg :latitude
    :type cl:integer
    :initform 0)
   (heading
    :reader heading
    :initarg :heading
    :type cl:fixnum
    :initform 0)
   (pitch
    :reader pitch
    :initarg :pitch
    :type cl:fixnum
    :initform 0)
   (roll
    :reader roll
    :initarg :roll
    :type cl:fixnum
    :initform 0)
   (global_vx
    :reader global_vx
    :initarg :global_vx
    :type cl:fixnum
    :initform 0)
   (global_vy
    :reader global_vy
    :initarg :global_vy
    :type cl:fixnum
    :initform 0)
   (global_vz
    :reader global_vz
    :initarg :global_vz
    :type cl:fixnum
    :initform 0)
   (global_wx
    :reader global_wx
    :initarg :global_wx
    :type cl:fixnum
    :initform 0)
   (global_wy
    :reader global_wy
    :initarg :global_wy
    :type cl:fixnum
    :initform 0)
   (global_wz
    :reader global_wz
    :initarg :global_wz
    :type cl:fixnum
    :initform 0)
   (mileage
    :reader mileage
    :initarg :mileage
    :type cl:integer
    :initform 0)
   (id
    :reader id
    :initarg :id
    :type cl:integer
    :initform 0))
)

(cl:defclass dwdx (<dwdx>)
  ())

(cl:defmethod cl:initialize-instance :after ((m <dwdx>) cl:&rest args)
  (cl:declare (cl:ignorable args))
  (cl:unless (cl:typep m 'dwdx)
    (roslisp-msg-protocol:msg-deprecation-warning "using old message class name rcs_msg_wrapper-msg:<dwdx> is deprecated: use rcs_msg_wrapper-msg:dwdx instead.")))

(cl:ensure-generic-function 'header-val :lambda-list '(m))
(cl:defmethod header-val ((m <dwdx>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader rcs_msg_wrapper-msg:header-val is deprecated.  Use rcs_msg_wrapper-msg:header instead.")
  (header m))

(cl:ensure-generic-function 'time_label-val :lambda-list '(m))
(cl:defmethod time_label-val ((m <dwdx>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader rcs_msg_wrapper-msg:time_label-val is deprecated.  Use rcs_msg_wrapper-msg:time_label instead.")
  (time_label m))

(cl:ensure-generic-function 'global_x-val :lambda-list '(m))
(cl:defmethod global_x-val ((m <dwdx>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader rcs_msg_wrapper-msg:global_x-val is deprecated.  Use rcs_msg_wrapper-msg:global_x instead.")
  (global_x m))

(cl:ensure-generic-function 'global_y-val :lambda-list '(m))
(cl:defmethod global_y-val ((m <dwdx>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader rcs_msg_wrapper-msg:global_y-val is deprecated.  Use rcs_msg_wrapper-msg:global_y instead.")
  (global_y m))

(cl:ensure-generic-function 'global_h-val :lambda-list '(m))
(cl:defmethod global_h-val ((m <dwdx>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader rcs_msg_wrapper-msg:global_h-val is deprecated.  Use rcs_msg_wrapper-msg:global_h instead.")
  (global_h m))

(cl:ensure-generic-function 'zone-val :lambda-list '(m))
(cl:defmethod zone-val ((m <dwdx>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader rcs_msg_wrapper-msg:zone-val is deprecated.  Use rcs_msg_wrapper-msg:zone instead.")
  (zone m))

(cl:ensure-generic-function 'longitude-val :lambda-list '(m))
(cl:defmethod longitude-val ((m <dwdx>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader rcs_msg_wrapper-msg:longitude-val is deprecated.  Use rcs_msg_wrapper-msg:longitude instead.")
  (longitude m))

(cl:ensure-generic-function 'latitude-val :lambda-list '(m))
(cl:defmethod latitude-val ((m <dwdx>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader rcs_msg_wrapper-msg:latitude-val is deprecated.  Use rcs_msg_wrapper-msg:latitude instead.")
  (latitude m))

(cl:ensure-generic-function 'heading-val :lambda-list '(m))
(cl:defmethod heading-val ((m <dwdx>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader rcs_msg_wrapper-msg:heading-val is deprecated.  Use rcs_msg_wrapper-msg:heading instead.")
  (heading m))

(cl:ensure-generic-function 'pitch-val :lambda-list '(m))
(cl:defmethod pitch-val ((m <dwdx>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader rcs_msg_wrapper-msg:pitch-val is deprecated.  Use rcs_msg_wrapper-msg:pitch instead.")
  (pitch m))

(cl:ensure-generic-function 'roll-val :lambda-list '(m))
(cl:defmethod roll-val ((m <dwdx>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader rcs_msg_wrapper-msg:roll-val is deprecated.  Use rcs_msg_wrapper-msg:roll instead.")
  (roll m))

(cl:ensure-generic-function 'global_vx-val :lambda-list '(m))
(cl:defmethod global_vx-val ((m <dwdx>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader rcs_msg_wrapper-msg:global_vx-val is deprecated.  Use rcs_msg_wrapper-msg:global_vx instead.")
  (global_vx m))

(cl:ensure-generic-function 'global_vy-val :lambda-list '(m))
(cl:defmethod global_vy-val ((m <dwdx>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader rcs_msg_wrapper-msg:global_vy-val is deprecated.  Use rcs_msg_wrapper-msg:global_vy instead.")
  (global_vy m))

(cl:ensure-generic-function 'global_vz-val :lambda-list '(m))
(cl:defmethod global_vz-val ((m <dwdx>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader rcs_msg_wrapper-msg:global_vz-val is deprecated.  Use rcs_msg_wrapper-msg:global_vz instead.")
  (global_vz m))

(cl:ensure-generic-function 'global_wx-val :lambda-list '(m))
(cl:defmethod global_wx-val ((m <dwdx>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader rcs_msg_wrapper-msg:global_wx-val is deprecated.  Use rcs_msg_wrapper-msg:global_wx instead.")
  (global_wx m))

(cl:ensure-generic-function 'global_wy-val :lambda-list '(m))
(cl:defmethod global_wy-val ((m <dwdx>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader rcs_msg_wrapper-msg:global_wy-val is deprecated.  Use rcs_msg_wrapper-msg:global_wy instead.")
  (global_wy m))

(cl:ensure-generic-function 'global_wz-val :lambda-list '(m))
(cl:defmethod global_wz-val ((m <dwdx>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader rcs_msg_wrapper-msg:global_wz-val is deprecated.  Use rcs_msg_wrapper-msg:global_wz instead.")
  (global_wz m))

(cl:ensure-generic-function 'mileage-val :lambda-list '(m))
(cl:defmethod mileage-val ((m <dwdx>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader rcs_msg_wrapper-msg:mileage-val is deprecated.  Use rcs_msg_wrapper-msg:mileage instead.")
  (mileage m))

(cl:ensure-generic-function 'id-val :lambda-list '(m))
(cl:defmethod id-val ((m <dwdx>))
  (roslisp-msg-protocol:msg-deprecation-warning "Using old-style slot reader rcs_msg_wrapper-msg:id-val is deprecated.  Use rcs_msg_wrapper-msg:id instead.")
  (id m))
(cl:defmethod roslisp-msg-protocol:serialize ((msg <dwdx>) ostream)
  "Serializes a message object of type '<dwdx>"
  (roslisp-msg-protocol:serialize (cl:slot-value msg 'header) ostream)
  (cl:let ((bits (roslisp-utils:encode-double-float-bits (cl:slot-value msg 'time_label))))
    (cl:write-byte (cl:ldb (cl:byte 8 0) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 8) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 16) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 24) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 32) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 40) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 48) bits) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 56) bits) ostream))
  (cl:write-byte (cl:ldb (cl:byte 8 0) (cl:slot-value msg 'global_x)) ostream)
  (cl:write-byte (cl:ldb (cl:byte 8 8) (cl:slot-value msg 'global_x)) ostream)
  (cl:write-byte (cl:ldb (cl:byte 8 16) (cl:slot-value msg 'global_x)) ostream)
  (cl:write-byte (cl:ldb (cl:byte 8 24) (cl:slot-value msg 'global_x)) ostream)
  (cl:write-byte (cl:ldb (cl:byte 8 0) (cl:slot-value msg 'global_y)) ostream)
  (cl:write-byte (cl:ldb (cl:byte 8 8) (cl:slot-value msg 'global_y)) ostream)
  (cl:write-byte (cl:ldb (cl:byte 8 16) (cl:slot-value msg 'global_y)) ostream)
  (cl:write-byte (cl:ldb (cl:byte 8 24) (cl:slot-value msg 'global_y)) ostream)
  (cl:write-byte (cl:ldb (cl:byte 8 0) (cl:slot-value msg 'global_h)) ostream)
  (cl:write-byte (cl:ldb (cl:byte 8 8) (cl:slot-value msg 'global_h)) ostream)
  (cl:write-byte (cl:ldb (cl:byte 8 16) (cl:slot-value msg 'global_h)) ostream)
  (cl:write-byte (cl:ldb (cl:byte 8 24) (cl:slot-value msg 'global_h)) ostream)
  (cl:write-byte (cl:ldb (cl:byte 8 0) (cl:slot-value msg 'zone)) ostream)
  (cl:write-byte (cl:ldb (cl:byte 8 8) (cl:slot-value msg 'zone)) ostream)
  (cl:let* ((signed (cl:slot-value msg 'longitude)) (unsigned (cl:if (cl:< signed 0) (cl:+ signed 4294967296) signed)))
    (cl:write-byte (cl:ldb (cl:byte 8 0) unsigned) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 8) unsigned) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 16) unsigned) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 24) unsigned) ostream)
    )
  (cl:let* ((signed (cl:slot-value msg 'latitude)) (unsigned (cl:if (cl:< signed 0) (cl:+ signed 4294967296) signed)))
    (cl:write-byte (cl:ldb (cl:byte 8 0) unsigned) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 8) unsigned) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 16) unsigned) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 24) unsigned) ostream)
    )
  (cl:write-byte (cl:ldb (cl:byte 8 0) (cl:slot-value msg 'heading)) ostream)
  (cl:write-byte (cl:ldb (cl:byte 8 8) (cl:slot-value msg 'heading)) ostream)
  (cl:let* ((signed (cl:slot-value msg 'pitch)) (unsigned (cl:if (cl:< signed 0) (cl:+ signed 65536) signed)))
    (cl:write-byte (cl:ldb (cl:byte 8 0) unsigned) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 8) unsigned) ostream)
    )
  (cl:let* ((signed (cl:slot-value msg 'roll)) (unsigned (cl:if (cl:< signed 0) (cl:+ signed 65536) signed)))
    (cl:write-byte (cl:ldb (cl:byte 8 0) unsigned) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 8) unsigned) ostream)
    )
  (cl:let* ((signed (cl:slot-value msg 'global_vx)) (unsigned (cl:if (cl:< signed 0) (cl:+ signed 65536) signed)))
    (cl:write-byte (cl:ldb (cl:byte 8 0) unsigned) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 8) unsigned) ostream)
    )
  (cl:let* ((signed (cl:slot-value msg 'global_vy)) (unsigned (cl:if (cl:< signed 0) (cl:+ signed 65536) signed)))
    (cl:write-byte (cl:ldb (cl:byte 8 0) unsigned) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 8) unsigned) ostream)
    )
  (cl:let* ((signed (cl:slot-value msg 'global_vz)) (unsigned (cl:if (cl:< signed 0) (cl:+ signed 65536) signed)))
    (cl:write-byte (cl:ldb (cl:byte 8 0) unsigned) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 8) unsigned) ostream)
    )
  (cl:let* ((signed (cl:slot-value msg 'global_wx)) (unsigned (cl:if (cl:< signed 0) (cl:+ signed 65536) signed)))
    (cl:write-byte (cl:ldb (cl:byte 8 0) unsigned) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 8) unsigned) ostream)
    )
  (cl:let* ((signed (cl:slot-value msg 'global_wy)) (unsigned (cl:if (cl:< signed 0) (cl:+ signed 65536) signed)))
    (cl:write-byte (cl:ldb (cl:byte 8 0) unsigned) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 8) unsigned) ostream)
    )
  (cl:let* ((signed (cl:slot-value msg 'global_wz)) (unsigned (cl:if (cl:< signed 0) (cl:+ signed 65536) signed)))
    (cl:write-byte (cl:ldb (cl:byte 8 0) unsigned) ostream)
    (cl:write-byte (cl:ldb (cl:byte 8 8) unsigned) ostream)
    )
  (cl:write-byte (cl:ldb (cl:byte 8 0) (cl:slot-value msg 'mileage)) ostream)
  (cl:write-byte (cl:ldb (cl:byte 8 8) (cl:slot-value msg 'mileage)) ostream)
  (cl:write-byte (cl:ldb (cl:byte 8 16) (cl:slot-value msg 'mileage)) ostream)
  (cl:write-byte (cl:ldb (cl:byte 8 24) (cl:slot-value msg 'mileage)) ostream)
  (cl:write-byte (cl:ldb (cl:byte 8 0) (cl:slot-value msg 'id)) ostream)
  (cl:write-byte (cl:ldb (cl:byte 8 8) (cl:slot-value msg 'id)) ostream)
  (cl:write-byte (cl:ldb (cl:byte 8 16) (cl:slot-value msg 'id)) ostream)
  (cl:write-byte (cl:ldb (cl:byte 8 24) (cl:slot-value msg 'id)) ostream)
)
(cl:defmethod roslisp-msg-protocol:deserialize ((msg <dwdx>) istream)
  "Deserializes a message object of type '<dwdx>"
  (roslisp-msg-protocol:deserialize (cl:slot-value msg 'header) istream)
    (cl:let ((bits 0))
      (cl:setf (cl:ldb (cl:byte 8 0) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 8) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 16) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 24) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 32) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 40) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 48) bits) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 56) bits) (cl:read-byte istream))
    (cl:setf (cl:slot-value msg 'time_label) (roslisp-utils:decode-double-float-bits bits)))
    (cl:setf (cl:ldb (cl:byte 8 0) (cl:slot-value msg 'global_x)) (cl:read-byte istream))
    (cl:setf (cl:ldb (cl:byte 8 8) (cl:slot-value msg 'global_x)) (cl:read-byte istream))
    (cl:setf (cl:ldb (cl:byte 8 16) (cl:slot-value msg 'global_x)) (cl:read-byte istream))
    (cl:setf (cl:ldb (cl:byte 8 24) (cl:slot-value msg 'global_x)) (cl:read-byte istream))
    (cl:setf (cl:ldb (cl:byte 8 0) (cl:slot-value msg 'global_y)) (cl:read-byte istream))
    (cl:setf (cl:ldb (cl:byte 8 8) (cl:slot-value msg 'global_y)) (cl:read-byte istream))
    (cl:setf (cl:ldb (cl:byte 8 16) (cl:slot-value msg 'global_y)) (cl:read-byte istream))
    (cl:setf (cl:ldb (cl:byte 8 24) (cl:slot-value msg 'global_y)) (cl:read-byte istream))
    (cl:setf (cl:ldb (cl:byte 8 0) (cl:slot-value msg 'global_h)) (cl:read-byte istream))
    (cl:setf (cl:ldb (cl:byte 8 8) (cl:slot-value msg 'global_h)) (cl:read-byte istream))
    (cl:setf (cl:ldb (cl:byte 8 16) (cl:slot-value msg 'global_h)) (cl:read-byte istream))
    (cl:setf (cl:ldb (cl:byte 8 24) (cl:slot-value msg 'global_h)) (cl:read-byte istream))
    (cl:setf (cl:ldb (cl:byte 8 0) (cl:slot-value msg 'zone)) (cl:read-byte istream))
    (cl:setf (cl:ldb (cl:byte 8 8) (cl:slot-value msg 'zone)) (cl:read-byte istream))
    (cl:let ((unsigned 0))
      (cl:setf (cl:ldb (cl:byte 8 0) unsigned) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 8) unsigned) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 16) unsigned) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 24) unsigned) (cl:read-byte istream))
      (cl:setf (cl:slot-value msg 'longitude) (cl:if (cl:< unsigned 2147483648) unsigned (cl:- unsigned 4294967296))))
    (cl:let ((unsigned 0))
      (cl:setf (cl:ldb (cl:byte 8 0) unsigned) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 8) unsigned) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 16) unsigned) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 24) unsigned) (cl:read-byte istream))
      (cl:setf (cl:slot-value msg 'latitude) (cl:if (cl:< unsigned 2147483648) unsigned (cl:- unsigned 4294967296))))
    (cl:setf (cl:ldb (cl:byte 8 0) (cl:slot-value msg 'heading)) (cl:read-byte istream))
    (cl:setf (cl:ldb (cl:byte 8 8) (cl:slot-value msg 'heading)) (cl:read-byte istream))
    (cl:let ((unsigned 0))
      (cl:setf (cl:ldb (cl:byte 8 0) unsigned) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 8) unsigned) (cl:read-byte istream))
      (cl:setf (cl:slot-value msg 'pitch) (cl:if (cl:< unsigned 32768) unsigned (cl:- unsigned 65536))))
    (cl:let ((unsigned 0))
      (cl:setf (cl:ldb (cl:byte 8 0) unsigned) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 8) unsigned) (cl:read-byte istream))
      (cl:setf (cl:slot-value msg 'roll) (cl:if (cl:< unsigned 32768) unsigned (cl:- unsigned 65536))))
    (cl:let ((unsigned 0))
      (cl:setf (cl:ldb (cl:byte 8 0) unsigned) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 8) unsigned) (cl:read-byte istream))
      (cl:setf (cl:slot-value msg 'global_vx) (cl:if (cl:< unsigned 32768) unsigned (cl:- unsigned 65536))))
    (cl:let ((unsigned 0))
      (cl:setf (cl:ldb (cl:byte 8 0) unsigned) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 8) unsigned) (cl:read-byte istream))
      (cl:setf (cl:slot-value msg 'global_vy) (cl:if (cl:< unsigned 32768) unsigned (cl:- unsigned 65536))))
    (cl:let ((unsigned 0))
      (cl:setf (cl:ldb (cl:byte 8 0) unsigned) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 8) unsigned) (cl:read-byte istream))
      (cl:setf (cl:slot-value msg 'global_vz) (cl:if (cl:< unsigned 32768) unsigned (cl:- unsigned 65536))))
    (cl:let ((unsigned 0))
      (cl:setf (cl:ldb (cl:byte 8 0) unsigned) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 8) unsigned) (cl:read-byte istream))
      (cl:setf (cl:slot-value msg 'global_wx) (cl:if (cl:< unsigned 32768) unsigned (cl:- unsigned 65536))))
    (cl:let ((unsigned 0))
      (cl:setf (cl:ldb (cl:byte 8 0) unsigned) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 8) unsigned) (cl:read-byte istream))
      (cl:setf (cl:slot-value msg 'global_wy) (cl:if (cl:< unsigned 32768) unsigned (cl:- unsigned 65536))))
    (cl:let ((unsigned 0))
      (cl:setf (cl:ldb (cl:byte 8 0) unsigned) (cl:read-byte istream))
      (cl:setf (cl:ldb (cl:byte 8 8) unsigned) (cl:read-byte istream))
      (cl:setf (cl:slot-value msg 'global_wz) (cl:if (cl:< unsigned 32768) unsigned (cl:- unsigned 65536))))
    (cl:setf (cl:ldb (cl:byte 8 0) (cl:slot-value msg 'mileage)) (cl:read-byte istream))
    (cl:setf (cl:ldb (cl:byte 8 8) (cl:slot-value msg 'mileage)) (cl:read-byte istream))
    (cl:setf (cl:ldb (cl:byte 8 16) (cl:slot-value msg 'mileage)) (cl:read-byte istream))
    (cl:setf (cl:ldb (cl:byte 8 24) (cl:slot-value msg 'mileage)) (cl:read-byte istream))
    (cl:setf (cl:ldb (cl:byte 8 0) (cl:slot-value msg 'id)) (cl:read-byte istream))
    (cl:setf (cl:ldb (cl:byte 8 8) (cl:slot-value msg 'id)) (cl:read-byte istream))
    (cl:setf (cl:ldb (cl:byte 8 16) (cl:slot-value msg 'id)) (cl:read-byte istream))
    (cl:setf (cl:ldb (cl:byte 8 24) (cl:slot-value msg 'id)) (cl:read-byte istream))
  msg
)
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql '<dwdx>)))
  "Returns string type for a message object of type '<dwdx>"
  "rcs_msg_wrapper/dwdx")
(cl:defmethod roslisp-msg-protocol:ros-datatype ((msg (cl:eql 'dwdx)))
  "Returns string type for a message object of type 'dwdx"
  "rcs_msg_wrapper/dwdx")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql '<dwdx>)))
  "Returns md5sum for a message object of type '<dwdx>"
  "5892ad3732ec5fee9c5b2efe18dee12c")
(cl:defmethod roslisp-msg-protocol:md5sum ((type (cl:eql 'dwdx)))
  "Returns md5sum for a message object of type 'dwdx"
  "5892ad3732ec5fee9c5b2efe18dee12c")
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql '<dwdx>)))
  "Returns full string definition for message of type '<dwdx>"
  (cl:format cl:nil "# Header needs to be the first field to refer to std_msgs/Header, other msgs here needs to add the package name such as nav_msgs/Odometry~%Header header~%float64 time_label~%uint32 global_x~%uint32 global_y~%uint32 global_h~%uint16 zone~%int32 longitude~%int32 latitude~%uint16 heading~%int16 pitch~%int16 roll~%int16 global_vx~%int16 global_vy~%int16 global_vz~%int16 global_wx~%int16 global_wy~%int16 global_wz~%uint32 mileage~%uint32 id~%~%================================================================================~%MSG: std_msgs/Header~%# Standard metadata for higher-level stamped data types.~%# This is generally used to communicate timestamped data ~%# in a particular coordinate frame.~%# ~%# sequence ID: consecutively increasing ID ~%uint32 seq~%#Two-integer timestamp that is expressed as:~%# * stamp.sec: seconds (stamp_secs) since epoch (in Python the variable is called 'secs')~%# * stamp.nsec: nanoseconds since stamp_secs (in Python the variable is called 'nsecs')~%# time-handling sugar is provided by the client library~%time stamp~%#Frame this data is associated with~%# 0: no frame~%# 1: global frame~%string frame_id~%~%~%"))
(cl:defmethod roslisp-msg-protocol:message-definition ((type (cl:eql 'dwdx)))
  "Returns full string definition for message of type 'dwdx"
  (cl:format cl:nil "# Header needs to be the first field to refer to std_msgs/Header, other msgs here needs to add the package name such as nav_msgs/Odometry~%Header header~%float64 time_label~%uint32 global_x~%uint32 global_y~%uint32 global_h~%uint16 zone~%int32 longitude~%int32 latitude~%uint16 heading~%int16 pitch~%int16 roll~%int16 global_vx~%int16 global_vy~%int16 global_vz~%int16 global_wx~%int16 global_wy~%int16 global_wz~%uint32 mileage~%uint32 id~%~%================================================================================~%MSG: std_msgs/Header~%# Standard metadata for higher-level stamped data types.~%# This is generally used to communicate timestamped data ~%# in a particular coordinate frame.~%# ~%# sequence ID: consecutively increasing ID ~%uint32 seq~%#Two-integer timestamp that is expressed as:~%# * stamp.sec: seconds (stamp_secs) since epoch (in Python the variable is called 'secs')~%# * stamp.nsec: nanoseconds since stamp_secs (in Python the variable is called 'nsecs')~%# time-handling sugar is provided by the client library~%time stamp~%#Frame this data is associated with~%# 0: no frame~%# 1: global frame~%string frame_id~%~%~%"))
(cl:defmethod roslisp-msg-protocol:serialization-length ((msg <dwdx>))
  (cl:+ 0
     (roslisp-msg-protocol:serialization-length (cl:slot-value msg 'header))
     8
     4
     4
     4
     2
     4
     4
     2
     2
     2
     2
     2
     2
     2
     2
     2
     4
     4
))
(cl:defmethod roslisp-msg-protocol:ros-message-to-list ((msg <dwdx>))
  "Converts a ROS message object to a list"
  (cl:list 'dwdx
    (cl:cons ':header (header msg))
    (cl:cons ':time_label (time_label msg))
    (cl:cons ':global_x (global_x msg))
    (cl:cons ':global_y (global_y msg))
    (cl:cons ':global_h (global_h msg))
    (cl:cons ':zone (zone msg))
    (cl:cons ':longitude (longitude msg))
    (cl:cons ':latitude (latitude msg))
    (cl:cons ':heading (heading msg))
    (cl:cons ':pitch (pitch msg))
    (cl:cons ':roll (roll msg))
    (cl:cons ':global_vx (global_vx msg))
    (cl:cons ':global_vy (global_vy msg))
    (cl:cons ':global_vz (global_vz msg))
    (cl:cons ':global_wx (global_wx msg))
    (cl:cons ':global_wy (global_wy msg))
    (cl:cons ':global_wz (global_wz msg))
    (cl:cons ':mileage (mileage msg))
    (cl:cons ':id (id msg))
))
