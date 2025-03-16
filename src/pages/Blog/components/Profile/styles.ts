import styled from "styled-components";

export const ProfileContainer = styled.section`
  width: 100vw; 
  max-width: 100%; 
  padding: 2rem; 
  display: flex;
  flex-direction: row; 
  align-items: center; 
  justify-content: center;
  gap: 2rem; 
`;

export const ProfilePicture = styled.img`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0; 
`;

export const ProfileDetails = styled.div`
  flex: 1; 
  display: flex;
  flex-direction: column;
  gap: 1rem;

  header {
    display: flex;
    flex-direction: row; 
    justify-content: space-between; 
    align-items: center; 
    gap: 0.5rem; 

    h1 {
      font-size: ${({ theme }) => theme.textSizes["title-title-l"]};
      color: ${({ theme }) => theme.colors["gray-900"]};
      line-height: 130%;
      margin: 0; 
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
    flex-direction: row; 
    align-items: center;
    gap: 1.5rem; 
    flex-wrap: wrap; 
    margin-top: 0.5rem; 
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