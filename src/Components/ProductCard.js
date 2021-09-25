import React from "react";
import styled from "styled-components";

export default function ProductCard(props) {
  return (
    <Wrapper>
      <TextWrapper>
        <Tiltle>محصول شماره{props.number}</Tiltle>
        <Subtitle>توضیحات تکمیلی مربوط به محصول نمایش داده شده</Subtitle>
      </TextWrapper>
      <ImgWrapper imgUrl={props.imgUrl}></ImgWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 365px;
  height: 306px;
  position: relative;

  @media (max-width: 820px) {
    margin-top: 20px;
  }
`;

const TextWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  align-content: flex-end;
  width: 200px;
  padding-right: 5px;
  right: 0px;
  top: 25px;
  z-index: 2;

  background: rgba(239, 244, 254, 0.4);
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.25),
    inset 0px 4px 20px rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(4px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 10px;
`;

const ImgWrapper = styled.div`
  width: 248px;
  height: 306px;

  background: url("${(props) => props.imgUrl}");
  /* Light blue */

  border: 1px solid #669bbc;
  box-sizing: border-box;
  filter: drop-shadow(-3px 5px 5px #669bbc);
  border-radius: 30px;
`;

const Tiltle = styled.h1`
  font-family: B Zar;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 36px;
  /* identical to box height */

  display: flex;
  align-items: center;
  text-align: right;

  /* Dark blue */

  color: #003049;
`;

const Subtitle = styled.p`
  font-family: B Zar;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  text-align: right;

  /* Dark blue */

  color: #003049;
`;
