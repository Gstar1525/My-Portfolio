import React from "react";
import CustomCard from "../components/cards";
import { Box, Grid } from "@material-ui/core";
import { Button } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "20px",
    paddingRight: "20px",
  },
});

function Work() {
  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.gridContainer} justify="center">
        <CustomCard
          title="AR App for Eduction"
          description="Augmented Reality based Android App for students to visualize the three dimensional representation of the entity they are learning about."
          url="https://github.com/Gstar1525/AR-App-for-Education"
        />
        <CustomCard
          title="Flask Website"
          description="A website for android and tablet phones using Flask framework for playing Quiz with friends."
          url="https://github.com/Gstar1525/Flask-Website"
        />
        <CustomCard
          title="Space Invaders"
          description="An arcade style game developed using Pygame and Python here players have to shoot aliens which are attacking our planet."
          url="https://github.com/Gstar1525/Space-Invaders"
        />
        <CustomCard
          title="Flutter Music Player"
          description="Template for Sign-in and Sign-up using Flutter with Firebase for Authorization."
          url="https://github.com/Gstar1525/Sign-In-and-Sign-Up-Template-in-Flutter"
        />
        <CustomCard
          title="Image Scrapper"
          description="Image scrapper made using python programming language. It scarpes the top three google searches for each item in an excel file."
          url="https://github.com/Gstar1525/Image-Downloader-via-Excell-sheet"
        />
      </Grid>
      <Box textAlign="center" margin="100px">
        <Button
          href="https://github.com/Gstar1525?tab=repositories"
          variant="light"
          style={{
            borderColor: "black",
            borderWidth: "1.8px",
            backgroundColor: "#9852f9",
            color: "white",
            fontWeight: "bold",
            fontSize: "1.2rem",
            textAlign: "center",
            padding: "10px",
          }}
        >
          More Projects
        </Button>
      </Box>
    </>
  );
}

export default Work;
