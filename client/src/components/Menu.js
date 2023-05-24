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
              <NavDropdown.Item href="/Work/AllWork">All Work</NavDropdown.Item> 
              <NavDropdown.Item href="/Work/Education">Education</NavDropdown.Item>
              <NavDropdown.Item href="/Work/Medical">Medical</NavDropdown.Item>
              <NavDropdown.Item href="/Work/Restaurants">Restaurants</NavDropdown.Item>
              <NavDropdown.Item href="/Work/Retail">Retail</NavDropdown.Item>
              <NavDropdown.Item href="/Work/TennantFinishOuts">Tennant Finish-Outs</NavDropdown.Item>
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