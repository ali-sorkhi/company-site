import React from "react";
import styled from "styled-components";
import Button from "../Components/Button";
import More from "../Components/More";
import ProductCard from "../Components/ProductCard";
import ServiceCard from "../Components/ServiceCard";

export default function HomePage() {
  return (
    <Wrapper>
      <BGimg1 src={"imgs/backgrounds/BG1.svg"}></BGimg1>
      <HPContents>
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
        <ProductCardWrapper>
          <ProductCard number={1} imgUrl={"imgs/cards/pc1.svg"}></ProductCard>
          <ProductCard number={2} imgUrl={"imgs/cards/pc2.svg"}></ProductCard>
          <ProductCard number={3} imgUrl={"imgs/cards/pc3.svg"}></ProductCard>
        </ProductCardWrapper>
        <More to="products"></More>

        <ServiceCardWrapper>
          <ServiceCard number={1} imgUrl={"imgs/cards/sc1.svg"}></ServiceCard>
          <ServiceCard number={2} imgUrl={"imgs/cards/sc2.svg"}></ServiceCard>
          <ServiceCard number={3} imgUrl={"imgs/cards/sc3.svg"}></ServiceCard>
        </ServiceCardWrapper>
        <More to="services"></More>
      </HPContents>
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
  z-index: -10;
`;

const HPContents = styled.div`
  display: block;
  height: 3000px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: flex-start;
  padding: 160px 20% 0px 20%;
  @media (max-width: 820px) {
    flex-direction: column;
    align-items: center;
    padding: 100px 5% 0px 20%;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;

  margin-top: 20px;
  @media (max-width: 820px) {
    display: absolute;
  }
`;

const Mockup = styled.img`
  width: 400px;
  @media (max-width: 820px) {
    width: 300px;
  }
`;

const HeaderText = styled.h1`
  font-family: MRT_Poster_8;
  font-style: normal;
  font-weight: bold;
  font-size: 6vw;
  /* identical to box height */

  text-align: center;

  /* Pale Celestine */

  color: #eff4fe;
`;

const Text = styled.p`
  font-family: MRT_Poster_8;
  font-style: normal;
  font-weight: bold;
  font-size: 3vw;
  line-height: 3vw;
  text-align: right;
  padding-top: 2vw;
  padding-bottom: 3vw;

  /* Dark blue */

  color: #003049;
`;

const ProductCardWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  flex-shrink: 1;

  padding: 200px 5% 0px 5%;

  @media (max-width: 820px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ServiceCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  flex-shrink: 1;
`;
