import styled from "styled-components";

export const Container = styled.div`
  @media (min-width: 1364px) {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 100vw;
      height: 70vh;

    .left {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: justify;
      width: 100%;
      height: 100%;
      padding: 0px 20px;

      h2 {
        height: 20vh;
        width: 50%;
      }

      h1,
      h2,
      span {
        color: var(--white);
      }

      .btn__container {
        margin-top: 20px;
      }

      button {
        border: none;
        background-color: transparent;
        width: 250px;
        font-size: 18px;
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
        height: 550%;
      }
    }

    .right {
      //estilos do container right
      margin: 0;
      background-color: var(--primary-color);
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50%;
      height: 100%;

      //faz o efeito arredondado no container
      mask-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8c3ZnIHZpZXdCb3g9IjAgMCAyMDAgMjAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxwYXRoIGZpbGw9IiMwMEZGNzQiIGQ9Ik01OC45LC0yMC41QzY0LjcsLTEuNSw0OS41LDIyLjksMjkuNywzNi4zQzkuOCw0OS42LC0xNC44LDUyLC0zNS41LDM5LjJDLTU2LjIsMjYuNSwtNzIuOSwtMS4zLC02Ni40LC0yMS40Qy01OS44LC00MS41LC0yOS45LC01My45LC0xLjYsLTUzLjRDMjYuNiwtNTIuOSw1My4yLC0zOS40LDU4LjksLTIwLjVaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDAgMTAwKSIgLz4KPC9zdmc+Cg==);
      mask-repeat: no-repeat;
      mask-size: 545px;
      mask-position: center;

      img {
        width: 280px;
        height: 260px;
      }
    }
  }

  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-around;
    width: 100vw;
    height: 70vh;

    .left {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: justify;
      width: 70%;
      height: 100%;
      padding: 0px 20px;

      h2 {
        height: 20vh;
        width: 70%;
      }

      h1,
      h2,
      span {
        font-size: 28px;
        color: var(--white);
      }

      .btn__container {
        margin-top: 20px;
      }

      button {
        border: none;
        background-color: transparent;
        width: 250px;
        font-size: 18px;
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
        height: 550%;
      }
    }

    .right {
      //estilos do container right
      margin: 0;
      background-color: var(--primary-color);
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50%;
      height: 100%;

      //faz o efeito arredondado no container
      mask-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8c3ZnIHZpZXdCb3g9IjAgMCAyMDAgMjAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxwYXRoIGZpbGw9IiMwMEZGNzQiIGQ9Ik01OC45LC0yMC41QzY0LjcsLTEuNSw0OS41LDIyLjksMjkuNywzNi4zQzkuOCw0OS42LC0xNC44LDUyLC0zNS41LDM5LjJDLTU2LjIsMjYuNSwtNzIuOSwtMS4zLC02Ni40LC0yMS40Qy01OS44LC00MS41LC0yOS45LC01My45LC0xLjYsLTUzLjRDMjYuNiwtNTIuOSw1My4yLC0zOS40LDU4LjksLTIwLjVaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDAgMTAwKSIgLz4KPC9zdmc+Cg==);
      mask-repeat: no-repeat;
      mask-size: 545px;
      mask-position: center;

      img {
        width: 270px;
        height: 270px;
      }
    }
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-around;
    width: 100vw;
    height: 70vh;

    .left {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: justify;
      width: 50%;
      height: 100%;
      padding: 0px 20px;

      h2 {
        height: 20vh;
      }

      h1,
      h2,
      span {
        font-size: 20px;
        color: var(--white);
      }

      .btn__container {
        /* margin-top: 20px; */
      }

      button {
        border: none;
        background-color: transparent;
        width: 250px;
        font-size: 16px;
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
        height: 550%;
      }
    }

    .right {
      //estilos do container right
      margin: 0;
      background-color: var(--primary-color);
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50%;
      height: 100%;

      //faz o efeito arredondado no container
      mask-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8c3ZnIHZpZXdCb3g9IjAgMCAyMDAgMjAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxwYXRoIGZpbGw9IiMwMEZGNzQiIGQ9Ik01OC45LC0yMC41QzY0LjcsLTEuNSw0OS41LDIyLjksMjkuNywzNi4zQzkuOCw0OS42LC0xNC44LDUyLC0zNS41LDM5LjJDLTU2LjIsMjYuNSwtNzIuOSwtMS4zLC02Ni40LC0yMS40Qy01OS44LC00MS41LC0yOS45LC01My45LC0xLjYsLTUzLjRDMjYuNiwtNTIuOSw1My4yLC0zOS40LDU4LjksLTIwLjVaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDAgMTAwKSIgLz4KPC9zdmc+Cg==);
      mask-repeat: no-repeat;
      mask-size: 445px;
      mask-position: center;

      img {
        width: 270px;
        height: 210px;
      }
    }
  }

  @media (min-width: 500px) {
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 70vh;

    .left {
      display: none !important;
    }

    .right {
      //estilos do container right
      margin: 0;
      background-color: var(--primary-color);
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50%;
      height: 100%;

      //faz o efeito arredondado no container
      mask-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8c3ZnIHZpZXdCb3g9IjAgMCAyMDAgMjAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxwYXRoIGZpbGw9IiMwMEZGNzQiIGQ9Ik01OC45LC0yMC41QzY0LjcsLTEuNSw0OS41LDIyLjksMjkuNywzNi4zQzkuOCw0OS42LC0xNC44LDUyLC0zNS41LDM5LjJDLTU2LjIsMjYuNSwtNzIuOSwtMS4zLC02Ni40LC0yMS40Qy01OS44LC00MS41LC0yOS45LC01My45LC0xLjYsLTUzLjRDMjYuNiwtNTIuOSw1My4yLC0zOS40LDU4LjksLTIwLjVaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDAgMTAwKSIgLz4KPC9zdmc+Cg==);
      mask-repeat: no-repeat;
      mask-size: 345px;
      mask-position: center;

      img {
        width: 220px;
        height: 170px;
      }
    }
  }

  @media (min-width: 425px) {
    width: 100vw;
    height: 70vh;

    .left {
      display: none !important;
    }

    .right {
      //estilos do container right
      margin: 0;
      background-color: var(--primary-color);
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      
      //faz o efeito arredondado no container
      mask-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8c3ZnIHZpZXdCb3g9IjAgMCAyMDAgMjAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxwYXRoIGZpbGw9IiMwMEZGNzQiIGQ9Ik01OC45LC0yMC41QzY0LjcsLTEuNSw0OS41LDIyLjksMjkuNywzNi4zQzkuOCw0OS42LC0xNC44LDUyLC0zNS41LDM5LjJDLTU2LjIsMjYuNSwtNzIuOSwtMS4zLC02Ni40LC0yMS40Qy01OS44LC00MS41LC0yOS45LC01My45LC0xLjYsLTUzLjRDMjYuNiwtNTIuOSw1My4yLC0zOS40LDU4LjksLTIwLjVaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDAgMTAwKSIgLz4KPC9zdmc+Cg==);
      mask-repeat: no-repeat;
      mask-size: 445px;
      mask-position: left;

      img {
        width: 240px;
        height: 210px;
      }
    }
  }

  @media (min-width: 375px) {
    width: 100vw;
    height: 70vh;

    .left {
      display: none !important;
    }

    .right {
      margin: 0;
      background-color: var(--primary-color);
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;

      //faz o efeito arredondado no container
      mask-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8c3ZnIHZpZXdCb3g9IjAgMCAyMDAgMjAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxwYXRoIGZpbGw9IiMwMEZGNzQiIGQ9Ik01OC45LC0yMC41QzY0LjcsLTEuNSw0OS41LDIyLjksMjkuNywzNi4zQzkuOCw0OS42LC0xNC44LDUyLC0zNS41LDM5LjJDLTU2LjIsMjYuNSwtNzIuOSwtMS4zLC02Ni40LC0yMS40Qy01OS44LC00MS41LC0yOS45LC01My45LC0xLjYsLTUzLjRDMjYuNiwtNTIuOSw1My4yLC0zOS40LDU4LjksLTIwLjVaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDAgMTAwKSIgLz4KPC9zdmc+Cg==);
      mask-repeat: no-repeat;
      mask-size: 395px;
      mask-position: left;

      img {
        width: 200px;
        height: 190px;
      }
    }
  }
`;
