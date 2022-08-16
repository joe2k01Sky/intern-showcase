import "./styles/main.scss";
import { Deck, Heading, Slide, Text } from "spectacle";
import { theme } from "./theme";
import BottomTemplate from "./BottomTemplate";
import Projects from "./slides/Projects";

function App() {
  return (
    <Deck
      theme={theme}
      template={({ slideNumber, numberOfSlides }) => (
        <BottomTemplate
          slideNumber={slideNumber}
          numberOfSlides={numberOfSlides}
        />
      )}
    >
      <Slide backgroundColor="white">
        <Heading className="upperHeading gradientText">Intern Showcase</Heading>
        <Heading className="gradientText" fontSize="h4">
          Giuseppe Barillari
        </Heading>
      </Slide>
      <Projects />
    </Deck>
  );
}

export default App;
