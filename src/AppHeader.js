import './AppHeader.css';
import React from 'react';

class AppHeader extends React.Component {
  render () {
    return (
      <div className="Header EvenSpace">
          <div id="HeadLf">
              <h2>L.P.M. Desruelle</h2>
          </div>
          <div id="HeadRg">
              <a href="#resume">Resume</a>
              <a href="#uct">?</a>
          </div>
      </div>
    );
  }
}

export default AppHeader;