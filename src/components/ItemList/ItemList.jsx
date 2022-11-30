import React from "react";
import { memo } from "react";
import { Link } from "react-router-dom";
import Item from "../Item/Item";

const ItemList = ({ products }) => {
  return (
    <div>
      {products.map((produ) => (
        <Item key={produ.id} produ={produ} />
      ))}
    </div>
  );
};

export default ItemList;
