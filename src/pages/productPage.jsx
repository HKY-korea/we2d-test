import React from "react";
import { ProductSlider } from "../components/productPage";
import { ProductList } from "../components/productPage";

const ProductPage = () => {
  return (
    <React.Fragment>
      <ProductSlider />
      <ProductList />
    </React.Fragment>
  );
};

export default ProductPage;
