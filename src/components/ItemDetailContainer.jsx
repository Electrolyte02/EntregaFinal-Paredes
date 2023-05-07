import { useState, useEffect,useContext } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import {collection, getDocs, getFirestore} from 'firebase/firestore'

function ItemDetailContainer() {
  const [productos, setProductos] = useState([]);
  
  useEffect(() => {
    const db = getFirestore()
    const queryCollection = collection(db,'productos')
    getDocs(queryCollection)
    .then(resp => setProductos(resp.docs.map(producto=>({id:producto.id, ...producto.data()}))))
  }, [])
  
  const { id } = useParams();
  const selectedItem = productos.find((producto) => producto.id === (id));
  console.log(id);

  return (
    <div className="containerPruebaDetail">
      {selectedItem && (
        <ItemDetail producto={selectedItem}/>
      )}
    </div>
  );
}

export default ItemDetailContainer;
