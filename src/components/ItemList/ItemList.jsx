import React from 'react'
import Item from '../Item/Item'
import { products } from '../Products/gFetch'


const ItemList = ({ products }) => {

  return (
    <div>
       {products.map((produ)=><Item key={produ.id} produ={produ}/>)}

    </div>
  )
}

export default ItemList