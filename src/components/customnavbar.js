import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-scroll";
import "../styles/customNav.css";
import classNames from "classnames";

class CustomNavbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true,
    };
  }

  // Adds an event listener when the component is mount.
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  // Hide or show the menu.
  handleScroll = () => {
    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible,
    });
  };

  render() {
    return (
      <Navbar
        fixed="top"
        collapseOnSelect
        expand="lg"
        variant="dark"
        className={classNames("navbar", {
          "navbar--hidden": !this.state.visible,
        })}
      >
        <Navbar.Toggle
          style={{
            backgroundColor: "#2F4E00",
            borderColor: "white",
            borderWidth: "1.6px",
          }}
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse
          className="justify-content-end"
          id="responsive-navbar-nav"
        >
          <Nav activeKey="/home">
            <Nav.Item>
              <Nav.Link
                activeClass="active"
                smooth={true}
                duration={500}
                eventKey="0"
                as={Link}
                to="about"
              >
                About Me
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                activeClass="active"
                smooth={true}
                duration={500}
                eventKey="1"
                as={Link}
                to="work"
              >
                Work
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                activeClass="active"
                smooth={true}
                duration={500}
                eventKey="2"
                as={Link}
                to="experience"
              >
                Experience
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                activeClass="active"
                smooth={true}
                duration={500}
                eventKey="3"
                as={Link}
                to="contact"
              >
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