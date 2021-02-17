import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { PageArea } from "./styled";
import MaskedInput from "react-text-mask";
import createNumberMask from "text-mask-addons/dist/createNumberMask";
import {
  PageContainer,
  PageTitle,
  ErrorMessage,
} from "../../components/MainComponents";

import useApi from "../../helpers/OlxAPI";

export default function Page() {
  const api = useApi();
  const fileField = useRef();
  const history = useHistory();

  const [categories, setCategories] = useState([]);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [priceNegotiable, setPriceNegotiable] = useState(false);
  const [description, setDescription] = useState("");

  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getCategories = async () => {
      const cats = await api.getCategories();
      setCategories(cats);
    };
    getCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisabled(true);
    setError("");

    let errors = [];

    if (!title.trim()) {
      errors.push("Não é permitido anúncio sem título!");
    }

    if (!category) {
      errors.push("É obrigatório ter uma categoria para o anúncio.");
    }

    if (errors.length === 0) {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("price", price);
      formData.append("priceneg", priceNegotiable);
      formData.append("desc", description);
      formData.append("cat", category);

      const existImage = fileField.current.files.length;

      if (existImage > 0) {
        const images = fileField.current.files;

        for (let i = 0; i < images.length; i += 1) {
          formData.append('img', images.item(i));
        }
      }

      const json = await api.postAd(formData);

      if (!json.error) {
        history.push(`/ad/${json.id}`);
        return;
      } else {
        setError(json.error);
      }
      
    } else {
      setError(errors.join("\n"));
    }

    setDisabled(false);
  };

  const priceMask = createNumberMask({
    prefix: "R$ ",
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: ".",
    allowDecimal: true,
    decimalSymbol: ",",
  });

  return (
    <PageContainer>
      <PageTitle>Poste um anúncio</PageTitle>
      <PageArea>
        {error && <ErrorMessage>{error}</ErrorMessage>}

        <form onSubmit={handleSubmit}>
          <label className="area">
            <div className="area-title">Título</div>
            <div className="area-input">
              <input
                type="text"
                disabled={disabled}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
          </label>
          <label className="area">
            <div className="area-title">Categoria</div>
            <div className="area-input">
              <select
                disabled={disabled}
                onChange={(e) => setCategory(e.target.value)}
                required
              >
                <option>Selecione uma opção</option>
                {categories &&
                  categories.map((i) => (
                    <option key={i._id} value={i._id}>
                      {i.name}
                    </option>
                  ))}
              </select>
            </div>
          </label>
          <label className="area">
            <div className="area-title">Preço</div>
            <div className="area-input">
              <MaskedInput
                mask={priceMask}
                placeholder="R$ "
                disabled={disabled || priceNegotiable}
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </label>
          <label className="area">
            <div className="area-title">Preço Negociável</div>
            <div className="area-input">
              <input
                type="checkbox"
                disabled={disabled}
                checked={priceNegotiable}
                onChange={(e) => setPriceNegotiable(!priceNegotiable)}
              />
            </div>
          </label>
          <label className="area">
            <div className="area-title">Descrição</div>
            <div className="area-input">
              <textarea
                disabled={disabled}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
          </label>
          <label className="area">
            <div className="area-title">Imagens (1 ou mais)</div>
            <div className="area-input">
              <input type="file" disabled={disabled} ref={fileField} multiple />
            </div>
          </label>
          <label className="area">
            <div className="area-title"></div>
            <div className="area-input">
              <button disabled={disabled}>Enviar anúncio</button>
            </div>
          </label>
        </form>
      </PageArea>
    </PageContainer>
  );
}
