// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './NavBar.module.scss';
import { Container } from 'react-bootstrap';


const NavBar = props => {
    return (
        <Navbar className={styles.navbar} bg="primary" variant="dark" >
            <Container className={styles.navcontainer} >
                <Navbar.Brand>Waiter.app</Navbar.Brand>
                <Nav className= "me-auto text-end">
                    <Nav.Link className={styles.link} as={NavLink} to="/">Home</Nav.Link>
                </Nav>
            </Container>
        </Navbar>

    );
};



export default NavBar;