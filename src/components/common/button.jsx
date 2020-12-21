import React from "react";
import styled, { css } from "styled-components";
import colorStyles from "../../styles/buttonColorStyles";

const sizes = {
  xLarge: {
    width: "20rem",
    height: "2.75rem",
    fontSize: "0.9rem",
  },
  large: {
    width: "10rem",
    height: "2.75rem",
    fontSize: "0.9rem",
  },
  medium: {
    width: "7.5rem",
    height: "1.75rem",
    fontSize: "0.9rem",
  },
  small: {
    width: "6rem",
    height: "1.5rem",
    fontSize: "0.65rem",
  },
  xSmall: {
    width: "5.5rem",
    height: "1.5rem",
    fontSize: "0.65rem",
  },
  xxSmall: {
    width: "2.75rem",
    height: "1.5rem",
    fontSize: "0.65rem",
  },
};

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;

  ${colorStyles}
  ${({ size }) => css`
    width: ${sizes[size].width};
    height: ${sizes[size].height};
    line-height: ${sizes[size].height};
    font-size: ${sizes[size].fontSize};
  `}
  font-weight: ${(props) => props.font_weight};
  color: ${(props) => props.theme.colors[props.font_color]};

  &:hover {
    font-weight: bolder;
    color: ${(props) => props.theme.colors[props.font_color]};
  }
`;

const Button = ({
  children,
  color = "primary",
  font_color = "white",
  size = "medium",
  font_weight = 400,
  ...rest
}) => {
  return (
    <StyledButton
      color={color}
      font_color={font_color}
      size={size}
      font_weight={font_weight}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
