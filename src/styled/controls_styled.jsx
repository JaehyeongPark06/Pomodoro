import { ACCENT_COLOR } from "../utils/constants";
import { BACKGROUND_TIMER } from "../utils/constants";
import styled from "styled-components";

const _controls_styled = styled.form`
  display: flex;
  justify-content: space-between;
  background: ${BACKGROUND_TIMER};
  border-radius: 31.5px;
  width: 327px;
  min-height: 63px;
  padding: 8px 6px 8px 6px;
  margin: 45px 0 48px 0;
  z-index: 100;

  input[type="radio"] {
    opacity: 0;
    position: fixed;
    width: 0;
  }

  input[type="radio"]:checked + label {
    opacity: 1;
    background: ${ACCENT_COLOR};
    animation-name: fade;
    animation-timing-function: ease-in;
    animation-duration: 0.05s;
  }

  @media screen and (min-width: 600px) {
    width: 373px;
    margin: 55px 0 45px 0;
  }
`;

export default _controls_styled;
