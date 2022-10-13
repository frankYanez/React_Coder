import NavBar from "./components/NavBar/NavBar";
import CarouselImages from "./components/Carousel/Carousel";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/Pages/ItemList/ItemListContainer";
import ItemDetailContainer from "./components/Pages/ItemDetailContainer/ItemDetailContainer";
import CarritoPage from "./components/Pages/Carrito/CarritoPage";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<ItemListContainer />}/>
        <Route path="/detalle" element={<ItemDetailContainer />}/>
        <Route path="/cart" element={<CarritoPage />}/>
        

        

        
      </Routes>

      <CarouselImages />
    </BrowserRouter>
  );
};

export default App;
