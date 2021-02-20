import styled from "styled-components";

export const PageArea = styled.div`
  form {
    background-color: white;
    border-radius: 5px;
    padding: 10px;
    box-shadow: 0px 0px 3px #999;
  }

  .area {
    display: flex;
    align-items: center;
    padding: 10px;
    max-width: 600px;

    .area-title {
      width: 200px;
      text-align: right;
      padding-right: 20px;
      font-weight: bold;
      font-size: 14px;
    }

    .area-input {
      flex: 1;

      input, select, textarea {
        width: 100%;
        font-size: 14px;
        padding: 5px;
        border: 1px solid #ddd;
        border-radius: 5px;
        outline: 0;
        transition: all ease 0.4s;

        font-family: 'Nunito Sans';

        &:focus {
          border: 1px solid #333;
          color: #333;
        }
      }

      textarea {
        height: 150px;
        resize: none;
      }

      button {
        background-color: #F78323;
        border: 0;
        outline: 0;
        padding: 5px 10px;
        border-radius: 25px;
        color: white;
        font-size: 14px;
        cursor: pointer;
        font-family: "Nunito";
        font-weight: 600;

        &:hover {
          background-color: #F99D53;
        }
      }
    }
  }

  @media (max-width: 600px) {
    form {
      .area {
        flex-direction: column;

        .area-title {
          width: 100%;
          text-align: left;
          margin-bottom: 3px;
        }

        .area-input {
          width: 100%;

          button {
            width: 100%;
            padding: 10px;
          }
        }
      }
    }
  }
`;
