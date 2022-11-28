import { createGlobalStyle } from "styled-components";
import '../css/font.css';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  
  body {
    font-family: ${props => props.inputFont || 'AritaBuri'}; //'IropkeBatangM';
    line-height: 1.5;
  }
`;

export default GlobalStyle;