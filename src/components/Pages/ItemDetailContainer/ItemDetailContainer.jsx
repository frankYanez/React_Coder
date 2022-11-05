import React from 'react'
import ItemDetail from '../../ItemDetail/ItemDetail'
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

  const { idProducto } = useParams()
  return (
    <div>
      <ItemDetail />
    </div>
  )
}

export default ItemDetailContainer
