import styled from "styled-components";

const LoginDesign = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  /* grid-template-columns: 1fr 10px 1fr; */
  /* grid-template-areas: "left center right"; */

  .logo {
    order: 0;

    .image {
      width: 360px;
      height: 360px;
    }
  }

  .title {
    order: 2;

    .image {
      width: 80%;
      transform: translate(40px);
    }
  }

  .line {
    order: 1;
    height: 5px;
    width: 80%;
    border-color: var(--almost-purple);
    background-color: var(--almost-purple);
    align-self: center;
  }

  .form {
    order: 3;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 15px;

    input {
      width: 300px;
      height: 50px;
      outline: none;
      padding: 20px;
      font-size: 20px;
      border-radius: 50px;
    }

    button {
      width: 140px;
      height: 50px;
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

  @media screen and (min-width: 768px) and (max-width: 992px) {
  }
`;

export default LoginDesign;

/**
 * Telas Pequenas: até 600px
 * Celular: 600px - 768px
 * Tablet: 768px - 992px
 * Desktop: 992px - 1200px
 * widescreen: 1200px+
 */
