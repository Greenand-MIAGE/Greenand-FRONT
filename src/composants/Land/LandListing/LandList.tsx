import React, { useState } from "react";
import { Link } from "react-router-dom";
import PopUpEvenement from "../../Evenement/PopUpEvenement";

function LandList(props) {

  const [id, setId] = useState(``);

  return (
    <div>
      {props.lands &&
        props.lands.map((land) => {
          return (
            <div key={land._id}>
              <hr />
              <h3>{land._id}</h3>
              <h3>{land.street}</h3>
              <h3>{land.city}</h3>
              <h3>{land.postalCode}</h3>
              <h3>{land.surface}</h3>
              <h3>{land.client}</h3>
              <div className="container-fluid">
                <button
                  className="btn btn-outline-success"
                  id="connexion_button"
                  type="button"
                  data-toggle="modal"
                  data-target="#modal1"
                  onClick={() => setId(land._id)}
                ></button>
                <div
                  className="modal fade"
                  id="modal1"
                  role="dialog"
                  aria-labelledby="exampleModalCenterTitle"
                  aria-hidden="true"
                >
                  <PopUpEvenement evenement={id}/>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default LandList;
