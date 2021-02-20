import styled from "styled-components";

export const SearchArea = styled.div`
  background-color: #ddd;
  border-bottom: 1px solid #ccc;
  padding: 20px 0;

  .searchBox {
    background-color: #9bb83c;
    padding: 20px 15px;
    border-radius: 5px;
    box-shadow: 1px 1px 1px 0.3px rgba(0, 0, 0, 0.2);
    display: flex;

    form {
      flex: 1;
      display: flex;

      input,
      select {
        height: 40px;
        border: 0;
        border-radius: 5px;
        outline: 0;
        font-size: 15px;
        color: black;
        margin-right: 15px;
        font-family: "Nunito Sans";
      }

      input {
        flex: 1;
        padding: 0 10px;
      }

      select {
        width: 100px;
      }

      button {
        background-color: #49aeef;
        font-size: 15px;
        border: 0;
        border-radius: 5px;
        color: white;
        padding: 0 20px;
        cursor: pointer;
        font-family: "Nunito Sans";
        font-weight: 600;
      }
    }
  }

  .categoryList {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;

    .category {
      width: 25%;
      display: flex;
      align-items: center;
      color: black;
      text-decoration: none;
      height: 50px;
      margin-bottom: 10px;

      &:hover {
        color: #999;
      }

      img {
        width: 45px;
        height: 45px;
        margin-right: 10px;
      }
    }
  }

  @media (max-width: 600px) {
    .searchBox form {
      flex-direction: column;

      input {
        padding: 10px;
        margin-right: 0;
        margin-bottom: 10px;
      }

      select {
        width: 100%;
        margin-bottom: 10px;
      }

      button {
        padding: 10px;
      }
    }

    .categoryList .category {
      width: 50%;
      padding: 10px;
    }
  }
`;

export const PageArea = styled.div`
  h2 {
    font-size: 20px;
  }

  .list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .adItem {
      width: 24%;
    }
  }

  .allAds {
    color: black;
    text-decoration: none;
    font-weight: bold;
    display: inline-block;
    margin-top: 10px;
  }

  @media (max-width: 600px) {
    margin: 10px;
    
    h2 {
      text-align: center;
    }

    .list .adItem {
      width: 49%;
    }

    .allAds {
      width: 100%;
      text-align: center;
      margin: 5px;
    }
  }
`;
