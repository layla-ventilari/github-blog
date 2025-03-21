import { Link } from "react-router-dom";
import styled from "styled-components";

export const PostContainer = styled(Link)`
  width: 100%;
  height: auto;
  border-radius: 10px;
  padding: 1.5rem;
  background: ${({ theme }) => theme.colors["base-post"]};
  text-decoration: none;
  color: inherit;
  transition: background 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors["base-profile"]};
  }

  div {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;

    strong {
      flex: 1;
      font-size: ${({ theme }) => theme.textSizes["title-title-m"]};
      color: ${({ theme }) => theme.colors["base-title"]};
      line-height: 1.6;
    }

    span {
      width: max-content;
      font-size: ${({ theme }) => theme.textSizes["text-text-s"]};
      color: ${({ theme }) => theme.colors["base-span"]};
      white-space: nowrap;
    }
  }

  p {
    font-size: ${({ theme }) => theme.textSizes["text-text-m"]};
    color: ${({ theme }) => theme.colors["base-text"]};
    line-height: 1.6;
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }
`;