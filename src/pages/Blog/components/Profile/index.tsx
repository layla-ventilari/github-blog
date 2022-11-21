import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ExternalLink } from "../../../../components/ExternalLink";
import { ProfileContainer, ProfileDetails, ProfilePicture } from "./styles";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
export function Profile(){
  return(
    <ProfileContainer>
      <ProfilePicture src="https://github.com/LaylaVentillari.png"/>
      <ProfileDetails>
        <header>
          <h1>Layla Ventilari</h1>
          <ExternalLink text="Github" href="#"/>
        </header>
        <p>
        Tristique volutpat pulvinar vel massa, pellentesque egestas.
        Eu viverra massa quam dignissim aenean malesuada suscipit. 
        Nunc, volutpat pulvinar vel mass.
        </p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} />
              LaylaVentillari
          </li>
          <li>
            <FontAwesomeIcon icon={faLinkedin}/>
            layla-ventilari-135574145
          </li>
        </ul>
      </ProfileDetails>
    </ProfileContainer> 
  )
}