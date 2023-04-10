import { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

function ItemListContainer(){
  const [productos, setProductos] = useState();  

  const getApiData = async () => {
    const response = await fetch(
      "https://fakestoreapi.com/products"
    )
    .then((response) => response.json());
  
    setProductos(response);
  };
    useEffect(() => {
      getApiData();;
    }, []);
    
    return(
      <div>
        <ItemList productos={productos}></ItemList>
      </div>
    )
  }

export default ItemListContainer