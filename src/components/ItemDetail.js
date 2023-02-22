import { useContext } from "react";
import { contexto } from "./CustomProvider";
import ItemCount from './ItemCount';
import { useState } from "react";
import { Link } from "react-router-dom";

const ItemDetail = ({producto, precio=producto.price , titulo=producto.title , 
  descripcion=producto.description , imagen=producto.image , 
  stock=producto.stock}) => {

  const [goToCart, setGoToCart] = useState(false);

  const onAdd = (cantidad) => {
    setGoToCart(true);
  }

  return (
    <div className="container-fluid">
      <h1>{titulo} - ${precio}</h1>
      <img src={imagen} alt="picsum" />
      <p>{descripcion}</p>
      {
        goToCart 
          ? <Link to="/carrito">Terminar compra</Link> 
          : <ItemCount stock={stock} onAdd={onAdd} />
      }
    </div>
    )
}

export default ItemDetail