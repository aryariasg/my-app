import React from "react";
import ItemCount from "../ItemCount/ItemCount";

 const ItemDetail = ({ name , image , description , price , id , stock}) => {
     return (
         <div className="item-list-container">
            <img className="product-card__image" src={image} alt=""/>
            <h2>{name}</h2>
            <p>{description}</p>
            <h3>${price}</h3>
            <p>{id}</p>
            <ItemCount stock={stock} />       
         </div>
     )

 }

 export default ItemDetail