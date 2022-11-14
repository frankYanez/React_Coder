import React from 'react'
import { useCartContext } from '../../../Context/CartContext'



const CarritoPage = () => {
  const {cartList, vaciarCarrito} = useCartContext()

  {cartList.map(producto => producto ) }
  return (
    <div>
      <h2>

      </h2>
        <div>
          </div>
          <button onClick={vaciarCarrito}>Vaciar Carrito</button>
    </div>
  )
}

export default CarritoPage