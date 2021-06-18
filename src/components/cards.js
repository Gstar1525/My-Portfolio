import React, {Component} from 'react';
import { Button , Card} from 'react-bootstrap';
import spaceimg from './images/my_work/imageSpaceInvaders.png'
import { Grid } from '@material-ui/core'
import LinesEllipsis from 'react-lines-ellipsis'
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC'
 
const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis)

class CustomCard extends Component{ 
    
    render(){
        return(
                <Grid item md={4} >
                    <Card style={{ backgroundColor: '#233554', padding:'1vw', margin:'3vw'}}>
                        <Card.Img variant="top" src={spaceimg}/>
                        <Card.Body>
                            <Card.Title style={{ fontSize:'1rem' }} >{this.props.title}</Card.Title>
                            <Card.Text>
                                <ResponsiveEllipsis
                                text={this.props.description}
                                basedOn="letters"
                                maxLine={3}
                                ellipsis={<span style={{ color: "#64ffda" }}>...</span>}
                                style={{"fontSize":"0.7rem", "overflow-wrap": "break-word", "white-space": "pre-wrap" }}/>
                            </Card.Text>
                            <Button style={{fontSize:'0.7rem', borderColor:'#64ffda', backgroundColor: "transparent", color: '#64ffda',fontWeight:"bold" }} href={this.props.url} variant="primary">Full Project</Button>
                        </Card.Body>
                    </Card>
                </Grid>
        );
    }
}

export default CustomCard;