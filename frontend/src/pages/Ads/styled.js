import styled from "styled-components";

export const PageArea = styled.div`
  display: flex;
  margin-top: 20px;

  .leftSide {
    width: 250px;
    margin-right: 10px;

    .filterName {
      font-size: 15px;
      margin: 10px 0;
    }

    input,
    select {
      width: 100%;
      height: 40px;
      border: 2px solid #9bb83c;
      border-radius: 5px;
      outline: 0;
      font-size: 15px;
      color: black;
      padding: 10px;
    }

    ul,
    li {
      margin: 0;
      padding: 0;
      list-style: none;
    }

    .category {
      display: flex;
      align-items: center;
      padding: 10px;
      border-radius: 5px;
      color: black;
      cursor: pointer;

      img {
        width: 25px;
        height: 25px;
        margin-right: 5px;
      }

      span {
        font-size: 14px;
      }
    }

    .category:hover,
    .category.active {
      background-color:#9BB83C;
      color: white;
    }
  }

  .rightSide {
    flex: 1;

    h2 {
      margin-top: 0;
      font-size: 18px;
    }

    .listWarning {
      padding: 30px;
      text-align: center;
    }

    .list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .adItem {
        width: 32%;
      }
    }

    .pagination {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 10px 0;

      .page {
        width: 30px;
        height: 30px;
        border: 1px solid #000;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        margin-right: 5px;
        border-radius: 5px;
      }
    }
  }
`;
