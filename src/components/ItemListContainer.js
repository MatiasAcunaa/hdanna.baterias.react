import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import {db} from "../firebase"
import { collection, getDocs, query, where } from "firebase/firestore";
import {toast} from "react-toastify"

const ItemListContainer=()=>{
  
  const [load, setLoad] = useState (false)
  const [productos, setProductos] = useState ([])

  const { category } = useParams();

  useEffect (()=>{ 

    toast.info ("Cargando productos...") 

    const productosCollection = collection(db, "productos")


    if (category){

      const filtro = query(productosCollection, where("category", "==", category))
      const pedidoFirestore = getDocs(filtro)

      pedidoFirestore 

      .then((respuesta)=>{

        const productos = respuesta.docs.map(doc=>({ ...doc.data(), id: doc.id}))

        setProductos(productos)

        setLoad(true)
        toast.dismiss()
        toast.success("Productos cargados!")
      }) 

      .catch((error)=>{
        toast.error ("Hubo un error, vuelva a intentarlo")
      })
    }

    else {
      const pedidoFirestore = getDocs(productosCollection)

      pedidoFirestore 

      .then((respuesta)=>{

        const productos = respuesta.docs.map(doc=>({ ...doc.data(), id: doc.id}))

        setProductos(productos)

        setLoad(true)
        toast.dismiss()
        toast.success("Productos cargados!")
      }) 

      .catch((error)=>{
        toast.error ("Hubo un error, vuelva a intentarlo")
      })
    }
  },[category])
  
  return (
    <>
      <ItemList productos={productos}/>
    </>
  )
}

export default ItemListContainer;