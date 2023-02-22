import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import {useState} from "react"
import {db} from "../firebase"
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const Carrito = () => {

  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")

  const handleClick = (e) => {
    const orden ={
      usuario : {
        nombre: nombre,
        email : email,
      },
      productos : []
    }

    const ventasCollection = collection(db, "ventas")
    const pedido = addDoc(ventasCollection, orden)

    pedido
    .then((resultado)=>{

    })
    .catch(error=>{

    })
  }
  const handleChangeName = (e) => {
    setNombre(e.target.value)
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }
  
  return ( 
    <div className='containerCarrito'>
      <div>
        <input type="text" onChange={handleChangeName} placeholder="Nombre" className='inputCarrito'/>
      </div>
      <div>
        <input type="text" onChange={handleChangeEmail} placeholder="Email" className='inputCarrito'/>
      </div>
      <button type='button' onClick={handleClick} className='inputCarrito'>Finalizar compra</button>
    </div>
   );
}
 
export default Carrito;