import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter,Router,Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
    <div className='app'>
    <NavBar/>
    <Routes>
    <Route exact path='/' element={<ItemListContainer/>}/>
    <Route exact path='/category/:id' element={<ItemListContainer/>}/>
    <Route exact path ='/item/:id' element={<ItemDetailContainer/>}></Route>
    </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
