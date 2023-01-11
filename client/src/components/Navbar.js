import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function CollapsibleExample() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Chandler Baird Portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#Home">Home</Nav.Link>
                        <Nav.Link href="#AboutMe">About Me</Nav.Link>
                        <Nav.Link href="#work">Work</Nav.Link>
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


