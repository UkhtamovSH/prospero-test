import React from "react";
import styled from "styled-components";

const ContainerFluid = styled.div`
  display: grid;
  grid-template-areas: "menu";
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  padding-left: 15px;
  padding-right: 15px;
  max-width: 100%;

  @media (max-width: 8000px) and (min-width: 576px) {
    max-width: 1140px;
  }

  @media only screen and (max-width: 576px) and (min-width: 320px) {
    max-width: 100%;
  }
`;
const Main = (props) => {
  return <ContainerFluid>{props.children}</ContainerFluid>;
};

export default Main;
