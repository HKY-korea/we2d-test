import React from "react";
import styled from "styled-components";
import { FaHeart } from "react-icons/fa";
import { DefaultLink } from "../../styles/linkStyles";

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 11.6rem;
  height: 16rem;
  border-radius: 2.4rem;
  box-shadow: 0.5rem 0.75rem 1rem #00000029;
  background-color: white;

  h3 {
    font-weight: 500;
    line-height: 1.75rem;
  }
`;

const ProfileImage = styled.div`
  position: relative;
  width: 8.5rem;
  height: 8.5rem;
  border-radius: 4.25rem;
  background: linear-gradient(180deg, #00000000 0%, #00000076 52%, #000000 100%)
      0% 0% no-repeat padding-box,
    url(${({ image }) => image});

  p {
    position: absolute;
    bottom: 1.41rem;
    left: 4.175rem;
    font-size: 0.6rem;
    color: white;
    font-weight: 400;
  }
`;

const StyledHeart = styled(FaHeart)`
  color: ${({ theme }) => theme.colors.primary};
  position: absolute;
  left: 3.35rem;
  bottom: 1.325rem;
  font-size: 0.65rem;
`;

const TagText = styled.p`
  font-size: 0.65rem;
  font-weight: 300;
  margin-top: 0.85rem;
`;

const HotDesignerCard = ({ data }) => {
  return (
    <DefaultLink>
      <StyledArticle>
        <ProfileImage image={data.image}>
          <StyledHeart />
          <p>{data.follower}</p>
        </ProfileImage>
        <TagText>
          #{data.tags[0]} #{data.tags[1]}
        </TagText>
        <h3>{data.name}</h3>
      </StyledArticle>
    </DefaultLink>
  );
};

export default HotDesignerCard;
