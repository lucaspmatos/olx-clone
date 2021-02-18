import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { PageArea } from "./styled";
import { PageContainer } from "../../components/MainComponents";
import AdItem from "../../components/partials/AdItem";

import useApi from "../../helpers/OlxAPI";

export default function Page() {
  const api = useApi();

  const useQueryString = () => {
    return new URLSearchParams(useLocation().search);
  }

  const qs = useQueryString();

  const [query, setQuery] = useState(qs.get('q') !== null ? qs.get('q') : '');
  const [category, setCategory] = useState(qs.get('category') !== null ? qs.get('category') : '');
  const [state, setState] = useState(qs.get('state') !== null ? qs.get('state') : '');
 
  const [stateList, setStateList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [adList, setAdList] = useState([]);

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

  useEffect(() => {
    const getRecentAds = async () => {
      const json = await api.getAds({
        sort: "asc",
        limit: 3,
      });
      setAdList(json.ads);
    };
    getRecentAds();
  }, []);

  return (
    <>
    <PageContainer>
      <PageArea>
        <div className="leftSide">
          <form method='GET'>
            <input 
              type="text" 
              name="q" 
              placeholder="O que você procura?"
              value={query}
            />
            <div className="filterName">Estado</div>
            <select name="state" value={state}>
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
              <li key={k} className={category === i.slug ? 'category active' : 'category'}>
                <img src={i.img} alt="" />
                <span>{i.name}</span>
              </li>
            ))}
            </ul>
          </form>
        </div>
        <div className="rightSide">
          ...
        </div>
      </PageArea>
    </PageContainer>
    </>
  );
}
