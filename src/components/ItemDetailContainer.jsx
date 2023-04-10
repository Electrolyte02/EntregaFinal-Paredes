import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const [productos, setProductos] = useState([]);
  const { id } = useParams();

  const getApiData = async () => {
    const response = await fetch("https://fakestoreapi.com/products").then((response) => response.json());
    setProductos(response);
  };

  useEffect(() => {
    getApiData();
  }, []);

  const selectedItem = productos.find((producto) => producto.id === parseInt(id));

  return (
    <div className="containerPruebaDetail">
      {selectedItem && (
        <ItemDetail image={selectedItem.image} title={selectedItem.title} description={selectedItem.description} />
      )}
    </div>
  );
}

export default ItemDetailContainer;
