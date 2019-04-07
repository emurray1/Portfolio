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
                    <h3 className="text-primary mb-0">Eric Murray</h3>
                    <h6 className="text-muted">UI Software Engineer, Aspiring Home Cook</h6>    
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle}/>
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