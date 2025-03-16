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
      props.theme.colors["base-background"]};
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

  /* Estilização direta do input com o gradiente */
  input {
    border-radius: 1.6rem;
    width: 100%;
    border: solid 1.5px transparent;
    background-image: linear-gradient(white, white), radial-gradient(circle at top left, #337ab7, #28a745);
    background-origin: border-box;
    background-clip: padding-box, border-box;
    font-size: 1.4rem;
    line-height: 2.1rem;
    color: #7f7f7f;
    padding: 0.8rem; /* Ajuste conforme necessário */

    &:hover {
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Ajuste conforme seu tema */
    }

    &:focus {
      border: solid 1.5px transparent;
      background-image: linear-gradient(white, white), radial-gradient(circle at top left,rgb(74, 46, 202),rgb(247, 9, 175));
      background-origin: border-box;
      background-clip: padding-box, border-box;
    }

    &::placeholder {
      color: #7f7f7f;
      opacity: 1;
    }
  }
`;