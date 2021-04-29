import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *{
    /* margin: 0; */
  }

  body{
    background-color: rgb(9, 11, 23);
    color: whitesmoke;
  }

  header{
    background-color: #736BFB;
    padding: 20px 10px;
    font-size: 60px;
    margin: 0;
    overflow: hidden;

  }

  .component{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }


`;
export default GlobalStyles;