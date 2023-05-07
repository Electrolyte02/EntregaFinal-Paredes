import CartWidget from "./CartWidget.jsx"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import { useState } from "react";
import { categorias } from "../utils/categorias.jsx";

function NavBar({categories}){
  const [selectedCategory, setSelectedCategory] = useState(null);
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  const hombre= "hombre";
  const mujer="mujer";
  const unisex="unisex";
    return(
      <Navbar>
        <Container>
        <Navbar.Brand>
          <Link to={'/'}><img src='https://img.logoipsum.com/239.svg'></img></Link>
        </Navbar.Brand>
        <Nav className='navbar-nav'>
        {categorias.map(item => <Link className="nav-link" key={item.id} to={`/categoria/${item.categoria}`}>{item.name}</Link>  )}
        </Nav>
        <Link to={'/cart'}><CartWidget contCarrito="3"/></Link>
        </Container>
        </Navbar>
    )
    }
export default NavBar