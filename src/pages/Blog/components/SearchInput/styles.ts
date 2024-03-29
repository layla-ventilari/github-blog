import styled from "styled-components";


export const SearchInputContainer = styled.form `
  width: 100%;
  margin-top: 4.5rem;
  margin-bottom: 3rem;

 header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.85rem;


h3 {
  font-size: ${({ theme}) => theme.textSizes["text-text-s"]};
  color: ${({theme}) => theme.colors["blue-100"]};
 }
}

input {
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  background: ${({theme}) => theme.colors["violet-900"]};
  border: 1px solid ${({theme}) => theme.colors["base-border"]};
  color: ${({theme}) => theme.colors["blue-100"]};
  transition: 0.4s;


&:focus{
  border-color: ${({theme}) => theme.colors["violet-400"]};
  outline: none;
}
&::placeholder{
  color: ${({theme}) => theme.colors["blue-400"]};
  }
}
`;
