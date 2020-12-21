import React from "react";
import styled from "styled-components";
import { DefaultLink } from "../../styles/linkStyles";
import Button from "../common/button";

const Info = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 6rem auto 0;

  & > p:first-child {
    font-size: 1.6rem;
    font-weight: 400;

    b {
      font-weight: 700;

      &:last-child {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }

  & > div {
    display: flex;
    align-items: center;
    margin-top: 1rem;

    & > a {
      &:first-child,
      &:nth-child(2) {
        font-size: 0.9rem;
        font-weight: 400;
        margin-right: 2rem;
      }
    }
  }
`;

const InfoSection = () => {
  return (
    <Info>
      <p>
        <b>규영</b>님은 <b>[일반회원]</b> 입니다
      </p>

      <div>
        <DefaultLink>쿠폰: 0장</DefaultLink>
        <DefaultLink>마일리지: 0장</DefaultLink>
        <Button
          as={DefaultLink}
          size="xSmall"
          outline
          color="gray"
          font_color="darkGray"
        >
          디자이너 등록
        </Button>
      </div>
    </Info>
  );
};

export default InfoSection;
