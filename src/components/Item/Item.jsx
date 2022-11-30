import React from "react";
import { memo } from "react";
import { Link } from "react-router-dom";



const Item =  ({ produ }) => {
    

    
    return (
      <div >
        <Link to={`/detalle/${produ.id}`}>
        <div className="card">
        <h2 className="Card-title">{produ.name}</h2>
         <img className="photo-card" src={produ.photo} alt="" />
      <p>{produ.price}</p>

        </div>
        
        </Link>
         
      </div>
      //           <h3 className="Card-price">{product.price}</h3>
      //           <button className="button-buy">Comprar</button>
      //
      //       </div>
    )
  }
  
  
export default Item;
