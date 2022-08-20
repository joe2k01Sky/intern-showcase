import React, { useState } from "react";
import { Appear, Box, FlexBox, Heading, Quote, Slide, Text } from "spectacle";
import Button from "./frontend/Button";
import Tabs from "./frontend/Tabs";

const Frontend = () => {
  const [tab, setTab] = useState(0);
  const [tabsArray, setTabsArray] = useState(["Tab 0", "Tab 1"]);

  return (
    <Slide backgroundColor="white">
      <Text className="gradientText skyGradient" textAlign="left">
        Frontend highlights - Reusable Tabs
      </Text>

      <Appear>
        <div style={{ display: "block" }}>
          <Tabs tabs={tabsArray} setter={setTab} />
        </div>
        <FlexBox>
          <Heading className="gradientText pcGradient">
            {tabsArray[tab]}
          </Heading>
          <Quote>Display content for tab number {tab} here</Quote>
        </FlexBox>
        <FlexBox justifyContent="start">
          <Button
            cssClassName="demoButton"
            text="Add a tab"
            onClick={() => {
              let newArray = [...tabsArray];
              newArray.push(`Tab ${newArray.length}`);
              setTabsArray(newArray);
            }}
          />
          <Button
            cssClassName="demoButton"
            text="Remove a tab"
            onClick={() => {
              if (tabsArray.length > 1) {
                let newArray = [...tabsArray];
                newArray.pop();
                setTabsArray(newArray);
              }
            }}
            disabled={tabsArray.length === 1}
          />
        </FlexBox>
      </Appear>
    </Slide>
  );
};

export default Frontend;
