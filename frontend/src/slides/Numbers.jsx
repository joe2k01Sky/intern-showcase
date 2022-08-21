import React from "react";
import {
  Appear,
  Box,
  Heading,
  ListItem,
  Slide,
  Text,
  UnorderedList,
} from "spectacle";
import { AiOutlineTrademark } from "react-icons/ai";
import {
  BiCodeAlt,
  BiGitPullRequest,
  BiGitCommit,
  BiCommentDots,
} from "react-icons/bi";
import { BsLinkedin } from "react-icons/bs";
import { GoIssueClosed } from "react-icons/go";
import { IconContext } from "react-icons/lib";

const LI = ({ text, colour, icon, trademark }) => {
  return (
    <Appear>
      <ListItem>
        <IconContext.Provider value={{ color: colour, size: "2rem" }}>
          <Box className="liNumbers">
            {icon}{" "}
            {trademark && (
              <sub>
                <IconContext.Provider
                  value={{ color: "black", size: "0.7rem" }}
                >
                  <AiOutlineTrademark />
                </IconContext.Provider>
              </sub>
            )}
            <Text fontSize="2rem" className="Text">
              {text}
            </Text>
          </Box>
        </IconContext.Provider>
      </ListItem>
    </Appear>
  );
};

const numbers = {
  lines: 7860 + 949,
  commits: 112 + 35,
  reviewed: 8 + 7,
  prs: 12 + 7,
  tickets: 19,
  courses: 3,
};

const Numbers = () => {
  return (
    <Slide backgroundColor="white">
      <Heading className="gradientText opGradient numbersHeading" fontSize="h3">
        Internship in numbers
      </Heading>
      <Box>
        <UnorderedList listStyleType="none">
          <LI
            text={`${numbers.lines} lines of code`}
            icon={<BiCodeAlt />}
            colour="rgb(255, 158, 0)"
          />
          <LI
            text={`${numbers.commits} commits`}
            icon={<BiGitCommit />}
            colour="rgb(255, 0, 0)"
          />
          <LI
            text={`${numbers.prs} merged pull requests`}
            icon={<BiGitPullRequest />}
            colour="rgb(181, 0, 125)"
          />
          <LI
            text={`${numbers.reviewed} reviewed pull requests`}
            icon={<BiCommentDots />}
            colour="rgb(33, 66, 156)"
          />
          <LI
            text={`${numbers.tickets} closed tickets`}
            icon={<GoIssueClosed />}
            colour="rgb(0, 113, 255)"
          />
          <LI
            text={`${numbers.courses} LinkedIn Learning courses`}
            icon={<BsLinkedin />}
            colour="rgb(51, 118, 176)"
            trademark
          />
        </UnorderedList>
      </Box>
    </Slide>
  );
};

export default Numbers;
