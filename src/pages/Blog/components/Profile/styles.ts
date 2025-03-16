import styled from "styled-components";
import headerBg from "../../../../assets/bg-light.svg";

export const ProfileContainer = styled.section`
  width: 100%;
  height: 10rem; /* Reduzido de min-height: 13.25rem para uma altura fixa mais compacta */
  margin-top: -4rem; /* Reduzido de -5.5rem para menos sobreposição */
  background: url(${headerBg}) no-repeat center, ${({ theme }) =>
    theme.colors["gray-100"]}; /* Mantido o fundo claro */
  background-size: cover;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.03); /* Sombra mais sutil e clean */
  border-radius: 1rem; /* Reduzido de 1.6rem para um arredondamento mais sutil */
  padding: 1.5rem 2rem; /* Reduzido de 2rem 2.5rem para um layout mais compacto */
  display: flex;
  gap: 1.5rem; /* Reduzido de 2rem para um espaçamento mais enxuto */
`;

export const ProfilePicture = styled.img`
  width: 7.5rem; /* Reduzido de 9.25rem para um tamanho mais compacto */
  height: 7.5rem; /* Reduzido de 9.25rem */
  border-radius: 0.75rem; /* Reduzido de 1rem para um visual mais sutil */
  object-fit: cover;
  /* Borda com gradiente removida para um design mais clean */
`;

export const ProfileDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.5rem; /* Reduzido de 0.75rem para compactar */

    h1 {
      font-size: ${({ theme }) => theme.textSizes["title-title-m"]}; /* Reduzido de title-l para um tamanho mais discreto */
      color: ${({ theme }) => theme.colors["gray-900"]}; /* Mantido tema light */
      line-height: 130%;
    }
  }

  ul {
    display: flex;
    align-items: center;
    gap: 1rem; /* Reduzido de 1.5rem para um layout mais apertado */
    flex-wrap: wrap;
    margin-top: auto;
  }

  li {
    display: flex;
    align-items: center;
    gap: 0.375rem; /* Reduzido de 0.5rem para um espaçamento mais sutil */
    color: ${({ theme }) => theme.colors["gray-600"]}; 
    font-size: ${({ theme }) => theme.textSizes["text-text-s"]}; /* Reduzido de text-m para um texto mais compacto */
  }

  svg {
    width: 1rem; /* Reduzido de 1.125rem para ícones menores */
    height: 1rem;
    color: ${({ theme }) => theme.colors["gray-600"]}; /* Mantido tema light */
  }
`;