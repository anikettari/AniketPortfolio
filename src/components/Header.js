import React from "react";
import { Navbar,Nav } from 'react-bootstrap';
import {NavLink } from "react-router-dom";


const Header = ()=>{
    return(
        <div className="blackimage">
           <Navbar collapseOnSelect expand="lg" >
  <Navbar.Brand className="darkblue fontchange">[48]</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto  onchange">
      <NavLink className="nav-link darkblue fontchange1 pr-3 "  to="/AniketPortfolio/" >HOME</NavLink>
      <NavLink className="nav-link darkblue fontchange1 "  to="/aboutme">ABOUT</NavLink>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}
export default Header;