import React from 'react';
import { Link, NavLink } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { ExternalLink } from '../ExternalLink'; 
import { HeaderContainer, Icon } from './styles';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub as faGithubLogo } from '@fortawesome/free-brands-svg-icons'; // Importando o ícone do GitHub

const Header: React.FC = () => (
  <HeaderContainer>
    <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', maxWidth: '1200px', width: '100%', padding: '0 1rem' }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', color: 'white', textDecoration: 'none' }}>
        <Icon icon={faGithubLogo} />
      </Link>

      <nav style={{ display: 'flex', gap: '1.5rem', marginLeft: 'auto' }}>
        <NavLink to="#about" style={{ textDecoration: 'none' }}>
          About
        </NavLink>
        <NavLink to="#projects" style={{ textDecoration: 'none' }}>
          Projects
        </NavLink>
        <NavLink to="#tech" style={{ textDecoration: 'none' }}>
          Technologies
        </NavLink>
      </nav>

      {/* Ícones Sociais */}
      <div style={{ display: 'flex', gap: '1rem' }}>
        <ExternalLink
          href="https://github.com/LaylaVentillari"
          target="_blank"
          rel="noopener noreferrer"
          text=""
          icon={<FontAwesomeIcon icon={faGithub} />}
          variant="iconLeft"
        />
        <ExternalLink
          href="https://www.linkedin.com/in/layla-ventilari-135574145/"
          target="_blank"
          rel="noopener noreferrer"
          text="LinkedIn"
          icon={<FontAwesomeIcon icon={faLinkedin} />}
          variant="iconLeft"
        />
        <ExternalLink
          href="https://www.instagram.com/layla.ventilari/"
          target="_blank"
          rel="noopener noreferrer"
          text=""
          icon={<FontAwesomeIcon icon={faLink} />}
          variant="iconLeft"
        />
      </div>
    </div>
  </HeaderContainer>
);

export default Header;