import React from "react";
import styled from "styled-components";
import Grid from "../common/grid";
import ProductCard from "../common/productCard";

const products = [
  {
    image: "https://picsum.photos/id/233/200/200",
    designer: "디자이너 이름",
    product: "상품 이름",
    price: 59800,
  },
  {
    image: "https://picsum.photos/id/234/200/200",
    designer: "디자이너 이름",
    product: "상품 이름",
    price: 59800,
  },
  {
    image: "https://picsum.photos/id/235/200/200",
    designer: "디자이너 이름",
    product: "상품 이름",
    price: 59800,
  },
  {
    image: "https://picsum.photos/id/236/200/200",
    designer: "디자이너 이름",
    product: "상품 이름",
    price: 59800,
  },
  {
    image: "https://picsum.photos/id/237/200/200",
    designer: "디자이너 이름",
    product: "상품 이름",
    price: 59800,
  },
  {
    image: "https://picsum.photos/id/238/200/200",
    designer: "디자이너 이름",
    product: "상품 이름",
    price: 59800,
  },
  {
    image: "https://picsum.photos/id/239/200/200",
    designer: "디자이너 이름",
    product: "상품 이름",
    price: 59800,
  },
  {
    image: "https://picsum.photos/id/240/200/200",
    designer: "디자이너 이름",
    product: "상품 이름",
    price: 59800,
  },
];

const StyledSection = styled.section`
  max-width: 1060px;
  margin: 0 auto;
`;

const SellingProducts = () => {
  return (
    <StyledSection>
      <Grid
        items={products}
        ItemComponent={ProductCard}
        colNum={4}
        breakpoint="tablet"
      />
    </StyledSection>
  );
};

export default SellingProducts;
