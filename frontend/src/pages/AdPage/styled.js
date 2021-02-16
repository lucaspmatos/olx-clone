import styled from "styled-components";

export const Fake = styled.div`
  background-color: #ddd;
  height: ${(props) => props.height || 20}px;
`;

export const PageArea = styled.div`
  display: flex;
  margin-top: 20px;

  .box {
    background-color: white;
    border-radius: 5px;
    box-shadow: 0px 0px 4px #999;
    margin-bottom: 20px;
  }

  .box-padding {
    padding: 10px;
  }

  .leftSide {
    flex: 1;
    margin-right: 20px;

    .box {
      display: flex;
    }

    .adImage {
      width: 320px;
      height: 320px;
      margin-right: 20px;

      .each-slide img {
        display: flex;
        align-items: center;
        justify-content: center;
        background-size: cover;
        height: 320px;

        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
      }
    }

    .adInfo {
      flex: 1;
      margin-right: 15px;
      margin-bottom: 15px;

      .adName {
        margin-bottom: 20px;

        h2 {
          margin: 0;
          margin-top: 20px;
        }

        small {
          color: #999;
        }
      }

      .adDescription {
        small {
          color: #999;
        }
      }
    }
  }

  .rightSide {
    width: 250px;

    .price span {
      color: blue;
      display: block;
      font-size: 27px;
      font-weight: bold;
    }

    .sellerLink {
      background-color: blue;
      color: white;
      height: 30px;
      border-radius: 25px;
      font-weight: bold;
      box-shadow: 0px 0px 4px #999;

      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      margin-bottom: 20px;
    }

    .created-by small {
      display: block;
      color: #999;
      margin-top: 10px;
    }
  }
`;

export const OthersArea = styled.div`
  display: flex;
  flex-direction: column;

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
`;

export const BreadCrumb = styled.div`
  font-size: 13px;
  margin-top: 20px;

  a {
    display: inline-block;
    margin: 0px 5px;
    text-decoration: underline;
    color: black;
  }
`;
