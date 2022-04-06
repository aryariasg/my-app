import React, {useEffect, useState} from "react";
import Item from "../ItemList/Item"
import { productList } from "../../Data/Data";
import { useParams } from 'react-router-dom'


const ItemList = () => {
    const { category } =useParams()
    const [ products, setProducts ] = useState ([]);
    const [loanding, setLoanding] = useState(true)

    useEffect(() => {
      const products = () => {
          return new Promise((resolve, reject)=>{
              setTimeout(()=>{
                  resolve(productList)
              },2000)
          })
      }
      products().then((article)=>{
          if(category != null){
              const productsFilter=article.filter((product)=>product.category===category)
              setProducts(productsFilter)
              setLoanding(false)
          } else {
              setProducts(article)
              setLoanding(false)
          }
      })
  },[category])

  return (
    <>
    <div className="product-list-container">
      
        {loanding ? <h2>Cargando...</h2> : 
              products.map((product) => {
                return (
                    <Item
                      key={product.id}
                      name={product.name}
                      image={product.image}
                      price={product.price}
                      stock={product.stock}
                      id={product.id}
                    />
                );
              })
        }
    </div>

    </>
   )
  }

export default ItemList;