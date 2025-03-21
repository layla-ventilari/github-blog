import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 4rem;
  background: ${({ theme }) => theme.colors["lavender-300"]};
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors["lavender-500"]};
  margin-right: 0.5rem;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
