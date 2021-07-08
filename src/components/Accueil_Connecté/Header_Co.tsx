import "../App.tsx";
import "../../styles/style_Header.css";
import logo_text from "../../assets/Logo_texte_white.png";
import { Link } from "react-router-dom";
import { logout } from "../../adapters/ConnectionManagement/signInAdapter";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function Header_Co() {
  const [err, setErr] = useState(``);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await logout()
      .then(() => history.push("/"))
      .catch(() => setErr("Erreur dans la déconnexion"));
  };
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top menu">
        <div className="container-fluid ">
          <a href="/accueil" className="navbar-brand">
            <img
              src={logo_text}
              height="50"
              alt="CoolBrand"
              className="logo_text"
            />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto "></ul>
            <ul className="navbar-nav nav-flex-icons">
              <li className="nav-item active">
                <a className="nav-link" href="!#">
                  <Link className="linktest dropdown-item" to="/annonces">
                    Voir les annonces
                  </Link>
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="!#">
                  <Link
                    className="linktest dropdown-item"
                    to="/creation-annonce"
                  >
                    Déposer une annonce
                  </Link>
                </a>
              </li>
            </ul>
            <div>
              <button
                type="button"
                className="btn btn btn-outline-light dropdown-toggle"
                id="deroulant"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                data-display="static"
              >
                <i className="far fa-user-circle"></i>
              </button>

              <div
                className="dropdown-menu dropdown-menu-md-right labelMenu"
                aria-labelledby="deroulant"
              >
                <Link className="linktest dropdown-item" to="/profil">
                  Mon profil
                </Link>
                <form onSubmit={handleSubmit}>
                  <button className="dropdown-item" type="submit">
                    Se déconnecter
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header_Co;
