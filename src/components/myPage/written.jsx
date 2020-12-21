import React from "react";
import styled from "styled-components";
import NonItem from "../common/nonItem";

const myReviews = [];

const myQuestions = [];

const StyledSection = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  padding-top: 4rem;

  & > div {
    &:nth-child(2),
    &:nth-child(4) {
      margin: 1rem 0 4rem;
    }
  }
`;

const Title = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  & > p {
    &:first-child {
      font-size: 0.9rem;
      font-weight: 500;
    }

    &:last-child {
      font-size: 0.8rem;
      font-weight: 300;
    }
  }
`;

const Written = () => {
  return (
    <StyledSection>
      <Title>
        <p>작성한 리뷰</p>
        <p>더보기</p>
      </Title>
      {myReviews.length === 0 ? (
        <NonItem
          title="등록된 상품리뷰가 없습니다"
          description="이 상품의 첫 번째 리뷰를 작성해보세요"
        />
      ) : (
        <></>
      )}

      <Title>
        <p>작성한 문의</p>
        <p>더보기</p>
      </Title>
      {myQuestions.length === 0 ? (
        <NonItem
          title="등록된 상품문의가 없습니다"
          description="이 상품의 첫 번째 문의를 작성해보세요"
        />
      ) : (
        <></>
      )}
    </StyledSection>
  );
};

export default Written;
