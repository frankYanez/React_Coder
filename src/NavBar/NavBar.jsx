import React from 'react';



const Icono = () => {
  return (
    
        <img src='./images/cart.png' alt="" />
    
  )
}




const Nav = () => {
    


  return (
    <div>
      <nav className='nav'>
      <a href="index.js">Inicio</a>
      <a href="index.js">Productos</a>
      <a href="index.js">Nosotros</a>
      <Icono/>
      <itemList/>

    </nav>
    
    </div>
      
  );
};

export default Nav;
