import styled from 'styled-components';

export const Container = styled.div`
  footer{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: var(--primary-color);
    height: 70px;

    button{
      background-color: var(--primary-color);
      width: 50px;
      height: 50px;
      color: var(--black);
      border: 1px solid var(--white);
      cursor: pointer;
      
      span{
        font-size: 28px;
        font-weight: bold;
        color: var(--white);
      }
      span:hover{
      color: var(--black);
      transition: all ease-in .3s;
    }

    }
    a{
      color: var(--white);
    }
    a:hover{
      color: var(--black);
      transition: all ease-in .3s;
    }
  }

  @media (max-width: 375px){
    max-width: 375px;
  }
`;
