import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import addComma from "../../utils/addComma";

const HoverContent = styled.div`
  display: none;

  h6 {
    opacity: 0.7;
    margin-top: 0.3rem;

    @media (max-width: ${({ theme }) => theme.media.tablet}) {
      display: none;
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      display: block;
    }
  }

  p {
    font-weight: 0.9rem;
    color: ${({ theme }) => theme.colors.primary};
    position: absolute;
    right: 0.5rem;
    bottom: 0.5rem;
  }
`;

const StyledArticle = styled.article`
  box-sizing: initial;
  position: relative;

  &:hover {
    ${HoverContent} {
      display: block;
      padding: 0.5rem;
      height: 40%;
      width: 100%;
      position: absolute;
      bottom: 1.6px;
      background-color: rgba(0, 0, 0, 0.5);
      color: white;
    }
  }
`;

const NewProductCard = ({ data }) => {
  return (
    <StyledArticle>
      <Link>
        <img src={data.image} alt="NewProductImage" width="100%" />

        <HoverContent>
          <h4>{data.product}</h4>
          <h6>Designed by {data.designer}</h6>
          <p>{addComma(data.price)}원</p>
        </HoverContent>
      </Link>
    </StyledArticle>
  );
};

export default NewProductCard;
