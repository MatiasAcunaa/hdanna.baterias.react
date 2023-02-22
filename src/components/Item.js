import { Link } from "react-router-dom";
import '../App.css';
import { useContext } from "react";
import { contexto } from "./CustomProvider";

const Item = ({producto}) => {

  return (
    <article key={producto.id} className="product-card">
      <h5>{producto.title}</h5>
      <img className="product-card__iamge" src={producto.image} alt={producto.title} />
      <p>${producto.price}</p>
      <button><Link id="botonCard" to={"/item/" + producto.id}>Ver mas</Link></button>
    </article>
  )
};
 
export default Item;