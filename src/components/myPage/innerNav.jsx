import React from "react";
import { DefaultNavLink } from "../../styles/linkStyles";
import styled from "styled-components";

const StyledNav = styled.nav`
  max-width: 1280px;
  width: 100%;
  margin: 4rem auto 0;
  display: flex;
`;

const NavLink = styled(DefaultNavLink)`
  display: block;
  width: 20rem;
  margin-right: 2rem;
  border-bottom: 0.25rem solid ${({ theme }) => theme.colors.gray};

  &:last-child {
    margin: 0;
  }

  & > p {
    font-size: 0.9rem;
    font-weight: 500;
    padding-bottom: 1rem;
  }

  &.active {
    border-bottom-color: ${({ theme }) => theme.colors.primary};

    & > p {
      font-weight: 700;
    }
  }
`;

const InnerNav = () => {
  return (
    <StyledNav>
      <NavLink to="/my-page/account">
        <p>계정</p>
      </NavLink>
      <NavLink to="/my-page/address">
        <p>주소</p>
      </NavLink>
      <NavLink to="/my-page/written">
        <p>작성한 리뷰/문의</p>
      </NavLink>
    </StyledNav>
  );
};

export default InnerNav;
