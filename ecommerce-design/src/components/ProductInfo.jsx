import React, { useEffect, useRef, useState } from "react";
import "../css/productinfo.css";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaMinus, FaPlus } from "react-icons/fa";

function ProductInfo({ productCount, setProductCount, setSendProduct }) {
  const minusBtn = () => {
    const count = productCount;
    if (count > 0) {
      setProductCount(count - 1);
    }
  };
  const plusBtn = () => {
    const count = productCount;
    setProductCount(count + 1);
  };
  const addToCart = () => {
    setSendProduct(true);
  };

  return (
    <div className="productInfo">
      <h3>Sneaker Company</h3>
      <h1>Fall limited edition sneakers</h1>
      <p id="subText">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <div>
        <span id="price">$125.00</span>
        <span id="discount">50%</span>
      </div>
      <p id="mainPrice">$250.00</p>

      <div className="counter-div">
        <div>
          <button className="counter minus" onClick={minusBtn}>
            <FaMinus />
          </button>
          <input value={productCount} className="countNumber" />
          <button className="counter plus" onClick={plusBtn}>
            <FaPlus />
          </button>
        </div>
        <button id="addToCart" type="button" onClick={addToCart}>
          <MdOutlineShoppingCart id="shoppingCartLogo" />
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductInfo;
