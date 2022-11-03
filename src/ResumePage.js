import './Page.css';
import ResumeSectionHeader from './ResumeSectionHeader';
import ResumeSectionEntry from './ResumeSectionEntry';
import SkillSectionEntry from './SkillSectionEntry';
import React from 'react';

import employmentData from './data/employment.json'
import educationData from './data/education.json'
import skillData from './data/skills.json'

class ResumePage extends React.Component {
    render () {
        return (
            <div className="Background bg2">
                <h1>Resume</h1>
                <div className="LeftJustify">
                    <ResumeSectionHeader title="Work Experience"/>
                    {employmentData.map(item => (
                        <ResumeSectionEntry position={item.position} company={item.company}
                        fromdate={item.fromdate} todate={item.todate} description={item.description}/>
                    ))}
                    <ResumeSectionHeader title="Education"/>
                    {educationData.map(item => (
                        <ResumeSectionEntry position={item.position} company={item.company}
                        fromdate={item.fromdate} todate={item.todate} description={item.description}/>
                    ))}
                    <ResumeSectionHeader title="Skills"/>
                    <div className="RowFlex">
                        {skillData.map(item => (
                            <SkillSectionEntry category={item.category} skills={item.skills}/>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default ResumePage;