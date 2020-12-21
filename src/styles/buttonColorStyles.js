import { css } from 'styled-components';

export default css`
  ${({ theme, color }) => {
    const selected = theme.colors[color];

    return css`
      background-color: ${selected};

      ${(props) =>
        props.outline &&
        css`
          color: ${selected};
          background: none;
          border: 2px solid ${selected};
        `}
    `;
  }}
`;