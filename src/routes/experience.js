import React from "react";
import "../styles/experience.css";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Experience() {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#233554" }}
        contentArrowStyle={{ borderRight: "10px solid  #64ffda" }}
        date="Nov 2020 - Feb 2021"
        dateClassName="date"
        iconStyle={{backgroundColor: "#64ffda"}}
      >
        <h3 className="vertical-timeline-element-title">
          Flutter Developer
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Sid Angel</h4>
        <p className="techStack">Flutter, ReactJS, Dart, JavaScript.</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#233554", color: "#64ffda" }}
        contentArrowStyle={{ borderRight: "10px solid  #64ffda" }}
        date="june 2020 - July 2020"
        dateClassName="date"
        iconStyle={{backgroundColor: "#64ffda"}}

      >
        <h3 className="vertical-timeline-element-title">Flask Developer</h3>
        <h4 className="vertical-timeline-element-subtitle">TBL Education</h4>
        <p className="techStack">Flask, Python.</p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}

export default Experience;
