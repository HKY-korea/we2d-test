import React from "react";
import styled from "styled-components";
import { IoMdSearch } from "react-icons/io";

const StyledDiv = styled.div`
  position: absolute;
  top: 11.65rem;

  input {
    background-color: white;
    width: 23rem;
    height: 3.5rem;
    border-top-left-radius: 2.5rem;
    border-bottom-left-radius: 2.5rem;
    padding-left: 2rem;
    font-size: 0.9rem;
    font-weight: 500;
  }

  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 9.2rem;
    height: 3.5rem;
    border-top-right-radius: 2.5rem;
    border-bottom-right-radius: 2.5rem;
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    font-size: 0.9rem;
    font-weight: 700;

    svg {
      font-size: 1.5rem;
      margin-left: 0.25rem;
    }
  }
`;

const SearchBar = () => {
  return (
    <StyledDiv>
      <input type="text" />
      <button>
        디자이너 찾기 <IoMdSearch />
      </button>
    </StyledDiv>
  );
};

export default SearchBar;
