import "./styles/main.scss";
import { Deck, Heading, Slide } from "spectacle";
import { theme } from "./theme";
import BottomTemplate from "./BottomTemplate";
import Projects from "./slides/Projects";
import Team from "./slides/Team";
import FrontendTabs from "./slides/FrontendTabs";
import FrontendSearchbar from "./slides/FrontendSearchbar";
import AgileUni from "./slides/AgileUni";
import Numbers from "./slides/Numbers";

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
        <Heading className="upperHeading gradientText skyGradient">
          Intern Showcase
        </Heading>
        <Heading className="gradientText skyGradient" fontSize="h4">
          Giuseppe Barillari
        </Heading>
      </Slide>
      <Team />
      <Projects />
      <Numbers />
      <FrontendTabs />
      <FrontendSearchbar />
      <AgileUni />
    </Deck>
  );
}

export default App;
