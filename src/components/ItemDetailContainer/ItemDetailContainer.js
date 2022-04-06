import { productList } from "../../Data/Data";
import ItemDetail from "./ItemDetail";
import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom'


  const ItemDetailContainer = () => {

    const [product, setProduct] = useState([])
    const [loanding, setLoanding] = useState(true)
    const {id} = useParams ()


    //const productID = 1;

    useEffect (() => {
        const products = () => {
            return new Promise((resolve, reject)=>{
                setTimeout(()=>{
                    resolve(productList)
                },2000)
            })
        }
        products().then((items)=>{
            const product = items.find(product => product.id ===id)
            setProduct(product)
            setLoanding(false)
        })
    },[])


  return(
    <>
      {loanding ? <h2>Cargando..</h2> : 
        <ItemDetail 
          name = {product.name} 
          image = {product.image} 
          description = {product.description} 
          price = {product.price} 
          stock = {product.stock} 
        />
      }
    </>

  )
}

export default ItemDetailContainer;


