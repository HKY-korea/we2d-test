import React from "react";
import styled from "styled-components";
import Grid from "../common/grid";

const StyledDiv = styled.div`
  margin-top: 6rem;
  padding-top: 4rem;
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.gray};

  & > p {
    font-size: 1.1rem;
    font-weight: 500;
  }
`;

const StyledArticle = styled.article`
  text-align: center;

  img {
    width: 100%;
  }

  p:first-of-type {
    font-size: 0.9rem;
    font-weight: 700;
    margin: 1rem 0 0.5rem;
  }

  p:last-child {
    font-size: 0.65rem;
    font-weight: 300;
    line-height: 0.9rem;
  }
`;

const SpecificationCard = ({ data }) => {
  return (
    <StyledArticle>
      <img src={data.image} alt="specification" />
      <p>{data.title}</p>
      <p>{data.description}</p>
    </StyledArticle>
  );
};

const Specification = ({ specification }) => {
  return (
    <StyledDiv>
      <p>{specification.title}</p>
      <Grid
        items={specification.data}
        colNum={4}
        ItemComponent={SpecificationCard}
        row_space="1rem"
        breakpoint="tablet"
      />
    </StyledDiv>
  );
};

export default Specification;
