import React from 'react';

class ResumeSectionEntry extends React.Component {
  render () {
    return (
    <div className='ResumeItem'>
        <h3>{this.props.company} - {this.props.position}</h3>
        <h5>{this.props.fromdate} - {this.props.todate}</h5>
        <p>{this.props.description}</p>
    </div>
    );
  }
}

export default ResumeSectionEntry;