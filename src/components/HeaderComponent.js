import React from 'react';
import { useState } from 'react';
import katiLogo from '../assets/katiLogo.jpg';
import {
    Navbar, NavbarBrand, Collapse, NavbarToggler,
    Nav, NavItem, Container, Row, Col
} from 'reactstrap';
import { NavLink } from 'react-router-dom';


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <React.Fragment>
            <Container>
            <Navbar className='navbar-dark' sticky='top' expand='md'>
                <NavbarBrand className='mr-auto' href='/'>
                    <img className='rounded-circle' src={katiLogo} width="30" alt="Kati Logo" />
                </NavbarBrand>
                <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
                <Collapse isOpen={menuOpen} navbar>
                    <Nav className='ms-auto' navbar>
                        <NavItem>
                            <NavLink className='nav-link' to='/'>
                                <i className='fa fa-home fa-lg' /> Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/media'>
                                <i className='fa fa-youtube fa-lg' /> Media
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/about'>
                                <i className='fa fa-info fa-lg' /> About
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/shop'>
                                <i className='fa fa-amazon fa-lg' /> Shop
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/contact'>
                                <i className='fa fa-address-card fa-lg' /> Contact
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            </Container>
        </React.Fragment>

    );
};

export default Header;