import React from "react";
import { Link } from "react-router-dom";
import { HeaderArea } from "./styled";

import { isLogged, doLogout } from "../../../helpers/AuthHandler";

export default function Header() {
  let logged = isLogged();

  const handleLogout = () => {
    doLogout();
    window.location.href = "/";
  };

  return (
    <HeaderArea>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <span className="logo-1">O</span>
            <span className="logo-2">L</span>
            <span className="logo-3">X</span>
          </Link>
        </div>
        <nav>
          <ul>
            {logged && (
              <>
                <li>
                  <Link to="/my-account">Minha Conta</Link>
                </li>
                <li>
                  <button onClick={handleLogout}>Sair</button>
                </li>
                <li>
                  <Link to="/post-ad" className="button">
                    Anunciar
                  </Link>
                </li>
              </>
            )}
            {!logged && (
              <>
                <li>
                  <Link to="/sign-in">Login</Link>
                </li>
                <li>
                  <Link to="/sign-up">Cadastrar-se</Link>
                </li>
                <li>
                  <Link to="/sign-in" className="button">
                    Anunciar
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </HeaderArea>
  );
}
