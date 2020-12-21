import React from "react";
import styled from "styled-components";
import InfoItem from "./infoItem";

const StyledSection = styled.section`
  max-width: 1280px;
  margin: 0 auto;
`;

const Account = () => {
  return (
    <StyledSection>
      <InfoItem title="연락처" content={["test@naver.com", "01023249930"]} />

      <InfoItem title="비밀번호" />
    </StyledSection>
  );
};

export default Account;
