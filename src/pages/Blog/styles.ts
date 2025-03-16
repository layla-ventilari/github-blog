import styled from "styled-components";

export const PostListContainer = styled.section`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
  gap: 2rem;
  background: transparent; // Usa o fundo do body (#FFFFFF)
`;

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  background: ${(props) => props.theme.colors["base-post"]};
  border: 1px solid ${(props) => props.theme.colors["base-border"]}; // #DDE3E8
  border-radius: 8px;
  text-decoration: none;
  color: ${(props) => props.theme.colors["blue-600"]}; 
  transition: background 0.2s ease;

  &:hover {
    background: ${(props) => props.theme.colors["base-profile"]}; // #F0F2F5
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  strong {
    font-family: "Nunito", sans-serif; // Alinhado com o body
    font-size: ${(props) => props.theme.textSizes["title-title-m"]}; // 1.25rem
    font-weight: 700;
    color: ${(props) => props.theme.colors["base-title"]}; // #0A1420
    line-height: 1.4;
  }

  span {
    font-family: "Nunito", sans-serif;
    font-size: ${(props) => props.theme.textSizes["text-text-s"]}; // 0.875rem
    color: ${(props) => props.theme.colors["base-span"]}; // #5A6876
  }

  p {
    font-family: "Nunito", sans-serif;
    font-size: ${(props) => props.theme.textSizes["text-text-m"]}; // 1rem
    color: ${(props) => props.theme.colors["base-text"]}; // #333F4D
    line-height: 1.6; 
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;