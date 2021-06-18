import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-scroll'
import "../styles/customNav.css"

class CustomNavbar extends Component {

    render() {
        return (
            <Navbar fixed="top" collapseOnSelect expand="sm" variant="dark">
                <Navbar.Toggle style={{ borderColor: "#64ffda" }} aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                    <Nav activeKey="/home">
                        <Nav.Item >
                            <Nav.Link activeClass="active" smooth={true} duration={500} eventKey="0" as={Link} to="about">
                                About Me
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link activeClass="active" smooth={true} duration={500} eventKey="1" as={Link} to="work">
                                Work
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link activeClass="active" smooth={true} duration={500} eventKey="2" as={Link} to="experience">
                                    Experience
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link activeClass="active" smooth={true} duration={500} eventKey="3" as={Link} to="contact">
                                Contact
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default CustomNavbar;