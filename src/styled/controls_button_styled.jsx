import { BACKGROUND_TIMER } from "../utils/constants";
import { TEXT_COLOR } from "../utils/constants";
import styled from "styled-components";

const _controls_button_styled = styled.label`
  display: flex;
  align-items: center;
  height: 48px;
  border: none;
  border-radius: 26.5px;
  background: ${BACKGROUND_TIMER};
  padding: 0 15px 0 15px;

  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  text-align: center;
  color: ${TEXT_COLOR};
  mix-blend-mode: normal;
  opacity: 0.4;
  cursor: pointer;

  @media screen and (min-width: 600px) {
    font-size: 14px;
  }
`;

export default _controls_button_styled;
