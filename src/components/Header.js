import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
    }
    toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
    }
    render() {
        return (   
            <Navbar light expand="md">
                <NavbarBrand>
                    <Typography variant="h4" className="text-primary mb-0 mt-2">
                        Eric Murray
                    </Typography>
                    <Typography variant="body1" className="text-muted">UI Software Engineer, Aspiring Chef</Typography>
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle} className="mt-2"/>
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink>
                                <Button size="large" component={Link} to="/Home">about</Button>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <Button size="large" component={Link} to="/Work">work</Button>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <Button size="large" component={Link} to="/Life">Life</Button>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>                 
            </Navbar>
        );
    }
}