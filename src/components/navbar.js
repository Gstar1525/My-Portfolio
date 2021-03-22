import React, { Component } from 'react';
import { Nav } from 'react-bootstrap'
import { Link } from 'react-scroll'

class Navbar extends Component {

    styles = {
        color: "white",
        hover: "blue",
        padding: "4vh"
    }

    render() {
        return (
            <Nav style={{ position: "sticky", top: "4vh" }} className="justify-content-end mr-4 mt-4" activeKey="/home">
                <Nav.Item>
                    <Link  activeClass="active" to="work" spy={true} smooth={true} duration={500} style={this.styles}>Work</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link  activeClass="active" to="experience" spy={true} smooth={true} duration={500} style={this.styles}>Experience</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link  activeClass="active" to="education" spy={true} smooth={true} duration={500} style={this.styles}>Education</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link  activeClass="active" to="contact" spy={true} smooth={true} duration={500} style={this.styles}>Contact</Link>
                </Nav.Item>
            </Nav>
        );
    }
}

export default Navbar;