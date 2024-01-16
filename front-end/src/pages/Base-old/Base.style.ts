import styled from "styled-components";

/**
 * Telas Pequenas: até 600px
 * Celular: 600px - 768px
 * Tablet: 768px - 992px
 * Desktop: 992px - 1200px
 * widescreen: 1200px+
 */

const BaseDesign = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--silver);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  .painel {
    width: 350px;
    height: 90vh;
    background-color: var(--dark-blue);
    border-radius: 25px;
    display: flex;

    transition: width 0.3s ease;
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    .painel {
      width: 650px;
    }
  }

  @media screen and (min-width: 992px) and (max-width: 1200px) {
    .painel {
      width: 850px;
    }
  }

  @media screen and (min-width: 1200px) {
    .painel {
      width: 1050px;
    }
  }
`;

export default BaseDesign;
