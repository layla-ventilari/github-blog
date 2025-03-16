import styled from "styled-components";

export const SearchInputContainer = styled.form`
  width: 100%;
  margin-top: 4.5rem;
  margin-bottom: 3rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.85rem;

    h3 {
      font-size: ${({ theme }) => theme.textSizes["text-text-s"]};
      color: ${({ theme }) => theme.colors["gray-900"]}; // Mantido do tema light
    }
  }

  input {
    /* O gradiente, borda, radius, fonte e cores já estão no GlobalStyles */
    padding: 0.75rem 1rem; /* Sobrescreve o padding do global (0.8rem) */
    transition: 0.4s; /* Mantido do original, adiciona transição */
    
    /* Ajustes específicos para o componente */
    &:focus {
      outline: none; /* Mantido do original */
    }

    &::placeholder {
      /* Já definido como #7f7f7f no global, mas pode ser sobrescrito se necessário */
      color: ${({ theme }) => theme.colors["gray-600"]}; // Sobrescreve o global com tema light
    }
  }
`;