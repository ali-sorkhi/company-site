import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavItems = [
  {
    title: "محصولات",
    icon: "/imgs/icons/products.svg",
    link: "/products",
  },
  { title: "خدمات", icon: "/imgs/icons/services.svg", link: "/services" },
  {
    title: "ارتباط با ما",
    icon: "/imgs/icons/contactus.svg",
    link: "/contactus",
  },
  { title: "جستجو", icon: "/imgs/icons/search.svg", link: "/search" },
];

export default function Navbar() {
  return (
    <Wrapper>
      <BG></BG>
      <NavbarAll>
        <CNameLogo to="/">
          <CLogo src={"imgs/logo/logo.png"}></CLogo>
          <CName>سازمان</CName>
        </CNameLogo>
        <NavElements>
          {NavItems.map((item) => (
            <NavItemWrapper
              to={item.link}
              activeStyle={{
                background: "rgba(102, 155, 188, 0.15)",
              }}
            >
              <NavItem>{item.title}</NavItem>
              <NavIcon src={item.icon} />
            </NavItemWrapper>
          ))}
        </NavElements>
      </NavbarAll>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 200px;
  left: 0px;
  top: 0px;
  z-index: 100;

  @media (max-width: 820px) {
    visibility: hidden;
  }
`;

const BG = styled.div`
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  width: 100%;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.74) -0.78%,
    rgba(114, 114, 114, 0.31) 64.67%,
    rgba(255, 255, 255, 0) 100%
  );
`;

const NavbarAll = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  padding: 0px 5% 0px 5%;

  position: absolute;
  width: 100%;
  height: 102px;
  top: 20px;
`;

const CNameLogo = styled(NavLink)`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-start;
  align-items: center;
  gap: 5%;
  text-decoration: none;
  border-radius: 25px;

  :hover {
    background: rgba(102, 155, 188, 0.3);
  }
`;

const NavElements = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  width: 50%;
`;

const CName = styled.h2`
  font-family: B Zar;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 40px;
  /* identical to box height */

  text-align: right;

  /* Pale Celestine */

  color: #eff4fe;

  text-shadow: -2px 4px 4px rgba(0, 0, 0, 0.25);

  /* Inside Auto Layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px;
`;

const CLogo = styled.img`
  width: 60px;
  height: 60px;
`;
const NavItemWrapper = styled(NavLink)`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: right;
  text-decoration: none;
  border-radius: 25px;
  :hover {
    background: rgba(102, 155, 188, 0.3);
  }
`;
const NavItem = styled.h2`
  font-family: B Zar;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  /* identical to box height */

  /* Pale Celestine */

  color: #eff4fe;

  /* Inside Auto Layout */

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 6px;
`;

const NavIcon = styled.img`
  width: 25px;
  height: 25px;
`;
