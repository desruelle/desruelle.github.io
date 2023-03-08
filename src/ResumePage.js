import './Page.css';
import ResumeSectionHeader from './ResumeSectionHeader';
import ResumeSectionEntry from './ResumeSectionEntry';
import SkillSectionEntry from './SkillSectionEntry';
import React from 'react';

import employmentData from './data/employment.json'
import educationData from './data/education.json'
import educationMiscData from './data/educationskills.json'
import skillData from './data/skills.json'

class ResumePage extends React.Component {
    render () {
        return (
            <div className="Background bg1">
                {/* <h1>Resume</h1> */}
                <div className="LeftJustify">
                    <ResumeSectionHeader title="Work Experience"/>
                    <div className="RowFlex">
                        {employmentData.map(item => (
                            <ResumeSectionEntry position={item.position} company={item.company}
                            fromdate={item.fromdate} todate={item.todate} description={item.description}/>
                        ))}
                    </div>
                    <ResumeSectionHeader title="Education"/>
                    <div className="RowFlex">
                        {educationData.map(item => (
                            <ResumeSectionEntry position={item.position} company={item.company}
                            fromdate={item.fromdate} todate={item.todate} description={item.description}/>
                        ))}
                        <div className="LongWidth">
                        {educationMiscData.map(item => (
                            <SkillSectionEntry category={item.category} skills={item.skills} columns={"TwoColumn"}/>
                        ))}
                        </div>
                    </div>
                    <ResumeSectionHeader title="Skills"/>
                    <div className="RowFlex">
                        {skillData.map(item => (
                            <SkillSectionEntry category={item.category} skills={item.skills} columns={"TwoColumn"}/>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default ResumePage;