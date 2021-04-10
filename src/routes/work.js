import React from 'react';
import CustomCard from '../components/cards';
import { Box, Button, Grid } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";
// import { Button } from 'bootstrap';


const useStyles = makeStyles({
    gridContainer: {
        paddingLeft: "80px",
        paddingRight: "80px"
    }
});

function Work() {
    const classes = useStyles();
    return (
        <>
        <Grid
            container
            // spacing={10} 
            className={classes.gridContainer}
            justify="center">
        
        <CustomCard 
            title="Space Invaders"
            description="Copy of Space Invaders tried using Pygame. A arcade style game where player have to shoot aliens which are attacking on our planet before they touch the ground. Player can play this game endless and keep increasing the score."
            url="https://github.com/Gstar1525/Space-Invaders"/>
        <CustomCard 
            title="Flutter Music Player"
            description="Template for Sign-in and Sign-up using Flutter with Firebase for Authorization."
            url="https://github.com/Gstar1525/Sign-In-and-Sign-Up-Template-in-Flutter"/>
        <CustomCard 
            title="AR App for Eduction"
            description="Our Augmented Reality based app which can be used by students with their traditional textbooks. This app will help students to visualize the three dimensional representation of the entity they are learning about. This app allows to understand the concepts easily and way better than just seeing the 2d pictorial format of the subject. Basic requirement of the app will be a Android phone or tablet on which our app will run."
            url="https://github.com/Gstar1525/AR-App-for-Education"/>
        <CustomCard 
            title="Flask Website"
            description="Fun Website for Android Phones used for creating quiz for loving ones and make them answer those quiz by sharing the link to quiz with them."
            url="https://github.com/Gstar1525/Flask-Website"/>
        <CustomCard 
            title="Image Scrapper"
            description="Image scrapper made using python programming language. It requires list of image searches in a dataIn.xlsx file and then it scarpes the top three google searches for each item in list."
            url="https://github.com/Gstar1525/Image-Downloader-via-Excell-sheet"/>
        </Grid>    
        <Box textAlign='center' margin='100px'>
        <Button href="https://github.com/gstar1525/repositories" variant="outlined" color="primary" style={{ backgroundColor:'#233554', color:'#64ffda', fontWeight: 'bold', padding:'10px' }} >
            More Projects
        </Button>
        </Box>
        </>  
    );
}

export default Work;