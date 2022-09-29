const task = new Promise ((res, rej)=>{
    res('ok 200')

})


const Nav = () => {
    console.log(task);
  return (
    <nav>
      <a href="index.js">Inicio</a>
      <a href="index.js">Productos</a>
      <a href="index.js">Nosotros</a>
    </nav>
  );
};

export default Nav;
