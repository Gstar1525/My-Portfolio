import React, { Component } from 'react';
import { Nav } from 'react-bootstrap'
import { Link } from 'react-scroll'

class Navbar extends Component {

    styles = {
        color: "white", 
        padding: "4vh",
        cursor:"pointer",
    }

    render() {
        return (
            <Nav style={{ position: "sticky", top: "4vh", zIndex:'1000'}} className="justify-content-end mr-4 mt-4" activeKey="/home">
                <Nav.Item>
                    <Link  activeClass="active" to="about" spy={true} smooth={true} duration={500} style={this.styles}>About Me</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link activeClass="active" to="work" spy={true} smooth={true} duration={500} style={this.styles}>Work</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link  activeClass="active" to="experience" spy={true} smooth={true} duration={500} style={this.styles}>Experience</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link  activeClass="active" to="contact" spy={true} smooth={true} duration={500} style={this.styles}>Contact</Link>
                </Nav.Item>
            </Nav>
        );
    }
}

export default Navbar;