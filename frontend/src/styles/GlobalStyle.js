import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Lato:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body{
    width: 100%;
    height: 100%;
  }

  body{
    font-family: 'Lato', sans-serif;
    font-size: 16px;
    color: #333;
    background: #f5f5f5;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }

  a{
    text-decoration: none;
  }
`;

export default GlobalStyle;
