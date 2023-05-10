import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../images/logo.png'

function Menu() {
  return (
    <Navbar bg="black" expand="lg" variant='dark' >
      <Container>
        <Navbar.Brand href="/">
            <img
            src={logo}
            width="60"
            height="50"
            // className="d-inline-block align-top"
            alt=""
        />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Work We Do" id="basic-nav-dropdown">
              {/* <NavDropdown.Item href="/Dallas">Dallas</NavDropdown.Item>
              <NavDropdown.Item href="/Lubbock">Lubbock</NavDropdown.Item> */}
              <NavDropdown.Item href="/AllJobs">All Jobs</NavDropdown.Item> 
              <NavDropdown.Item href="/Education">Education</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="About Us" id="basic-nav-dropdown">
              <NavDropdown.Item href="/OurTeam">Our Team</NavDropdown.Item>
              <NavDropdown.Item href="/Careers">Careers</NavDropdown.Item>
              {/* <NavDropdown.Item href="/ContactUs">Contact Us</NavDropdown.Item> */}
            </NavDropdown>
            <Nav.Link href="/IndustryPartners">Industry Partners</Nav.Link>

          </Nav>
          {/* <Nav className="me-auto">
            <NavDropdown title="About Us" id="basic-nav-dropdown">
              <NavDropdown.Item href="/#">Our Team</NavDropdown.Item>
              <NavDropdown.Item href="/#">Careers</NavDropdown.Item>
              <NavDropdown.Item href="/#">Contact Us</NavDropdown.Item>
            </NavDropdown>
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu