import { useEffect,useState } from 'react';
import ItemList from './ItemList';
import { FetchContext } from './firebaseFetch';
import {collection, getDocs, getFirestore,query,where} from 'firebase/firestore'
import { useParams } from 'react-router-dom';

function ItemListContainer(){
  const [productos, setProductos] = useState([]);
  
  const {cid} = useParams();

  useEffect(() => {
    const db = getFirestore()
    const queryCollection = collection(db,'productos')
    const queryFilter = cid ? query(queryCollection,where('categoria', '==', cid))   : queryCollection
    getDocs(queryFilter)
    .then(resp => setProductos(resp.docs.map(producto=>({id:producto.id, ...producto.data()}))))
  }, [cid])

  return(
      <div>
        <FetchContext.Provider value={productos}>
        <ItemList></ItemList>
        </FetchContext.Provider>
      </div>
    )
  }

export default ItemListContainer