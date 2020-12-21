import React from "react";
import styled from "styled-components";
import Filter from "./filter";
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
  margin: 2rem auto;
  height: 100%;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 1.5rem;

  h3 {
    font-weight: 500;
  }

  button {
    font-size: 0.65rem;
    font-weight: 300;
  }
`;

const content = {
  category: ["hardCase", "jellyCase"],
  tags: [
    "모던한",
    "심플한",
    "귀여운",
    "유니크",
    "레트로",
    "B급감성",
    "힙한",
    "감성적인",
    "신비로운",
    "시크한",
    "어두운",
    "인물",
    "동물",
    "풍경",
  ],
  model: ["apple", "samsung"],
};

const ProductList = () => {
  return (
    <StyledSection>
      <Top>
        <h3>휴대폰케이스</h3>
        <button>신상품순</button>
      </Top>
      <Filter content={content} />
      <Grid
        items={products}
        colNum={4}
        ItemComponent={ProductCard}
        margin="3rem"
        row_space="0.5rem"
        col_space="2rem"
      />
    </StyledSection>
  );
};

export default ProductList;
