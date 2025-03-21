import styled, { css } from "styled-components";

interface ExternalLinkProps {
  variant?: "iconLeft"
}

export const ExternalLinkContainer = styled.a<ExternalLinkProps>`
  border: none;
  background: none;
  font-size: ${({theme}) => theme.textSizes["components-link"]};
  color: ${({theme}) => theme.colors["blue-200"]};
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 700;
  transition: 0.4s;
  border-bottom: 1px solid transparent;
  height: 19px;
  line-height: 19px;

  svg {
    width: 0.75rem;
    height: 0.75rem;
  }

  &:hover {
    border-color: ${({theme}) => theme.colors["blue-300"]};
  }

  ${({variant}) => variant === 'iconLeft' && css`
    flex-direction: row-reverse;
  `}
`;