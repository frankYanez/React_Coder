import { useState,useContext  } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({product}) => {
  const [isCount, setIsCount] = useState(true)

  const { addItem } = useContext(CartContext);

  const onAdd = (cantidad) => {
    addItem({...product, cantidad});
    setIsCount(false)
  };
  return (
    <div className="container d-flex">
      <div>
        <h3>{product.name}</h3>
        <img src={product.photo} alt="" />
      </div>
      <div className="d-flex justify-content-center align-items-center">
        {isCount ?<ItemCount onAdd={onAdd} stock={product.stock} init={1}/> 
        : <div>
          <Link to='/cart'>
            <button>Terminar Compra</button>
          </Link>
          <Link to='/'>Seguir Comprando</Link>
        </div>}
    </div>
 </div> )
};

export default ItemDetail;
