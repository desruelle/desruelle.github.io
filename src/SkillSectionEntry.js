import React from 'react';

class SkillSectionEntry extends React.Component {
  render () {
    return (
    <div className='ResumeItem'>
        <h3>{this.props.category}</h3>
        {this.props.skills.map(skill => (
            <p>{skill}</p>
        ))
        }
    </div>
    );
  }
}

export default SkillSectionEntry;