import React from "react";
import styled from "styled-components";

const CustomInput = styled.input`
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.gray};
  font-size: 0.9rem;
  font-weight: 400;
  padding-bottom: 0.6rem;
  width: 100%;

  &:focus {
    border-bottom-color: ${({ theme }) => theme.colors.primary};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.darkGray};
  }

  & ~ & {
    margin-top: 1rem;
  }
`;

const Warning = styled.span`
  font-size: 0.5rem;
  color: ${({ theme }) => theme.colors.warning};
  margin-top: 0.2rem;
`;

const Input = ({ name, value, error, onChange, type, placeholder }) => {
  return (
    <React.Fragment>
      <CustomInput
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        type={type ? type : "text"}
        placeholder={placeholder}
      />
      {error && <Warning>{error}</Warning>}
    </React.Fragment>
  );
};

export default Input;
