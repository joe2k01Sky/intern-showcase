import React from "react";
import { Box, FlexBox, FullScreen, Progress } from "spectacle";

const BottomTemplate = ({ slideNumber, numberOfSlides }) => {
  return (
    <FlexBox
      justifyContent="space-between"
      position="absolute"
      bottom="0px"
      width={1}
      className="gradientBackground"
      id="test"
    >
      <Box padding="0 1em">
        <FullScreen />
      </Box>
      <Box padding="1em" color="white">
        Slide {slideNumber} of {numberOfSlides}
      </Box>
    </FlexBox>
  );
};

export default BottomTemplate;
