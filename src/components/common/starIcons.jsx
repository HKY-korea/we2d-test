import React from "react";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";

const Container = styled.div`
  font-size: ${({ icon_size }) => icon_size};
  color: ${({ theme }) => theme.colors.primary};
`;

const StarIcons = ({ icon_size }) => {
  return (
    <Container icon_size={icon_size}>
      <AiFillStar />
      <AiFillStar />
      <AiFillStar />
      <AiFillStar />
      <AiFillStar />
    </Container>
  );
};

export default StarIcons;
