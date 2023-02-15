import { collection, doc, getDoc } from "firebase/firestore"
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { toast } from "react-toastify"
import { db } from "../firebase"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {

    const [producto,setProducto] = useState({});
    const { id } = useParams();

    useEffect(() => {

        toast.info("Cargando producto...")

        const productosCollection = collection(db, "productos")
        
        const referencia = doc(productosCollection, id)
        const pedido = getDoc(referencia)

        pedido
            .then((respuesta) => {
                
                const producto = {id: respuesta.id, ...respuesta.data()}

                setProducto(producto)
                toast.dismiss()
                toast.success("Producto cargado!")
            })
            .catch((error) => {
                toast.dismiss()
                toast.error("Hubo un error, vuelva a intentarlo!")
            })
    },[])

    return (
        <ItemDetail producto={producto}/>
    )
}

export default ItemDetailContainer