import { useCartContext } from "../context/cartContext";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useState } from "react";
import { Link } from "react-router-dom";

const CartContainer = () => {
  const [id, setId] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const { cartList, vaciarCarrito, precioTotal, eliminarProducto } =
    useCartContext();

  const handleOnChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const order = {
      buyer: formData,
      items: cartList.map(({ id, nombre, precio }) => ({ id, nombre, precio })),
      total: precioTotal(),
    };

    const db = getFirestore();
    const queryCollection = collection(db, "ordenes");

    addDoc(queryCollection, order)
      .then((resp) => setId(resp.id))
      .catch((err) => console.log(err))
      .finally(() => {
        vaciarCarrito();
      });
  };

  return (
    <div className="cartContainer">
      {cartList.length > 0 ? (
        <div className="cartContainerProducts">
          {cartList.map((producto) => (
            <li key={producto.id}>
              <img src={producto.imagen} alt="imagen" className="w-25" />
              Nombre: {producto.nombre} - Cantidad: {producto.quantity}
              <button
                className="btn btn-danger"
                onClick={() => eliminarProducto(producto.id)}
              >
                {" "}
                X{" "}
              </button>
            </li>
          ))}
          <h3>Precio Total: {precioTotal()}</h3>
          <Button onClick={vaciarCarrito}>Vaciar Carrito</Button>
          {!mostrarFormulario ? (
            <Button onClick={() => setMostrarFormulario(true)}>
              Terminar Compra
            </Button>
          ) : (
            <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          name="name"
          placeholder="Ingrese el nombre"
          onChange={handleOnChange}
          value={formData.name}
        />
      </Form.Group>

      <Form.Group controlId="formPhone">
        <Form.Label>Teléfono</Form.Label>
        <Form.Control
          type="text"
          name="phone"
          placeholder="Ingrese el teléfono"
          onChange={handleOnChange}
          value={formData.phone}
        />
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>Correo electrónico</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Ingrese el correo electrónico"
          onChange={handleOnChange}
          value={formData.email}
        />
      </Form.Group>

      <Form.Group controlId="formRepetirMail">
        <Form.Label>Repetir correo electrónico</Form.Label>
        <Form.Control
          type="email"
          name="repetirMail"
          placeholder="Repita el correo electrónico"
          onChange={handleOnChange}
          value={formData.repetirMail}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Generar Orden
      </Button>
    </Form>
          )}
        </div>
      ) : (
        <div className="cartContainer--empty">
          <h3 className="cartContainerText--empty">No hay productos en su carrito</h3>
          <Link to="/">
            <Button className="cartContainerButton--empty">Volver al Inicio</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartContainer;


