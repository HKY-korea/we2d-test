import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Button from "../common/button";

const StyledCarousel = styled(Carousel)`
  margin: 0 -${({ theme }) => theme.spacing.body};
`;

const StyledCaption = styled(Carousel.Caption)`
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: center;
  height: 100%;

  .black {
    color: black;
  }

  h1 {
    font-weight: 500;
    line-height: 3.5rem;
  }

  p {
    line-height: 1.35rem;
    margin: 1rem 0 3rem;
    font-size: 0.9rem;
  }
`;

const BannerImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  width: 100vw;

  img {
    min-width: 1280px;
    min-height: 447px;

    @media (max-width: ${({ theme }) => theme.media.tablet}) {
      min-width: 1024px;
      min-height: 357.3px;
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      min-width: 768px;
      min-height: 268px;
    }
  }
`;

const StyledLink = styled(Link)`
  text-align: center;

  &:hover {
    text-decoration: none;
  }
`;

const MainCarousel = () => {
  return (
    <StyledCarousel>
      <Carousel.Item>
        <BannerImgContainer>
          <img
            className="d-block w-100"
            src="/images/banner/main_banner1.png"
            alt="First slide"
          />
        </BannerImgContainer>
        <StyledCaption>
          <h1 className="black">
            디자인에만<br></br>집중할 수 있는<br></br>굿즈 제작 플랫폼
          </h1>
          <p className="black">
            디자인 하나면 굿즈제작/판매가 가능한 위투디에서<br></br>당신의 꿈을
            펼쳐보세요
          </p>
          <Button
            as={StyledLink}
            outline
            color="black"
            font_color="black"
            font_weight={500}
            size="large"
          >
            내 디자인 판매하기
          </Button>
        </StyledCaption>
      </Carousel.Item>
      <Carousel.Item>
        <BannerImgContainer>
          <img
            className="d-block w-100"
            src="/images/banner/main_banner2.png"
            alt="Third slide"
          />
        </BannerImgContainer>
        <StyledCaption>
          <h1>
            몰개성한 일상에<br></br>디자인 한 스푼
          </h1>
          <p>
            수많은 디자이너들의 유니크한 디자인 상품을<br></br>
            지금 위투디에서 만나보세요
          </p>
          <Button
            as={StyledLink}
            outline
            color="white"
            font_color="white"
            font_weight={300}
            size="large"
          >
            휴대폰 케이스 전체
          </Button>
        </StyledCaption>
      </Carousel.Item>
      <Carousel.Item>
        <BannerImgContainer>
          <img
            className="d-block w-100"
            src="/images/banner/main_banner3.png"
            alt="Third slide"
          />
        </BannerImgContainer>
        <StyledCaption>
          <h1>
            당신의 디자인은<br></br>누군가의 취향이다
          </h1>
          <p>
            대충 그린 그림부터, 과제로 만든 포스터까지<br></br>
            나의 소중한 디자인을 위투디에서 판매해보세요
          </p>
          <Button
            as={StyledLink}
            outline
            color="white"
            font_color="white"
            font_weight={300}
            size="large"
          >
            내 디자인 판매하기
          </Button>
        </StyledCaption>
      </Carousel.Item>
    </StyledCarousel>
  );
};

export default MainCarousel;
