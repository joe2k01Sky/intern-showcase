import React, { useState } from "react";
import { Appear, CodePane, FlexBox, Slide, Text } from "spectacle";
import BackendSearchBar from "./frontend/BackendSearchBar";
import synthwave84 from "react-syntax-highlighter/dist/cjs/styles/prism/synthwave84";

const FrontendSearchbar = () => {
  const [obj, setObj] = useState({});
  return (
    <Slide backgroundColor="white">
      <Text
        className="gradientText skyGradient"
        textAlign="left"
        fontSize="xx-large"
      >
        Frontend highlights - Reusable searchbar with backend autocompletion
      </Text>
      <Appear>
        <BackendSearchBar
          placeholder="Start typing a dog breed family"
          valid="family"
          setter={setObj}
        />
        <FlexBox flexDirection="column">
          <Text className="gradientText opGradient">The user selected:</Text>
          <div className="codeContainer">
            <CodePane language="json" theme={synthwave84}>
              {JSON.stringify(obj)}
            </CodePane>
          </div>
        </FlexBox>
      </Appear>
    </Slide>
  );
};

export default FrontendSearchbar;
