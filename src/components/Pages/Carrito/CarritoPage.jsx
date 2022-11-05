import React from 'react'
import { useCartContext } from '../../../Context/CartContext'



const CarritoPage = () => {
  const {cartList, vaciarCarrito} = useCartContext()

  return (
    <div>
      <h2>
      </h2>
        <div>
        {cartList.map(producto => <h3>{producto.name}</h3>) }
          </div>
          <button onClick={vaciarCarrito}></button>
    </div>
  )
}

export default CarritoPage