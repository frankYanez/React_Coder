import Nav from "./components/NavBar/NavBar";
import itemList from './components/itemList/itemList';
import './App.css';


const App = () => {
  return <div className="Nav">
    <Nav/>
    <itemList saludo={'Hola'}/>

    
    
  </div>
  
}



export default App;
