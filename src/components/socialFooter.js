import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faTwitter,
    faInstagram,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Col, Row } from "react-bootstrap";
import "../styles/socialFooter.css"


export default function SocialFooter(){
    return(
        <div >
            <h3 style={{ textAlign:"center", color:"white" }} >Contact Me</h3>
            <Row style={{ alignSelf:"center" }} xs={5} sm={5}>
                <Col>
                    <a href="https://www.github.com/gstar1525" className="github social">
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                </Col>
            
                <Col>
                    <a href="https://www.linkedin.com/in/gourav-kolhatkar-70602917a/" className="LinkedIn social">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                </Col>
            
                <Col>
                    <a href="mailto:gstar1525@gmail.com" className="Envelope social">
                        <FontAwesomeIcon icon={faEnvelope} size="2x" />
                    </a>
                </Col>
            
                <Col>
                    <a href="https://www.twitter.com/gouravkolhatkar" className="twitter social">
                        <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </a>
                </Col>
            
                <Col>
                    <a href="https://www.instagram.com/gourav_kolhatkar" className="instagram social">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                </Col>
            </Row>         
        </div>
    )
}