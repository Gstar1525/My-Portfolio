import React from 'react';
import Ctn from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {
    Timeline,
    Container,
    YearContent,
    BodyContent,
    Section,
    Description,
   } from 'vertical-timeline-component-react';

function About(){

        const customTheme = {
        yearColor: 'white',
        lineColor: '#d0cdc4',
        dotColor: '#64ffda',
        borderDotColor: '#d0cdc4',
        titleColor: '#64ffda    ',
        subtitleColor: '#bf9765',
        textColor: '#bf9765',
       };

    return(
        <Ctn>
            <Row>
                <Col sm={8}>
                    <p style={{fontSize:'120%' ,lineHeight:2 }}>
                        Hi! My name is Gourav and I love building apps. My spcialization is in <b style={{ color:'#64ffda' }}>Android App Development</b> and recently started exploring <b style={{ color:'#64ffda' }}>Cross platform Frameworks</b> such as React-Native and Flutter. Currently I am doing my Graduation in Computer Engineering and working on side projects. So far i have worked as <b style={{ color:'#64ffda' }}>Intern</b> in two startups at a <b style={{ color:'#64ffda' }}>Training and Placment Agency</b> and an <b style={{ color:'#64ffda' }}>Investment Comopany</b>, I also have done <b style={{ color:'#64ffda' }}>freelancing</b> before for 4 to 5 clients.
                    </p> 
                    <br/>
                    <p style={{fontSize:'120%' ,lineHeight:2 }}>
                        Here are few of my specialities :
                    </p>
                        <Ctn>
                            <Row>
                            <Col item sm={3}>
                                <ul>
                                    <li>
                                        Java
                                    </li>
                                    <li>
                                        Kotlin
                                    </li>
                                    <li>
                                        Python  
                                    </li>
                                    <li>
                                        Javascript
                                    </li>
                                    <li>
                                        Dart
                                    </li>
                                    
                                </ul>

                                </Col>
                                <Col item sm={3}>
                                <ul>
                                    <li>
                                        Android SDK
                                    </li>
                                    <li>
                                        Flutter
                                    </li>
                                    <li>
                                        Flask
                                    </li>
                                    <li>
                                        Firebase
                                    </li>
                                    <li>
                                        React JS
                                    </li>
                                </ul>

                                </Col>
                            </Row>
                        </Ctn>
                </Col>
                <Col sm={4}>
                    <Timeline theme={customTheme} dateFormat='ll'>
                        <Container>
                            <YearContent startDate='2019/09' currentYear />
                                <BodyContent>
                                    <Section title='Bachelor of Technology in Computer Engineering'>
                                        <Description variant='subtitle' text='Dr. Babasaheb Ambedkar Technological University' />
                                        <Description text='Current CGPA : 7.53' />
                                    </Section>
                                </BodyContent>
                        </Container>

                        <Container>
                            <YearContent startDate='2016/07' endDate='2019/07' />
                                <BodyContent>
                                    <Section title='Diploma in Computer Technology'>
                                        <Description variant='subtitle' text='Government Polytechnic, Bramhapuri' />
                                        <Description text='CGPA : 7.8' />
                                    </Section>
                                </BodyContent>
                        </Container>
                    </Timeline>
                </Col>
            </Row>
        </Ctn>

        
       );
}

export default About;