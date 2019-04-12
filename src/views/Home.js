import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { Typography, 
         Card,
         withStyles, 
         CardMedia,
         CardContent, 
         CardHeader,
         CardActions,
         IconButton,
         Collapse} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Headshot from '../sources/headshot.jpg';
import Canada from '../sources/canada.jpg';

const styles = theme => ({
    media: {
        height: 250,
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },    
});

class Home extends Component {
    
    state = { 
        expanded: false,
        raised: false  
    };

    toggleRaised = () => this.setState({raised:!this.state.raised});

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    render() {
        const { classes } = this.props;

        return (
            <div className="Home bg-light">
                <Container className="mt-3">
                    <Row>
                        <Col sm="12">
                            <Typography variant="h4">software engineer & aspiring home chef</Typography>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12" md={{ size: 4}} >
                            <Card 
                                onMouseOver={this.toggleRaised}
                                onMouseOut={this.toggleRaised}
                                raised={this.state.raised}
                            >
                                <CardHeader
                                    title="My Story"
                                    subheader="Who I am, what I've done" 
                                />
                                <CardMedia 
                                    className={classes.media}
                                    image={Headshot}
                                    title="Eric, Mason, and Jess"
                                />
                            <CardContent>
                                <Typography className="px-5" variant="caption" align="center" gutterBottom>
                                    Eric on the left, Mason in the middle, Jessica on the right
                                </Typography>
                                <Typography variant="subtitle1" gutterBottom>
                                    <span className="text-info" style={{ fontSize: 20 }}>Hi, I'm Eric. </span> 
                                    I was born, raised, and educated in the sleepy, brave little state of Vermont.
                                    I have experienced life in a small town, lived in the Caribbean, and babysat passenger jets. 
                                </Typography>
                            </CardContent>
                            <CardActions  disableActionSpacing>
                                <IconButton
                                    className={classnames(classes.expand, {
                                        [classes.expandOpen]: this.state.expanded,
                                      })}
                                      onClick={this.handleExpandClick}
                                      aria-expanded={this.state.expanded}
                                      aria-label="Show more"
                                >
                                    <ExpandMoreIcon />
                                </IconButton>      
                            </CardActions>
                            <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                <Typography variant="subtitle1" gutterBottom>                                  
                                    I have seen my baby boy grow, learn, and love. I have watching my wife overcome challenges 
                                    with a level of grace that I can only hope to achieve. I have done my best to appreciate those 
                                    moments in life that are quiet and still.  Every experience and individual has left a profound 
                                    mark on my life, I am thankful for each and every one.
                                </Typography>
                                </CardContent>
                            </Collapse>
                            </Card>
                        </Col>
                        <Col sm="12" md={{ size: 4}} >
                            <Card 
                                onMouseOver={this.toggleRaised}
                                onMouseOut={this.toggleRaised}
                                raised={this.state.raised}
                            >
                            <Typography variant="h2" align="center" gutterBottom>
                                My Work
                            </Typography>
                            <img className="w-100 rounded p-2" src={Canada} alt="Small jetBlue Plane in front of computer screen" />
                            <Typography className="px-5" variant="caption" align="center" gutterBottom>
                                Dealer.com goes international!
                            </Typography>
                            <Typography variant="bod2" gutterBottom>   
                                I am a UI Software Engineer with more than three years experience working in a 
                                wide variety of front-end languages and libraries. My experience is comprised both 
                                of large enterprise development  with Dealer.com/Cox Automotive and a variety of 
                                freelance projects. My experience has made me understand the importance 
                                of having an attitude of learning when it comes to code, and to understand 
                                that this career is a series of upward failures that culminate in a shared success.
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom>
                                
                            </Typography>                      
                            </Card>
                        </Col>
                        <Col sm="12" md={{ size: 4}} >
                            <Card 
                                onMouseOver={this.toggleRaised}
                                onMouseOut={this.onMouseOut}
                                raised={this.state.raised}
                            >
                                <Typography variant="h2" align="center" gutterBottom>
                                    My Work
                                </Typography>
                                <img className="w-100 rounded p-2" src={Canada} alt="Small jetBlue Plane in front of computer screen" />
                                <Typography className="px-5" variant="caption" align="center" gutterBottom>
                                    Dealer.com goes international!
                                </Typography>
                                <Typography variant="bod2" gutterBottom>   
                                    I am a UI Software Engineer with more than three years experience working in a 
                                    wide variety of front-end languages and libraries. My experience is comprised both 
                                    of large enterprise development  with Dealer.com/Cox Automotive and a variety of 
                                    freelance projects. My experience has made me understand the importance 
                                    of having an attitude of learning when it comes to code, and to understand 
                                    that this career is a series of upward failures that culminate in a shared success.
                                </Typography>
                                <Typography variant="subtitle1" gutterBottom>
                                    
                                </Typography>                      
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default withStyles(styles)(Home);