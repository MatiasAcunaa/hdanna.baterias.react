import { useState } from "react"
import {createContext} from "react"

export const contexto = createContext()
const Provider = contexto.Provider

const CustomProvider = ({children}) => {

  const [carrito, setCarrito] = useState([])
  const [totalProductos, setTotalProductos] = useState(0)

  const agregarProducto = (producto, cantidad) => {
    //const copia = [...arr]
    //copia.push(producto)
    //setCarrito(copia)
  }

  const vaciarCarrito = () => {
    setCarrito([])
  }

  const valorDelContexto = {
    carrito: carrito,
    totalProductos: totalProductos,
    setCarrito: setCarrito,
    setTotalProductos: setTotalProductos
  }

  return ( 
    <Provider value={valorDelContexto}>
      {children}
    </Provider>
   );
}
 
export default CustomProvider;