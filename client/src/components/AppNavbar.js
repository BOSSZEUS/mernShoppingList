import React, { Component } from 'react'

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap'

class AppNavbar extends Component {
    // super calls parent class constructor
    state = {
        isOpen: false
    }
    toggle = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }
    render() {
        return (

            <div>
                <Navbar dark color="dark" >
                    <NavbarBrand className="me-auto" href="/">reactstrap</NavbarBrand>
                    <NavbarToggler
                        className="me-2"
                        onClick={this.toggle}
                    />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink href="https://github.com/BOSSZEUS">
                                    GitHub
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )

    }
    // <Navbar color="dark" dark expand="sm" className="mb-5">


}

export default AppNavbar