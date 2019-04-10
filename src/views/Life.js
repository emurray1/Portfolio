import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';

class Life extends Component {
    render() {
        return (
            <div className="life">
                <Container className="mt-3">
                    <Row>
                        <Col sm="12" md={{ size: 6, offset: 3 }}>
                            <Typography className="mb-3" variant="h2" align="center">
                                Life
                            </Typography>
                            <Typography className="px-1" variant="overline" align="center" gutterBottom>
                            "The purpose of life is to live it, to taste experience to the utmost, to 
                            reach out eagerly and without fear for newer and richer experience."
                            </Typography>
                            <Typography className="px-5 text-info" variant="subtitle1" align="right" gutterBottom>
                            - Eleanor Roosevelt
                            </Typography>                   
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Life;