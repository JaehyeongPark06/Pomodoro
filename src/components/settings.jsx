import Button from "./button";
import React from "react";
import _modal_time_settings_styled from "../styled/modal_time_settings";
import _settings_modal_styled from "../styled/settings_modal_styled";
import _time_settings_styled from "../styled/time_settings_styled";

const Settings = ({
  visible,
  toggleSettingsVisibility,
  pomoLength,
  setPomoLength,
  shortLength,
  setShortLength,
  longLength,
  setLongLength,
  closeSettings,
  setSecondsLeft,
  timerMode,
}) => {
  const applySettings = (event) => {
    event.preventDefault();

    setPomoLength(event.target.pomodoro.value);
    setShortLength(event.target.shortBreak.value);
    setLongLength(event.target.longBreak.value);
    closeSettings();

    switch (timerMode) {
      case "short":
        setSecondsLeft(event.target.shortBreak.value * 60);
        break;
      case "long":
        setSecondsLeft(event.target.longBreak.value * 60);
        break;
      default:
        setSecondsLeft(event.target.pomodoro.value * 60);
    }
  };

  if (visible) {
    return (
      <div className="preferences preferences--visible">
        <_settings_modal_styled>
          <Button
            type="close"
            buttonText="×"
            toggleVisibility={toggleSettingsVisibility}
          />
          <h2>Settings</h2>
          <form onSubmit={applySettings}>
            <_modal_time_settings_styled>
              <_time_settings_styled>
                <label htmlFor="pomodoro">pomodoro</label>
                <input
                  type="number"
                  name="pomodoro"
                  id="pomodoro"
                  min="5"
                  max="90"
                  defaultValue={pomoLength}
                />
                <label htmlFor="short-break">short break</label>
                <input
                  type="number"
                  name="shortBreak"
                  id="short-break"
                  min="1"
                  max="14"
                  defaultValue={shortLength}
                />
                <label htmlFor="long-break">long break</label>
                <input
                  type="number"
                  name="longBreak"
                  id="long-break"
                  min="15"
                  max="30"
                  defaultValue={longLength}
                />
              </_time_settings_styled>
            </_modal_time_settings_styled>

            <Button type="apply" buttonText="Apply" />
          </form>
        </_settings_modal_styled>
      </div>
    );
  }

  return null;
};

export default Settings;
