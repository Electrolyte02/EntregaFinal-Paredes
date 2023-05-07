import { createContext, useContext, useState } from "react";

const CartContext = createContext([])

export const useCartContext = ()=> useContext(CartContext)

export const CartContextProvider = ({children}) => { 
    const [cartList, setCartList] = useState([])

    const agregarAlCart = (newProducto) =>{

        const indexProducto = cartList.findIndex(producto => producto.id === newProducto.id)
        
        if (indexProducto === -1 ) {
            setCartList([
                ...cartList,
                newProducto
            ])              
        } else {
            let newCart=[...cartList]
            newCart[indexProducto].quantity += newProducto.quantity
            setCartList(newCart)
        }

    }
    // localStorage.setItem('nombre', 'valor')

    // cantidad total de productos
    const cantidadTotal = () => cartList.reduce( (cantidadTotal, objProducto) => cantidadTotal += objProducto.quantity ,0 ) // retorna un valor

    // precio total de productos
    const precioTotal = () => {
        return cartList.reduce((totalPrice, objProducto) => totalPrice += (objProducto.precio * objProducto.quantity), 0)
    }
    // eliminar por item
    const eliminarProducto = (id) =>{

        const indexProducto = cartList.findIndex(producto => producto.id === (id))

        if (cartList[indexProducto].quantity > 1) {
            cartList[indexProducto].quantity = cartList[indexProducto].quantity -  1            
            setCartList( [...cartList] )
        } else {
            setCartList(cartList.filter(producto => producto.id !== (id) ))          
        }
    }
// [1,2,3,4,5,6,7].filter(nro => nro !== numero) -> [1]
    const vaciarCarrito = () => {
        setCartList([])
    }

    return( 
        <CartContext.Provider value={{
            cartList,
            agregarAlCart,
            vaciarCarrito,
            precioTotal,
            cantidadTotal,
            eliminarProducto
        }}>
            {children}
        </CartContext.Provider>       
    )                                                                                                                                                                           
}