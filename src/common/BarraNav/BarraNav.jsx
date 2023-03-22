import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const BarraNav = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home">TrueSmile</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
            <Nav.Link href="#features">Login</Nav.Link>
            <Nav.Link href="#pricing">Register</Nav.Link>
        </Nav>
        <Nav>
            <Nav.Link href="#deets">User</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">Logout</Nav.Link>
        </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
    );
}