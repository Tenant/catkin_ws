;; Auto-generated. Do not edit!


(when (boundp 'rcs_msg_wrapper::dwdx)
  (if (not (find-package "RCS_MSG_WRAPPER"))
    (make-package "RCS_MSG_WRAPPER"))
  (shadow 'dwdx (find-package "RCS_MSG_WRAPPER")))
(unless (find-package "RCS_MSG_WRAPPER::DWDX")
  (make-package "RCS_MSG_WRAPPER::DWDX"))

(in-package "ROS")
;;//! \htmlinclude dwdx.msg.html
(if (not (find-package "STD_MSGS"))
  (ros::roseus-add-msgs "std_msgs"))


(defclass rcs_msg_wrapper::dwdx
  :super ros::object
  :slots (_header _time_label _global_x _global_y _global_h _zone _longitude _latitude _heading _pitch _roll _global_vx _global_vy _global_vz _global_wx _global_wy _global_wz _mileage _id ))

(defmethod rcs_msg_wrapper::dwdx
  (:init
   (&key
    ((:header __header) (instance std_msgs::Header :init))
    ((:time_label __time_label) 0.0)
    ((:global_x __global_x) 0)
    ((:global_y __global_y) 0)
    ((:global_h __global_h) 0)
    ((:zone __zone) 0)
    ((:longitude __longitude) 0)
    ((:latitude __latitude) 0)
    ((:heading __heading) 0)
    ((:pitch __pitch) 0)
    ((:roll __roll) 0)
    ((:global_vx __global_vx) 0)
    ((:global_vy __global_vy) 0)
    ((:global_vz __global_vz) 0)
    ((:global_wx __global_wx) 0)
    ((:global_wy __global_wy) 0)
    ((:global_wz __global_wz) 0)
    ((:mileage __mileage) 0)
    ((:id __id) 0)
    )
   (send-super :init)
   (setq _header __header)
   (setq _time_label (float __time_label))
   (setq _global_x (round __global_x))
   (setq _global_y (round __global_y))
   (setq _global_h (round __global_h))
   (setq _zone (round __zone))
   (setq _longitude (round __longitude))
   (setq _latitude (round __latitude))
   (setq _heading (round __heading))
   (setq _pitch (round __pitch))
   (setq _roll (round __roll))
   (setq _global_vx (round __global_vx))
   (setq _global_vy (round __global_vy))
   (setq _global_vz (round __global_vz))
   (setq _global_wx (round __global_wx))
   (setq _global_wy (round __global_wy))
   (setq _global_wz (round __global_wz))
   (setq _mileage (round __mileage))
   (setq _id (round __id))
   self)
  (:header
   (&rest __header)
   (if (keywordp (car __header))
       (send* _header __header)
     (progn
       (if __header (setq _header (car __header)))
       _header)))
  (:time_label
   (&optional __time_label)
   (if __time_label (setq _time_label __time_label)) _time_label)
  (:global_x
   (&optional __global_x)
   (if __global_x (setq _global_x __global_x)) _global_x)
  (:global_y
   (&optional __global_y)
   (if __global_y (setq _global_y __global_y)) _global_y)
  (:global_h
   (&optional __global_h)
   (if __global_h (setq _global_h __global_h)) _global_h)
  (:zone
   (&optional __zone)
   (if __zone (setq _zone __zone)) _zone)
  (:longitude
   (&optional __longitude)
   (if __longitude (setq _longitude __longitude)) _longitude)
  (:latitude
   (&optional __latitude)
   (if __latitude (setq _latitude __latitude)) _latitude)
  (:heading
   (&optional __heading)
   (if __heading (setq _heading __heading)) _heading)
  (:pitch
   (&optional __pitch)
   (if __pitch (setq _pitch __pitch)) _pitch)
  (:roll
   (&optional __roll)
   (if __roll (setq _roll __roll)) _roll)
  (:global_vx
   (&optional __global_vx)
   (if __global_vx (setq _global_vx __global_vx)) _global_vx)
  (:global_vy
   (&optional __global_vy)
   (if __global_vy (setq _global_vy __global_vy)) _global_vy)
  (:global_vz
   (&optional __global_vz)
   (if __global_vz (setq _global_vz __global_vz)) _global_vz)
  (:global_wx
   (&optional __global_wx)
   (if __global_wx (setq _global_wx __global_wx)) _global_wx)
  (:global_wy
   (&optional __global_wy)
   (if __global_wy (setq _global_wy __global_wy)) _global_wy)
  (:global_wz
   (&optional __global_wz)
   (if __global_wz (setq _global_wz __global_wz)) _global_wz)
  (:mileage
   (&optional __mileage)
   (if __mileage (setq _mileage __mileage)) _mileage)
  (:id
   (&optional __id)
   (if __id (setq _id __id)) _id)
  (:serialization-length
   ()
   (+
    ;; std_msgs/Header _header
    (send _header :serialization-length)
    ;; float64 _time_label
    8
    ;; uint32 _global_x
    4
    ;; uint32 _global_y
    4
    ;; uint32 _global_h
    4
    ;; uint16 _zone
    2
    ;; int32 _longitude
    4
    ;; int32 _latitude
    4
    ;; uint16 _heading
    2
    ;; int16 _pitch
    2
    ;; int16 _roll
    2
    ;; int16 _global_vx
    2
    ;; int16 _global_vy
    2
    ;; int16 _global_vz
    2
    ;; int16 _global_wx
    2
    ;; int16 _global_wy
    2
    ;; int16 _global_wz
    2
    ;; uint32 _mileage
    4
    ;; uint32 _id
    4
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; std_msgs/Header _header
       (send _header :serialize s)
     ;; float64 _time_label
       (sys::poke _time_label (send s :buffer) (send s :count) :double) (incf (stream-count s) 8)
     ;; uint32 _global_x
       (write-long _global_x s)
     ;; uint32 _global_y
       (write-long _global_y s)
     ;; uint32 _global_h
       (write-long _global_h s)
     ;; uint16 _zone
       (write-word _zone s)
     ;; int32 _longitude
       (write-long _longitude s)
     ;; int32 _latitude
       (write-long _latitude s)
     ;; uint16 _heading
       (write-word _heading s)
     ;; int16 _pitch
       (write-word _pitch s)
     ;; int16 _roll
       (write-word _roll s)
     ;; int16 _global_vx
       (write-word _global_vx s)
     ;; int16 _global_vy
       (write-word _global_vy s)
     ;; int16 _global_vz
       (write-word _global_vz s)
     ;; int16 _global_wx
       (write-word _global_wx s)
     ;; int16 _global_wy
       (write-word _global_wy s)
     ;; int16 _global_wz
       (write-word _global_wz s)
     ;; uint32 _mileage
       (write-long _mileage s)
     ;; uint32 _id
       (write-long _id s)
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; std_msgs/Header _header
     (send _header :deserialize buf ptr-) (incf ptr- (send _header :serialization-length))
   ;; float64 _time_label
     (setq _time_label (sys::peek buf ptr- :double)) (incf ptr- 8)
   ;; uint32 _global_x
     (setq _global_x (sys::peek buf ptr- :integer)) (incf ptr- 4)
   ;; uint32 _global_y
     (setq _global_y (sys::peek buf ptr- :integer)) (incf ptr- 4)
   ;; uint32 _global_h
     (setq _global_h (sys::peek buf ptr- :integer)) (incf ptr- 4)
   ;; uint16 _zone
     (setq _zone (sys::peek buf ptr- :short)) (incf ptr- 2)
   ;; int32 _longitude
     (setq _longitude (sys::peek buf ptr- :integer)) (incf ptr- 4)
   ;; int32 _latitude
     (setq _latitude (sys::peek buf ptr- :integer)) (incf ptr- 4)
   ;; uint16 _heading
     (setq _heading (sys::peek buf ptr- :short)) (incf ptr- 2)
   ;; int16 _pitch
     (setq _pitch (sys::peek buf ptr- :short)) (incf ptr- 2)
   ;; int16 _roll
     (setq _roll (sys::peek buf ptr- :short)) (incf ptr- 2)
   ;; int16 _global_vx
     (setq _global_vx (sys::peek buf ptr- :short)) (incf ptr- 2)
   ;; int16 _global_vy
     (setq _global_vy (sys::peek buf ptr- :short)) (incf ptr- 2)
   ;; int16 _global_vz
     (setq _global_vz (sys::peek buf ptr- :short)) (incf ptr- 2)
   ;; int16 _global_wx
     (setq _global_wx (sys::peek buf ptr- :short)) (incf ptr- 2)
   ;; int16 _global_wy
     (setq _global_wy (sys::peek buf ptr- :short)) (incf ptr- 2)
   ;; int16 _global_wz
     (setq _global_wz (sys::peek buf ptr- :short)) (incf ptr- 2)
   ;; uint32 _mileage
     (setq _mileage (sys::peek buf ptr- :integer)) (incf ptr- 4)
   ;; uint32 _id
     (setq _id (sys::peek buf ptr- :integer)) (incf ptr- 4)
   ;;
   self)
  )

(setf (get rcs_msg_wrapper::dwdx :md5sum-) "5892ad3732ec5fee9c5b2efe18dee12c")
(setf (get rcs_msg_wrapper::dwdx :datatype-) "rcs_msg_wrapper/dwdx")
(setf (get rcs_msg_wrapper::dwdx :definition-)
      "# Header needs to be the first field to refer to std_msgs/Header, other msgs here needs to add the package name such as nav_msgs/Odometry
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

")



(provide :rcs_msg_wrapper/dwdx "5892ad3732ec5fee9c5b2efe18dee12c")


