import React from 'react';
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "./card"

const useStyles = makeStyles({
    gridContainer: {
        paddingLeft: "40px",
        paddingRight: "40px"
    }
});


function Work() {
    const classes = useStyles();
    return (
        <>
        <h1>
            Work
        </h1>
        <Grid
            container
            spacing={4}
            className={classes.gridContainer}
            justify="center"
        >
            <Grid item xs={12} sm={6} md={4}>
                <Card />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Card />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Card />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Card />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Card />
            </Grid>
        </Grid
        ></>
    );
}

export default Work;