import React, { useState, useEffect } from "react";
import axios from "axios";
import "./HomeStyle.css";
const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts();
  }, []);
  const fetchProducts = async () => {
    await axios
      .get("https://fakestoreapi.com/products/")
      .then((res) => {
        console.log(res);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1>Featured Products</h1>
      <div className="item-container">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.image} alt="" />
            <h4>{product.title}</h4>
            <h4>Rs.{product.price}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
