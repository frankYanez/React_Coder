import { createContext, useEffect, useState } from "react";
import { firestoneInit } from "../../../firebase/config";
import { getDocs, collection } from "firebase/firestore";
import { gfetch } from "../../Products/gFetch";
import "./Item.css";
import ItemDetail from "../../ItemDetail/ItemDetail";
import { Link } from "react-router-dom";
import ItemList from "../../ItemList/ItemList";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  

  useEffect(() => {
    gfetch()
      .then((data) => setProducts(data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  // useEffect(() => {
  //   const db = firestoneInit()
  //   const queryCollection = collection(db,'productos')
  //   getDocs(queryCollection)
  //   .then(data => setProducts(data.docs.map( prod => ({id:prod.id}))))
  // },[])

  console.log(products.id);
  return (
    <div className="container-cards">
      {loading ? (
        <h3>Cargando</h3>
      ):
      <Link to={`/detalle/${products.id}`}>
        c

        <ItemList products={ products }/>
      </Link>
      
      }</div>
  );
};

export default ItemListContainer;
      //   products.map((product, id) => (
      //     
      //       
      //     </Link>
      //   ))
      // )}