import './AppHeader.css';
import React from 'react';

class AppHeader extends React.Component {
  render () {
    return (
      <div className="Header EvenSpace">
          <div className = "HeaderSection" id="FootLf">
            test
          </div>
          <div className = "HeaderSection" id="FootMd">
            Leo Desruelle 2023
          </div>
          <div className = "HeaderSection" id="HeadRg">
              <a href="#resume">Email</a>
              <a href="#uct">LinkedIn</a>
              <a href="#resume">GitHub</a>
          </div>
      </div>
    );
  }
}

export default AppHeader;