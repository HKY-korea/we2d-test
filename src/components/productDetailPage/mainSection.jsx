import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import MainInfo from "./mainInfo";
import { DefaultLink } from "../../styles/linkStyles";
import { IoIosArrowForward } from "react-icons/io";
import { FaCheck } from "react-icons/fa";

const product = {
  editedImage: [
    "https://picsum.photos/id/237/200/200",
    "https://picsum.photos/id/238/200/200",
    "https://picsum.photos/id/239/200/200",
    "https://picsum.photos/id/240/200/200",
  ],
  designerName: "디자이너 이름",
  name: "상품이름",
  price: 15000,
};

const StyledSection = styled.section`
  max-width: 1280px;
  margin: 0 auto;
`;

const SimpleNav = styled.nav`
  padding: 1rem 0;
  display: flex;
  align-items: center;

  ${DefaultLink} {
    font-size: 0.65rem;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.darkGray};

    &:hover {
      color: black;
      font-weight: 400;
    }
  }

  svg {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.gray};
  }

  p {
    font-size: 0.65rem;
    font-weight: 400;
    color: black;
  }
`;

const Main = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.media.laptop}) {
    margin: 0 -${({ theme }) => theme.spacing.body};
    overflow: hidden;
    flex-direction: column;
    align-items: center;
  }
`;

const SliderContainer = styled.div`
  width: 48.438%;

  .slick-dots {
    bottom: -24.132%;

    li {
      width: 17.743%;
      height: 100%;

      div > div {
        display: none;
      }

      img {
        border-radius: 5px;
        width: 100%;
      }
    }

    .slick-active {
      div > div {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background: rgba(0, 217, 217, 0.5);
        color: white;
        font-size: 1.3rem;
        border-radius: 5px;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.laptop}) {
    width: 768px;
    margin-bottom: 100px;

    .slick-dots {
      bottom: -110px;

      li {
        width: 100px;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    width: 100vw;
    margin-bottom: 14.309%;

    .slick-dots {
      bottom: -14.309%;
      right: -18%;

      li {
        width: 13.021%;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .slick-dots {
      right: -16%;
    }
  }
`;

const MainSection = ({ obj }) => {
  const settings = {
    customPaging: (i) => {
      return (
        <div>
          <div>
            <FaCheck />
          </div>
          <img src={product.editedImage[i]} alt="smallEditedImage" />
        </div>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <StyledSection>
      <SimpleNav>
        <DefaultLink>휴대폰케이스</DefaultLink>
        <IoIosArrowForward />
        <p>하드케이스</p>
      </SimpleNav>

      <Main>
        <SliderContainer>
          <Slider {...settings}>
            <img src={product.editedImage[0]} alt="editedImage" />
            <img src={product.editedImage[1]} alt="editedImage" />
            <img src={product.editedImage[2]} alt="editedImage" />
            <img src={product.editedImage[3]} alt="editedImage" />
          </Slider>
        </SliderContainer>

        <MainInfo obj={obj} product={product} />
      </Main>
    </StyledSection>
  );
};

export default MainSection;
