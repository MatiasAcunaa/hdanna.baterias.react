import { useContext } from "react";
import { contexto } from "./CustomProvider";

import ItemCount from './ItemCount';

const ItemDetail = ({producto, precio=producto.price , titulo=producto.title , 
  descripcion=producto.description , imagen=producto.image , 
  stock=producto.stock}) => {

  const onAdd = (parametro) => {
    
  }

  return (
    <div>
      <h1>{titulo} - ${precio}</h1>
      <img src={imagen} alt="picsum" />
      <p>{descripcion}</p>
      <ItemCount stock={stock} onAdd={onAdd} />
    </div>
    )
}

export default ItemDetail