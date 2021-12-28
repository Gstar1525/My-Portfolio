import React from "react";
import CustomCard from "../components/cards";
import { Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "../styles/work.css";
import spaceInvaders from "../components/images/my_work/space-invaders.jpg";
import arApp from "../components/images/my_work/ar-app.jpg";
import flaskWebsite from "../components/images/my_work/flask-website.jpg";
import musicPlayer from "../components/images/my_work/music-player.jpg";
import feeManage from "../components/images/my_work/fee-management.jpg";

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
          thumbnail={arApp}
        />
        <CustomCard
          title="Fee Manangement Software"
          description="A Desktop App to manage school fees and save the data in excel sheet for CRUD Operations."
          url="https://github.com/Gstar1525/fee-management-system"
          thumbnail={feeManage}
        />
        <CustomCard
          title="Space Invaders"
          description="An arcade style game developed using Pygame and Python here players have to shoot aliens which are attacking our planet."
          url="https://github.com/Gstar1525/Space-Invaders"
          thumbnail={spaceInvaders}
        />
        <CustomCard
          title="Flutter Music Player"
          description="Template for Sign-in and Sign-up using Flutter with Firebase for Authorization."
          url="https://github.com/Gstar1525/Sign-In-and-Sign-Up-Template-in-Flutter"
          thumbnail={musicPlayer}
        />
        <CustomCard
          title="Flask Website"
          description="A website for android and tablet phones using Flask framework for playing Quiz with friends."
          url="https://github.com/Gstar1525/Flask-Website"
          thumbnail={flaskWebsite}
        />
      </Grid>
      <Box textAlign="center" margin="100px">
        <a href="https://github.com/Gstar1525?tab=repositories">
          <button className="btn-more">More Projects</button>
        </a>
      </Box>
    </>
  );
}

export default Work;
