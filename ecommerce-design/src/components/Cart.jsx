import React, { useCallback, useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import "../css/cart.css";
import Avatar from "../assets/image-avatar.png";
import ImageProductThumb1 from "../assets/image-product-1-thumbnail.jpg";
import { IoTrashBin } from "react-icons/io5";

function Cart({
  productCount,
  sendProduct,
  setProductCount,
  setSendProduct,
  setShowCart,
  showCart,
}) {
  const price = productCount * 125.0;
  const deleteCart = () => {
    setProductCount(0);
    setSendProduct(false);
  };
  return (
    <div className="cart-area">
      <div>
        <MdOutlineShoppingCart
          className="shopping-cart-icon"
          onClick={() => setShowCart((prevShowCart) => !prevShowCart)}
        />
        <div
          className="shopping-cart"
          style={showCart ? {} : { display: "none" }}
        >
          <div className="cart-heading">
            <p id="cartHeading">Cart</p>
          </div>

          <hr style={{ border: "1px hsl(220, 14%, 75%) solid" }} />
          {sendProduct ? (
            <div
              className="cart-content"
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "1.5rem",
              }}
            >
              <div
                className="buy-product-info"
                style={{ display: "flex", justifyContent: "space-around" }}
              >
                <img
                  style={{ width: "40px", borderRadius: "0.25rem" }}
                  src={ImageProductThumb1}
                  alt=""
                />
                <div className="buy-product-price">
                  <p style={{ color: "hsl(219, 9%, 45%)", fontSize: "14px" }}>
                    Fall limited Edition Sneakers
                  </p>
                  <p
                    style={{
                      marginTop: "0.4rem",
                      fontSize: "14px",
                      color: "hsl(219, 9%, 45%)",
                    }}
                  >
                    $125.00 x {productCount}{" "}
                    <span
                      style={{
                        fontWeight: "700",
                        color: "hsl(220, 13%, 13%)",
                        marginLeft: "0.5rem",
                      }}
                    >
                      ${price.toFixed(2)}
                    </span>{" "}
                  </p>
                </div>
                <IoTrashBin
                  onClick={deleteCart}
                  style={{
                    color: "hsl(220, 14%, 75%)",
                    fontSize: "20px",
                    position: "relative",
                    top: "11px",
                    cursor: "pointer",
                  }}
                />
              </div>
              <button
                style={{
                  backgroundColor: "hsl(26, 100%, 55%)",
                  color: "white",
                  width: "100%",
                  border: "none",
                  borderRadius: "0.5rem",
                  padding: "0.8rem",
                  fontWeight: "500",
                  fontSize: "14px",
                  marginTop: "1.5rem",
                  cursor: "pointer",
                }}
              >
                Checkout
              </button>
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "140px",
                color: "hsl(219, 9%, 45%)",
                fontWeight: "600",
              }}
            >
              <p>Your cart is empty</p>
            </div>
          )}
        </div>
      </div>
      <img id="avatar" src={Avatar} alt="Avatar Photo" />
    </div>
  );
}

export default Cart;
