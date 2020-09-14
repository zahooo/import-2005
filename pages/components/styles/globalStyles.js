import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
     margin: 0;
     padding: 0;
     font-size: 13px;
     line-height: 1.5rem;
     box-sizing: border-box;
  };

  body {
    width: 70%;
    margin: 0 auto;
    background-color: #f4f4f4;
    color: hsl(230, 40%, 15%);
    font-family: Helvetica, sans-serif
  };

  a {
    text-decoration:none;
  };

  @media screen and (max-width: 768px) {
    body {
      width: 100%;
    }
  }
`;

export default GlobalStyles;