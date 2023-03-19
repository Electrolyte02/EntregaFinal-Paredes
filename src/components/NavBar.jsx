import CartWidget from "./CartWidget.jsx"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar(){
    return(
      <Navbar bg='secondary'>
        <Container>
        <Navbar.Brand>
        <img src='./src/assets/logoipsum-241.svg'></img>
        </Navbar.Brand>
        <Nav className='navbar-nav'>
          <Nav.Link href=''>Inicio</Nav.Link>
          <Nav.Link href=''>Productos</Nav.Link>
          <Nav.Link href=''>Contactos</Nav.Link>
        </Nav>
        {CartWidget()}
        </Container>
        </Navbar>
    )
    }
export default NavBar