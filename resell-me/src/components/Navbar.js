import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/images/resellmeLogo.png';
import icon from '../assets/images/Navlogo.png'; 

function App() {
  return (
    <div>
      <Navbar expand="md">
        <Container>
          <Navbar.Brand href="#logo">
            <img src={logo} alt="ResellMe Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className="nav-link">Dogs</Nav.Link>
              <Nav.Link href="#features" className="nav-link">Blog</Nav.Link>
              <Nav.Link href="#pricing" className="nav-link">About Us</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#home" className="nav-link">
                Support
                <img src={icon} alt="Support Icon" style={{ width: '16px', marginLeft: '8px' }} />

              </Nav.Link>
              <Nav.Link href="#features" className="nav-link">
                Portal
                <img src={icon} alt="Portal Icon" style={{ width: '16px', marginLeft: '8px' }} />

              </Nav.Link>
              <Nav.Link href="#pricing" className="nav-link">
                Register
                <img src={icon} alt="Register Icon" style={{ width: '16px', marginLeft: '8px' }} />

                <img src={icon} alt="theme icon" style={{ width: '16px', marginLeft: '8px' }} />


              </Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <input type="text" placeholder="Search" className=" searchBar mr-sm-2" />

        </Container>
      </Navbar>


    </div>
  );
}

export default App;