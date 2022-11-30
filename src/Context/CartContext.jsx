import React from 'react'
import { useState,createContext ,useContext } from 'react'

export const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) => {

    const [cartList,setCartList] = useState([])

    const addItem = (product) => {

      const index = cartList.findIndex(  prod => prod.id === product.id)
        
      if (index === -1) {
        
        setCartList([...cartList,product])
      } else {
        cartList[index].cantidad += product.cantidad
        setCartList([...cartList])
      }
      
    }

    const precioTotal = () => {
      return cartList.reduce((acc,prod) => acc + (prod.cantidad * prod.price),0)
    }

    const cantidadTotal = () => {
      return cartList.reduce((acc,prod) => acc += prod.cantidad, 0)
    }

    const removeItem = (id) => {
      setCartList( cartList.filter(item => item.id !== id))
    }

    const vaciarCarrito = () => {
      setCartList([])
    }
  return (
    <CartContext.Provider value={{
        cartList,
        addItem,
        precioTotal,
        cantidadTotal,
        removeItem,
        vaciarCarrito
    }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider