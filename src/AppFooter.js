import logo_em from './images/logo_em.png';
import logo_li from './images/logo_li.png';
import logo_gh from './images/logo_gh.png';

import './AppHeader.css';
import React from 'react';

class AppHeader extends React.Component {
  render () {
    return (
      <div className="Header EvenSpace">
          <div className = "HeaderSection" id="FootLf">
          </div>
          <div className = "HeaderSection" id="FootMd">
            Leo Desruelle 2023
          </div>
          <div className = "HeaderSection" id="HeadRg">
              <a href="mailto:leo.pm.desruelle@gmail.com">
                <img src={logo_em} className="Logo LogoPadding" alt="E-mail mailto" />
              </a>
              <a href="https://www.linkedin.com/in/leo-pm-desruelle/">
                <img src={logo_li} className="Logo" alt="LinkedIn link" />
              </a>
              <a href="https://github.com/desruelle">
                <img src={logo_gh} className="Logo" alt="GitHub link" />
              </a>
          </div>
      </div>
    );
  }
}

export default AppHeader;