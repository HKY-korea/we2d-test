import React from "react";
import styled from "styled-components";
import ViewMore from "../common/viewMore";
import Grid from "../common/grid";
import NewProductCard from "./newProductCard";

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
  max-width: 1280px;
  margin: 4rem auto;

  h2 {
    font-weight: 700;
    line-height: 2.25rem;

    span {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  & > div:last-child {
    margin: 1rem -0.25rem 0 0;
  }
`;

const TopTextContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  h2 {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.media.laptop}) {
    justify-content: space-between;

    h2 {
      display: block;
    }
  }
`;

const LeftTextContainer = styled.div`
  float: left;
  margin-right: 80px;

  p {
    line-height: 1.2rem;
    font-size: 0.8rem;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.darkGray};
    margin-top: 1.7rem;
  }

  @media (max-width: ${({ theme }) => theme.media.laptop}) {
    display: none;
  }
`;

const NewestSection = () => {
  return (
    <StyledSection>
      <TopTextContainer>
        <h2>
          다양한 <span>신상품</span>을<br></br>만나보세요
        </h2>
        <ViewMore />
      </TopTextContainer>
      <div>
        <LeftTextContainer>
          <h2>
            다양한<br></br>
            <span>신상품</span>을<br></br>만나보세요
          </h2>
          <p>
            위투디 디자이너들의<br></br>디자인 상품들
          </p>
        </LeftTextContainer>

        <Grid
          items={products}
          colNum={4}
          ItemComponent={NewProductCard}
          margin={0}
          col_space={"0.5rem"}
        />
      </div>
    </StyledSection>
  );
};

export default NewestSection;
