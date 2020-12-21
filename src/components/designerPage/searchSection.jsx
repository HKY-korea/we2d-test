import React from "react";
import styled from "styled-components";
import SearchBar from "./searchBar";

const StyledSection = styled.section`
  margin: 0 -${({ theme }) => theme.spacing.body};

  & > div {
    background-color: black;
    position: relative;
    display: flex;
    justify-content: center;
    overflow: hidden;

    img {
      width: 1920px;
      height: 709px;
      margin-top: -147px;
      opacity: 0.4;

      @media (max-width: ${({ theme }) => theme.media.laptop}) {
        width: 1440px;
        height: 531.75px;
        margin-top: -110.25px;
      }

      @media (max-width: ${({ theme }) => theme.media.mobile}) {
        width: 1024px;
        height: 378.14px;
        margin-top: -78.4px;
      }

      @media (max-width: ${({ theme }) => theme.media.mobile}) {
        width: 768px;
        height: 283.6px;
        margin-top: -58.8px;
      }
    }

    p,
    h1 {
      position: absolute;
    }

    p:first-of-type {
      font-size: 1.1.rem;
      font-weight: 400;
      top: 5rem;
      color: white;
    }

    p:last-of-type {
      font-size: 0.65rem;
      font-weight: 300;
      color: ${({ theme }) => theme.colors.gray};
      bottom: 2rem;
    }

    h1 {
      font-weight: 500;
      top: 6.65rem;
      color: white;
    }
  }
`;

const SearchSection = () => {
  return (
    <StyledSection>
      <div>
        <img src="/images/banner/designer_banner.png" alt="designerBanner" />
        <p>당신의 디자인은 누군가의 취향이다</p>
        <h1>위투디자이너를 찾아보세요</h1>
        <SearchBar />
        <p>We Design Together, 위투디</p>
      </div>
    </StyledSection>
  );
};

export default SearchSection;
