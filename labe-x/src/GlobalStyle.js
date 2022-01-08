import { createGlobalStyle} from "styled-components";
import { injectGlobal } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body{
    margin: 0;
    padding: 0;
    background-color: #2f0059;
    /* width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center; */
    

    }


    button {
        
    margin-bottom: 15px;
    height: 30px;
    padding: 0 20px;
    border-radius: 20px;
    border: none;
    color: white;
    font-size: 14px;
    background-color: #28013c;
    min-width: 100px;

    &:hover{
      cursor: pointer;
      background-color: #fc3ff2;
    }


    }

    h1, h2, b {
    color: #8417dd;
  }

  h1 {
    text-align: center;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

  h2 {
    text-align: center;

    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

  p {
    color:#8f908f;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

  select {
    width: 518px;
    height: 40px;
    border-radius: 10px;
    padding: 4px 8px;
    border-width: 1px;
    margin: 0 0 15px 0;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
}
   
`



export default GlobalStyle;