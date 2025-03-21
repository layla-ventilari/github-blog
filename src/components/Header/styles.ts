import styled from "styled-components";

export const HeaderContainer = styled.header `
  width: 100%;
  height: 4rem;
  background:${({ theme }) => theme.colors["violet-300"]};
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  img{
    margin-bottom: 5rem;
  }
`