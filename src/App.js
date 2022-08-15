import "./styles/main.scss"
import { Deck, Heading, Slide } from 'spectacle';
import { theme } from "./theme";

function App() {
  return (
    <Deck theme={theme}>
      <Slide>
        <Heading>Welcome to Spectacle</Heading>
      </Slide>
    </Deck>
  );
}

export default App;
