import { createContext, useEffect, useState } from "react";
import {
  getDocs,
  collection,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import "./Item.css";
import { Link, useParams } from "react-router-dom";
import ItemList from "../../ItemList/ItemList";
import Item from "../../Item/Item";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { idCategoria } = useParams();

console.log(idCategoria);
  //Consulta a la base de Datos
  const giveProducts= () => {
    const db = getFirestore()
    const queryCollection = collection(db, "productos")

    const queryFiltrada = idCategoria ? query(queryCollection, where('category', '==', idCategoria))
      : queryCollection;
    getDocs(queryFiltrada)
      .then((resp) => setProducts(resp.docs.map((prod) => ({ id: prod.id, ...prod.data() })))
      )
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

useEffect(()=>{

  giveProducts()
}, [idCategoria])

  //Primero retorna el loading y luego los productos
  return (
    <div className="container-cards d-flex">
      {
        loading ? (
          <h3>Cargando</h3>
        ) : (
          <div className='d-flex'>
            <ItemList  products={products}  />
          </div>
        )

        // <Link to={`detalle/${produ.id}`}>
        // { products.map(produ =>
        // <Item key={produ.id} produ={produ}>{produ.nombre}</Item>

        // )}
        // </Link>
      }
    </div>
  );
};
export default ItemListContainer;

//   products.map((product, id) => (
//
//
//     </Link>
//   ))
// )}
