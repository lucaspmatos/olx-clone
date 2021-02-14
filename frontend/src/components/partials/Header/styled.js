import styled from "styled-components";

export const HeaderArea = styled.div`
  background-color: white;
  height: 60px;
  border-bottom: 1px solid #ccc;

  .container {
    max-width: 1000px;
    margin: auto;
    display: flex;
  }

  a {
    text-decoration: none;
  }

  .logo {
    flex: 1;
    display: flex;
    align-items: center;
    height: 60px;
    margin-left: 10px;
    font-family: 'Nunito';

    .logo-1,
    .logo-2,
    .logo-3 {
      font-size: 27px;
      font-weight: 900;
    }

    .logo-1 {
      color: #ff007f;
    }
    .logo-2 {
      color: lightgreen;
    }
    .logo-3 {
      color: purple;
    }
  }

  nav {
    padding-top: 10px;
    padding-bottom: 10px;

    ul,
    li {
      margin: 0;
      padding: 0;
      list-style: none;
    }

    ul {
      display: flex;
      align-items: center;
      height: 40px;
    }

    li {
      margin-left: 20px;
      margin-right: 20px;

      a {
        color: black;
        font-size: 14px;
        text-decoration: none;

        &:hover {
          color: #999;
        }

        &.button {
          background-color: #FF8100;
          border-radius: 25px;
          color: white;
          padding: 5px 10px;
          font-weight: bold;
        }

        &.button:hover {
          background-color: #E57706;
        }
      }
    }
  }
`;
