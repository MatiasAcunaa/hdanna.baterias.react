import { useState } from "react";
import "../App.css";

const ItemCount = ({stock, onAdd, inital}) => {

  const [contador, setContador] = useState (1)

  const handleSumar = () => {
    if (contador < stock) {
      setContador(contador + 1)
    }
  }

  const handleRestar = () => {
    setContador(contador - 1)
  }

  const handleConfirmar = () => {
    onAdd(contador)
  }

  const handleResetear = () => {
    setContador(1)
  }

  return ( 
    <div className="counter">
      <button onClick={handleSumar}>+</button>
      <p>Cantidad: {contador}</p>
      <button disabled={contador <= 1} onClick={handleRestar}>-</button>
      <div id="contenedorConfirmarResetear">
        <button disabled={stock<=0} onClick={handleConfirmar}>Agregar al carrito</button>
        <button onClick={handleResetear}>Resetear</button>
      </div>
    </div>
   );
}
 
export default ItemCount;