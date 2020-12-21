import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../common/button";

const StyledSection = styled.section`
  margin: 0 -${({ theme }) => theme.spacing.body};
  height: 9.75rem;
  background-color: ${({ theme }) => theme.colors.darkGray};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.5rem;
`;

const TextContainer = styled.div`
  max-width: 26.114rem;
  width: 100%;

  h2 {
    color: white;
    font-weight: 500;
    line-height: 2.35rem;
    margin-bottom: 0.25rem;
  }

  p {
    color: white;
    font-weight: 300;
    font-size: 0.65rem;
    line-height: 0.95rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLink = styled(Link)`
  text-align: center;

  span {
    font-weight: 700;
  }

  &:first-child {
    margin-bottom: 0.4rem;
  }

  &:hover {
    text-decoration: none;
  }
`;

const BottomBanner = () => {
  return (
    <StyledSection>
      <TextContainer>
        <h2>인기상품의 주인공이 되고싶다면?</h2>
        <p>디자이너 협업은 판매회원 가입 후 가능합니다.</p>
      </TextContainer>
      <ButtonContainer>
        <Button
          as={StyledLink}
          size="large"
          color="primary"
          font_color="darkGray"
          font_weight={500}
        >
          <span>판매</span>하러가기
        </Button>
        <Button
          as={StyledLink}
          outline
          size="large"
          color="primary"
          font_color="white"
          font_weight={500}
        >
          <span>협업</span>하러가기
        </Button>
      </ButtonContainer>
    </StyledSection>
  );
};

export default BottomBanner;
