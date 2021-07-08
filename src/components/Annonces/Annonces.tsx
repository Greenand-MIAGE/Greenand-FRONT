//@ts-nocheck
import React, { useEffect, useState } from "react";

import "../../styles/style_Annonce.css";
import { getEvenements } from "../../adapters/EvenementManagement/evenementAdapter";
import { Link } from "react-router-dom";

function Annonces() {
  const [activities, setActivities] = useState(``);

  const images = [
    "https://mdbootstrap.com/img/new/standard/city/040.jpg",
    "https://mdbootstrap.com/img/new/standard/city/041.jpg",
    "https://mdbootstrap.com/img/new/standard/city/042.jpg",
    "https://mdbootstrap.com/img/new/standard/city/043.jpg",
  ];

  useEffect(() => {
    const fetchActivities = async () => {
      const response = await getEvenements();
      setActivities(response.data);
    };
    fetchActivities();
  }, []);
  return (
    <div className="container-fluid">
      <hr className="mb-5" />
      <div className="row">
        <div className=" col-lg-12 col-md-12 col-sm-12" id="chiffres">
          <div className="text-center">
            <div>
              <h3 className="section-heading text-uppercase" id="text">
                <b>Voici les offres disponibles</b>
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="row py-5"></div>

      <div className="row">
        <div className="col-md-3 clearfix d-none d-md-block">
          {activities &&
            activities.map((activity, id) => (
              <div key={activity._id}>
                <div className="card mb-2">
                  <img
                    className="card-img-top"
                    src={images[Math.floor(Math.random() * 4)]}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h4 className="card-title"> {activity.label}</h4>
                    <p className="card-text">{activity.description}</p>
                    <Link
                      to={`/annonce/${activity._id}`}
                      className="text-success px-3"
                    >
                      {" "}
                      <h6>
                        Découvrir l'annonce{" "}
                        <i className="fas fa-angle-double-right"></i>
                      </h6>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Annonces;
