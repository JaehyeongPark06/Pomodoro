import { BACKGROUND_PREF } from "../utils/constants";
import { SETTINGS_HEADING } from "../utils/constants";
import styled from "styled-components";

const _settings_modal_styled = styled.div`
  top: 20%;
  width: 327px;
  height: 430px;
  background: ${BACKGROUND_PREF};
  border-radius: 5px;

  position: relative;
  margin: auto;
  filter: drop-shadow(0 0 2em #1e213f);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  h2 {
    padding: 24px 0 28px 24px;
    border-bottom: 1px solid #e3e1e1;
    font-family: inherit;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 20px;
    color: ${SETTINGS_HEADING};
  }

  @media screen and (min-width: 600px) {
    top: 25%;
    width: 540px;
    height: 400px;

    h2 {
      padding: 34px 0 31px 40px;
      font-size: 28px;
      line-height: 28px;
    }
  }
`;

export default _settings_modal_styled;
