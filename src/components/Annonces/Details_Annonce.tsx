//@ts-nocheck
import React, { useEffect, useState } from "react";
import "../../styles/style_Accueil.css";
import lieu from "../../assets/Garden.jpg";
import Footer from "../Accueil/Footer";
import Popup_Reservation from "./Popup_Reservation";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

import {
  getEvenementById,
  reservationCreneau,
} from "../../adapters/EvenementManagement/evenementAdapter";
import { setServers } from "dns";

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
    console.log(activity);
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

  const reRender = () => {
    this.forceUpdate();
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
      <div className="card" id="cardReservation">
        <form onSubmit={handleReservation}>
          <img src={lieu} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{activity.label}</h5>
            <p className="card-text">{activity.description}</p>
            <select
              id="selectCreneau"
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
              {err && <small className="text-danger">{err}</small>}
            </select>
            <button type="submit">ok</button>
          </div>
        </form>
      </div>
      {<Footer />}
    </div>
  );
}

export default Details_Annonce;
