import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

export default function More(props) {
  return (
    <Wrapper>
      <Link to={{ pathname: `/${props.to}` }}>
        <LCWrapper>
          <LittleCircle1></LittleCircle1>
          <LittleCircle2></LittleCircle2>
          <LittleCircle3></LittleCircle3>
        </LCWrapper>
      </Link>
    </Wrapper>
  );
}

const animation1 = keyframes`
  0%{transform: translateY(0px);}
  25%{transform: translateY(-10px);}
  50%{transform: translateY(0px);}
  75%{transform: translateY(10px);}
  100%{transform: translateY(0px);}
`;

const animation2 = keyframes`
  0%{transform: translateY(0px);}
  25%{transform: translateY(10px);}
  50%{transform: translateY(0px);}
  75%{transform: translateY(-10px);}
  100%{transform: translateY(0px);}
`;

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

const LittleCircle1 = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50px;
  background: #669bbc;
  box-shadow: inset 0px 4px 4px rgba(104, 104, 104, 0.35);
  filter: drop-shadow(-1px 1px 5px rgba(0, 0, 0, 0.25));

  ${Wrapper}:hover & {
    animation: ${animation1} 1s linear infinite;
  }
`;

const LittleCircle2 = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50px;
  background: #669bbc;
  box-shadow: inset 0px 4px 4px rgba(104, 104, 104, 0.35);
  filter: drop-shadow(-1px 1px 5px rgba(0, 0, 0, 0.25));
`;

const LittleCircle3 = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50px;
  background: #669bbc;
  box-shadow: inset 0px 4px 4px rgba(104, 104, 104, 0.35);
  filter: drop-shadow(-1px 1px 5px rgba(0, 0, 0, 0.25));

  ${Wrapper}:hover & {
    animation: ${animation2} 1s linear infinite;
  }
`;
