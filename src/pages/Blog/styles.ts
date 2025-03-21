import styled from "styled-components";


export const BlogContainer = styled.div`
  max-width: 800px;
  margin: 0 auto; 
  padding: 0 1rem; 
`;

export const HeroContainer = styled.section`
  text-align: left; 
  padding: 4.5rem 0;

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    color: ${(props) => props.theme.colors["base-title"]};
  }

  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme.colors["base-text"]};
    margin: 0; 
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