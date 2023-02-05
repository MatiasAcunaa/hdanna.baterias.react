import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import {db} from "../firebase"
import { collection, getDocs } from "firebase/firestore";

const ItemListContainer=()=>{
  
  const [load, setLoad] = useState (false)
  const [productos, setProductos] = useState ([])

  const props = useParams()
  console.log(props)

  useEffect (()=>{

    //const productosCollection = collection(db, "productos")
    //const pedidoFirestore = getDocs()
    const pedido = fetch('https://fakestoreapi.com/products')

    pedido
      .then((respuesta)=>{
        const productos = respuesta.json()
        return productos

      })
      .then((productos)=>{
        setProductos(productos)
        setLoad(true)

      })
      .catch((error)=>{
        console.log(error)

      })

  },[])
  
  return (
    <>
      {load ? null : 'Cargando...'}
      <ItemList productos={productos}/>
    </>
  )
}

export default ItemListContainer;