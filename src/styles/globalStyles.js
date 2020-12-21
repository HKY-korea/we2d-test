import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 20px;

    @media (max-width: ${({ theme }) => theme.media.laptop}) {
      font-size: 17px;
    }

    @media (max-width: ${({theme}) => theme.media.tablet}) {
      font-size: 14px;
    }

    @media (max-width: ${({theme}) => theme.media.mobile}) {
      font-size: 11px;
    }
  }

  body {
    background-color: white;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 1rem;
    padding: ${({theme}) => theme.spacing.body} ${({theme}) => theme.spacing.body} 0;
  }

  a {
    text-decoration: none;
  }

  input, button {
    background-color: transparent;
    border: none;
    outline: none;
    padding: 0;

    &:focus {
      outline: none;
    }
  }

  select {
    &:focus {
      outline: none;
    }
  }

  textarea {
    resize: none;

    &:focus {
      outline: none;
    }
  }

  ol, ul, li {
    list-style: none;
  }

  h1 { font-size: 2.5rem; }
  h2 { font-size: 1.6rem; }
  h3 { font-size: 1.1rem; }
  h4 { font-size: .9rem; }
  h5 { font-size: .65rem; }
  h6 { font-size: .5rem; }
`

export default GlobalStyles;