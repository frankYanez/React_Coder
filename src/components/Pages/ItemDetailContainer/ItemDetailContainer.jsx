import React, { useState } from 'react'
import ItemDetail from '../../ItemDetail/ItemDetail'
import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({})
 
  const [loading, setLoading] = useState(true)

  const { idProducto } = useParams()

  useEffect( () => {
    const db = getFirestore()
    const queryDoc = doc(db, 'productos' , idProducto)
    getDoc(queryDoc)
    .then(resp => setProduct({id: resp.id,...resp.data() }))
    .catch(err => console.log(err))
    .finally(setLoading(false))
  },[])



  return (
    
      loading ? <h2>Cargando</h2> : <ItemDetail className='d-flex' product={product}/>  
    
      
  )
}

export default ItemDetailContainer






