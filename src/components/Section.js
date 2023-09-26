import React from "react";
import styled from "styled-components";
import modelS from "../assets/images/model-s.jpg";

const Section = () => {
  return (
    <Wrap>
      <ItemText>
        <h1>Model S</h1>
        <p>Order Online for Touchless Delivery</p>
      </ItemText>
      <ButtonGroup>
        <LeftButton>Custom Order</LeftButton>
        <RightButton>Existing Inventory</RightButton>
      </ButtonGroup>
    </Wrap>
  );
};

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("${modelS}");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`

`

const LeftButton = styled.div`

`
// inherit all the css of the leftButton
const RightButton = styled(LeftButton)`

`