import { useState } from "react";
import "../App.css";

const ItemCount = ({stock, onAdd}) => {

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
    <div>
      <button onClick={handleSumar}>+</button>
      <p>Cantidad: {contador}</p>
      <button onClick={handleRestar}>-</button>
      <div id="contenedorConfirmarResetear">
        <button onClick={handleConfirmar}>Confirmar</button>
        <button onClick={handleResetear}>Resetear</button>
      </div>
    </div>
   );
}
 
export default ItemCount;