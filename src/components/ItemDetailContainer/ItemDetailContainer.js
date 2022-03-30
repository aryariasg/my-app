import { productList } from "../../Data/Data";
import ItemDetail from "./ItemDetail";
import React, {useState, useEffect} from "react";

  const ItemDetailContainer = () => {

    const [product, setProduct] = useState([])
    const [loanding, setLoanding] = useState(true)
    const productID = 1;



    useEffect (() => {
        const products = () => {
            return new Promise((resolve, reject)=>{
                setTimeout(()=>{
                    resolve(productList)
                },3000)
            })
        }
        products().then((items)=>{
            const product = items.find(product => product.id ===productID)
            setProduct(product)
            setLoanding(false)
        })
    },[])


  return(
    <>
    {loanding ? <h2>Cargando..</h2> : 
        <ItemDetail 
        name = {product.name} 
        description = {product.description} 
        price = {product.price} 
        stock = {product.stock} 
        image = {product.image} />
    }
    </>

  )
}

export default ItemDetailContainer;


