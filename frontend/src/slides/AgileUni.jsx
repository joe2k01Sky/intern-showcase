import React, { useRef, useState } from "react";
import { FlexBox, Heading, Slide } from "spectacle";
import { BsPlayCircle } from "react-icons/bs";
import { IconContext } from "react-icons/lib";

const qVideo = require("../assetts/query.mp4");

const AgileUni = () => {
  const videoRef = useRef();
  const [playing, setPlaying] = useState(false);

  const handleVideoClick = () => {
    playing ? videoRef.current.pause() : videoRef.current.play();
    setPlaying(!playing);
  };

  return (
    <Slide backgroundColor="white">
      <Heading
        className="gradientText pcGradient"
        fontSize="h3"
        padding="0px"
        marginTop="5px"
      >
        Implementation
      </Heading>
      <FlexBox>
        <FlexBox className="videoContainer">
          <IconContext.Provider value={{ color: "#aa115f", size: "2rem" }}>
            {!playing && (
              <FlexBox className="playBtnContainer">
                <BsPlayCircle />
              </FlexBox>
            )}
          </IconContext.Provider>
          <video
            src={qVideo}
            ref={videoRef}
            className="video"
            onClick={handleVideoClick}
          />
        </FlexBox>
      </FlexBox>
    </Slide>
  );
};

export default AgileUni;
