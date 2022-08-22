import React, { useState, useEffect } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../features/createSlice";
import { FetchProduct, Statuses } from "../features/ProductSlice";


const Home = () => {

  const dispatch = useDispatch();
  const { data: product, status } = useSelector((state) => {
    return state.product
  })


  useEffect(() => {

    dispatch(FetchProduct())
    // const fetchProduct = async () => {
    //   const response = await fetch("https://fakestoreapi.com/products");
    //   const data = await response.json();
    //   console.log(data);
    //   setproduct(data);
    // };
    // fetchProduct();
  }, []);

  const handleadd = (product) => {
    dispatch(add(product));
  };

  if (status === Statuses.LOADING) {
    return <h1>Loading</h1>
  }

  return (
    <div className="product">
      <h2>Products</h2>
      <div className="card-wrapper">
        {product.map((products) => (
          <div className="card">
            <div className="image">
              <img src={products.image} alt="" />
            </div>
            <h5>{products.title.slice(0, 40)}..</h5>
            <h4>${products.price}</h4>
            <button className="addtocart" onClick={() => handleadd(products)}>
              Add to Cart <FiShoppingCart />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
