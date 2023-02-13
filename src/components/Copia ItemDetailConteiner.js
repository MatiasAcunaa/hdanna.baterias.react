import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import {db} from "../firebase"

const ItemDetailContainer = () => {

  const params = useParams()

  return ( 
    <ItemDetail></ItemDetail>
   );
}
 
export default ItemDetailContainer;