import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1280px;
  margin: 6.4rem auto 0;
  position: sticky;
  top: 0;
  z-index: 100;

  button:nth-child(${({ activeButton }) => activeButton}) {
    background-color: ${({ theme }) => theme.colors.darkGray};
    color: white;
    font-weight: 500;
  }

  @media (max-width: ${({ theme }) => theme.media.laptop}) {
    margin-left: -${({ theme }) => theme.spacing.body};
    margin-right: -${({ theme }) => theme.spacing.body};
  }
`;

const Button = styled.button`
  width: 25%;
  position: relative;
  height: 3.35rem;
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-right: 1px solid ${({ theme }) => theme.colors.gray};
  font-size: 0.9rem;
  font-weight: 400;

  &:last-child {
    border-right: none;
  }
`;

const RemoteBtnGroup = ({ obj, refs }) => {
  const [activeButton, setActiveButton] = useState(1);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });

  const calcAdjustment = () => {
    if (window.screen.width > 1024) return 100;
    if (window.screen.width > 768) return 80;
    if (window.screen.width > 480) return 60;
    else return 50;
  };

  const scrollToRef = (ref) =>
    window.scrollTo(0, ref.current.offsetTop - calcAdjustment());

  const onScroll = () => {
    if (window.scrollY > refs[3].current.offsetTop - calcAdjustment() - 1)
      setActiveButton(4);
    else if (window.scrollY > refs[2].current.offsetTop - calcAdjustment() - 1)
      setActiveButton(3);
    else if (window.scrollY > refs[1].current.offsetTop - calcAdjustment() - 1)
      setActiveButton(2);
    else setActiveButton(1);
  };

  return (
    <Container activeButton={activeButton}>
      {obj.buttonTitle.map((title, i) => (
        <Button key={i} onClick={() => scrollToRef(refs[i])}>
          {title}
        </Button>
      ))}
    </Container>
  );
};

export default RemoteBtnGroup;
