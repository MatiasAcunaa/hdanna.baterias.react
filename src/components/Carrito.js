import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import {useState} from "react"
import {db} from "../firebase"
import { collection } from 'firebase/firestore';

const Carrito = () => {

  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")

  const handleClick = (e) => {
    console.log(nombre, email)
  }
  const handleChangeName = (e) => {
    setNombre(e.target.value)
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  return ( 
    <div>
      <div>
        <input type="text" onChange={handleChangeName} placeholder="Nombre"/>
      </div>
      <div>
        <input type="text" onChange={handleChangeEmail} placeholder="Email"/>
      </div>
      <button type='button' onClick={handleClick}>Finalizar compra</button>
    </div>
   );
}
 
export default Carrito;