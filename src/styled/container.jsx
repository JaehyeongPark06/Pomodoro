import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 667px;

  @media screen and (min-width: 600px) {
    height: 100%;
  }
`;

export default Container;
