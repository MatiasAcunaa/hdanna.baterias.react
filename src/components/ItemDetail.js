import { useContext } from "react";
import { contexto } from "./CustomProvider";
import ItemCount from "./ItemCount";

const ItemDetail = ({titulo, imagen, desc, stock = 5}) => {

  const onAdd = (parametro) => {
    console.log(parametro)
  }

  return ( 
    <div>
      <h3>Detalle de producto - $1000</h3>
      <img src="https://picsum.photos/200" alt="picsum" />
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique vero, minus temporibus
         nihil illo provident quod tenetur ab et perferendis tempore, ducimus eligendi reiciendis 
         facere! Adipisci excepturi dignissimos quod eum?</p>
         <ItemCount stock={stock} foo={onAdd}></ItemCount>
    </div>
   );
}
 
export default ItemDetail;