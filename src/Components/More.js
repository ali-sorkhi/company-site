import React from "react";
import styled from "styled-components";

export default function More() {
  return (
    <Wrapper>
      <LCWrapper>
        <LittleCircle></LittleCircle>
        <LittleCircle></LittleCircle>
        <LittleCircle></LittleCircle>
      </LCWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50px;
  background: rgba(253, 240, 213, 0.9);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  backdrop-filter: blur(10px);
  margin: 30px auto;
`;

const LCWrapper = styled.div`
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
`;

const LittleCircle = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50px;
  background: #669bbc;
  box-shadow: inset 0px 4px 4px rgba(104, 104, 104, 0.35);
  filter: drop-shadow(-1px 1px 5px rgba(0, 0, 0, 0.25));
`;
