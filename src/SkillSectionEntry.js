import React from 'react';

class SkillSectionEntry extends React.Component {
  render () {
    return (
    <div className='ResumeItem'>
        <h3>{this.props.category}</h3>
        <ul>
          {this.props.skills.map(skill => (
              <li>{skill}</li>
          ))}
        </ul>
    </div>
    );
  }
}

export default SkillSectionEntry;