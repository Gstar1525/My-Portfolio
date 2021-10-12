import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";
import { Grid } from "@material-ui/core";
import LinesEllipsis from "react-lines-ellipsis";
import responsiveHOC from "react-lines-ellipsis/lib/responsiveHOC";
import "../styles/cards.css";

const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis);

class CustomCard extends Component {
  render() {
    return (
      <Grid item md={4}>
        <Card
          style={{
            alignItems: "center",
            backgroundColor: "black",
            border: ".1px solid #DEFFAB",
            paddingTop: "5vh",
            paddingBottom: "1vh",
            marginTop: "10vw",
            marginInline: "1vw",
            borderRadius: "20px",
            boxShadow: "11px 11px 16px -13px greenyellow",
          }}
        >
          <Card.Img
            src={this.props.thumbnail}
            style={{ width: "90%", borderRadius: "10px" }}
          />
          <Card.Body>
            <Card.Title style={{ fontSize: "1.3rem", color: "greenyellow" }}>
              {this.props.title}
            </Card.Title>
            <Card.Text>
              <ResponsiveEllipsis
                text={this.props.description}
                basedOn="letters"
                maxLine={5}
                ellipsis={<span style={{ color: "#9852f9" }}>...</span>}
                style={{
                  color: "white",
                  fontSize: "2.3vh",
                  "overflow-wrap": "break-word",
                  "white-space": "pre-wrap",
                }}
              />
            </Card.Text>
            <Button
              style={{
                fontSize: "1rem",
                borderColor: "greenyellow",
                borderWidth: "1.8px",
                backgroundColor: "black",
                color: "white",
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
