import styled from "styled-components";

export const ProfileContainer = styled.section`
  width: 100vw; /* Largura total da viewport */
  max-width: 100%; /* Garante que não exceda a tela */
  padding: 2rem; /* Mantido para espaçamento interno */
  background: ${({ theme }) => theme.colors["gray-100"]}; /* Apenas cor sólida, sem imagem */
  border-radius: 1rem; /* Mantido o arredondamento sutil */
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.03); /* Sombra leve */
  display: flex;
  flex-direction: row; /* Explicitamente definido como linha */
  align-items: center; /* Centraliza verticalmente */
  justify-content: center; /* Centraliza horizontalmente os itens */
  gap: 2rem; /* Espaçamento entre foto e detalhes */
`;

export const ProfilePicture = styled.img`
  width: 6rem; /* Tamanho mantido */
  height: 6rem;
  border-radius: 50%; /* Círculo mantido */
  object-fit: cover;
  flex-shrink: 0; /* Impede que a imagem encolha */
`;

export const ProfileDetails = styled.div`
  flex: 1; /* Ocupa o espaço disponível */
  display: flex;
  flex-direction: column;
  gap: 1rem; /* Espaçamento vertical entre elementos internos */

  header {
    display: flex;
    flex-direction: row; /* Mudado para linha para alinhar h1 e link lado a lado */
    justify-content: space-between; /* Espalha o h1 e o link */
    align-items: center; /* Centraliza verticalmente */
    gap: 0.5rem; /* Espaço entre h1 e link */

    h1 {
      font-size: ${({ theme }) => theme.textSizes["title-title-l"]};
      color: ${({ theme }) => theme.colors["gray-900"]};
      line-height: 130%;
      margin: 0; /* Remove margens padrão */
    }
  }

  p.bio {
    font-size: ${({ theme }) => theme.textSizes["text-text-m"]};
    color: ${({ theme }) => theme.colors["gray-600"]};
    line-height: 160%;
    margin: 0; /* Remove margens padrão */
  }

  ul {
    display: flex;
    flex-direction: row; /* Linha para itens lado a lado */
    align-items: center;
    gap: 1.5rem; /* Espaçamento entre itens */
    flex-wrap: wrap; /* Permite quebra de linha se necessário */
    margin-top: 0.5rem; /* Pequeno espaçamento acima */
  }

  li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${({ theme }) => theme.colors["gray-600"]};
    font-size: ${({ theme }) => theme.textSizes["text-text-m"]};
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
    color: ${({ theme }) => theme.colors["gray-600"]};
  }
`;