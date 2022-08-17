import React from "react";
import { Box, FlexBox, Slide, Text } from "spectacle";

const person = require("../assetts/person-sky.png");

const Orbit = ({ orbitClass, children }) => {
  return <FlexBox className={orbitClass}>{children}</FlexBox>;
};

const Person = () => {
  return (
    <Box className="person">
      <img src={person} alt="" />
    </Box>
  );
};

const Team = () => {
  return (
    <Slide backgroundColor="white">
      <Text className="gradientText pcGradient" textAlign="center">
        The Team
      </Text>
      <FlexBox className="orbitContainer">
        <Orbit orbitClass="outerOrbit">
          <Person />
        </Orbit>
      </FlexBox>
    </Slide>
  );
};

export default Team;
