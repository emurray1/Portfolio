import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Typography } from '@material-ui/core';

import CardLayout from '../utils/CardLayout';

class Home extends Component {
    render() {

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
                            <CardLayout />
                        </Col>
                        {/* <Col sm="12" md={{ size: 4}} >
                            <Card>
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
                        </Col> */}
                    </Row>
                </Container>
            </div>
        );
    }
};

export default Home;