import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  img{
    display: block;
    max-width: 100%;
  }
  
  body{
    background-image: url("./public/assets/images/background-stars.svg");
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  ul{
    list-style: none;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
  }
`;
