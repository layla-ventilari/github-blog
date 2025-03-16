import { Link } from "react-router-dom";
import styled from "styled-components";

export const PostContainer = styled(Link)`
  width: 100%;
  height: 16.25rem;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors["base-post"]}; // #FAFAFA
  border: 2px solid ${({ theme }) => theme.colors["base-border"]}; // #DDE3E8
  padding: 2rem;
  transition: 0.4s;

  &:hover {
    border-color: ${({ theme }) => theme.colors["base-label"]}; // #7A8794
  }

  div {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.25rem;

    strong {
      flex: 1;
      font-size: ${({ theme }) => theme.textSizes["title-title-m"]}; // 1.25rem
      color: ${({ theme }) => theme.colors["blue-600"]}; // #CCE1F5
    }

    span {
      width: max-content;
      font-size: ${({ theme }) => theme.textSizes["text-text-s"]}; // 0.875rem
      color: ${({ theme }) => theme.colors["base-span"]}; // 
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }
  }

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
  }
`;