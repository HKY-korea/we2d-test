import React from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  margin: 0 -${({ theme }) => theme.spacing.body};
  height: 620px;
  overflow: hidden;

  img {
    height: 100%;
  }

  @media (max-width: ${({ theme }) => theme.media.laptop}) {
    height: 465px;
  }

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    height: 330.6px;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    height: 248px;
  }
`;

const Banner = () => {
  return (
    <StyledSection>
      <img src="https://picsum.photos/1000/300" alt="designerBanner" />
    </StyledSection>
  );
};

export default Banner;
