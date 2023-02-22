import { useContext } from "react";
import { contexto } from "./CustomProvider";

const CartWidget=()=>{

  const {totalProductos} = useContext(contexto)

  return (
    <>
      <div>
        <span className='material-icons'>shopping_cart</span>
      </div>
    </>
  );
}

export default CartWidget;