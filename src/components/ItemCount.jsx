import { useState } from "react";
import { Link } from "react-router-dom";
import { useCount } from "../hooks/useCount"
import { Button } from "react-bootstrap";

export const ItemCount = ({initial=1, stock=5, min=1, onAdd}) => {
  const [showButtons, setShowButtons] = useState(false);
  const [showButtonAdd, setShowButtonAdd] = useState(true);
  const { contador, increment, decrement } = useCount(initial, stock, min);

  function handleOnAdd() {
    onAdd(contador);
    setShowButtons(true);
    setShowButtonAdd(false);
  }

  return (
    <div classname="detailButtons">
      <div className="detailCountContainer">
      <Button className="detailButton" onClick={increment}>{" "}+{" "}</Button>
      <label>{contador}</label>
      <Button className="detailButton" onClick={decrement}>{" "}-{" "}</Button>
      </div>
      <br />
      {showButtonAdd && (<Button className="detailAddButton" onClick={handleOnAdd}>{" "}Agregar al carrito{" "}</Button>)}
      {showButtons && (
        <div className="detailLinkButtons">
          <Link to="/" ><Button className="detailLink">{" "}Seguir comprando{" "}</Button></Link>
          <Link to="/cart" ><Button className="detailLink">{" "}Ir al carrito{" "}</Button></Link>
        </div>
      )}
    </div>
  );
};
