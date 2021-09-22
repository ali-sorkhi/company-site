import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Button from "../Components/Button";

export default function HomePage() {
  return (
    <Wrapper>
      <BGimg1 src={"imgs/backgrounds/BG1.svg"}></BGimg1>
      <ContentWrapper>
        <TextWrapper>
          <HeaderText>تیتر مورد نظر</HeaderText>
          <Text>
            متن مورد نظر شما <br />
            جهت توضیحات بیشتر
            <br /> در مورد سازمان و امکانات آن
          </Text>
          <Button></Button>
        </TextWrapper>
        <Mockup src={"imgs/mockups/FreshFolkTeamwork.svg"}></Mockup>
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const BGimg1 = styled.img`
  position: absolute;
  width: 2263.67px;
  height: 2000px;
  left: -461px;
  top: -800px;
  z-index: -3;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: flex-start;
  padding: 160px 20% 0px 20%;

  position: absolute;
  width: 100%;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;

  margin-top: 20px;
`;

const Mockup = styled.img`
  width: 400px;
`;

const HeaderText = styled.h1`
  font-family: MRT_Poster_8;
  font-style: normal;
  font-weight: bold;
  font-size: 70px;
  line-height: 70px;
  /* identical to box height */

  text-align: center;

  /* Pale Celestine */

  color: #eff4fe;
`;

const Text = styled.p`
  font-family: MRT_Poster_8;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 30px;
  text-align: right;
  padding-top: 50px;
  padding-bottom: 50px;

  /* Dark blue */

  color: #003049;
`;
