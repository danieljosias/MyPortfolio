import styled from 'styled-components';

export const Container = styled.div`
    @media (min-width: 1364px){
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 30px;

      h2{
        color: var(--primary-color);
      }

      form{
        display: flex;
        flex-direction: column;
        width: 500px;
        gap: 10px;

        label{
          color: var(--white);
        }

        input{
          padding: 10px;
        }

        textarea{
          max-height: 150px;
          min-height: 150px;

          max-width: 500px;
          min-width: 500px;

        }

        button {
          border: none;
          background-color: transparent;
          width: 500px;
          font-size: 18px;
          cursor: pointer;
        }

        .link {
          display: block;
          text-decoration: none;
          text-transform: uppercase;
          border: 2px solid var(--primary-color);
          padding: 10px;
          position: relative;
          overflow: hidden;
          color: var(--white);
          font-weight: bold;
        }

        .link:before {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;

          background-color: var(--primary-color);
          z-index: -1;
          transition: 0.5s ease-in;
        }

        .link1:before {
          width: 110%;

          height: 0;
          transform: translate(-50%, -50%) rotate(45deg);
        }

        .link1:hover:before {
          height: 850%;
        }
      }
    }

    @media (min-width: 375px){
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 20px;

      h2{
        color: var(--primary-color);
      }

      form{
        display: flex;
        flex-direction: column;
        width: 300px;
        gap: 10px;

        label{
          color: var(--white);
        }

        input{
          padding: 10px;
          max-width: 300px;
        }

        textarea{
          max-height: 150px;
          min-height: 120px;

          max-width: 300px;
          min-width: 300px;

        }

        button {
          border: none;
          background-color: transparent;
          width: 300px;
          font-size: 18px;
          cursor: pointer;
        }

        .link {
          display: block;
          text-decoration: none;
          text-transform: uppercase;
          border: 2px solid var(--primary-color);
          padding: 10px;
          position: relative;
          overflow: hidden;
          color: var(--white);
          font-weight: bold;
        }

        .link:before {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;

          background-color: var(--primary-color);
          z-index: -1;
          transition: 0.5s ease-in;
        }

        .link1:before {
          width: 110%;

          height: 0;
          transform: translate(-50%, -50%) rotate(45deg);
        }

        .link1:hover:before {
          height: 850%;
        }
      }
      
    }
`;
