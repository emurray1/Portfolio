import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';

class Work extends Component {
    render() {
        return (
            <div className="Work">
                <Container className="mt-7">
                    <Row>
                        <Col sm="12" md={{ size: 6, offset: 3 }}>
                            <Typography className="mb-3" variant="h2" align="center">
                                Work
                            </Typography>
                            <Typography className="px-1" variant="overline" align="center" gutterBottom>
                            "Happiness does not come from doing easy work but from the afterglow of 
                            satisfaction that comes after the achievement of a difficult task that 
                            demanded our best."
                            </Typography>
                            <Typography className="px-5 text-info" variant="subtitle1" align="right" gutterBottom>
                            - Theodore Isaac Rubin
                            </Typography>                   
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Work;