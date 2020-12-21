import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  padding: 6rem 0;
  text-align: center;
  border-top: 1px solid ${({ theme }) => theme.colors.gray};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};

  & > p:first-child {
    font-size: 1.1rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  & > p:last-child {
    font-size: 0.8rem;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.darkGray};
  }
`;

const NonItem = ({ title, description }) => {
  return (
    <StyledDiv>
      <p>{title}</p>
      <p>{description}</p>
    </StyledDiv>
  );
};

export default NonItem;
