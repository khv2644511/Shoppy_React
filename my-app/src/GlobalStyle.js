import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
      text-decoration-line: none;
      color: inherit;
    }
    html,body{

      }
    button{
      padding: 0;
      margin: 0;
      background: none;
      border: none;
      font: inherit;
    }
     
      
  
        
`;
