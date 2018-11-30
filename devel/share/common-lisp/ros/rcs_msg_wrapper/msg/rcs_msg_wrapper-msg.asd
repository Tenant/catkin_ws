
(cl:in-package :asdf)

(defsystem "rcs_msg_wrapper-msg"
  :depends-on (:roslisp-msg-protocol :roslisp-utils :std_msgs-msg
)
  :components ((:file "_package")
    (:file "dwdx" :depends-on ("_package_dwdx"))
    (:file "_package_dwdx" :depends-on ("_package"))
  ))