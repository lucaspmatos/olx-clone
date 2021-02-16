import React, { useState, useEffect } from "react";
import { PageArea, SearchArea } from "./styled";
import { PageContainer } from "../../components/MainComponents";

import useApi from "../../helpers/OlxAPI";
import { Link } from "react-router-dom";

export default function Page() {
  const api = useApi();

  const [stateList, setStateList] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getStates = async () => {
      const sList = await api.getStates();
      setStateList(sList);
    };
    getStates();
  }, []);

  useEffect(() => {
    const getCategories = async () => {
      const categories = await api.getCategories();
      setCategories(categories);
    };
    getCategories();
  }, []);

  return (
    <>
      <SearchArea>
        <PageContainer>
          <div className="searchBox">
            <form method="GET" action="/ads">
              <input type="text" name="q" placeholder="O que você procura?" />
              <select name="state">
              <option>Estado</option>
                {stateList.map((i, k) => (
                  <option key={k} value={i.name}>{i.name}</option>
                ))}
              </select>
              <button>Pesquisar</button>
            </form>
          </div>
          <div className="categoryList">
          {categories.map((i, k) => (
            <Link key={k} to={`/ads?category=${i.slug}`} className="category">
              <img src={i.img} alt="" />
              <span>{i.name}</span>
            </Link>
          ))}
          </div>
        </PageContainer>
      </SearchArea>
      <PageContainer>
        <PageArea>...</PageArea>
      </PageContainer>
    </>
  );
}
