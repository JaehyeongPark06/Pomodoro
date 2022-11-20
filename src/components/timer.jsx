import "react-circular-progressbar/dist/styles.css";

import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";

import React from "react";
import _timer_display_button_styled from "../styled/timer_display_button_styled";
import _timer_display_styled from "../styled/timer_display_styled";
import _timer_styled from "../styled/timer_styled";
import pauseSfx from "../sounds/pauseTimer.mp3";
import startSfx from "../sounds/startTimer.mp3";
import useSound from "use-sound";

const Timer = ({
  timerMode,
  percentage,
  timeLeft,
  isActive,
  setIsActive,
  buttonText,
  setButtonText,
}) => {
  const [play] = useSound(startSfx, {
    interrupt: true,
  });
  const [pause] = useSound(pauseSfx, {
    interupt: true,
  });

  const handleClick = (event) => {
    if (timeLeft === "0:00") {
      return null;
    }

    if (isActive) {
      pause();
    } else {
      play();
    }
    setIsActive(!isActive);
    setButtonText(
      buttonText === "START" || buttonText === "RESUME" ? "PAUSE" : "RESUME"
    );
  };

  let timesUpMsg = timerMode === "pomo" ? "Break Time" : "Work Time";

  let timeText = timeLeft === "0:00" ? timesUpMsg : timeLeft;

  let textSize = timeLeft === "0:00" ? "12px" : "28px";

  return (
    <_timer_styled onClick={handleClick}>
      <_timer_display_styled>
        <CircularProgressbarWithChildren
          value={percentage}
          text={timeText}
          strokeWidth={3.5}
          styles={buildStyles({
            pathTransitionDuration: 0.1,
            pathColor: "var(--accent-color)",
            textColor: "var(--text",
            textSize: textSize,
            fontFamily: "inherit",
            trailColor: "none",
            transform: "rotate(0.25turn)",
            transformOrigin: "center center",
          })}
        >
          <_timer_display_button_styled onClick={handleClick}>
            {buttonText}
          </_timer_display_button_styled>
        </CircularProgressbarWithChildren>
      </_timer_display_styled>
    </_timer_styled>
  );
};

export default Timer;
