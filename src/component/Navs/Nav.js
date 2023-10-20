import { Container, Nav, Navbar } from 'react-bootstrap';
import './Nav.css'
import logo from '../../assets/images/logo3.png'
function NavItem() {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} title='logo' />
                    </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">About</Nav.Link>
                        <Nav.Link href="#link">Explore Food</Nav.Link>
                        <Nav.Link href="#link">Review</Nav.Link>
                        <Nav.Link href="#link">FAQ</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link id='lastNav' href="#">01126989864</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavItem;