import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
*{
   box-sizing: border-box;
   padding:0;
   margin:0;
   overflow-x: hidden;
}

body{
   font-family: 'Inter', sans-serif;
   font-size: 1.15em;
   background-color: ${({ theme }) => theme.colors.body};
   margin: 0;
}

p{
   opacity:0.6;
   line-height: 1.5;
}


img{
   max-width: 100%;

}

`;

export default GlobalStyle;
