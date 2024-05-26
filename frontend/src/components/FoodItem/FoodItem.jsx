import React from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets.js";

export default function FoodItem({ id, name, price, description, image }) {

    //  const [itemCount, setItemCount] = s
  return ( 
    <div className="food-item">
      <div className="food-item-imahge-container">
        <img src={image} className="food-item-image" alt="" />
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">
          {description}
        </p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
}
