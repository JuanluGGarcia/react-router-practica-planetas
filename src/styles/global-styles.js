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
    display: inline-block;
    max-width: 100%;
  }
  
  body{
    color: #fff;
    background-color: #000;
    background-image: url('assets/images/background-stars.svg');
    font-size: .875rem;
    font-family: ${FONTS.ffSecundary};
    height: 100vh;
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
