import React from "react";
import { Joystick } from "rc-joystick";

const JoystickControl = ({ onMove, onStop }) => {
  return (
    <Joystick
      size={80}
      baseColor="#ccc"
      stickColor="#555"
      move={onMove}
      stop={onStop}
    />
  );
};

export default JoystickControl;