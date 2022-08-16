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

const Projects = () => {
  return (
    <Slide backgroundColor="white">
      <Text className="gradientText" textAlign="center">
        The projects
      </Text>
      <Table>
        <TableHeader>
          <TableRow className="gradientText">
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
                    <ListItem>Backend</ListItem>
                    <ListItem>Frontend</ListItem>
                  </UnorderedList>
                </FlexBox>
              </Appear>
            </TableCell>

            <TableCell>
              <Appear>
                <FlexBox>
                  <UnorderedList>
                    <ListItem>Backend</ListItem>
                    <ListItem>Frontend</ListItem>
                    <ListItem>DevOps</ListItem>
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
