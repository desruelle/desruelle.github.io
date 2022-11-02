import React from 'react';

class ResumeSectionHeader extends React.Component {
  render () {
    return (
    <div>
        <h2>{this.props.title}</h2>
        <hr/>
    </div>
    );
  }
}

export default ResumeSectionHeader;