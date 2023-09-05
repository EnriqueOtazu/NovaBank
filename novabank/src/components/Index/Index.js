import React from 'react'
import logo from "./NovaBank.png";
import {Navbar,Nav,NavItem,NavLink,NavbarBrand} from 'reactstrap';

export const Index = () => {
  return (
    <>
      <Navbar className="my-1," color="faded" style={{boxShadow:' 0px 0.5px 0px 0px rgba(0,0,0,0.3)'}}>
        <NavbarBrand href="/">
          <img alt="logo" src={logo} style={{height: 40, width: 180}} block/>
        </NavbarBrand>
        <Nav className="mr-auto" style={{color:'#3044B6'}}>

          <NavItem>
            <NavLink href="/components/"  Navbar>Ayuda</NavLink>
          </NavItem>

          <NavItem left>
            <NavLink href="/components/"  Navbar>mi cuenta</NavLink>
          </NavItem>

        </Nav>
      </Navbar>
    </>
  );
}

export default Index;