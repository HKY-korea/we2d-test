import React from "react";
import styled from "styled-components";
import ViewMore from "../common/viewMore";
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
  margin: 4rem auto;
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;

  div > h3 {
    display: inline;
    font-weight: 700;
  }

  div > p {
    display: inline;
    font-size: 0.65rem;
    font-weight: 300;
    margin-left: 0.8rem;
  }
`;

const PopularSection = () => {
  return (
    <StyledSection>
      <TextContainer>
        <div>
          <h3>오늘의 인기상품</h3>
          <p>오늘 하루 가장 인기</p>
        </div>

        <ViewMore />
      </TextContainer>

      <Grid items={products} colNum={4} ItemComponent={ProductCard} />
    </StyledSection>
  );
};

export default PopularSection;
