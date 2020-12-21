import React from "react";
import styled from "styled-components";
import { DefaultLink } from "../../styles/linkStyles";
import { HiOutlineArrowRight } from "react-icons/hi";

const StyledNav = styled.nav`
  max-width: 1280px;
  width: 100%;
  margin: 6rem auto 0;
  display: flex;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    flex-direction: column;
  }
`;

const Link = styled(DefaultLink)`
  width: 20rem;
  height: 5.5rem;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.darkGray};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
  margin-right: 2rem;

  &:last-child {
    margin: 0;
  }

  & > div {
    p:first-child {
      font-size: 0.9rem;
      font-weight: 400;
      line-height: 1.35rem;
    }

    p:last-child {
      font-size: 0.65rem;
      font-weight: 300;
      line-height: 0.95rem;
    }
  }

  & > svg {
    font-size: 1.3rem;
    color: ${({ theme }) => theme.colors.darkGray};
  }

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    margin: 0 0 1rem 0;
  }
`;

const Nav = () => {
  return (
    <StyledNav>
      <Link>
        <div>
          <p>주문내역</p>
          <p>진행중인 주문 1건</p>
        </div>
        <HiOutlineArrowRight />
      </Link>
      <Link>
        <div>
          <p>장바구니</p>
          <p>장바구니에 담은 상품 1건</p>
        </div>
        <HiOutlineArrowRight />
      </Link>
      <Link>
        <div>
          <p>디지이너와 함께</p>
          <p>진행중인 상품 1건</p>
        </div>
        <HiOutlineArrowRight />
      </Link>
    </StyledNav>
  );
};

export default Nav;
