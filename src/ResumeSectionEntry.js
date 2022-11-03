import React from 'react';

class ResumeSectionEntry extends React.Component {
  render () {
    return (
    <div className='ResumeItem'>
        <h3>{this.props.company} - {this.props.position}</h3>
        <h5>{this.props.fromdate} - {this.props.todate}</h5>
        <ul>
          {this.props.description.map(item => (
            <li>
              {typeof item == "string" &&
                item
              }
              {typeof item == "object" &&
                item.item
              }
              {typeof item == "object" &&
                <ul>
                {item.subitems.map(subitem => (
                  <li>{subitem}</li>
                ))}
                </ul>
              }
            </li>
          ))}
        </ul>
    </div>
    );
  }
}

export default ResumeSectionEntry;