import styled from "styled-components";

export const Container = styled.div`
  @media (min-width: 375px) {
    position: absolute;
    top: 80px;
    left: 225px;
    background-color: var(--white);
    z-index: 1;

    ul {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      gap: 10px;
      width: 150px;

      li {
        text-align: center;
      }

      li:hover {
        background-color: var(--black-2);
      }

      a {
        color: var(--black-1);
        font-weight: bold;
      }
    }
  }

  @media (min-width: 768px) {
    position: absolute;
    top: 81px;
    left: 618px;
    background-color: var(--white);
    z-index: 1;

    ul {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      gap: 10px;
      width: 150px;

      li {
        text-align: center;
      }

      li:hover {
        background-color: var(--black-2);
      }

      a {
        color: var(--black-1);
        font-weight: bold;
      }
    }
  }

  @media (min-width: 1024px) {
    position: absolute;
    top: 79px;
    left: 0px;
    background-color: var(--white);
    z-index: 1;
    display: none;

    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 107vw;
      height: 102vh;

      li {
        text-align: center;
        padding: 10px;
        width: 107vw;
      }

      li:hover {
        background-color: var(--black-2);
      }

      a {
        color: var(--black-1);
        font-weight: bold;
      }
    }
  }

  @media (min-width: 1364px) {
    display: ${(props) => (props.isOpen ? "none" : "block")};

    ul {
      li {
      }

      a {
      }
    }
  }
`;
