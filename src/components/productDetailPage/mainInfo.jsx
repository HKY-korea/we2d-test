import React, { useState } from "react";
import styled from "styled-components";
import { DefaultLink } from "../../styles/linkStyles";
import { FaHeart } from "react-icons/fa";
import StarIcons from "../common/starIcons";
import ExternalLink from "../common/externalLink";
import Button from "../common/button";
import Counter from "./counter";
import addComma from "../../utils/addComma";

const InfoContainer = styled.div`
  width: 48.438%;
  margin-left: 2rem;

  @media (max-width: ${({ theme }) => theme.media.laptop}) {
    width: 100%;
    margin: 2rem 0 0;
    padding: 0 ${({ theme }) => theme.spacing.body};
  }
`;

const ProductInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  padding-bottom: 0.5rem;
`;

const Info = styled.div`
  ${DefaultLink} {
    color: ${({ theme }) => theme.colors.darkGray};
    font-size: 0.75rem;
    font-weight: 300;
    line-height: 0.95rem;

    &:hover {
      font-weight: 400;
    }
  }

  h2 {
    margin: 0.2rem 0 0.5rem;
    font-weight: 500;
    word-wrap: break-word;
    width: 250px;
    line-height: 1.65rem;

    @media (max-width: ${({ theme }) => theme.media.laptop}) {
      width: 500px;
    }

    @media (max-width: ${({ theme }) => theme.media.tablet}) {
      width: 250px;
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      width: 200px;
    }
  }

  div {
    display: flex;

    span {
      font-size: 0.65rem;
      margin-left: 0.1rem;
    }
  }
`;

const LinkContainer = styled.div`
  align-self: flex-end;

  a {
    margin: 0 0.25rem;
  }

  a:last-child {
    margin-right: 0;
  }
`;

const PurchaseInfo = styled.div`
  padding: 2.125rem 0 2.175rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};

  div {
    margin-bottom: 2rem;

    p {
      width: 7.3rem;
      font-size: 0.9rem;
      display: inline-block;
    }

    p:first-child {
      font-weight: 400;
      color: ${({ theme }) => theme.colors.darkGray};
    }

    p:last-child {
      font-weight: 500;
    }
  }

  div:first-child {
    p:last-child {
      font-weight: 700;

      span {
        font-weight: 500;
      }
    }
  }

  div:last-of-type {
    display: flex;
    align-items: center;
    margin-bottom: 0;
  }

  select {
    width: 100%;
    height: 2.75rem;
    padding-left: 1rem;
    font-size: 0.9rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.darkGray};
    border-color: ${({ theme }) => theme.colors.gray};
    appearance: none;
    background: url("/images/selectArrow.png") no-repeat right 1rem center;
    background-size: 3.5%;
  }

  select:first-of-type {
    margin-top: 4.5rem;
  }

  select ~ select {
    margin-top: 0.5rem;
  }

  @media (max-width: ${({ theme }) => theme.media.laptop}) {
    display: none;
  }
`;

const ButtonGroup = styled.div`
  padding-top: 1rem;
  display: flex;
  justify-content: space-between;

  button {
    margin-right: 0.5rem;
  }

  button:last-child {
    margin-right: 0;

    svg {
      font-size: 1rem;
      margin-bottom: 0.15rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.laptop}) {
    display: none;
  }
`;

const MobilePrice = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.media.laptop}) {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin-top: 0.5rem;

    p:first-child {
      font-size: 1.1rem;
      font-weight: 500;
    }

    p:last-child {
      font-size: 1.6rem;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const MainInfo = ({ obj, product }) => {
  const [count, setCount] = useState(1);

  return (
    <InfoContainer>
      <ProductInfo>
        <Info>
          <DefaultLink>
            {obj.frontOfDesigner} {product.designerName}
          </DefaultLink>
          <h2>{product.name}aaaaaaaaaaaaaaaaa</h2>
          <div>
            <StarIcons icon_size="0.75rem" />
            <span>(0)</span>
          </div>
        </Info>
        <LinkContainer>
          <ExternalLink sns="facebook" href="/" size="2rem" icon_size="1rem" />
          <ExternalLink sns="instagram" href="/" size="2rem" icon_size="1rem" />
          <ExternalLink sns="twitter" href="/" size="2rem" icon_size="1rem" />
          <ExternalLink sns="youtube" href="/" size="2rem" icon_size="1rem" />
        </LinkContainer>
      </ProductInfo>

      <MobilePrice>
        <p>{obj.purchaseInfo[0]}</p>
        <p>{addComma(product.price)}원</p>
      </MobilePrice>

      <PurchaseInfo>
        <div>
          <p>{obj.purchaseInfo[0]}</p>
          <p>
            {addComma(product.price)}
            <span>원</span>
          </p>
        </div>
        <div>
          <p>{obj.purchaseInfo[1]}</p>
          <p>{product.price * 0.02}pt</p>
        </div>
        <div>
          <p>{obj.purchaseInfo[2]}</p>
          <p>2500원</p>
        </div>
        <div>
          <p>{obj.purchaseInfo[3]}</p>
          <Counter count={count} setCount={setCount} />
        </div>

        <select
          name={obj.defaultSelection.color}
          defaultValue={obj.defaultSelection.color}
        >
          <option value={obj.defaultSelection.color}>
            {obj.defaultSelection.color}
          </option>
          <option value="색상 1">색상1</option>
          <option value="색상 2">색상2</option>
        </select>

        <select
          name={obj.defaultSelection.kinds}
          defaultValue={obj.defaultSelection.kinds}
        >
          <option value={obj.defaultSelection.kinds}>
            {obj.defaultSelection.kinds}
          </option>
          <option value="종류 1">종류1</option>
          <option value="종류 2">종류2</option>
        </select>

        <select
          name={obj.defaultSelection.model}
          defaultValue={obj.defaultSelection.model}
        >
          <option value={obj.defaultSelection.model}>
            {obj.defaultSelection.model}
          </option>
          <option value="기종 1">기종1</option>
          <option value="기종 2">기종2</option>
        </select>
      </PurchaseInfo>
      <ButtonGroup>
        <Button size="large">{obj.buttonTitle[0]}</Button>
        <Button outline size="large" font_color="primary">
          {obj.buttonTitle[1]}
        </Button>
        <Button outline size="large" color="darkGray" font_color="darkGray">
          <FaHeart style={{ marginTop: 5, marginRight: 5 }} /> 123
        </Button>
      </ButtonGroup>
    </InfoContainer>
  );
};

export default MainInfo;
