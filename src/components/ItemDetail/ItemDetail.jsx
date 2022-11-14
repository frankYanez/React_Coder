import React from "react";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({
  product = {
    id: "1",
    name: "Remera",
    price: 200,
    stock: 10,
    category: "remeras",
    photo: "/images/shirt.jpg",
  },
}) => {
  const { addItem } = useContext(CartContext);

  const onAdd = (cantidad = 1) => {
    console.log("onAdd", cantidad);
    addItem({...product, cantidad});
  };

  return (
    <div className="container d-flex">
      <div>
        <h3>{product.name}</h3>
        <img src={product.photo} alt="" />
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <ItemCount onAdd={onAdd} stock={product.stock} init={1}/>
      </div>
    </div>
  );
};

export default ItemDetail;
