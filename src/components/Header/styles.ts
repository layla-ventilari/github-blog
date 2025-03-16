import styled from "styled-components";
import headerKey from "../../assets/bg-header.svg"

export const HeaderContainer = styled.header `
  width: 100%;
  height: 18.5rem;
  background: url(${headerKey}) no-repeat center;  
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  img{
    margin-bottom: 5rem;
  }
`