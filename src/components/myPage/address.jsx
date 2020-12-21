import React from "react";
import styled from "styled-components";
import InfoItem from "./infoItem";

const StyledSection = styled.section`
  max-width: 1280px;
  margin: 0 auto;
`;

const Address = () => {
  return (
    <StyledSection>
      <InfoItem title="주소" content={["우편번호", "주소", "상세주소"]} />
    </StyledSection>
  );
};

export default Address;
