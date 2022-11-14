import React, { useState } from "react";

const ItemCount = ({ onAdd, stock, init }) => {
  const [count, setCount] = useState(init);

  const handleAdd = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleRemove = () => {
    if (count > init) {
      setCount(count - 1);
    }
  };

  const handleAddCart = () => {
    onAdd(count)
  }

  return (
    <div>
      <button onClick={handleAdd}>+</button>
      <p>{count}</p>
      <button onClick={handleRemove}>-</button>
      <button onClick={handleAddCart} >Agregar al Carrito</button>

    </div>
  );
};

export default ItemCount;
