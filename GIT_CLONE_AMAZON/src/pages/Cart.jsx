import { useContext, useState } from "react";
// import "./Cart.css";
// import CartProduct from "./CartProduct";
import { CartContext } from "../App";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart: cartData, updateCart } = useContext(CartContext);
  return (
    <div className="cart flex p-3 bg-[#e9eded] center-all overflow-auto">
      <div className="products-list min-w-[642px] max-w-[1180px] w-fit flex flex-col justify-center p-4 bg-white">
        <div className="flex justify-between items-center">
          <h2>Shopping Cart</h2>
          <button onClick={() => updateCart([])} style={{ padding: "4px" }}>
            Empty Cart
          </button>
        </div>
        <hr />
        {cartData.map((product) => (
          <CartProduct data={product} />
        ))}
      </div>
      <div className="min-w-[300px] w-[300px] p-5 pb-6 bg-white flex flex-col gap-5">
        <div className="is-free-delivery flex gap-1">
          <div className="w-full items-center flex gap-1">
            <div className="h-4 flex-1 rounded-md bg-[#067D62]">
              {/*/TODO : make it dependent on cart subtotal /*/}
              $69
            </div>
            <div className="text-xs flex justify-start items-center gap-2">
              <input type="checkbox" className="bg-[#067D62] rounded-full" checked />
              <span className="w-full flex flex-1 flex-wrap">
                <strong>Your order is eligible for FREE Delivery</strong>
                Choose
                <Link to={#} className="text-[007185]">
                  FREE Delivery
                </Link> {" "}
                option at checkout.
              </span>
            </div>
          </div>
        </div>
        <div className="cart-total text-lg flex flex-wrap">
          <span className="w-full">
            Subtotal (8 items): <strong>45678909876</strong>
          </span>
          <div className="flex items-center gap-1 text-sm">
            <input type="checkbox" className="w-4 h-4" />
          </div>
        </div>
        <button className="rounded-full text-sm py-1 pb-1.5 px-1.5 bg-[#ffd814]">Proceed to Buy</button>
        <div className="flex flex-col py-3 px-[18px]">
          <div>
            EMI Available
            <img src="{DropDownIcon}" alt="drop-down-icon" className="w-4 h-4" onClick={()=> {
              
            }}/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;

// Cart Product Component

const CartProduct = ({ data }) => {
  const { product_name, img_link, discounted_price, quantity } = data;
  return (
    <div className="cart-product flex gap-3 p-4 border-y border-gray-400 max-w-[1140px]">
      <img src={img_link} className="aspect-square max-h-[100px]" />
      <div className="details">
        <div className="info">
          <strong>{product_name}</strong>
          <strong>{discounted_price}</strong>
        </div>
        <div className="controls">
          <select>
            <option>{quantity}</option>
          </select>
        </div>
      </div>
    </div>
  );
};