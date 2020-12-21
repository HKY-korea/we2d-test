import React from "react";
import styled from "styled-components";

const StyledArticle = styled.article`
  padding: 4rem 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};

  &:last-child {
    border: none;
  }

  & > p {
    font-size: 0.8rem;
    font-weight: 300;
    text-decoration: underline;
  }

  & > div > p {
    font-size: 0.8rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.darkGray};
    line-height: 1.2rem;

    &:first-child {
      font-size: 0.9rem;
      font-weight: 500;
      color: black;
      line-height: 1.35rem;
      margin-bottom: 1rem;
    }
  }
`;

const InfoItem = ({ title, content = [] }) => {
  return (
    <StyledArticle>
      <div>
        <p>{title}</p>
        {content.map((c) => (
          <p>{c}</p>
        ))}
      </div>
      <p>수정</p>
    </StyledArticle>
  );
};

export default InfoItem;
