import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from 'react-router-dom'



    const Item = ({ name , image , price , id , stock, category}) => {
     return (
         <>
         <div className="product-card">
            <Link to = {`/${category}/${id}`}>
            <img className="product-card__image" src={image} alt=""/>
            <h2>{name}</h2>
            <h3>${price}</h3>
            <ItemCount stock={stock} />
            </Link>
         </div>
         </>
     )

 }

 export default Item;