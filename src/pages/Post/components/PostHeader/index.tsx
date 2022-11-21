import { ExternalLink } from "../../../../components/ExternalLink";
import { PostHeaderContainer } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faCalendar, faComment, faChevronLeft } from "@fortawesome/free-solid-svg-icons"
export function PostHeader(){
  return(
    <PostHeaderContainer>
      <header>
        <ExternalLink as="button" icon={<FontAwesomeIcon icon={faChevronLeft} />} text="voltar"href="#"/>
        <ExternalLink text="Ver no Github" href="#" target="_blank"/>
      </header>
      <h1>JavaScript data and data structures</h1>
      <ul>
        <li>
          <FontAwesomeIcon icon={faGithub}/>
          adsdsdd
        </li>
        <li>
          <FontAwesomeIcon icon={faCalendar}/>
          Há 1 dia
        </li>
        <li>
          <FontAwesomeIcon icon={faComment}/>
          5 comentários
        </li>
      </ul>
    </PostHeaderContainer>
  )
}