import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useState } from "react";
import { useCartContext } from "../../../Context/CartContext";
import "./Carrito.css";

const CarritoPage = () => {
  //Crea el estado para guardar los datos del formulario

  const [dataForm, setDataForm] = useState({
    name: "",
    phone: "",
    mail: "",
  });

  //Aca estan las Funciones que se proveen desde cartContext
  const { cartList, vaciarCarrito, precioTotal, removeItem } = useCartContext();

  //Se crea la Funcion Asincrona para generar la orden
  const generarOrden = async (e) => {
    //Para Prevenir que se refresque
    e.preventDefault();
    //La orden con forma de Objeto {} que luego se va a enviar, inicializado vacio
    const orden = {};

    //Uno de los campos de la orden, el comprador
    orden.buyer = {
      //Aca asigna cada campo a la orden que va enviar con su correspondiente campo del formulario
      //El nombre es el campo ingresado en el formulario con name: NAME
      name: dataForm.name,
      //El nombre es el campo ingresado en el formulario con name: PHONE
      phone: dataForm.phone,
      //El nombre es el campo ingresado en el formulario con name: MAIL
      mail: dataForm.mail,
    };

    //Items que van en la orden. Es un map de lo que tenga CartList, hace destructuring y lo retorna para luego inyectarlo en {orden.items}
    orden.items = cartList.map((prod) => {
      const { id, name, precio: price } = prod;
      return { id, name, price };
    });

    //Llama a la funcion que calcula el total y se enviara en el formulario como TOTAL
    orden.total = precioTotal();

    //Llamada a la base de datos
    const db = getFirestore();
    //Crea una nueva lista llamada ORDERS
    const orders = collection(db, "orders");
    //Añade un documento 'addDoc' que recibe 2 parametros(Nombre de la lista, que le quieres ingresar)
    addDoc(orders, orden)
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err))
      //una vez terminado todo lo vacia
      .finally(() => vaciarCarrito());
  };

  //Para manejar lo ingresado en el campo, guardarlo en el Set. Asigna el valor del campo al nombre en la orden y lo guarda
  const handleInputChange = (e) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1 className="text-center">Carrito de Compras</h1>
      <div className="contenedor-carrito d-flex container">
        <div className="d-grid carrito">
          <div className="contenedor-productos">
            {/* Mapeo del Carrito */}

            {cartList.map((producto) => (
              <div
                key={producto.id}
                className="card d-flex justify-content-center align-items-center m-3 p-2 "
              >
                <h3>{producto.name}</h3>
                <img className="w-50" src={producto.photo} alt="" />
                <p>Cantidad:{producto.cantidad}</p>
                <h2>{producto.price}</h2>
                <button onClick={() => removeItem(producto.id)}>Delete</button>
              </div>
            ))}
          </div>

          <div className="botones d-flex">
            {cartList.length === 0 ? (
              <h2 className="text-center">Carrito Vacio</h2>
            ) : (
              <h3>Total {precioTotal()}</h3>
            )}
            {cartList.length > 0 ? (
              <button className="" onClick={vaciarCarrito}>
                Vaciar Carrito
              </button>
            ) : (
              console.log("nada")
            )}
          </div>
        </div>

        {/* Formulario para las ordenes */}
        <form className="form w-50 d-grid" onSubmit={generarOrden}>
          <h2 className="text-center">Formulario de Compra</h2>
          <input
            type="text"
            // Nombre y valor del campo
            name="name"
            placeholder="Nombre"
            value={dataForm.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            // Nombre y valor del campo
            name="phone"
            value={dataForm.phone}
            placeholder="Teléfono"
            onChange={handleInputChange}
          />
          <input
            type="text"
            // Nombre y valor del campo
            name="email"
            value={dataForm.mail}
            placeholder="Email"
            onChange={handleInputChange}
          />
          {/* {dataForm.name || dataForm.phone || dataForm.mail === '' ? alert('Por favor complete todos los campos') : <button type="submit">Generar orden de Compra</button> } */}
        </form>
      </div>
    </div>
  );
};

export default CarritoPage;
