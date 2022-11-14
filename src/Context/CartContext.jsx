import React from 'react'
import { useContext } from 'react'
import { useState,createContext  } from 'react'

export const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) => {

    const [cartList,setCartList] = useState([])

    const addItem = (product) => {
        setCartList([...cartList,product])
    }

    const vaciarCarrito = () => {
      setCartList([])
    }
  return (
    <CartContext.Provider value={{
        cartList,
        addItem,
        vaciarCarrito
    }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider