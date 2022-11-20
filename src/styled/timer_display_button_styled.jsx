import { BACKGROUND_TIMER } from "../utils/constants";
import { TEXT_COLOR } from "../utils/constants";
import styled from "styled-components";

const _timer_display_button_styled = styled.div`
  margin-top: 50%;
  font-family: inherit;
  font-weight: bold;
  font-size: 16px;
  background-color: ${BACKGROUND_TIMER};
  border: 0;
  color: ${TEXT_COLOR}};
  line-height: 16px;
  letter-spacing: 15px;
  margin-right: -15px;
  transition: transform 0.2s ease-in-out;
  cursor: pointer;  
`;

export default _timer_display_button_styled;
