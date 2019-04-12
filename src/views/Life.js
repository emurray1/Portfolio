import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Typography, Paper } from '@material-ui/core';
import { FormatQuote } from '@material-ui/icons';

class Life extends Component {
    render() {
        return (
            <div className="life">
                <Container className="mt-3">
                    <Row>
                        <Col sm="12" md={{ size: 6, offset: 3 }}>
                            <Typography variant="h2" className="mb-3" style={{ borderBottom: 1 }} align="center">
                                Life
                            </Typography>
                            <Paper className="p-4" elevation={1}>
                            <FormatQuote style={{ fontSize: 80 }} className="mx-auto w-100 text-primary" /> 
                            <Typography className="px-1" variant="overline" align="center" gutterBottom>
                            "The purpose of life is to live it, to taste experience to the utmost, to 
                            reach out eagerly and without fear for newer and richer experience."
                            </Typography>
                            <Typography className="px-5 text-info" variant="subtitle1" align="right" gutterBottom>
                            - Eleanor Roosevelt
                            </Typography>     
                            </Paper>              
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Life;