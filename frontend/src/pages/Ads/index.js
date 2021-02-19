import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { PageArea } from "./styled";
import { PageContainer } from "../../components/MainComponents";
import AdItem from "../../components/partials/AdItem";

import useApi from "../../helpers/OlxAPI";

let timer;

export default function Page() {
  const api = useApi();
  const history = useHistory();
  
  const useQueryString = () => {
    return new URLSearchParams(useLocation().search);
  };

  const qs = useQueryString();

  const [query, setQuery] = useState(qs.get("q") !== null ? qs.get("q") : "");
  const [category, setCategory] = useState(
    qs.get("category") !== null ? qs.get("category") : ""
  );
  const [state, setState] = useState(
    qs.get("state") !== null ? qs.get("state") : ""
  );

  const [stateList, setStateList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [adList, setAdList] = useState([]);

  const [resultOpacity, setResultOpacity] = useState(1);

  const getAdsList = async () => {
    const json = await api.getAds({
      sort: "asc",
      limit: 9,
      query,
      category,
      state,
    });
    setAdList(json.ads);
    setResultOpacity(1);
  };

  useEffect(() => {
    let queryString = [];

    if (query) {
      queryString.push(`q=${query}`);
    }

    if (category) {
      queryString.push(`category=${category}`);
    }

    if (state) {
      queryString.push(`state=${state}`);
    }

    history.replace({
      search: `${queryString.join("&")}`,
    });

    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(getAdsList, 2000);
    setResultOpacity(0.2);

    getAdsList();
  }, [query, category, state]);

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
      <PageContainer>
        <PageArea>
          <div className="leftSide">
            <form method="GET">
              <input
                type="text"
                name="q"
                placeholder="O que você procura?"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <div className="filterName">Estado</div>
              <select
                name="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
              >
                <option>Selecione o estado</option>
                {stateList.map((i, k) => (
                  <option key={k} value={i.name}>
                    {i.name}
                  </option>
                ))}
              </select>
              <div className="filterName">Categoria</div>
              <ul>
                {categories.map((i, k) => (
                  <li
                    key={k}
                    className={
                      category === i.slug ? "category active" : "category"
                    }
                    onClick={() => setCategory(i.slug)}
                  >
                    <img src={i.img} alt="" />
                    <span>{i.name}</span>
                  </li>
                ))}
              </ul>
            </form>
          </div>
          <div className="rightSide">
            <h2>Resultados</h2>
            <div className="list" style={{opacity: resultOpacity}}>
              {adList.map((i, k) => (
                <AdItem key={k} data={i} />
              ))}
            </div>
          </div>
        </PageArea>
      </PageContainer>
    </>
  );
}
