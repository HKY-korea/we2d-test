import React from "react";
import styled from "styled-components";
import { DefaultLink } from "../styles/linkStyles";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";

const Logo = styled.img`
  width: 7rem;
`;

const SearchInput = styled.input.attrs({ type: "search" })`
  padding: 0 0.5rem;
  width: 15rem;
  height: 2rem;
  border-radius: 1.25rem;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  margin-left: 1.5rem;
`;

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1280px;
  margin: 0 auto;

  nav > ul {
    display: flex;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const TextList = styled.li`
  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    display: none;
  }
`;

const TextLink = styled(DefaultLink)`
  font-size: 0.75rem;
  font-weight: 400;
  margin: 0 0.25rem;
  display: block;
`;

const IconList = styled.li`
  display: none;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    display: block;
    margin-left: 1rem;
  }
`;

const IconLink = styled(DefaultLink)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.6rem;
`;

const Header = () => {
  return (
    <StyledHeader>
      <LogoContainer>
        <h1>
          <DefaultLink to="/main">
            <Logo src="/images/logo/logo_primary.png" alt="We2dLogo"></Logo>
          </DefaultLink>
        </h1>

        <SearchInput />
      </LogoContainer>

      <nav>
        <ul>
          <TextList>
            <TextLink to="/auth/login">로그인</TextLink>
          </TextList>
          <TextList>
            <TextLink to="/auth/register">회원가입</TextLink>
          </TextList>
          <TextList>
            <TextLink>주문조회</TextLink>
          </TextList>
          <TextList>
            <TextLink>고객센터</TextLink>
          </TextList>

          <IconList>
            <IconLink>
              <FiShoppingCart />
            </IconLink>
          </IconList>
          <IconList>
            <IconLink>
              <AiOutlineUser />
            </IconLink>
          </IconList>
        </ul>
      </nav>
    </StyledHeader>
  );
};

export default Header;
