import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&family=Open+Sans:wght@300;500;700&display=swap');
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.primary};
    font-family: 'Poppins', sans-serif;
    font-size: 1.15em;
    margin: 0;
  }
  img {
    max-width: 100%;
}
`;

export default GlobalStyles;
