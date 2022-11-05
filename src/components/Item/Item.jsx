import React from "react";

const Item = ({ produ }) => {
  
  return (
    <div className="card">
      <h2 className="Card-title">{produ.name}</h2>
       <img className="photo-card" src={produ.photo} alt="" />
    
    </div>
    //           <h3 className="Card-price">{product.price}</h3>
    //           <button className="button-buy">Comprar</button>
    //
    //       </div>
  );
};

export default Item;
