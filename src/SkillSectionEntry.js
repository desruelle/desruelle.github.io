import React from 'react';

class SkillSectionEntry extends React.Component {
  render () {
    return (
    <div className='ResumeItem'>
        <div className='ItemTitle'>
          <h3>{this.props.category}</h3>
        </div>
        <hr/>
        <ul className={this.props.columns}>
          {this.props.skills.map(skill => (
              <li>{skill}</li>
          ))}
        </ul>
    </div>
    );
  }
}

export default SkillSectionEntry;