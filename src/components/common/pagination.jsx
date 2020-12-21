import React from "react";
import styled, { css } from "styled-components";
import _ from "lodash";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 1.5rem;

  & > div {
    display: flex;
    width: ${({ pages_count }) => pages_count * 50 - 10};
    justify-content: space-between;
  }
`;

const StyledButton = styled.button`
  width: 2rem;
  height: 2rem;
  font-size: 0.8rem;
  font-weight: 400;
  border-radius: 0.25rem;
  color: ${({ theme }) => theme.colors.darkGray};
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.gray};

  ${({ active }) =>
    active &&
    css`
      color: white;
      background-color: ${({ theme }) => theme.colors.primary};
      border: none;
    `}

  & ~ & {
    margin-left: 0.5rem;
  }
`;

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  const pages = _.range(1, pagesCount + 1);

  return (
    <StyledDiv pages_count={pagesCount}>
      <div>
        {pages.map((page, i) => (
          <StyledButton
            key={i}
            active={page === currentPage}
            onClick={() => onPageChange(page)}
          >
            {page}
          </StyledButton>
        ))}
      </div>
    </StyledDiv>
  );
};

export default Pagination;
