import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

export default function navbar() {
    return (
        <Navbar expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand >Chandler Baird Portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/"> Home </Link>
                        <Link to="/About"> About </Link>
                        <Link to="/Project" > Projects </Link>
                        <Link to="/Contact" > Contact Me</Link>
                        <Link to="/Resume" > Resume </Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="https://github.com/cbaird21" target="blank">Github</Nav.Link>
                        <Nav.Link href="https://www.linkedin.com/in/chandler-baird-39965b129/" target="blank">Linked In</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};


