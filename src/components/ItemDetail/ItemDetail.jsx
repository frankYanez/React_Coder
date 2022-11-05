import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';


const ItemDetail = ({ producto = {
  id: '1', name: 'Remera' , price: 200, stock: 10, category: 'remeras', photo:'/images/shirt.jpg'
} }) => {
  
  const { addItem , cartList} = useContext(CartContext)

  const ondAdd = (cantidad = 1) => {
    console.log('onAdd',cantidad);
    addItem(...producto,cantidad)
  }


  return (

    <div>
        <h2>{producto.name}</h2>
        <img src={producto.photo} alt="" />
    </div>
  )
}

export default ItemDetail