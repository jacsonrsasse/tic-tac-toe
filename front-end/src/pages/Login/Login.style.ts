import styled from "styled-components";

const LoginDesign = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 1fr 10px 1fr;
  /* grid-template-areas: "left center right"; */

  .logo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .center {
    height: 80%;
    width: 5px;
    border-color: var(--almost-purple);
    background-color: var(--almost-purple);
    align-self: center;
  }

  .form {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 15px;

    input {
      width: 420px;
      height: 60px;
      outline: none;
      padding: 20px;
      font-size: 20px;
      border-radius: 50px;
    }

    button {
      width: 160px;
      height: 60px;
      font-size: 20px;
      color: #fff;
      background-color: var(--black);
      cursor: pointer;
      border-radius: 50px;
      border: none;

      &:hover {
        background-color: var(--red);
      }
    }
  }
`;

export default LoginDesign;
