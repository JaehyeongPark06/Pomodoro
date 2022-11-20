import styled from "styled-components";

const _timer_styled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 300px;
  height: 300px;
  border-radius: 90%;
  background: linear-gradient(315deg, #2e325a 0%, #0e112a 100%);
  box-shadow: -50px -50px 100px #272c5a, 50px 50px 100px #121530;
  filter: drop-shadow(0 0 2em #272c5a);
  cursor: pointer;

  :active {
    transform: scale(0.98);
    filter: none;
  }

  @media screen and (min-width: 600px) {
    width: 410px;
    height: 410px;
  }
`;

export default _timer_styled;
