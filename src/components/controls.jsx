import React from "react";
import _controls_button_styled from "../styled/controls_button_styled";
import _controls_styled from "../styled/controls_styled";
import clickSfx from "../sounds/slide.mp3";
import useSound from "use-sound";

const Controls = ({
  timerMode,
  setTimerMode,
  setSecondsLeft,
  pomoLength,
  shortLength,
  longLength,
  setIsActive,
  setButtonText,
  volume,
}) => {
  const [playSfx] = useSound(clickSfx, { volume: volume });

  const handleModeChange = (event) => {
    setTimerMode(event.target.id);
    setIsActive(false);
    setButtonText("START");
    switch (event.target.id) {
      case "short":
        setSecondsLeft(shortLength * 60);
        break;
      case "long":
        setSecondsLeft(longLength * 60);
        break;
      default:
        setSecondsLeft(pomoLength * 60);
    }
  };

  return (
    <_controls_styled>
      <input
        type="radio"
        id="pomo"
        name="mode"
        checked={timerMode === "pomo"}
        onClick={playSfx}
        onChange={handleModeChange}
      />
      <_controls_button_styled htmlFor="pomo">pomodoro</_controls_button_styled>

      <input
        type="radio"
        id="short"
        name="mode"
        checked={timerMode === "short"}
        onClick={playSfx}
        onChange={handleModeChange}
      />
      <_controls_button_styled htmlFor="short">
        short break
      </_controls_button_styled>

      <input
        type="radio"
        id="long"
        name="mode"
        checked={timerMode === "long"}
        onClick={playSfx}
        onChange={handleModeChange}
      />
      <_controls_button_styled htmlFor="long">
        long break
      </_controls_button_styled>
    </_controls_styled>
  );
};

export default Controls;
