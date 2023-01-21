import { Link } from "react-router-dom";

const Item = ({producto}) => {
  return (
    <article key={producto.id}>
      <h5>{producto.title}</h5>
      <img src={'https://picsum.photos/200?random=${producto.id}'} alt={producto.title} />
      <p>{producto.price}</p>
      <Link to={"/item/" + producto.id}>Ver mas</Link>
    </article>
  )
};
 
export default Item;