import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logos/Group 1329.png';
const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand as={Link} to='/'><img src={logo} alt="" height={60} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className='ms-auto'>
                            <Nav.Link as={Link} to='/'>Home</Nav.Link>
                            <Nav.Link as={Link} to='/donation'>Donation</Nav.Link>
                            <Nav.Link as={Link} to='/event'>Event</Nav.Link>
                            <Nav.Link as={Link} to='/blogs'>Blogs</Nav.Link>
                            {
                                !user?.displayName ? <>
                                    <Nav.Link as={Link} to='/register'><button className="btn btn-primary">Register</button></Nav.Link>
                                    <Nav.Link as={Link} to='/login'><button className="btn btn-secondary">Login</button></Nav.Link>
                                </>
                                    : <>
                                        <Nav.Link as={Link} to='/activity/add'>Add Activity</Nav.Link>
                                        <button className="btn btn-secondary" onClick={handleSignOut}>Signout</button>
                                    </>

                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header; 