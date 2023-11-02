import styled from "styled-components";

const BaseDesign = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #d9d9d9;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  > .content {
    width: 60vw;
    height: 70vh;
    background-color: #3ec150;
    border-radius: 25px;
    display: flex;
    min-width: 600px;
  }

  @media screen and (max-width: 400px) {
    > .content {
      min-width: 280px;
    }
  }
`;

export default BaseDesign;
