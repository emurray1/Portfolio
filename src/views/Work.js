import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Typography, Paper } from '@material-ui/core';
import { FormatQuote } from '@material-ui/icons';

class Work extends Component {
    render() {
        return (
            <div className="Work">
                <Container className="mt-3">
                    <Row>
                        <Col sm="12" md={{ size: 6, offset: 3 }}>                          
                            <Paper className="p-4" elevation={1}>
                            <FormatQuote style={{ fontSize: 80 }} className="mx-auto w-100" />  
                            <Typography className="px-1" variant="overline" align="center" gutterBottom>
                            Happiness does not come from doing easy work but from the afterglow of 
                            satisfaction that comes after the achievement of a difficult task that 
                            demanded our best.
                            </Typography>
                            <Typography className="px-5 text-info" variant="subtitle1" align="right" gutterBottom>
                            - Theodore Isaac Rubin
                            </Typography>   
                            </Paper>                
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Work;