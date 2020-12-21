import React from "react";
import styled from "styled-components";
import Specification from "./specification";

const StyledSection = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  padding: 6rem 0 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > p {
    font-size: 1.1rem;
    font-weight: 500;
    text-align: center;
  }
`;

const OriginalDesign = styled.div`
  max-width: 600px;
  width: 100%;
  padding: 4rem 0;

  img {
    width: 100%;
  }

  div {
    display: flex;
    justify-content: space-between;
    margin-top: 0.5rem;

    p:first-child {
      font-size: 1.1rem;
      font-weight: 500;
    }

    p:last-child {
      font-size: 0.9rem;
      font-weight: 300;
      color: ${({ theme }) => theme.colors.darkGray};
    }

    @media (max-width: ${({ theme }) => theme.media.tablet}) {
      flex-direction: column;
      align-items: center;
      margin-top: 2rem;

      p:first-child {
        margin-bottom: 0.4rem;
      }
    }
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  img {
    width: 600px;
  }

  img:first-child {
    margin-right: 2rem;
  }

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    flex-direction: column;
    align-items: center;

    img {
      width: 100%;
    }

    img:first-child {
      margin: 0 0 2rem 0;
    }
  }
`;

const Description = styled.div`
  width: 100%;
  word-wrap: break-word;
  padding: 4rem 0;

  p:first-child {
    text-align: center;
    font-size: 1.1rem;
    font-weight: 400;
    margin-bottom: 0.5rem;
    line-height: 1.65rem;
  }

  p:last-child {
    text-align: center;
    font-size: 0.9rem;
    font-weight: 300;
    line-height: 1.15rem;
  }
`;

const DetailSection = ({ obj, detailRef }) => {
  return (
    <StyledSection ref={detailRef}>
      <p>{obj.intro}</p>

      <OriginalDesign>
        <img src="https://picsum.photos/id/236/200/300" alt="originalDesign" />
        <div>
          <p>디자인 상품명</p>
          <p>{obj.frontOfDesigner} 디자이너이름</p>
        </div>
      </OriginalDesign>

      <ImageContainer>
        <img src="https://picsum.photos/id/237/200/200" alt="editedImage" />
        <img src="https://picsum.photos/id/238/200/200" alt="editedImage" />
      </ImageContainer>

      <Description>
        <p>해당 디자인을 한마디로 표현하는 문구 또는 상품명</p>
        <p>
          3줄 이하의 설명3줄 이하의 설명3줄 이하의 설명3줄 이하의 설명 디자인에
          대한 3줄 이하의 설명글3줄 이하의 설명3줄 이하의 설명3줄 이하의 설명3줄
          이하의 설명 3줄 이하의 설명3줄 이하의 설명3줄 이하의 설명3줄 이하의
          설명
        </p>
      </Description>

      <ImageContainer>
        <img src="https://picsum.photos/id/239/200/200" alt="editedImage" />
        <img src="https://picsum.photos/id/240/200/200" alt="editedImage" />
      </ImageContainer>

      <Specification specification={obj.specification} />
    </StyledSection>
  );
};

export default DetailSection;
