import React from "react";
import {
  Box,
  FlexBox,
  ListItem,
  Slide,
  Stepper,
  Text,
  UnorderedList,
} from "spectacle";

const people = {
  Business: ["Diana Odeleye", "Michelle Baker", "Stefania Popescu"],
  Delivery: [
    "Abdirisak Ahmed",
    "Alex Drage",
    "Alfonso Ristorato",
    "Baba Ojo",
    "Daniel Hope",
    "Heather Paterson",
    "Julien Mahé-Crenn",
    "Myles Gordon",
    "Rafael Barros Parigi",
    "Ross Keeley",
    "Thomas Osmanski",
  ],
};

const Card = ({ team, extraClass }) => {
  return (
    <Box className={`cardContainer ${extraClass}`} id={team}>
      <FlexBox className="card" flexDirection="column">
        <Text className="gradientText pcGradient">{team}</Text>
        <div className="listContainer">
          <UnorderedList listStyleType="none" margin="0px" padding="0px">
            {people[team].map((person) => (
              <ListItem key={person} fontSize="x-large">
                {person}
              </ListItem>
            ))}
          </UnorderedList>
        </div>
      </FlexBox>
    </Box>
  );
};

const BusinessTeam = ({ extraClass }) => {
  return <Card team="Business" extraClass={extraClass} />;
};

const DeliveryTeam = ({ extraClass }) => {
  return <Card team="Delivery" extraClass={extraClass} />;
};

const MyStepper = ({ value }) => {
  return (
    <>
      <BusinessTeam extraClass={value === "business" ? "fadeIn" : "fadeOut"} />
      <DeliveryTeam extraClass={value === "business" ? "hide" : "fadeIn"} />
    </>
  );
};

const Team = () => {
  return (
    <Slide backgroundColor="white">
      <Text className={`gradientText skyGradient`} textAlign="center">
        The Team
      </Text>
      <Stepper values={["business", "delivery"]}>
        {(value, _, isActive) =>
          isActive ? <MyStepper value={value} /> : <></>
        }
      </Stepper>
    </Slide>
  );
};

export default Team;
