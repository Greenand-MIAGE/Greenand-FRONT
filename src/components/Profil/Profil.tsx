//@ts-nocheck
import React, { useState } from "react";
import "../../styles/style_Profil.css";
import profile from "../../assets/madame.jpg";
import FormTerre from "./Form_ajout_terre";
import { useEffect } from "react";
import { getClientById } from "../../adapters/ClientManagement";

function Profil() {
  const [client, setClient] = useState("");

  useEffect(() => {
    const fetchClients = async () => {
      const response = await getClientById();
      setClient(response.data);
    };
    fetchClients();
  }, []);

  return (
    <div className="container emp-profile">
      <div className="row">
        <div className="col-md-4">
          <div className="profile-img">
            <img className="card-img-profile" src={profile} alt="..." />
            <div className="file btn btn-lg btn-primary">
              Changer de Photo
              <input type="file" name="file" />
            </div>
            <div className="card1">
              <button
                type="button"
                className="btn-btn-secondary"
                data-mdb-toggle="popover"
                title="Toto a fourni les informations nécessaires pour confirmer son identité."
                data-mdb-content="Test Pop Up !"
              >
                <div className="card2">
                  <span className="icon-check">
                    <svg
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                      height="25"
                      width="25"
                    >
                      <path d="M16 .798l.555.37C20.398 3.73 24.208 5 28 5h1v12.5C29 25.574 23.21 31 16 31S3 25.574 3 17.5V5h1c3.792 0 7.602-1.27 11.445-3.832L16 .798zm0 2.394l-.337.213C12.245 5.52 8.805 6.706 5.352 6.952L5 6.972V17.5c0 6.831 4.716 11.357 10.713 11.497L16 29c6.133 0 11-4.56 11-11.5V6.972l-.352-.02c-3.453-.246-6.893-1.432-10.311-3.547L16 3.192zm7 7.394L24.414 12 13.5 22.914 7.586 17 9 15.586l4.5 4.499 9.5-9.5z"></path>
                    </svg>
                    <span className="phrase-check" id="verif_id">
                      Identité vérifiée
                    </span>
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="profile-head">
            <h5>{(client.lastName)} {client.firstName}</h5>
            <h6>{client.profession}</h6>
            <br></br>
            <p className="proile-rating">
              <span>Membre depuis {client.createdAt }</span>
            </p>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="home-tab"
                  data-toggle="tab"
                  href="#home"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  Informations personnelle
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-2">
          <input
            type="submit"
            className="profile-edit-btn"
            name="btnAddMore"
            value="Modifier"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="profile-work">
            <h4 className="txt-confirmation">
            </h4>
            <p className="verif">
              <b>
                <span>&#10003;</span>
              </b>{" "}
              Identité
            </p>
            <p className="verif">
              <b>
                <span>&#10003;</span>
              </b>{" "}
              Adresse e-mail
            </p>
            <p className="verif">
              <b>
                <span>&#10003;</span>
              </b>{" "}
              Numéro de téléphone
            </p>
            <br></br>
            <div className="bloc-bouton">
              <ol>{<FormTerre />}</ol>
              <ol>
                <button
                  type="button"
                  className="btn btn-outline-success btn"
                  id="lsterres"
                >
                  {" "}
                  Liste de mes terres
                </button>
              </ol>
              <ol>
                <button type="button" className="btn btn-outline-success btn">
                  {" "}
                  Liste de mes annonces
                </button>
              </ol>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="tab-content profile-tab" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <div className="row">
                <div className="col-md-6">
                  <label>Nom: </label>
                </div>
                <div className="col-md-6">
                  <p>{client.lastName}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>Prénom: </label>
                </div>
                <div className="col-md-6">
                  <p>{client.firstName}</p>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <label>Adresse email: </label>
                </div>
                <div className="col-md-6">
                  <p>{client.mail}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>Adresse postale: </label>
                </div>
                <div className="col-md-6">
                  <p>
                    {client.street}, {client.city}, {client.postalCode}
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>Téléphone: </label>
                </div>
                <div className="col-md-6">
                  <p>{client.phone}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>Profession: </label>
                </div>
                <div className="col-md-6">
                  <p>{client.profession}</p>
                </div>
              </div>
              <br></br>
              <div className="row">
                <div className="col-md-6">
                  <label>Description: </label>
                </div>
                <p>{client.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profil;
