import { createGlobalStyle } from "styled-components";
import firaCode from "../assets/fonts/FiraCode-Regular.woff";

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
      background: ${(props) => props.theme.colors["lavender-500"]}; /* Lavanda para o scroll */
      border-radius: 0.25rem; /* Bordas arredondadas no thumb */
    }
  }

  body {
    background: ${({ theme }) => theme.colors["base-background"]}; /* Fundo branco puro */
    color: ${({ theme }) => theme.colors["base-text"]}; /* Cor de texto principal */
    -webkit-font-smoothing: antialiased; /* Suavização de fontes */
    font-family: 'Nunito', sans-serif; /* Fonte padrão */
    line-height: 160%; /* Espaçamento entre linhas */
  }

  /* Estilização de títulos com gradiente */
  h1, h2, h3, h4, h5, h6 {
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.colors["blue-500"]}, /* Azul */
      ${({ theme }) => theme.colors["lavender-500"]}, /* Lavanda */
      ${({ theme }) => theme.colors["lavender-700"]} /* Lavanda mais escuro */
    );
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    margin-bottom: 1rem; /* Espaçamento abaixo dos títulos */
  }

  h1 {
    font-size: 2.5rem;
    font-weight: bold;
  }

  h2 {
    font-size: 2rem;
    font-weight: bold;
  }

  h3 {
    font-size: 1.75rem;
    font-weight: bold;
  }

  h4 {
    font-size: 1.5rem;
    font-weight: bold;
  }

  h5 {
    font-size: 1.25rem;
    font-weight: bold;
  }

  h6 {
    font-size: 1rem;
    font-weight: bold;
  }

  /* Estilização de parágrafos e textos comuns */
  p {
    font-size: 1rem;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors["base-text"]};
    margin-bottom: 1rem;
  }

  strong {
    font-weight: bold;
  }

  em {
    font-style: italic;
  }

  /* Links */
  a {
    color: ${({ theme }) => theme.colors["blue-500"]}; /* Azul para links */
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: ${({ theme }) => theme.colors["lavender-500"]}; /* Lavanda ao passar o mouse */
    }
  }

  /* Botões */
  button {
    cursor: pointer;
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.colors["blue-500"]}, /* Azul */
      ${({ theme }) => theme.colors["lavender-500"]}, /* Lavanda */
      ${({ theme }) => theme.colors["lavender-700"]} /* Lavanda mais escuro */
    );
    color: white;
    border: none;
    border-radius: 0.8rem;
    padding: 0.8rem 1.6rem;
    font-size: 1.2rem;
    transition: opacity 0.2s, transform 0.2s;

    &:hover {
      opacity: 0.9;
    }

    &:active {
      transform: scale(0.98);
    }
  }

  /* Inputs */
  input {
    border-radius: 1.6rem;
    width: 100%;
    border: solid 2px transparent;
    background-image: linear-gradient(white, white),
      linear-gradient(
        135deg,
        ${({ theme }) => theme.colors["blue-500"]}, /* Azul */
        ${({ theme }) => theme.colors["lavender-500"]}, /* Lavanda */
        ${({ theme }) => theme.colors["lavender-700"]} /* Lavanda mais escuro */
      );
    background-origin: border-box;
    background-clip: padding-box, border-box;
    font-size: 1.4rem;
    line-height: 2.1rem;
    color: ${({ theme }) => theme.colors["base-text"]};
    padding: 0.8rem;
    transition: box-shadow 0.2s;

    &:hover {
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    &:focus {
      border: solid 2px transparent;
      background-image: linear-gradient(white, white),
        linear-gradient(
          135deg,
          ${({ theme }) => theme.colors["blue-600"]}, /* Azul mais escuro */
          ${({ theme }) => theme.colors["lavender-600"]}, /* Lavanda mais escuro */
          ${({ theme }) => theme.colors["lavender-800"]} /* Lavanda bem escuro */
        );
      outline: none; /* Remove o outline padrão */
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors["base-label"]};
      opacity: 1;
    }
  }
`;