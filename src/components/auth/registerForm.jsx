import React, { useState } from "react";
import Joi from "joi-browser";
import styled, { css } from "styled-components";
import Input from "../common/input";
import Checkbox from "../common/checkbox";
import Button from "../common/button";
import { validate, validateProperty } from "../../utils/validate";

const schema = {
  email: Joi.string().email().required(),
  name: Joi.string().required(),
  password: Joi.string().required(),
  phone: Joi.number().required(),
};

const StyledForm = styled.form``;

const Check = styled.div`
  display: flex;
  align-items: center;
  margin: 0.75rem 0;

  & > p {
    font-size: 0.65rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.darkGray};
    margin-left: 0.25rem;
  }
`;

const Agreement = styled.div`
  padding: 2.25rem 0 2rem;

  & > div:first-child {
    display: flex;
    align-items: baseline;
    font-weight: 500;

    & > p:first-child {
      font-size: 1.1rem;
      margin-right: 0.75rem;
    }

    & > p:last-of-type {
      font-size: 0.8rem;
      margin-left: 0.25rem;
    }
  }

  & > div:nth-of-type(2),
  & > div:nth-of-type(3),
  & > div:nth-of-type(4) {
    display: flex;
    align-items: baseline;
    margin: 1rem 0 0.5rem;
    font-weight: 400;

    & > p:first-of-type {
      font-size: 0.8rem;
      margin-left: 0.5rem;

      span {
        color: ${({ theme }) => theme.colors.primary};
      }
    }

    & > p:last-of-type {
      font-size: 0.65rem;
      margin-left: 0.5rem;
      color: ${({ theme }) => theme.colors.darkGray};
      text-decoration: underline;
    }
  }

  & > textarea {
    width: 100%;
    height: 6rem;
    font-size: 0.65rem;
    font-weight: 300;
    padding: 1rem;
    line-height: 1rem;
  }
`;

const Test = styled.div`
  padding: 2rem 0;
  height: 3rem;

  ${({ checked }) =>
    checked
      ? css`
          background-color: ${({ theme }) => theme.colors.primary};
          color: white;
        `
      : css`
          background-color: ${({ theme }) => theme.colors.darkGray};
          color: ${({ theme }) => theme.colors.lightGray};
        `}
`;

const RegisterForm = ({ obj }) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    agreement: {
      email: false,
      message: false,
    },
  });
  const [confirm, setConfirm] = useState({
    password: "",
    isConfirm: false,
  });
  const [errors, setErrors] = useState({});
  const [agreement, setAgreement] = useState({
    terms: false,
    privacy: false,
    age: false,
  });
  const [emailCheck] = useState(true);

  const doSubmit = async () => {
    try {
      if (!emailCheck) return alert("이메일 인증을 해야합니다");
      else if (!confirm.isConfirm) return alert("비밀번호가 일치하지 않습니다");
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        errors.name = ex.response.data;
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
    let errorMessage = null;
    if (input.name === "confirm") {
      if (data.password !== input.value) {
        errorMessage = "비밀번호가 일치하지 않습니다";
        confirm.isConfirm = false;
      } else confirm.isConfirm = true;

      confirm.password = input.value;
      setConfirm({ ...confirm });
    } else {
      errorMessage = validateProperty(input.name, input.value, schema);
      data[input.name] = input.value;
      setData({ ...data });
    }

    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];
    setErrors({ ...errors });
  };

  const handleFullAgree = () => {
    const isFull = agreement.terms && agreement.privacy && agreement.age;

    setAgreement({ terms: !isFull, privacy: !isFull, age: !isFull });
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
        name="email"
        value={data.email}
        onChange={handleChange}
        placeholder={obj.placeholder.email}
        error={errors.email}
      />
      <Check>
        <Checkbox
          id="emailCheck"
          size="0.9rem"
          onClick={() => (data.agreement.email = !data.agreement.email)}
        />
        <p>{obj.agreement.email}</p>
      </Check>
      <Test
        checked={data.agreement.email}
        onClick={() => (data.agreement.email = !data.agreement.email)}
      >
        aaaa{" "}
      </Test>
      <Input
        name="password"
        type="password"
        value={data.password}
        onChange={handleChange}
        placeholder={obj.placeholder.password}
        error={errors.password}
      />
      <Input
        name="confirm"
        type="password"
        value={confirm.password}
        onChange={handleChange}
        placeholder={obj.placeholder.passwordConfirm}
        error={errors.confirm}
      />
      <Input
        name="phone"
        value={data.phone}
        onChange={handleChange}
        placeholder={obj.placeholder.phone}
        error={errors.phone}
      />
      <Check>
        <Checkbox
          id="messageCheck"
          size="0.9rem"
          onClick={() => (data.agreement.message = !data.agreement.message)}
        />
        <p>{obj.agreement.message}</p>
      </Check>

      <Agreement>
        <div>
          <p>{obj.agreement.title}</p>
          <Checkbox
            id="fullAgree"
            size="0.9rem"
            checked={agreement.age && agreement.terms && agreement.privacy}
            onChange={() => handleFullAgree()}
          />
          <p>{obj.agreement.fullAgree}</p>
        </div>

        <div>
          <Checkbox
            id="ageAree"
            size="0.9rem"
            checked={agreement.age}
            onChange={() => setAgreement({ ...agreement, age: !agreement.age })}
          />
          <p>
            {obj.agreement.ageTitle} <span>{obj.agreement.necessaryText}</span>
          </p>
          <p></p>
        </div>

        <div>
          <Checkbox
            id="termsAgree"
            size="0.9rem"
            checked={agreement.terms}
            onChange={() =>
              setAgreement({ ...agreement, terms: !agreement.terms })
            }
          />
          <p>
            {obj.agreement.termsTitle}{" "}
            <span>{obj.agreement.necessaryText}</span>
          </p>
          <p>{obj.agreement.viewAllText}</p>
        </div>

        <textarea id="termsContent" readOnly value={obj.agreement.terms} />

        <div>
          <Checkbox
            id="privacyAgree"
            size="0.9rem"
            checked={agreement.privacy}
            onChange={() =>
              setAgreement({ ...agreement, privacy: !agreement.privacy })
            }
          />
          <p>
            {obj.agreement.privacyTitle}{" "}
            <span>{obj.agreement.necessaryText}</span>
          </p>
          <p>{obj.agreement.viewAllText}</p>
        </div>

        <textarea id="privacyContent" readOnly value={obj.agreement.privacy} />
      </Agreement>

      {agreement.terms && agreement.age && agreement.privacy ? (
        <Button size="xLarge" onClick={doSubmit}>
          {obj.buttonTitle.register}
        </Button>
      ) : (
        <Button size="xLarge" color="darkGray" font_color="gray" disabled>
          {obj.buttonTitle.register}
        </Button>
      )}
    </StyledForm>
  );
};

export default RegisterForm;
