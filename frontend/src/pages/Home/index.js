import React, { useState } from "react";
import { PageArea, SearchArea } from "./styled";
import { PageContainer } from "../../components/MainComponents";

import useApi from "../../helpers/OlxAPI";

export default function Page() {
  const api = useApi();

  return (
    <>
      <SearchArea>
        <PageContainer>
          <div className="searchBox">
            <form method="GET" action="/ads">
              <input type="text" name="q" placeholder="O que você procura?" />
              <select name="state">

              </select>
              <button>Pesquisar</button>
            </form>
          </div>
          <div className="categoryList">
          
          </div> 
        </PageContainer>
      </SearchArea>
      <PageContainer>
        <PageArea>...</PageArea>
      </PageContainer>
    </>
  );
}