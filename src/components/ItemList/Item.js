import React from "react";
import ItemCount from "../ItemCount/ItemCount";

 const Item = ({ name , image , price , id , stock}) => {
     return (
         <div className="product-card">
            <img className="product-card__image" src={image} alt=""/>
            <h2>{name}</h2>
            <h3>${price}</h3>
            <ItemCount stock={stock} />
         </div>
     )

 }

 export default Item;