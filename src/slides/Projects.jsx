import React from "react";
import {
  Appear,
  FlexBox,
  ListItem,
  Slide,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  Text,
  UnorderedList,
} from "spectacle";

const images = {
  backend: require("../assetts/backend-sky.png"),
  frontend: require("../assetts/frontend-sky.png"),
  devops: require("../assetts/devops-sky.png"),
  docops: require("../assetts/docops-sky.png"),
};

const LI = ({ text }) => {
  return (
    <>
      <img
        src={images[text.toLowerCase()]}
        alt={`${text} bullet point`}
        className="bulletImage"
      />{" "}
      {text}
    </>
  );
};

const Projects = () => {
  return (
    <Slide backgroundColor="white">
      <Text className="gradientText skyGradient" textAlign="center">
        The projects
      </Text>
      <Table>
        <TableHeader>
          <TableRow className="gradientText skyGradient">
            <TableCell textAlign="center" color="transparent">
              Shadowing App
            </TableCell>
            <TableCell textAlign="center" color="transparent">
              Agile University
            </TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <Appear>
                <FlexBox>
                  <UnorderedList>
                    <ListItem>
                      <LI text="Backend" />
                    </ListItem>
                    <ListItem>
                      <LI text="Frontend" />
                    </ListItem>
                  </UnorderedList>
                </FlexBox>
              </Appear>
            </TableCell>

            <TableCell>
              <Appear>
                <FlexBox>
                  <UnorderedList>
                    <ListItem>
                      <LI text="Backend" />
                    </ListItem>
                    <ListItem>
                      <LI text="Frontend" />
                    </ListItem>
                    <ListItem>
                      <LI text="DevOps" />
                    </ListItem>
                    <ListItem>
                      <LI text="DocOps" />
                    </ListItem>
                  </UnorderedList>
                </FlexBox>
              </Appear>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Slide>
  );
};

export default Projects;
