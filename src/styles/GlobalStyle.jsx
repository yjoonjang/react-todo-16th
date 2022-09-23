import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";
import '../styles/font.css'

const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
  }

  body {
    font-family: SCoreMontserrat;
    line-height: 1.5;
  }

  button {
    background-color: transparent;
    padding: 0;
    cursor: pointer;
    border: none;
    line-height: 0;
  }
`;

export default GlobalStyle;
