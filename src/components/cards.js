import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";
import spaceimg from "./images/my_work/imageSpaceInvaders.png";
import { Grid } from "@material-ui/core";
import LinesEllipsis from "react-lines-ellipsis";
import responsiveHOC from "react-lines-ellipsis/lib/responsiveHOC";
import "../styles/cards.css"

const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis);

class CustomCard extends Component {
  render() {
    return (
      <Grid item md={4}>
        <Card
          style={{
            alignItems: "center",
            backgroundColor: "#ffffff",
            paddingTop: "5vh",
            paddingBottom: "1vh",
            marginTop: "10vw",
            marginInline: "1vw",
            borderRadius: "20px",
            boxShadow: "4px 4px 10px #65afff",
          }}
        >
          <Card.Img src={spaceimg} style={{ width: "90%", borderRadius:"10px" }} />
          <Card.Body>
            <Card.Title style={{ fontSize: "1.3rem" }}>
              {this.props.title}
            </Card.Title>
            <Card.Text>
              <ResponsiveEllipsis
                text={this.props.description}
                basedOn="letters"
                maxLine={5}
                ellipsis={<span style={{ color: "#9852f9" }}>...</span>}
                style={{
                  fontSize: "2.3vh",
                  "overflow-wrap": "break-word",
                  "white-space": "pre-wrap",
                }}
              />
            </Card.Text>
            <Button
              style={{
                fontSize: "1rem",
                borderColor: "black",
                borderWidth: "1.8px",
                backgroundColor: "#9852f9",
                color: "#ffffff",
                fontWeight: "bold",
              }}
              href={this.props.url}
              variant="light"
            >
              Full Project
            </Button>
          </Card.Body>
        </Card>
      </Grid>
    );
  }
}

export default CustomCard;
