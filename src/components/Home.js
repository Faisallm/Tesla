import React from "react";
import styled from "styled-components";
import Section from "./Section";

import modelS from "../assets/images/model-s.jpg";
import modelY from "../assets/images/model-y.jpg";
import model3 from "../assets/images/model-3.jpg";
import modelX from '../assets/images/model-x.jpg';
import solarPanel from '../assets/images/solar-panel.jpg';
import solarRoof from '../assets/images/solar-roof.jpg';
import Accessories from '../assets/images/accessories.jpg'; 


const Home = () => {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImage={modelS}
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImage={modelY}
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backgroundImage={model3}
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgroundImage={modelX}
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Lowest Cost Solar Panels in Nigeria"
        description="Money-back guarantee"
        backgroundImage={solarPanel}
        leftBtnText="Order Now"
        rightBtnText="Learn more"
      />
      <Section
        title="Solar for New Roofs"
        description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
        backgroundImage={solarRoof}
        leftBtnText="Order Now"
        rightBtnText="Learn more"
      />
      <Section
        title="Accessories"
        description=""
        backgroundImage={Accessories}
        leftBtnText="Shop now"
      />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  // 100% viewport width
  height: 100vh;
`;
