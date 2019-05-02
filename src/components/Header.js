import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem } from 'reactstrap';
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
            <Navbar light expand="md" className="border-bottom shadow">
                <NavbarBrand>
                    <Typography variant="headline" className="text-muted">
                        E R I C <span className="text-dark"><strong>M U R R A Y</strong></span>
                    </Typography>
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle} className="mt-2"/>
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem className="px-3">
                            <Button size="medium" variant="outlined" component={Link} to="/Home">about</Button>
                        </NavItem>
                        <NavItem className="px-3">
                            <Button size="medium" variant="outlined" component={Link} to="/Work">work</Button>
                        </NavItem>
                        <NavItem className="px-3">
                            <Button size="medium" variant="outlined" component={Link} to="/Life">Life</Button>
                        </NavItem>
                    </Nav>
                </Collapse>                 
            </Navbar>
        );
    }
}