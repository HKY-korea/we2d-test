import React from "react";
import styled from "styled-components";
import Grid from "../common/grid";

const portfolio = [
  "https://picsum.photos/400/200",
  "https://picsum.photos/400/800",
  "https://picsum.photos/500/300",
  "https://picsum.photos/400/400",
  "https://picsum.photos/400/400",
  "https://picsum.photos/400/400",
  "https://picsum.photos/400/400",
  "https://picsum.photos/400/400",
  "https://picsum.photos/400/400",
];

const StyledSection = styled.section`
  max-width: 1060px;
  margin: 0 auto;

  & > p {
    &:first-child {
      font-size: 0.9rem;
      font-weight: 500;
    }

    &:last-of-type {
      font-size: 0.8rem;
      font-weight: 400;
      color: ${({ theme }) => theme.colors.darkGray};
      line-height: 1.4rem;
      padding: 2rem 0 1rem;
    }
  }

  & > div {
    display: flex;

    & > div {
      margin-right: 0.6rem;

      &:last-child {
        margin-right: 0;
      }
    }
  }
`;

const TagBox = styled.div`
  width: 4rem;
  height: 1.8rem;
  text-align: center;
  border: 1px solid;
  border-radius: 1rem;
  font-size: 0.65rem;
  font-weight: 400;
  line-height: 1.8rem;
  color: ${({ theme }) => theme.colors.darkGray};
`;

const PortfolioContainer = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 343.663px;
  /* height: 343.663px; */
  height: 30vh;
  width: 100%;
  overflow: hidden;

  img {
    /* height: 100%; */
    width: 100%;
  }
`;

const Portfolio = ({ data }) => {
  return (
    <PortfolioContainer>
      <img src={data} alt="portfolio" />
    </PortfolioContainer>
  );
};

const Introduction = () => {
  return (
    <StyledSection>
      <p>소개</p>
      <p>
        디자이너 소개 200자 정도 디자이너 소개 200자 정도 디자이너 소개 200자
        정도 디자이너 소개 200자 정도 디자이너 소개 200자 정도 디자이너 소개
        200자 정도 디자이너 소개 200자 정도 디자이너 소개 200자 정도디자이너
        소개 200자 정도 디자이너 소개 200자 정도 디자이너 소개 200자 정도
        디자이너 소개 200자 정도디자이너 소개 200자 정도 디자이너 소개 200자
        정도 디자이너 소개 200자 정도 디자이너 소개 200자 정도
      </p>

      <div>
        <TagBox>#시크한</TagBox>
        <TagBox>#시크한</TagBox>
        <TagBox>#시크한</TagBox>
        <TagBox>#시크한</TagBox>
      </div>

      <Grid
        items={portfolio}
        ItemComponent={Portfolio}
        colNum={3}
        margin="3rem"
        breakpoint="tablet"
      />
    </StyledSection>
  );
};

export default Introduction;
