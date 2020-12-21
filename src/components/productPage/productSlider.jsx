import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
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
  width: 100%;
  max-width: 1060px;
  overflow-x: hidden;
  margin: 0 auto;
  padding: 3rem 0 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};

  h3 {
    font-weight: 300;
    margin-bottom: 1rem;

    span {
      font-weight: 500;
    }
  }

  .slick-slide article {
    padding-right: 0.5rem;
  }
`;

const ProductSlider = () => {
  const settings = {
    infinite: true,
    arrow: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "ease",
  };

  return (
    <StyledSection>
      <h3>
        <span>휴대폰케이스</span> 실시간 인기 순위
      </h3>

      <Slider {...settings}>
        <ProductCard data={products[0]} />
        <ProductCard data={products[0]} />
        <ProductCard data={products[0]} />
        <ProductCard data={products[0]} />
        <ProductCard data={products[0]} />
        <ProductCard data={products[0]} />
        <ProductCard data={products[0]} />
      </Slider>
    </StyledSection>
  );
};

export default ProductSlider;
