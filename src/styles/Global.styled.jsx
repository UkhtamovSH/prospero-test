import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  html, body {
    user-select:none;
    margin:0px;
    height:100%;
  }
  
  *{
    padding: 0;
    margin: 0;
  }
  
  // ****variables start
  :root {
    --base-grey-15: #D9DADB;
    --base-grey-30: #BCBFC2;
    --base-grey-50: #939699;
    --base-grey-85: #4B5157;
    --base-grey-100: #262D33;
    
    --blue-blue-25: #C5E4FC;
    --blue-blue-50: #1DA1F2;
    --blue-blue-75: #4592FF;
    
    --red-red-75: #FF4F52;
    --purple-purple-75: #AC8EE3;
    --orange-orange-75: #FFA34D;
    --green-green-75: #3DC47E;
    --greyBlue-greyBlue-75: #6E99AE;
    --blueGreen-blueGreen-75: #3BBDC4;
    
    --base-white: #FFFFFF;
    --base-black: #262626;
    --base-red: #FF0000;
    --base-blue: #4267B2;
  }
  // ****variables end
  

  
  // ****scrollbar style start
  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: #000; 
  }
  // ****scrollbar style end
  
  
  
  // ****button style start
  .btn{
    min-width: 119px;
    height: 40px;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    font-family: "Lato-Heavy", sans-serif;
    font-size: 14px;
    line-height: 20px;
  } 
  .btnBlue{
    background-color: var(--blue-blue-75);
    color: var(--base-white);
  }
  // ****button style end
  
  
  
`;
