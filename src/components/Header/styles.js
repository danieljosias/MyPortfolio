import styled from "styled-components";

export const Container = styled.div`
  @media (min-width: 375px) {
    header {
      height: 15vh;
      width: 100%;
      padding: 0px 20px;
    }
  }

  @media (min-width: 425px) {
    header {
      height: 15vh;
      width: 100%;
      padding: 0px 20px;
    }

  }

  @media (min-width: 768px) {
    header {
      height: 15vh;
      width: 100%;
      padding: 0px 20px;

      .menu__nav {
      display: none;
    }
    
    .menu__hamburguer {
      display: block !important;
      display: ${(props) => (props.isOpen ? "none" : "block")};
    }
    }

    
  }

  @media (min-width: 1024px) {
    header {
      height: 15vh;
      width: 100%;
      padding: 0px 20px;
    }

    .menu__nav {
      display: block;
    }
    
    .menu__hamburguer {
      display: none;
      display: ${(props) => (props.isOpen ? "none" : "block")};
    }
  
  }

  @media (min-width: 1024px){
    .btn__close {
      display: none;
    } 
  }

  @media (min-width: 1364px) {
    header {
      background-color: var(--primary-color);
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 15vh;
      width: 100%;
      padding: 0px 20px;

      h2 {
        color: var(--secondary-color);
      }

      span {
        color: var(--white);
      }
    }

    .menu__nav {
      a {
        font-weight: bold;
      }
    }

    .btn-neon {
      color: var(--secondary-color);
    }

    .btn-neon {
      float: left;
      display: flex;
      padding: 15px 25px;
      font-size: 1em;
      margin-left: 10px;
      text-transform: uppercase;
      text-decoration: none;
      background: transparent;
      outline: none;
      cursor: pointer;
      border: 2px solid transparent;
      border-radius: 4px;
      transition: 400ms;
    }

    .btn-neon:hover {
      border: 2px solid var(--secondary-color);
      box-shadow: 0 0 8px;
    }

    .btn-neon:focus {
      border: 2px solid var(--white);
      background: white;
      box-shadow: 0 0 18px var(--white);
    }

    .menu__hamburguer {
      display: none;
    }
  }
`;
