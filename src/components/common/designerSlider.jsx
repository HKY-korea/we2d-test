import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import HotDesignerCard from "./hotDesignerCard";

const designers = [
  {
    image: "https://picsum.photos/200/200",
    tags: ["심플한", "모던한"],
    name: "디자이너",
    follower: 232,
  },
  {
    image: "https://picsum.photos/200/200",
    tags: ["심플한", "모던한"],
    name: "디자이너",
    follower: 232,
  },
  {
    image: "https://picsum.photos/200/200",
    tags: ["심플한", "모던한"],
    name: "디자이너",
    follower: 232,
  },
  {
    image: "https://picsum.photos/200/200",
    tags: ["심플한", "모던한"],
    name: "디자이너",
    follower: 232,
  },
  {
    image: "https://picsum.photos/200/200",
    tags: ["심플한", "모던한"],
    name: "디자이너",
    follower: 232,
  },
  {
    image: "https://picsum.photos/200/200",
    tags: ["심플한", "모던한"],
    name: "디자이너",
    follower: 232,
  },
  {
    image: "https://picsum.photos/200/200",
    tags: ["심플한", "모던한"],
    name: "디자이너",
    follower: 232,
  },
  {
    image: "https://picsum.photos/200/200",
    tags: ["심플한", "모던한"],
    name: "디자이너",
    follower: 232,
  },
  {
    image: "https://picsum.photos/200/200",
    tags: ["심플한", "모던한"],
    name: "디자이너",
    follower: 232,
  },
];

const StyledSection = styled.section`
  margin: 0 -${({ theme }) => theme.spacing.body};
  height: 30rem;
  background-color: ${({ theme }) => theme.colors.lightGray};
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;

  h2 {
    position: absolute;
    left: 50%;
    margin-left: -7.9rem;
    padding: 0 auto;
    line-height: 5.5rem;
    font-weight: 400;

    span {
      font-weight: 700;
    }
  }

  .slick-slide article {
    margin: 7rem auto;
  }

  .slick-slide.slick-center article {
    transition: transform 0.5s;
    transform: scale(1.1) translateY(-0.65px);
  }

  h2 ~ p {
    font-size: 0.5rem;
    font-weight: 300;
    position: absolute;
    left: 50%;
    margin-left: -4.65rem;
    bottom: 5%;
    color: ${({ theme }) => theme.colors.darkGray};
  }
`;

const StyledNextArrow = styled(IoIosArrowForward)`
  position: absolute;
  top: 87%;
  left: 50%;
  color: black;
  width: 1.5rem;
  height: 1.5rem;
  margin-left: 0.75rem;

  &:hover {
    color: black;
  }
`;

const StyledPrevArrow = styled(IoIosArrowBack)`
  position: absolute;
  top: 87%;
  left: 50%;
  color: black;
  width: 1.5rem;
  height: 1.5rem;
  margin-left: -2.25rem;
  z-index: 1000;

  &:hover {
    color: black;
  }
`;

const DesignerSlider = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "ease",
    arrow: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "240px",
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    nextArrow: <StyledNextArrow />,
    prevArrow: <StyledPrevArrow />,
    responsive: [
      {
        breakpoint: 1240,
        settings: {
          centerPadding: "130px",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          centerPadding: "140px",
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          centerPadding: "100px",
        },
      },
    ],
  };

  return (
    <StyledSection>
      <Wrapper>
        <h2>
          <span>Weekly Hot</span> Designer
        </h2>

        <Slider {...settings}>
          {designers.map((designer, i) => (
            <HotDesignerCard key={i} data={designer} />
          ))}
        </Slider>
        <p>디자이너 협업은 판매회원 가입 후 가능합니다</p>
      </Wrapper>
    </StyledSection>
  );
};

export default DesignerSlider;
