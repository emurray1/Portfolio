import React from 'react';
import { Nav, 
         NavItem,
         NavLink,
         Container,
         Row,
         Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';

import Form from '../utils/Form';


export default class siteFooter extends React.Component {

    render() {
        return (   
            <div style={{ minHeight: 300 }} className="footer mt-3 bg-secondary">
                <Container>
                    <Row>
                        <Col sm="12" md={{ size: 4 }}>
                            <Typography className="text-info mt-3" variant="h5" align="center" gutterBottom>
                                Say Hello!
                            </Typography>
                            <Form />
                        </Col>
                        <Col sm="12" md={{ size: 4 }}>
                            <Nav vertical>
                                <NavItem>
                                    <NavLink>
                                        <Typography variant="h6" component={Link} to="/Work">about</Typography>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink>
                                        <Typography variant="h6" component={Link} to="/Work">about</Typography>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink>
                                        <Typography variant="h6" component={Link} to="/Work">about</Typography>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Col>
                        <Col sm="12" md={{ size: 4 }}>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}