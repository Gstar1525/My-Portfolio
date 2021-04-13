import React from 'react';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';




function Experience(){
    return(
        <VerticalTimeline>
            <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#233554', color: '#64ffda' }}
            contentArrowStyle={{ borderRight: '10px solid  #64ffda' }}
            date="Nov 2020 - Feb 2021">
                <h3 className="vertical-timeline-element-title">Flutter Full Stack Developer</h3>
                <h4 className="vertical-timeline-element-subtitle">Sid Angel</h4>
                <p>
                Firebase, iOS and Android Development. 
                </p>
            </VerticalTimelineElement>
            
            <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#233554', color: '#64ffda' }}
            contentArrowStyle={{ borderRight: '10px solid  #64ffda' }}
            date="june 2020 - July 2020">
                <h3 className="vertical-timeline-element-title">Web Developer</h3>
                <h4 className="vertical-timeline-element-subtitle">TBL Education</h4>
                <p>
                Flask, Heroku.
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    );
}

export default Experience;