import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BottomBanner from "./bottomBanner";
import ExternalLink from "../common/externalLink";

const StyledFooter = styled.footer`
  margin: 0 -${({ theme }) => theme.spacing.body};
  background-color: ${({ theme }) => theme.colors.lightGray};
  padding-top: 2.875rem;
`;

const Wrapper = styled.div`
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.body};
`;

const Info = styled.div`
  padding-bottom: 2.875rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  display: flex;
  justify-content: space-between;

  p {
    font-size: 0.8rem;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.darkGray};
    line-height: 1.2rem;
    margin-top: 1.5rem;
    text-align: left;
  }

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
  }
`;

const StyledLink = styled(Link)`
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.darkGray};

  &:hover {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.darkGray};
    font-weight: bolder;
  }
`;

const Headings = styled.div`
  width: 17.4rem;
  display: flex;
  justify-content: space-between;

  h4 {
    font-weight: 500;
    color: ${({ theme }) => theme.colors.darkGray};
  }
`;

const LinkContainer = styled.div`
  margin-top: 2.38rem;

  a:first-child {
    margin-right: 1rem;
  }

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    display: none;
  }
`;

const MobileLinkContainer = styled(LinkContainer)`
  display: none;

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    margin-top: 0;
    display: block;
  }
`;

const Copyright = styled.div`
  padding: 0.525rem 0 1.7rem;
  display: flex;
  justify-content: space-between;

  p {
    line-height: 0.95rem;
    font-size: 0.65rem;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.darkGray};
  }
`;

const Footer = () => {
  return (
    <React.Fragment>
      <BottomBanner />
      <StyledFooter>
        <Wrapper>
          <Info>
            <Left>
              <div>
                <StyledLink>고객센터</StyledLink>
                <p>
                  이메일: help@we2d.com<br></br>
                  카카오톡: @we2d<br></br>
                  전화: 070-8095-3254, 070-8095-3257
                </p>
              </div>

              <MobileLinkContainer>
                <ExternalLink
                  href="https://www.facebook.com/we2dcom/"
                  sns="facebook"
                  size="3.7rem"
                  icon_size="1.8rem"
                />
                <ExternalLink
                  href="https://www.instagram.com/we2d_official/"
                  sns="instagram"
                  size="3.7rem"
                  icon_size="1.8rem"
                />
              </MobileLinkContainer>
            </Left>
            <div>
              <Headings>
                <h4>이용약관</h4>
                <h4>개인정보처리방침</h4>
                <h4>제휴문의</h4>
              </Headings>
              <p>
                상호: 주식회사 위투디 | 사업자 등록번호: 582-88-01829<br></br>
                통신판매업: 2020-인천연수구-1300호<br></br>
                주소: 인천 연수구 갯벌로 12 갯벌타워 413, 414호<br></br>
                대표이사: 이진욱, 박성원 | 개인정보관리책임자: 박성원<br></br>
                디자이너: 진승희, 박현송
              </p>
            </div>
            <LinkContainer>
              <ExternalLink
                href="https://www.facebook.com/we2dcom/"
                sns="facebook"
                size="3.7rem"
                icon_size="1.8rem"
              />
              <ExternalLink
                href="https://www.instagram.com/we2d_official/"
                sns="instagram"
                size="3.7rem"
                icon_size="1.8rem"
              />
            </LinkContainer>
          </Info>
          <Copyright>
            <p>위투디 - 세상을 디자인하다</p>
            <p>© 2020 위투디 all rights reserved</p>
          </Copyright>
        </Wrapper>
      </StyledFooter>
    </React.Fragment>
  );
};

export default Footer;
