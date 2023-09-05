import React from 'react'
import logo from "./NovaBank.png";
// import './Index.css';
import {Navbar,Nav,NavItem,NavLink,NavbarBrand} from 'reactstrap';

export const Index = () => {
  return (
    <>
      <Navbar className="my-1" color="light">
        <NavbarBrand href="/">
          <img alt="logo" src={logo}style={{height: 40, width: 180}}/>
        </NavbarBrand>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/components/" className='mr-auto' Navbar>Components</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </>
  );
}

export default Index;