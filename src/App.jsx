import { BrowserRouter,Route, Routes } from 'react-router-dom';
import { CartContextProvider } from './context/cartContext';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartContainer from './components/CartContainer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
      <div className='app'>
      <NavBar categories={['hombre','mujer','unisex']}/>
      <Routes>
        <Route exact path='/' element={<ItemListContainer/>}/>
        <Route exact path='/categoria/:cid' element={<ItemListContainer/>}/>
        <Route exact path ='/item/:id' element={<ItemDetailContainer/>}></Route>
        <Route path='/cart' element={<CartContainer />} />  
      </Routes>
      </div>
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App
