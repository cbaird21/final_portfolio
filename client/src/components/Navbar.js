import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function CollapsibleExample() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Chandler Baird Portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#aboutMe">About Me</Nav.Link>
                        <NavDropdown title="pojects" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">National Park Finder</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Krime Kermitters Hangman
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Project 3</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                More Projects
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link eventKey={2} href="#contact">
                            Contact Me
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};


