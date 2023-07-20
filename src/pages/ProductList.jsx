import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import CardTotal from "../components/CardTotal";
import axios from "axios";

const ProductList = () => {
  // const url =process.env.REACT_APP_API_URL;
  const url = "https://64b8395f21b9aa6eb079b184.mockapi.io/products";
  console.log(url);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorState, setErrorState] = useState(false);


  const getProducts = async () => {
    setLoading(false);
    try {
      const { data } = await axios("");
      setProducts(data);
    
      setErrorState(false)
    } catch (error) {

      console.log(error)
      setErrorState(true)
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container mt-3">
      <div className={"bg-light d-sm-block d-md-flex"}>
       {loading ? <p className="text-center text-danger w-100">Loading....</p>
        : products.length > 0 ?
        <>
          <article id="product-panel" className="col-md-5">
            <ProductCard />
          </article>
          <article className="col-md-5 m-3">
            <CardTotal />
          </article>
        </>
         :
         <p className="text-center text-danger w-100">No products data...</p>}

        {errorState && ( <p className="text-center text-danger w-100">No products data...</p>)}
      </div>
    </div>
  );
};

export default ProductList;
