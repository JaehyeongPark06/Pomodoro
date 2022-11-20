import styled from "styled-components";

const _time_settings_styled = styled.div`
  margin: 18px 24px 24px 23px;
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;
  row-gap: 8px;

  @media screen and (min-width: 600px) {
    margin: 18px 40px 24px 40px;
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: 12px 48px;
    column-gap: 22px;
  }
`;

export default _time_settings_styled;
