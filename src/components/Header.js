import React, { useState } from "react";
import styled from "styled-components";

import Logo from "../assets/images/logo.svg";

const Header = () => {
  const [burgerStatus, setBurgerStatus] = useState(false);
  return (
    <Container>
      {/* logo */}
      <a href="#">
        <img src={Logo} alt="" />
      </a>
      {/* menu */}
      <Menu>
        <a href="#">Model S</a>

        <a href="#">Model 3</a>

        <a href="#">Model X</a>

        <a href="#">Model Y</a>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu onClick={() => setBurgerStatus(true)}>
          <span class="material-symbols-outlined">menu</span>
        </CustomMenu>
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CustomClose onClick={() => setBurgerStatus(false)}>
          <span class="material-symbols-outlined">close</span>
        </CustomClose>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade-in</a>
        </li>
        <li>
          <a href="#">Cybertruck</a>
        </li>
        <li>
          <a href="#">Roadster</a>
        </li>
        <li>
          <a href="#">Faisal</a>
        </li>
        <li>
          <a href="#">Amina</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
      </BurgerNav>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  // height of the header
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;

const CustomMenu = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  // it will overlap other elements
  z-index: 16;
  list-style: none;
  padding: 20px;
  text-align: left;
  flex-direction: column;
  transform: ${props => props.show ? 'translateX(0)':'translateX(100%)'}; 
  transition: transform 0.2s;
  li {
    // top and bottom is 15px
    // left and right is 0
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      // semi-bold
      font-weight: 600;
    }
  }
`;

const CustomClose = styled.div` 
  text-align: right;
  span {
    border-radius: 50%;
    border: 2px solid grey;
    padding: 2px;
    transition: border 0.5s ease-in;
    cursor: pointer;
  }
  span:hover {
    border: 2px solid darkblue;
  }
`;
