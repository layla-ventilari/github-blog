import styled from "styled-components";
import headerBg from "../../../../assets/bg-light.svg";

export const ProfileContainer = styled.section`
  width: 100%;
  padding: 2rem; /* Ajustado para um padding mais uniforme */
  background: url(${headerBg}) no-repeat center, ${({ theme }) =>
    theme.colors["gray-100"]}; /* Mantido o fundo claro */
  background-size: cover;
  border-radius: 1rem; /* Mantido o arredondamento sutil */
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.03); /* Sombra leve */
  display: flex;
  align-items: center; /* Centraliza verticalmente os itens */
  gap: 2rem; /* Aumentado de volta para um espaçamento mais generoso */
`;

export const ProfilePicture = styled.img`
  width: 6rem; /* Reduzido ainda mais para um tamanho mais elegante */
  height: 6rem;
  border-radius: 50%; /* Círculo para um visual moderno de hero */
  object-fit: cover;
`;

export const ProfileDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem; /* Espaçamento interno mais organizado */

  header {
    display: flex;
    flex-direction: column; /* Mudado para coluna para um layout de hero */
    gap: 0.25rem; /* Espaço menor entre título e subtítulo */

    h1 {
      font-size: ${({ theme }) => theme.textSizes["title-title-l"]}; /* Aumentado para destacar */
      color: ${({ theme }) => theme.colors["gray-900"]}; /* Tema light */
      line-height: 130%;
    }

    p.bio {
      font-size: ${({ theme }) => theme.textSizes["text-text-m"]};
      color: ${({ theme }) => theme.colors["gray-600"]}; /* Tom mais suave */
      line-height: 160%; /* Mais legível */
      max-width: 80%; /* Limita a largura da bio para não ficar muito espalhado */
    }
  }

  ul {
    display: flex;
    align-items: center;
    gap: 1.5rem; /* Aumentado para um visual mais arejado */
    flex-wrap: wrap;
  }

  li {
    display: flex;
    align-items: center;
    gap: 0.5rem; /* Aumentado para um espaçamento mais confortável */
    color: ${({ theme }) => theme.colors["gray-600"]};
    font-size: ${({ theme }) => theme.textSizes["text-text-m"]}; /* Aumentado para legibilidade */
  }

  svg {
    width: 1.25rem; /* Aumentado para destacar os ícones */
    height: 1.25rem;
    color: ${({ theme }) => theme.colors["gray-600"]};
  }
`;