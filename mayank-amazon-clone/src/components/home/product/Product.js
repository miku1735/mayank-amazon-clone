import React from "react";
import "./Product.css";
function Product({ title, image, price, rating }) {
  return (
    <div className="Product">
      <div className="Product__info">
        <p>{title}</p>
        <p className="Product__price">
          <small>
            <strong>$</strong>
          </small>
          <strong>{price}</strong>
        </p>
        <div className="Product__rating">
          {rating &&
            Array(rating)
              .fill("")
              .map(() => <p>⭐️</p>)}
        </div>
      </div>

      <img alt="" src={image}></img>
      <button className="product__button"> Add to Basket</button>
    </div>
  );
}

export default Product;
