import React from 'react';
import logo from "../images/intuition.svg";
import {Navbar,Nav} from 'react-bootstrap';


function NavBar() {
  
    return (
        <>  
  <Navbar className = 'mb-4' collapseOnSelect expand="lg" variant="dark" sticky="top" >      
  
 <img   src={logo}
        width="130px"
        className="d-inline-block align-top"
        alt="logo"
      />

    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Navbar.Brand className = "mr-auto"></Navbar.Brand> 
        
        <Nav id = 'navigation' className="mr-sm-2" >
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#FAQ">FAQ</Nav.Link>
      <Nav.Link href="#schedule">Schedule</Nav.Link>
      <Nav.Link href="#workshops">Workshops</Nav.Link>
      <Nav.Link href="#prizes">Prizes</Nav.Link>
      <Nav.Link href="#sponsors">Sponsors</Nav.Link>
      <Nav.Link href="#contact">Contact</Nav.Link>
    </Nav>

    </Navbar.Collapse>  
  
</Navbar>
 
 
</>
    )
}

export default NavBar;
