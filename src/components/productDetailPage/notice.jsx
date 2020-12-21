import React from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  max-width: 1280px;
  margin: 0 auto 3rem;

  & > p {
    font-size: 1.1rem;
    font-weight: 700;
  }

  & > div {
    display: flex;
    flex-direction: column;
    border-top: 1px solid ${({ theme }) => theme.colors.gray};
    margin-top: 1rem;

    & > div {
      display: flex;
      border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
    }
  }
`;

const Subtitle = styled.p`
  min-width: 9rem;
  font-size: 0.8rem;
  font-weight: 500;
  background-color: ${({ theme }) => theme.colors.lightGray};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Description = styled.div`
  padding: 2.3rem 2rem;

  p {
    font-size: 0.65rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.darkGray};
    line-height: 1.2rem;
  }
`;

const Notice = ({ obj, infoRef }) => {
  return (
    <StyledSection ref={infoRef}>
      <p>{obj.title}</p>
      <div>
        {obj.content.map((content, i) => (
          <div key={i}>
            <Subtitle>{content.subtitle}</Subtitle>
            <Description>
              {content.description.map((des, j) => (
                <p key={j}>{des}</p>
              ))}
            </Description>
          </div>
        ))}
      </div>
    </StyledSection>
  );
};

export default Notice;
