import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
      text-decoration-line: none;
      color: inherit;
      --brand-color: #f17471;
      --gray-color : #f1eeee;
    }
    html,body{
      }
    button{
      font: inherit;
    }
     
      
  
        
`;
