import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../features/createSlice";

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleremove = (productId) => {
    dispatch(remove(productId));
  };

  return (
    <div>
      <div className="card-wrapper">
        {products.map((product) => (
          <div className="card">
            <div className="image">
              <img src={product.image} alt="" />
            </div>
            <h5>{product.title}</h5>
            <h4>${product.price}</h4>
            <button
              className="addtocart"
              onClick={() => handleremove(product.id)}
            >
              Remove{" "}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
