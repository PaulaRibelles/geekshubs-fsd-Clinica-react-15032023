import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from "react-router-dom";
import { userData, userout } from '../../pages/Slices/userSlice';
import "./BarraNav.css"

export const BarraNav = () => {

    const credencialesRdx = useSelector(userData)
    const dispatch = useDispatch() 

    const logmeOut = () => {
        dispatch (userout({credentials : {}, token : ""}))
        return Navigate ("/")
    }

    return (
        <Navbar className='BarraNav-D' collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container fluid>
            <Navbar.Brand as={Link} to='/'>TrueSmile</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
            
        </Nav>
        <Nav>
        {credencialesRdx?.credentials?.user?.roleId === 1 ? (
            <>
            <Nav.Link as={Link} to={'/appointment'}>Pide cita</Nav.Link>
            <Nav.Link as={Link} to={'/appointment-user'}>Tus citas</Nav.Link>
            <Nav.Link as={Link} to={'/profile'}>Profile</Nav.Link>
            <Nav.Link as={Link} to={'/'} onClick={()=>logmeOut()}>Logout</Nav.Link>
            </>
        ) : credencialesRdx?.credentials?.user?.roleId === 2 ? (
            <>
            <Nav.Link as={Link} to={'/all-appointments'}>Citas existentes</Nav.Link>
            <Nav.Link as={Link} to={'/appointment'}>Pide cita</Nav.Link>
            <Nav.Link as={Link} to={'/appointment-user'}>Tus citas</Nav.Link>
            <Nav.Link as={Link} to={'/profile'}>Profile</Nav.Link>
            <Nav.Link as={Link} to={'/'} onClick={()=>logmeOut()}>Logout</Nav.Link>
            </>
        ):(
            <>
            <Nav.Link as={Link} to={'/login'}>Login</Nav.Link>
            <Nav.Link as={Link} to={'/register'}>Register</Nav.Link>
            </>
        )}
        </Nav>

        </Navbar.Collapse>
    </Container>
    </Navbar>
    );
}