import { createGlobalStyle } from "styled-components";
import firaCode from "../assets/fonts/FiraCode-Regular.woff";
import headerBg from "../assets/bg-light.svg";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'FiraCode';
    src: url(${firaCode}) format('woff');
    font-weight: 400;
    font-style: normal;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    ::-webkit-scrollbar {
      width: 0.45rem;
    }
    ::-webkit-scrollbar-track {
      background: ${(props) => props.theme.colors["base-border"]}; 
    }
    ::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme.colors["brand-blue"]}; 
    }
  }
    
 body {
    background: url(${headerBg}) no-repeat center top, ${(props) =>
      props.theme.colors["blue-100"]};
    background-size: 100% auto; 
    color: ${(props) => props.theme.colors["blue-800"]}; 
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 ${(props) =>
      props.theme.textSizes["text-text-m"]} 'Nunito', sans-serif;
    line-height: 160%;
  }

  ul {
    list-style: none;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  button {
    cursor: pointer;
  }
`;