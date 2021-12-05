// Components
import Card from "./components/Card";

// Styled Components
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global";
import { Flex } from "./components/styles/Flex.styled";

function App() {
  const theme = {
    colors: {
      background: "#0D1A2D",
      primary: "#8CACD8",
      secondary: "#15273F",
      thirtiary: "#18D3D9",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Flex>
        <Card />
      </Flex>
    </ThemeProvider>
  );
}

export default App;
