import React from "react";
import styled from "styled-components";
import { DefaultLink } from "../../styles/linkStyles";

const StyledLink = styled(DefaultLink)`
  font-size: 0.8rem;
  font-weight: 300;
  text-decoration: underline;

  &:hover {
    text-decoration: underline;
  }
`;

const ViewMore = () => {
  return <StyledLink>더보기</StyledLink>;
};

export default ViewMore;
