import Item from './Item'
import { useParams } from 'react-router-dom';
import { useContext, useState } from 'react';
import { FetchContext } from './firebaseFetch';

function ItemList(){
    const productos = useContext(FetchContext);
    const { category } = useParams();
    const filteredProductos = category ? productos.filter((producto) => producto.category === category) : productos;
    
    return(
    <div className='cardContainer'>
      {filteredProductos && filteredProductos.map((producto) => (
        <Item key={producto.id} title={producto.nombre} imagen={producto.imagen}  id={producto.id} />
      ))}
    </div>
    )
}

export default ItemList