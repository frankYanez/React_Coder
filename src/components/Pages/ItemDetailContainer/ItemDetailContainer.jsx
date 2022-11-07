import React from 'react'
import ItemDetail from '../../ItemDetail/ItemDetail'
import { useParams } from "react-router-dom";
import { products } from '../../Products/gFetch';

const ItemDetailContainer = () => {

  const { idProducto } = useParams()

  const productoEncontrado = products.find( item => item.id === idProducto)

  


  return (
    <div>
      <h3>{productoEncontrado.name}</h3>
      <p>{productoEncontrado.photo}</p>
    </div>
  )
}

export default ItemDetailContainer
