import styled from "styled-components";

export const PostContentContainer = styled.div `
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2.5rem 2rem;
  margin-bottom: 8rem;

  img{
    width: 100%;
  }

  h1,
  h2,
  h3{
    color: ${({theme})=> theme.colors["blue-600"]} ;
  }

  ul{
    list-style: inherit;
    padding-left: 1.5rem;
  }
  pre{
    background:${({theme})=> theme.colors["blue-100"]} ;
    padding: 1rem;
    > div{
      background: none !important;
      padding: 0 !important;
      margin: 0 !important;

      code{
        font-family: "FiraCode", monospace !important;
        line-height: 160% !important;
      }
    }
  }
`;