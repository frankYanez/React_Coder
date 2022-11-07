import NavBar from "./components/NavBar/NavBar";
import CarouselImages from "./components/Carousel";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ItemDetailContainer from "./components/Pages/ItemDetailContainer/ItemDetailContainer";
import CarritoPage from "./components/Pages/Carrito/CarritoPage";
import ItemListContainer from "./components/Pages/ItemListContainer/ItemListContainer";
import "./App.css";
import NotFound from "./components/NotFound/NotFound";
import CartContextProvider from "./Context/CartContext";

const App = () => {
  return (
    <CartContextProvider>

      <BrowserRouter>
        <NavBar />
        <CarouselImages />

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:idCategoria" />

          <Route
            path="/detalle/:idProducto"
            element={<ItemDetailContainer />}
          />
          <Route path="/cart" element={<CarritoPage />} />
          <Route path="/404" element={<NotFound />} />

          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
   
  );
};

export default App;
