import React from "react";
import styled from "styled-components";
import { DefaultLink, DefaultNavLink } from "../../styles/linkStyles";

const StyledUl = styled.ul`
  display: flex;
`;

const StyledNavLink = styled(DefaultNavLink)`
  display: block;
  padding: 0 1rem;
  font-weight: 400;
  font-size: 0.9rem;

  p {
    padding: 1rem 0;
  }

  & > div {
    padding: 1rem 0;
  }

  &:hover {
    div {
      border-width: 0.15rem;
    }
  }

  &.active {
    p,
    & > div {
      border-bottom: 0.25rem solid;
      color: ${({ theme }) => theme.colors.primary};
      font-weight: 700;

      div {
        border-color: ${({ theme }) => theme.colors.primary};
        border-width: 0.15rem;
      }
    }
  }
`;

const CustomArrow = styled.div`
  display: inline-block;
  width: 0.5rem;
  height: 0.5rem;
  border-right: 0.1rem solid black;
  border-bottom: 0.1rem solid black;
  transform: rotate(45deg);
  margin: 0 0 0.15rem 0.5rem;
`;

const ProductList = styled.li`
  position: relative;
  display: inline-block;

  &:hover {
    ul {
      display: block;
    }
  }

  & > a:first-child {
    cursor: none;
    pointer-events: none;
  }
`;

const DropdownContent = styled.ul`
  display: none;
  position: absolute;
  top: 2.89rem;
  background-color: white;
  width: 10rem;
  padding: 0.6rem 0.8rem;
  z-index: 100;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};

  li {
    margin-top: 0.5rem;

    ${DefaultLink} {
      font-size: 0.9rem;
    }

    &:first-of-type {
      margin-top: 0;
    }
  }
`;

const NavList = () => {
  return (
    <StyledUl>
      <li>
        <StyledNavLink to="/main">
          <p>홈</p>
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/designers">
          <p>디자이너</p>
        </StyledNavLink>
      </li>
      <ProductList>
        <StyledNavLink to="/category">
          <div>
            <span>상품</span>
            <CustomArrow />
          </div>
        </StyledNavLink>
        <DropdownContent>
          <li>
            <DefaultLink to="/category/phoneCase">휴대폰케이스</DefaultLink>
          </li>
          <li>
            <DefaultLink to="/category/smartTok">스마트톡</DefaultLink>
          </li>
          <li>
            <DefaultLink to="/category/airpodsCase">에어팟케이스</DefaultLink>
          </li>
          <li>
            <DefaultLink to="/category/keyRing">키링</DefaultLink>
          </li>
          <li>
            <DefaultLink to="/category/phoneStrap">폰스트랩</DefaultLink>
          </li>
        </DropdownContent>
      </ProductList>
      <li>
        <StyledNavLink to="/판매">
          <p>판매하기</p>
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/협업">
          <p>협업하기</p>
        </StyledNavLink>
      </li>
    </StyledUl>
  );
};

export default NavList;
