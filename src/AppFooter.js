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
              <a href="mailto:leo.pm.desruelle@gmail.com">Email</a>
              <a href="https://www.linkedin.com/in/leo-pm-desruelle/">LinkedIn</a>
              <a href="https://github.com/desruelle">GitHub</a>
          </div>
      </div>
    );
  }
}

export default AppHeader;