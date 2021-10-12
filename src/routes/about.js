import React from "react";
// import Ctn from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import "../styles/about.css";
import {
  Timeline,
  Container,
  YearContent,
  BodyContent,
  Section,
  Description,
} from "vertical-timeline-component-react";

function About() {
  const customTheme = {
    yearColor: "white",
    lineColor: "white",
    dotColor: "greenyellow",
    borderDotColor: "greenyellow",
    titleColor: "greenyellow",
    textColor: "#DEFFAB",
    subtitleColor: "white",
    
  };

  return (
    <div className="about-container">
      <div className="col-1">
        <p className="aboutme" style={{ fontSize: "2.3vh" }}>
          Hi! My name is Gourav and I love building apps. My spcialization is in{" "}
          <b>Android App Development</b> using <b>Kotlin and Java</b> and{" "}
          <b>Backend Development</b> using <b>Node.js and Express.js</b> also
          recently started exploring <b>Cross platform Frameworks</b> such as
          React-Native and Flutter. Currently I am doing my Graduation in
          Computer Engineering and working on side projects. So far i have
          worked as <b>Intern</b> in two startups, I also have done{" "}
          <b>freelancing</b> before for 4 to 5 clients.
        </p>
        <br />
        <p className="title-skill">Here are few of my specialities :</p>
        <div className="row-list">
          <ul className="col-list-1">
            <li>Java</li>
            <li>Python</li>
            <li>Javascript</li>
            <li>SQL</li>
            <li>C & C++</li>
          </ul>
          <ul className="col-list-2">
            <li>Node.js</li>
            <li>Flask</li>
            <li>Flutter</li>
            <li>MySQL</li>
            <li>Firebase</li>
          </ul>
        </div>
      </div>

      <div className="col-2">
        <Timeline theme={customTheme} dateFormat="ll">
          <Container>
            <YearContent startDate="2016/07" endDate="2019/07" />
            <BodyContent>
              <Section title="Diploma in Computer Technology">
                <Description
                  variant="subtitle"
                  text="Government Polytechnic, Bramhapuri"
                />
                <Description text="CGPA : 7.8" />
              </Section>
            </BodyContent>
          </Container>  
          <Container>
            <YearContent startDate="2019/09" endDate="2022/05" />
            <BodyContent>
              <Section title="B.Tech. in Computer Engineering">
                <Description
                  variant="subtitle"
                  text="Dr. Babasaheb Ambedkar Technological University"
                />
                <Description text="CGPA : 8.23"/>
              </Section>
            </BodyContent>
          </Container>
        </Timeline>
      </div>
    </div>
  );
}

export default About;
