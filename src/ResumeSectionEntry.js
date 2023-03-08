import React from 'react';

class ResumeSectionEntry extends React.Component {
  render () {
    return (
    <div className='ResumeItem'>
        <div className='RowFlex SpaceAround'>
          <h3>{this.props.company}</h3>
          <div className='RightJustify'>
            <h5>{this.props.position}</h5>
            <h5>{this.props.fromdate} - {this.props.todate}</h5>
          </div>
        </div>
        <hr/>
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