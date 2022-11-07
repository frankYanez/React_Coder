import React from 'react'
import { Link } from 'react-router-dom'
import Item from '../Item/Item'
import { products } from '../Products/gFetch'


const ItemList = ({ products }) => {

  return (
    <div>
      {products.map( produ => <div key={produ.id}>
        <Link to={`/detalle/${produ.id}`}>
        <Item produ={produ} />
        
        </Link>
        
        
        

      </div>)

      }</div>
  )
}

export default ItemList