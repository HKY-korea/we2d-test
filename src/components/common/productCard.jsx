import React from "react";
import styled from "styled-components";
import { DefaultLink } from "../../styles/linkStyles";
import StarIcons from "./starIcons";
import addComma from "../../utils/addComma";

const StyledArticle = styled.article`
  width: 100%;

  h5 {
    font-weight: 500;
    margin-top: 1rem;
  }

  h4 {
    font-weight: 400;
    margin-bottom: 0.5rem;
    line-height: 1.2rem;
  }

  p {
    font-size: 0.9rem;
    font-weight: 500;
    margin-bottom: 0.2rem;

    span {
      font-size: 0.65rem;
      font-weight: 400;
    }
  }
`;

const ProductCard = ({ data }) => {
  return (
    <StyledArticle>
      <DefaultLink to={`/products/${data.product}`}>
        <img src={data.image} alt="ProductImage" width="100%" />
        <h5>{data.designer}</h5>
        <h4>{data.product}</h4>

        <p>
          {addComma(data.price)}
          <span>원</span>
        </p>

        <StarIcons icon_size="0.6rem" />
      </DefaultLink>
    </StyledArticle>
  );
};

export default ProductCard;
