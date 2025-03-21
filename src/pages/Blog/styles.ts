import styled from "styled-components";

// Constantes para espaçamento
const SPACING = {
  small: "1rem",
  medium: "2rem",
  large: "4rem",
};

// Container principal do blog
export const BlogContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${SPACING.medium};

  @media (max-width: 768px) {
    padding: ${SPACING.small};
  }
`;

export const HeroContainer = styled.div`
  text-align: left;
  margin-bottom: ${SPACING.large};
  padding: ${SPACING.large} ${SPACING.small} ${SPACING.large} 0; 
  overflow: visible; 

  @media (max-width: 768px) {
    padding: ${SPACING.medium} ${SPACING.small};
    margin-bottom: ${SPACING.medium};
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.colors["blue-500"]},
      ${({ theme }) => theme.colors["lavender-500"]},
      ${({ theme }) => theme.colors["lavender-700"]}
    );
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    display: inline-block;
    margin-bottom: ${SPACING.small};
    line-height: 1.2;

    @media (max-width: 768px) {
      font-size: 2rem; 
    }
  }

  p {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors["base-text"]};
    margin: 0 0 ${SPACING.medium} 0;
    line-height: 1.6;

    @media (max-width: 768px) {
      font-size: 1rem; /* Texto menor em telas pequenas */
    }
  }
`;
export const PostListContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem; 
`;

  export const PostItem = styled.article`
  padding: 1.5rem;
  transition: background 0.2s ease;
  text-align: left; 
  &:hover {
    background: ${(props) => props.theme.colors["base-profile"]};
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    color: ${(props) => props.theme.colors["base-title"]};
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    color: ${(props) => props.theme.colors["base-text"]};
    line-height: 1.6;
    margin: 0;
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme.colors["base-span"]};
    display: block; 
    margin-bottom: 0.5rem; 
  }
`;