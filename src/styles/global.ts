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
      background: ${(props) => props.theme.colors["base-border"]}; // #DDE3E8 (cinza claro)
    }
    ::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme.colors["brand-blue"]}; // #3294F8 (azul vibrante)
      border-radius: 999px;
    }
  }
    
 body {
    background: url(${headerBg}) no-repeat center top, ${(props) =>
      props.theme.colors["base-background"]}; // Fundo branco (#FFFFFF) como fallback
    background-size: 100% auto; // Ajusta o SVG para caber no topo
    color: ${(props) => props.theme.colors["base-text"]}; // #333F4D (cinza escuro)
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