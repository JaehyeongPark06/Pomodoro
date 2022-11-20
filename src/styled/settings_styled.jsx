import { BACKGROUND_TIMER } from "../utils/constants";
import styled from "styled-components";

const _settings_styled = styled.div`
  z-index: 200;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.5);
  filter: drop-shadow(0 0 100rem ${BACKGROUND_TIMER});
`;

export default _settings_styled;
