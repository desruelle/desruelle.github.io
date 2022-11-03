import './Page.css';
import ResumeSectionHeader from './ResumeSectionHeader';
import ResumeSectionEntry from './ResumeSectionEntry';
import SkillSectionEntry from './SkillSectionEntry';
import React from 'react';

import employmentData from './data/employment.json'

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
                    {/* <ResumeSectionEntry position="Software Development Intern" company="Amazon" 
                    fromdate="June 2021" todate="August 2021" 
                    description={["a", "b"]}/>
                    <ResumeSectionEntry position="SWE & Testing Intern" company="Phenix Scheduler" 
                    fromdate="April 2020" todate="Septmeber 2020" 
                    description={["c", "d"]}/>
                    <ResumeSectionEntry position="Software Engineering Intern" company="Advanti" 
                    fromdate="July 2019" todate="November 2019" 
                    description={["e", "f", "g"]}/> */}
                    <ResumeSectionHeader title="Education"/>
                    <ResumeSectionEntry position="Honours Bachelor of Science" company="University of Toronto" 
                    fromdate="September 2018" todate="April 2022" 
                    description={["E"]}/>
                    <ResumeSectionHeader title="Skills"/>
                    <div className="RowFlex">
                        <SkillSectionEntry category="Tools & Frameworks" skills={["Android", "SQL", "Node.JS"]}/>
                        <SkillSectionEntry category="Programming Languages" skills={["Python", "Java", "C"]}/>
                        <SkillSectionEntry category="Natural Languages" skills={["English", "French"]}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default ResumePage;