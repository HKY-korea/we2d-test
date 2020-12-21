import React from "react";
import styled, { css } from "styled-components";
import { RiFacebookFill } from "react-icons/ri";
import { AiOutlineInstagram, AiFillYoutube } from "react-icons/ai";
import { IoLogoTwitter } from "react-icons/io";

const StyledA = styled.a`
  display: inline-flex;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: 50px; // Just use Big pixel, not meaningful
  font-size: ${({ icon_size }) => icon_size};
  align-items: center;
  justify-content: center;

  ${({ sns }) =>
    sns === "facebook"
      ? css`
           {
            background-color: ${({ theme }) => theme.colors.facebook};
            color: white;
            padding-right: 0.5px;

            &:hover {
              color: white;
            }
          }
        `
      : sns === "instagram"
      ? css`
          background: radial-gradient(
            circle at 33% 100%,
            #fed373 4%,
            #f15245 30%,
            #d92e7f 62%,
            #9b36b7 85%,
            #515ecf
          );
          color: white;

          &:hover {
            color: white;
          }
        `
      : sns === "twitter"
      ? css`
          color: white;
          background-color: ${({ theme }) => theme.colors.twitter};

          &:hover {
            color: white;
          }
        `
      : sns === "youtube"
      ? css`
          background-color: ${({ theme }) => theme.colors.youtube};
          color: white;

          &:hover {
            color: white;
          }
        `
      : null}
`;

const ExternalLink = ({ sns, size, icon_size, href }) => {
  return (
    <StyledA size={size} icon_size={icon_size} sns={sns} href={href}>
      {sns === "facebook" ? (
        <RiFacebookFill />
      ) : sns === "instagram" ? (
        <AiOutlineInstagram />
      ) : sns === "twitter" ? (
        <IoLogoTwitter />
      ) : sns === "youtube" ? (
        <AiFillYoutube />
      ) : null}
    </StyledA>
  );
};

export default ExternalLink;
