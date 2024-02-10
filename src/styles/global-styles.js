import { createGlobalStyle } from 'styled-components';
import { FONTS } from './fonts';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before{
    box-sizing: border-box;
    margin: 0;
  }

  img{
    display: block;
    max-width: 100%;
  }
  
  body{
    background-image: url('assets/images/background-stars.svg');
    font-family: ${FONTS.ffSecundary};
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  h1,
  h2,
  h3{
    font-family: ${FONTS.ffPrimary};
  }

  ul{
    list-style: none;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
  }
`;
