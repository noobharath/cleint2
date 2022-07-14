import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Styles from '../styles/hero.module.css';
import Overlay from 'react-bootstrap/Overlay';
import { Button } from 'react-bootstrap';
import NavCategory from '../Components/PageComponents/Navbar/Category';

export default function Navigation() {

  const [show, setShow] = React.useState(false);
  const target = React.useRef(null);

  return (
    <div>
      <Navbar className={Styles.color} variation="dark"  fixed="top" collapseOnSelect expand="sm">
        <Container className='align-item-end'>
          <Navbar.Brand href="#home">Inviting You</Navbar.Brand>
          <Navbar.Toggle aria-aria-controls='navbarScroll' data-bs-target="#navbarScroll"/>
          <Navbar.Collapse id='#navbarScroll'>
          <Nav className="me-auto ">
            <Nav.Link href="#home">Home</Nav.Link>
            {/* <NavCategory/> */}
            <Nav.Link href="#home">Category</Nav.Link>
            <Nav.Link href="#features">About us</Nav.Link>
            <Nav.Link href="#pricing">Religious</Nav.Link>
            <Nav.Link href="#pricing">Pick a card</Nav.Link>
            <Nav.Link href="#pricing">Schedule</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#pricing">Blog</Nav.Link>
            <Nav.Link href="#pricing">Contact Us</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <NavCategory className="NavCategory"/>
    </div>
  )
}