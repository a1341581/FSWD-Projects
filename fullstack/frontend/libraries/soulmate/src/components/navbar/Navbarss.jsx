import React from 'react'
import{Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Navbarss() {
    return (
        <>
            <Navbar bg="warning" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link><Link to='/'>Home</Link></Nav.Link>
        <Nav.Link><Link to='/About'>About</Link></Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item>Handflower</NavDropdown.Item>
          <NavDropdown.Item><Link to='/Basket'>Basket</Link></NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    )
}

export default Navbarss
