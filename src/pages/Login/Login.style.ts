import styled from "styled-components";

const LoginDesign = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  > div {
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
    padding: 50px 0;

    #logo {
      width: 400px;
      flex: 1;
    }

    input,
    button {
      height: 50px;
      border-radius: 20px;
      border: none;
    }

    input {
      width: 320px;
      outline: none;
      padding: 10px;
      font-size: 20px;
    }

    button {
      width: 160px;
      font-size: 20px;
      color: #fff;
      background-color: #1a4b21;
      cursor: pointer;
    }
  }

  @media screen and (max-width: 400px) {
    > div {
      #logo {
        width: 200px;
      }

      input {
        width: 250px;
      }
    }
  }
`;

export default LoginDesign;
