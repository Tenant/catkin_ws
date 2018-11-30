# Install script for directory: /home/sukie/catkin_ws/src/novatel_span_driver/novatel_msgs

# Set the install prefix
if(NOT DEFINED CMAKE_INSTALL_PREFIX)
  set(CMAKE_INSTALL_PREFIX "/home/sukie/catkin_ws/install")
endif()
string(REGEX REPLACE "/$" "" CMAKE_INSTALL_PREFIX "${CMAKE_INSTALL_PREFIX}")

# Set the install configuration name.
if(NOT DEFINED CMAKE_INSTALL_CONFIG_NAME)
  if(BUILD_TYPE)
    string(REGEX REPLACE "^[^A-Za-z0-9_]+" ""
           CMAKE_INSTALL_CONFIG_NAME "${BUILD_TYPE}")
  else()
    set(CMAKE_INSTALL_CONFIG_NAME "")
  endif()
  message(STATUS "Install configuration: \"${CMAKE_INSTALL_CONFIG_NAME}\"")
endif()

# Set the component getting installed.
if(NOT CMAKE_INSTALL_COMPONENT)
  if(COMPONENT)
    message(STATUS "Install component: \"${COMPONENT}\"")
    set(CMAKE_INSTALL_COMPONENT "${COMPONENT}")
  else()
    set(CMAKE_INSTALL_COMPONENT)
  endif()
endif()

# Install shared libraries without execute permission?
if(NOT DEFINED CMAKE_INSTALL_SO_NO_EXE)
  set(CMAKE_INSTALL_SO_NO_EXE "1")
endif()

if(NOT CMAKE_INSTALL_COMPONENT OR "${CMAKE_INSTALL_COMPONENT}" STREQUAL "Unspecified")
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/share/novatel_msgs/msg" TYPE FILE FILES
    "/home/sukie/catkin_ws/src/novatel_span_driver/novatel_msgs/msg/Ack.msg"
    "/home/sukie/catkin_ws/src/novatel_span_driver/novatel_msgs/msg/CommonFooter.msg"
    "/home/sukie/catkin_ws/src/novatel_span_driver/novatel_msgs/msg/CommonHeader.msg"
    "/home/sukie/catkin_ws/src/novatel_span_driver/novatel_msgs/msg/BESTPOS.msg"
    "/home/sukie/catkin_ws/src/novatel_span_driver/novatel_msgs/msg/CORRIMUDATA.msg"
    "/home/sukie/catkin_ws/src/novatel_span_driver/novatel_msgs/msg/INSCOV.msg"
    "/home/sukie/catkin_ws/src/novatel_span_driver/novatel_msgs/msg/INSPVAX.msg"
    )
endif()

if(NOT CMAKE_INSTALL_COMPONENT OR "${CMAKE_INSTALL_COMPONENT}" STREQUAL "Unspecified")
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/share/novatel_msgs/cmake" TYPE FILE FILES "/home/sukie/catkin_ws/build/novatel_span_driver/novatel_msgs/catkin_generated/installspace/novatel_msgs-msg-paths.cmake")
endif()

if(NOT CMAKE_INSTALL_COMPONENT OR "${CMAKE_INSTALL_COMPONENT}" STREQUAL "Unspecified")
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/include" TYPE DIRECTORY FILES "/home/sukie/catkin_ws/devel/include/novatel_msgs")
endif()

if(NOT CMAKE_INSTALL_COMPONENT OR "${CMAKE_INSTALL_COMPONENT}" STREQUAL "Unspecified")
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/share/roseus/ros" TYPE DIRECTORY FILES "/home/sukie/catkin_ws/devel/share/roseus/ros/novatel_msgs")
endif()

if(NOT CMAKE_INSTALL_COMPONENT OR "${CMAKE_INSTALL_COMPONENT}" STREQUAL "Unspecified")
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/share/common-lisp/ros" TYPE DIRECTORY FILES "/home/sukie/catkin_ws/devel/share/common-lisp/ros/novatel_msgs")
endif()

if(NOT CMAKE_INSTALL_COMPONENT OR "${CMAKE_INSTALL_COMPONENT}" STREQUAL "Unspecified")
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/share/gennodejs/ros" TYPE DIRECTORY FILES "/home/sukie/catkin_ws/devel/share/gennodejs/ros/novatel_msgs")
endif()

if(NOT CMAKE_INSTALL_COMPONENT OR "${CMAKE_INSTALL_COMPONENT}" STREQUAL "Unspecified")
  execute_process(COMMAND "/usr/bin/python" -m compileall "/home/sukie/catkin_ws/devel/lib/python2.7/dist-packages/novatel_msgs")
endif()

if(NOT CMAKE_INSTALL_COMPONENT OR "${CMAKE_INSTALL_COMPONENT}" STREQUAL "Unspecified")
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/lib/python2.7/dist-packages" TYPE DIRECTORY FILES "/home/sukie/catkin_ws/devel/lib/python2.7/dist-packages/novatel_msgs")
endif()

if(NOT CMAKE_INSTALL_COMPONENT OR "${CMAKE_INSTALL_COMPONENT}" STREQUAL "Unspecified")
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/lib/pkgconfig" TYPE FILE FILES "/home/sukie/catkin_ws/build/novatel_span_driver/novatel_msgs/catkin_generated/installspace/novatel_msgs.pc")
endif()

if(NOT CMAKE_INSTALL_COMPONENT OR "${CMAKE_INSTALL_COMPONENT}" STREQUAL "Unspecified")
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/share/novatel_msgs/cmake" TYPE FILE FILES "/home/sukie/catkin_ws/build/novatel_span_driver/novatel_msgs/catkin_generated/installspace/novatel_msgs-msg-extras.cmake")
endif()

if(NOT CMAKE_INSTALL_COMPONENT OR "${CMAKE_INSTALL_COMPONENT}" STREQUAL "Unspecified")
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/share/novatel_msgs/cmake" TYPE FILE FILES
    "/home/sukie/catkin_ws/build/novatel_span_driver/novatel_msgs/catkin_generated/installspace/novatel_msgsConfig.cmake"
    "/home/sukie/catkin_ws/build/novatel_span_driver/novatel_msgs/catkin_generated/installspace/novatel_msgsConfig-version.cmake"
    )
endif()

if(NOT CMAKE_INSTALL_COMPONENT OR "${CMAKE_INSTALL_COMPONENT}" STREQUAL "Unspecified")
  file(INSTALL DESTINATION "${CMAKE_INSTALL_PREFIX}/share/novatel_msgs" TYPE FILE FILES "/home/sukie/catkin_ws/src/novatel_span_driver/novatel_msgs/package.xml")
endif()

