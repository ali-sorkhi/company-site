import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Button() {
  return (
    <Wrapper to="/contactus">
      <Text>کلیک کنید</Text>
      <Icon></Icon>
    </Wrapper>
  );
}

const Wrapper = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  text-decoration: none;

  position: static;
  width: 200px;
  height: 75px;
  left: 38px;
  top: 294px;

  background: rgba(239, 244, 254, 0.2);
  /* Light blue */

  border: 5px solid #669bbc;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25),
    inset 0px 4px 20px rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(50px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 50px;

  :hover {
    background: rgba(0, 48, 73, 0.2);
    /* Neutral Gray */

    border: 5px solid #353535;
    box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.25),
      inset 0px 4px 20px rgba(255, 255, 255, 0.25);
  }
`;

const Text = styled.p`
  font-family: MRT_Ghalam-2;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 40px;
  text-align: right;

  color: #000000;
  ${Wrapper}:hover & {
    color: #ffffff;
  }
`;

const Icon = styled.div``;
