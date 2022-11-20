import styled from "styled-components";

const _button_closed = styled.div`
  border: none;
  background: none;
  position: absolute;
  right: 24px;
  top: 3%;
  color: var(--background-body);
  opacity: 0.5;
  font-size: 32px;
  transition: transform 0.15s ease-in-out;
  cursor: pointer;

  @media (min-width: 600px) {
    right: 36px;
    top: 6%;
    font-size: 36px;
  }
`;
export default _button_closed;
