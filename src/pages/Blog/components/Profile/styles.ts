import styled from "styled-components";
import headerBg from "../../../../assets/bg-light.svg";

export const ProfileContainer = styled.section`
  width: 100%;
  min-height: 13.25rem;
  margin-top: 5rem;
  background: url(${headerBg}) no-repeat center, ${({ theme }) =>
    theme.colors["gray-100"]}; /* Adicionado fundo claro do tema light */
  background-size: cover;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05); 
  border-radius: 1.6rem; 
  padding: 2rem 2.5rem;
  display: flex;
  gap: 2rem;
`;

export const ProfilePicture = styled.img`
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 1rem; /* Levemente mais arredondado para consistência */
  object-fit: cover;
  border: 2px solid transparent; /* Borda sutil com gradiente */
  background-image: linear-gradient(white, white), radial-gradient(circle at top left, #337ab7, #28a745);
  background-origin: border-box;
  background-clip: padding-box, border-box;
`;

export const ProfileDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.75rem; /* Aumentado ligeiramente para espaçamento consistente */

    h1 {
      font-size: ${({ theme }) => theme.textSizes["title-title-l"]};
      color: ${({ theme }) => theme.colors["gray-900"]}; /* Atualizado para tema light */
      line-height: 130%;
    }
  }

  ul {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    flex-wrap: wrap;
    margin-top: auto;
  }

  li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${({ theme }) => theme.colors["gray-900"]}; /* Texto mais suave no tema light */
    font-size: ${({ theme }) => theme.textSizes["text-text-m"]};
  }

  svg {
    width: 1.125rem;
    height: 1.125rem;
    color: ${({ theme }) => theme.colors["gray-600"]}; /* Ajustado para tema light */
  }
`;