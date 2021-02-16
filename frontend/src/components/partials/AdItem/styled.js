import styled from "styled-components";

export const Item = styled.div`
  a {
    display: block;
    text-decoration: none;
    margin-bottom: 12px;
    padding: 10px;
    border-radius: 5px;
    background-color: white;
    color: black;
    box-shadow: 1px 1px 1px 0.3px rgba(0, 0, 0, 0.2);
    transition: all ease 0.2s;

    &:hover {
      background-color: #eee;
      border: 1px solid #ccc;
    }

    .itemImage img {
      width: 100%;
      border-radius: 5px;
    }

    .itemName {
      font-weight: bold;
    }
  }
`;
