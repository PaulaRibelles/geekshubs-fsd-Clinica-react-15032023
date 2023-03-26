import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { userData, userout } from '../../pages/Slices/userSlice';
import "./BarraNav.css"

export const BarraNav = () => {

    const credencialesRdx = useSelector(userData)

    const dispatch = useDispatch() 

    const logmeOut = () => {
        dispatch (userout({credentials : {}, token : ""}))
        return navigate ("/")
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container fluid>
            <Navbar.Brand as={Link} to='/'>TrueSmile</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
            <Nav.Link as={Link} to={'/appointment'}>Appointment</Nav.Link>
        </Nav>
        <Nav>
        {!credencialesRdx.credentials.token ? (
            <>
            <Nav.Link as={Link} to={'/login'}>Login</Nav.Link>
            <Nav.Link as={Link} to={'/register'}>Register</Nav.Link>
            </>
        ) 
        : (
            <>
            <Nav.Link as={Link} to={'/profile'}>Profile</Nav.Link>
            <Nav.Link as={Link} to={'/'} onClick={()=>logmeOut()}>Logout</Nav.Link>
            </>
        )}
        
        </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
    );
}