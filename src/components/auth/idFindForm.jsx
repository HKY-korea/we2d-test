import React, { useState } from "react";
import styled from "styled-components";
import Joi from "joi-browser";
import { DefaultLink } from "../../styles/linkStyles";
import Input from "../common/input";
import Button from "../common/button";
import { validate, validateProperty } from "../../utils/validate";

const schema = {
  name: Joi.string().required(),
  phone: Joi.number().required(),
};

const StyledForm = styled.form`
  & > a {
    font-size: 0.65rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.darkGray};
    align-self: flex-end;
    margin-top: 0.5rem;
  }

  & > button {
    margin-top: 2rem;
  }
`;

const IdFindForm = ({ obj }) => {
  const [data, setData] = useState({
    name: "",
    phone: "",
  });
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

    setErrors(validate({ data, schema }) || {});
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

      <Input
        name="name"
        value={data.name}
        onChange={handleChange}
        placeholder={obj.placeholder.name}
        error={errors.name}
      />
      <Input
        name="phone"
        value={data.phone}
        onChange={handleChange}
        placeholder={obj.placeholder.phone}
        error={errors.phone}
      />
      <DefaultLink to="/auth/password">{obj.finding.password}</DefaultLink>

      <Button size="xLarge" onClick={doSubmit}>
        {obj.buttonTitle}
      </Button>
    </StyledForm>
  );
};

export default IdFindForm;
