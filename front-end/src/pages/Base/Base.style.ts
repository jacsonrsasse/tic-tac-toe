import styled from "styled-components";

const BaseDesign = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--silver);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  > .painel {
    width: 60vw;
    height: 70vh;
    background-color: var(--dark-blue);
    border-radius: 25px;
    display: flex;
    min-width: 600px;
  }

  /* @media screen and (max-width: 400px) {
    > .content {
      min-width: 280px;
    }
  } */
`;

export default BaseDesign;
