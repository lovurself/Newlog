import { createGlobalStyle } from "styled-components";

import ClimateCrisisKRVF from '../assets/fonts/ClimateCrisisKRVF.woff'

import PretendardBold from '../assets/fonts/Pretendard-Bold.woff'
import PretendardRegular from '../assets/fonts/Pretendard-Regular.woff'
import PretendardLight from '../assets/fonts/Pretendard-Light.woff'

const GlobalStyle = createGlobalStyle`
  /* fonts */
  @font-face {
    font-family: 'ClimateCrisisKRVF';
    src: url(${ClimateCrisisKRVF}) format('woff');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'PretendardBold';
    src: url(${PretendardBold}) format('woff');
    font-weight: bold;
    font-style: normal;
  }
  @font-face {
    font-family: 'PretendardRegular';
    src: url(${PretendardRegular}) format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'PretendardLight';
    src: url(${PretendardLight}) format('woff');
    font-weight: lighter;
    font-style: normal;
  }


  * {
    box-sizing: border-box;
    font-family: 'PretendardRegular';
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;

    font-family: 'PretendardRegular';
    font-size: 14px;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a {
    text-decoration: none;
    color: #333;

    &:visited, &:active, &:focus {
      color: #333;
    }
  }
  button {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;