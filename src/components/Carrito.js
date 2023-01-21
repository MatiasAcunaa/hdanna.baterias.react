import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const Carrito = () => {

  const handleClick = (e) => {
    console.log(e)
  }
  const handleChange = (e) => {
    console.log(e)
  }

  return ( 
    <div>
      <input type="text" onChange={handleChange}/>
      <button type='button' onClick={handleClick}>Finalizar compra</button>
    </div>
   );
}
 
export default Carrito;