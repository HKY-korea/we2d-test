import React from "react";
import styled from "styled-components";
import { FaPlus, FaMinus } from "react-icons/fa";

const StyledArticle = styled.article`
  height: 2rem;
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  height: 2rem;
  width: 2rem;
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-radius: 5px;

  svg {
    color: ${({ theme }) => theme.colors.darkGray};
  }
`;

const Count = styled.span`
  display: inline-block;
  width: 2.5rem;
  height: 2rem;
  line-height: 1.8rem;
  font-size: 0.8rem;
  text-align: center;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  margin: 0 0.5rem;
`;

const Counter = ({ count, setCount }) => {
  return (
    <StyledArticle>
      <Button
        onClick={() => {
          if (count > 1) setCount(count - 1);
        }}
      >
        <FaMinus />
      </Button>
      <Count>{count}</Count>
      <Button onClick={() => setCount(count + 1)}>
        <FaPlus />
      </Button>
    </StyledArticle>
  );
};

export default Counter;
