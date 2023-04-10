import CartWidget from "./CartWidget.jsx"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar(){
    return(
      <Navbar>
        <Container>
        <Navbar.Brand>
        <img src='./src/assets/logoipsum-241.svg'></img>
        </Navbar.Brand>
        <Nav className='navbar-nav'>
          <Nav.Link href=''>Hombre</Nav.Link>
          <Nav.Link href=''>Mujer</Nav.Link>
          <Nav.Link href=''>Unisex</Nav.Link>
        </Nav>
        <CartWidget contCarrito="3"/>
        </Container>
        </Navbar>
    )
    }
export default NavBar