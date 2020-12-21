import React from "react";
import styled from "styled-components";
import { DefaultLink } from "../../styles/linkStyles";
import { FaHeart } from "react-icons/fa";

const StyledArticle = styled.article`
  & > a > div:first-child {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 420px;
    width: 100%;
    height: 7.7545rem;
    overflow: hidden;

    img {
      /* width: 420px; */
      width: 100%;
      /* height: inherit; */
    }
  }
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};

  & > img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 1.25rem;
    margin-right: 1rem;
  }

  & > div {
    & > p:first-child {
      font-size: 0.65rem;
      font-weight: 300;
      line-height: 0.95rem;
    }

    & > p:last-child {
      font-size: 0.9rem;
      font-weight: 500;
      line-height: 1.35rem;
    }
  }
`;

const CountInfo = styled.div`
  display: flex;
  align-items: baseline;
  padding-top: 0.5rem;

  & > div:first-child {
    svg {
      font-size: 0.8rem;
      color: ${({ theme }) => theme.colors.primary};
      margin-left: 0.5rem;
    }

    span {
      font-size: 0.8rem;
      font-weight: 400;
      padding-left: 0.3rem;
    }
  }

  & > p {
    font-size: 0.65rem;
    font-weight: 400;

    &:first-of-type {
      padding: 0 1rem;
    }
  }
`;

const DesignerCard = ({ data }) => {
  return (
    <StyledArticle>
      <DefaultLink to={`/shop/${data.name}`}>
        <div>
          <img src={data.image} alt="designerBanner" />
        </div>

        <Info>
          <img src={data.profileImage} alt="designerProfile" />

          <div>
            <p>
              #{data.tags[0]} #{data.tags[1]}
            </p>
            <p>{data.name}</p>
          </div>
        </Info>

        <CountInfo>
          <div>
            <FaHeart />
            <span>{data.follower.length}</span>
          </div>

          <p>상품리뷰 {data.reviewCount}개</p>
          <p>판매제품 {data.sellingCount}개</p>
        </CountInfo>
      </DefaultLink>
    </StyledArticle>
  );
};

export default DesignerCard;
