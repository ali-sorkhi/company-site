import React from "react";
import styled from "styled-components";

export default function ProductCard(props) {
  return (
    <Wrapper>
      <TextWrapper>
        <Tiltle>خدمت شماره{props.number}</Tiltle>
        <Subtitle>توضیحات تکمیلی مربوط به خدمت نمایش داده شده</Subtitle>
      </TextWrapper>
      <ImgWrapper imgUrl={props.imgUrl}></ImgWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 664px;
  height: 242px;
  position: relative;
  margin-top: 50px;

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
  right: 30px;
  top: 0px;
  z-index: 2;

  background: rgba(239, 244, 254, 0.4);
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.25),
    inset 0px 4px 20px rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(4px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 10px;
`;

const ImgWrapper = styled.div`
  position: absolute;
  width: 664px;
  height: 204px;
  bottom: 0;
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
