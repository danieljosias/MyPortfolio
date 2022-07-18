import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        font-family: 'Poppins', sans-serif;
    }

    :root{
        --primary-color: #00FF74;
        --secondary-color: #1E1E1E;
        --third-color: #C5C5C5;
        --white: #FFFFFF;
        --black-1: #000000;
        --black-2: rgba(0, 0, 0, 0.3);
        --grey-: grey;
    }

    body{
        background-color: var(--secondary-color);
    }
    
    html{
        scroll-behavior: smooth;
        overflow-x: hidden;
    }

    a{
        text-decoration: none;
    }

    ul{
        list-style: none;
    }
    
    ::-webkit-scrollbar {
        width: 20px;
    }

    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px var(third-color);
        background: var(--white); 
    }

    ::-webkit-scrollbar-thumb {
        background: var(--primary-color); 
    }

    ::-webkit-scrollbar-thumb:hover {
        background: var(--primary-color); 
    }
`