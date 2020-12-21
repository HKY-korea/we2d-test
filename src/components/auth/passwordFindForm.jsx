import React, { useState } from "react";
import styled from "styled-components";
import Joi from "joi-browser";
import Input from "../common/input";
import Button from "../common/button";
import { validate, validateProperty } from "../../utils/validate";

const schema = {
  email: Joi.string().email().required(),
};

const StyledForm = styled.form`
  & > button {
    margin-top: 1rem;
  }

  & > p:last-of-type {
    font-size: 0.8rem;
    font-weight: 500;
    line-height: 1.1rem;
    margin-bottom: 2rem;
    color: ${({ theme }) => theme.colors.darkGray};
  }
`;

const PasswordFindForm = ({ obj }) => {
  const [data, setData] = useState({ email: "" });
  const [errors, setErrors] = useState({});

  const doSubmit = async () => {
    try {
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        errors.email = ex.response.data;
        setErrors({ ...errors });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate({ data, schema }));
    if (errors) return;

    doSubmit();
  };

  const handleChange = ({ currentTarget: input }) => {
    const errorMessage = validateProperty(input.name, input.value, schema);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];
    setErrors({ ...errors });

    data[input.name] = input.value;
    setData({ ...data });
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <p>{obj.title}</p>

      <p>{obj.description}</p>

      <Input
        name="email"
        value={data.email}
        onChange={handleChange}
        placeholder={obj.placeholder.email}
        error={errors.email}
      />

      <Button size="xLarge" onClick={doSubmit}>
        {obj.buttonTitle}
      </Button>
    </StyledForm>
  );
};

export default PasswordFindForm;
