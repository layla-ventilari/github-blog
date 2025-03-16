import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExternalLink } from "../../../../components/ExternalLink";
import { ProfileContainer, ProfileDetails, ProfilePicture } from "./styles";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useCallback, useEffect, useState } from "react";
import { api } from "../../../../lib/axios";
import { Spinner } from "../../../../components/Spinner";

const username = import.meta.env.VITE_GITHUB_USERNAME;

interface ProfileData {
  login: string;
  bio: string;
  avatar_url: string;
  html_url: string;
  name: string;
}

export function Profile() {
  const [profileData, setProfileData] = useState<ProfileData>(
    {} as ProfileData
  );
  const [isLoading, setIsLoading] = useState(true);

  const getProfileData = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await api.get(`/users/${username}`);
      setProfileData(response.data);
    } finally {
      setIsLoading(false);
    }
  }, []); // Removi [profileData] da dependência, pois não é necessário aqui

  useEffect(() => {
    getProfileData();
  }, [getProfileData]);

  return (
    <ProfileContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <ProfilePicture src={profileData.avatar_url} alt={`${profileData.name}'s avatar`} />
          <ProfileDetails>
            <header>
              <h1>{profileData.name || profileData.login}</h1> 
              <ExternalLink
                text="GitHub"
                href={profileData.html_url}
                target="_blank"
              />
            </header>
            <p className="bio">
              {profileData.bio || "Este usuário ainda não tem uma bio."} 
            </p>
            <ul>
              <li>
                <FontAwesomeIcon icon={faGithub} />
                {profileData.login}
              </li>
              <li>
                <FontAwesomeIcon icon={faLinkedin} />
                layla-ventilari
              </li>
            </ul>
          </ProfileDetails>
        </>
      )}
    </ProfileContainer>
  );
}