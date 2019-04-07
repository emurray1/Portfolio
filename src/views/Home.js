import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';

import headshot from '../sources/headshot.jpg';

class Home extends Component {
    state = { expanded: false};

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    render() {
        return (
            <div className="Home">
                <Container className="mt-7">
                    <Row>
                        <Col sm="12" md={{ size: 6, offset: 3 }}>
                            <Typography variant="h2" align="center" gutterBottom>
                                About
                            </Typography>
                            <img className="w-100 rounded-circle" src={headshot} alt="Eric Murray" />
                            <Typography className="px-5" variant="caption" align="center" gutterBottom>
                                Eric on the left, Mason in the middle, Jessica on the right
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom>
                                <span className="text-info" style={{ fontSize: 20 }}>Hi, I'm Eric.</span> I am a Software 
                                Engineer with more than three years experience working with a 
                                wide variety of front-end languages and libraries. These languages 
                                include HTML5, Javascript, and Groovy while libraries include React,
                                Redux, Material-UI. To see examples of my code. please visit 
                                my <Link to="/Work">work portfolio page.</Link>           
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom>
                                
                            </Typography>                      
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Home;