import React, { useState } from 'react'
import ItemDetail from '../../ItemDetail/ItemDetail'
import { useParams } from "react-router-dom";
import { gfetch} from '../../Products/gFetch';
import { useEffect } from 'react';

const ItemDetailContainer = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const { idProducto } = useParams()

  useEffect( () => {
    gfetch(idProducto)
    .then(res => setProducts(res))
    .catch(err => console.log(err))
    .finally(setLoading(false))
  },[])

  


  return (
    
      loading ? <h3>Cargando</h3> : <ItemDetail product={products}/>  
    
      
  )
}

export default ItemDetailContainer
