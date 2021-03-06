//@ts-nocheck
import React, { useEffect, useState } from "react";
import "../../styles/style_Reservation.css";
import Footer from "../Accueil/Footer";
import Header from "../Accueil_Connecté/Header_Co";
import gardenbgcard from "../../assets/jardin_reservation.jpg";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

import {
  getEvenementById,
  reservationCreneau,
} from "../../adapters/EvenementManagement/evenementAdapter";

function Details_Annonce() {
  const { id } = useParams();
  const [activity, setActivity] = useState(``);
  const [idCreneauSelected, setIdCreneauSelected] = useState(``);

  const history = useHistory();

  const [err, setErr] = useState(``);

  useEffect(() => {
    const fetchLands = async () => {
      const response = await getEvenementById(id);
      setActivity(response.data);
    };
    fetchLands();
  }, []);

  const handleChange = (e, name) => {
    const reservation = {};

    reservation[name] = e.target.value;

    switch (name) {
      case `selectCreneau`:
        setIdCreneauSelected(reservation.selectCreneau);
        break;
    }
  };

  const handleReservation = async (e) => {
    e.preventDefault();
    const idCren = idCreneauSelected.split("|")[0];
    const date = idCreneauSelected.split("|")[1];
    const hour = idCreneauSelected.split("|")[2];

    await reservationCreneau(id, {
      idCreneau: idCren,
      startOfDay: date,
      startOfHour: hour,
    })
      .then(() => history.push("/annonces"))
      .catch(() => setErr("Erreur dans la réservation"));
  };
  return (
    <div>
      {<Header />}

      <div className="container contain_reservation">
        <div className="row">
          <div className=" col-lg-12 col-md-12 col-sm-12" id="chiffres">
            <div className="text-center">
              <div>
                <h1>Annonce</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <form onSubmit={handleReservation}>
        <div className="formCreate" id="formCreateAnnonceId">
          <section className="form my-4 mx-5">
            <div className="container">
              <div className="row py-5 d-flex flex-wrap rowCreateAnnonce">
                <div className="col-lg-5 col-md">
                  <img
                    src={gardenbgcard}
                    className="img-fluid img_reservation"
                    alt="imgForest"
                  />
                </div>

                <div className="col-lg-7 px-5 formCreateAnnonce text-center">
                  <h4>
                    <b>
                      <i>{activity.label}</i>
                    </b>
                  </h4>

                  <br></br>
                  <h5>DESCRIPTION</h5>
                  <hr className="mb-5" />
                  <p>{activity.description}</p>
                  <h5>CHOISIR MON CRENEAU</h5>
                  <hr className="mb-5" />
                  <select
                    className="form-control rounded-pill my-3"
                    id="selectCreneau"
                    required
                    onChange={(e) => handleChange(e, `selectCreneau`)}
                  >
                    <option></option>
                    {activity.disponibility &&
                      activity.disponibility.map((dispo) => (
                        <option
                          key={dispo._id}
                          value={`${dispo._id}|${dispo.startOfDay}|${dispo.startOfHour}`}
                        >
                          {dispo.startOfDay} {dispo.startOfHour}
                        </option>
                      ))}
                  </select>
                  <div className="text-center">
                    <button type="submit" className="btn1 mt-3 mb-5">
                      Valider
                    </button>
                  </div>
                  <div className="headings"></div>
                </div>
                <div className="text-center">
                  <div className="headings"></div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {<Footer />}
      </form>
    </div>
  );
}

export default Details_Annonce;
