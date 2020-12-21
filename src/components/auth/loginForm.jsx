import React, { useState } from "react";
import Joi from "joi-browser";
import { DefaultLink } from "../../styles/linkStyles";
import styled from "styled-components";
import Input from "../common/input";
import Button from "../common/button";
import { validate, validateProperty } from "../../utils/validate";

const schema = {
  email: Joi.string().email().required(),
  password: Joi.string().required(),
};

const StyledForm = styled.form`
  & > button {
    align-self: center;
    margin-top: 1rem;
  }

  & > p:nth-of-type(2) {
    font-size: 0.9rem;
    font-weight: 500;
    align-self: center;
    margin: 2rem 0 1rem;
  }
`;

const Finding = styled.div`
  align-self: flex-end;

  & > span,
  & > a {
    font-size: 0.65rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.darkGray};
  }
`;

const Login = ({ obj }) => {
  const [data, setData] = useState({ email: "", password: "" });
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
        name="email"
        value={data.email}
        onChange={handleChange}
        placeholder={obj.placeholder.email}
        error={errors.email}
      />

      <Input
        name="password"
        value={data.password}
        onChange={handleChange}
        placeholder={obj.placeholder.password}
        error={errors.password}
        type="password"
      />

      <Button size="xLarge" font_weight={700} onClick={doSubmit}>
        {obj.buttonTitle.login}
      </Button>

      <Finding>
        <DefaultLink to="/auth/id">{obj.finding.id}</DefaultLink>
        <span> / </span>
        <DefaultLink to="/auth/password">{obj.finding.password}</DefaultLink>
      </Finding>

      <p>{obj.registerIntro}</p>
      <Button
        as={DefaultLink}
        outline
        size="xLarge"
        color="primary"
        font_color="primary"
        font_weight={700}
      >
        {obj.buttonTitle.register}
      </Button>
    </StyledForm>
  );
};

export default Login;
