import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledSection = styled.section`
  margin: 0 -${({ theme }) => theme.spacing.body};
  padding-top: 3.42rem;
  padding-left: 8%;
  height: 12.25rem;
  background: no-repeat right top url("/images/banner/collab_banner.png")
    ${({ theme }) => theme.colors.primary};
  background-size: 36rem 25.5rem;

  p {
    color: white;
    font-size: 0.8rem;
    font-weight: 500;
  }

  h2 {
    color: white;
    font-weight: 700;
    margin: 0.2rem 0 1.65rem;
  }
`;

const StyledLink = styled(Link)`
  color: white;
  font-size: 0.8rem;
  font-weight: 300;
  text-decoration: underline;

  &:hover {
    color: white;
    font-weight: bolder;
  }
`;

const Banner = () => {
  return (
    <StyledSection>
      <p>내가 그린 낙서가 디자인 작품으로</p>
      <h2>디자이너와 협업하기</h2>
      <StyledLink>디자이너 더보기</StyledLink>
    </StyledSection>
  );
};

export default Banner;
