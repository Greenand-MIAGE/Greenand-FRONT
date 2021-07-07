//@ts-nocheck
import { useState } from "react";
import classnames from "classnames";
import { createLand } from "../../adapters/LandManagement/landAdapter";

import "../../styles/style_Accueil.css";

function Form_ajout_terre() {
  const [street, setStreet] = useState(``);
  const [city, setCity] = useState(``);
  const [postalCode, setPostalCode] = useState(``);
  const [surface, setSurface] = useState(``);

  const [streetErr, setStreetErr] = useState(``);
  const [cityErr, setCityErr] = useState(``);
  const [postalCodeErr, setPostalCodeErr] = useState(``);
  const [surfaceErr, setSurfaceErr] = useState(``);

  const handleChange = (e, name) => {
    const land = {};

    land[name] = e.target.value;

    switch (name) {
      case `street`:
        setStreet(land.street);

        if (land.street.length < 2) {
          setStreetErr("La rue doit contenir 2 caractères au minimum");
        } else if (land.street.length > 75) {
          setStreetErr("La rue doit contenir 75 caractères au maximum");
        } else {
          setStreetErr("");
        }
        break;
      case `city`:
        setCity(land.city);

        if (land.city.length < 2) {
          setCityErr("La ville doit contenir 2 caractères au minimum");
        } else if (land.city.length > 75) {
          setCityErr("La ville doit contenir 75 caractères au maximum");
        } else {
          setCityErr("");
        }
        break;
      case `postalCode`:
        setPostalCode(land.postalCode);

        if (land.postalCode < 0) {
          setPostalCodeErr("Code postal incorrect");
        } else if (land.postalCode > 99999) {
          setPostalCodeErr("Code postal incorrect");
        } else {
          setPostalCodeErr("");
        }
        break;
      case `surface`:
        setSurface(land.surface);
        land.surface < 0
          ? setSurfaceErr("Surface négative interdite.")
          : setSurfaceErr("");
        break;
    }
  };

  const HandleSubmitLand = async (e) => {
    e.preventDefault();

    if (
      street &&
      city &&
      postalCode &&
      surface &&
      !streetErr &&
      !cityErr &&
      !postalCodeErr &&
      !surfaceErr
    ) {
      await createLand({ street, city, postalCode, surface });
    }
  };

  return (
    <div>
      <div className="container-fluid">
        <div>
          <button
            className="btn btn-outline-success btn"
            id="ajoutTerre_button"
            type="button"
            data-toggle="modal"
            data-target="#modal1"
          >
            {" "}
            Ajouter une terre
          </button>
        </div>
        <form onSubmit={HandleSubmitLand}>
          <div
            className="modal fade"
            id="modal1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalCenterTitle">
                    Ajouter une terre
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>

                <div className="modal-body">
                  <div className="form-group">
                    <label htmlFor="adresse" className="form-label">
                      Rue *
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="modal1"
                      name="street"
                      aria-describedby="adresse"
                      placeholder="Adresse"
                      required
                      onChange={(e) => handleChange(e, "street")}
                    />
                    {streetErr && (
                      <small className="text-danger">{streetErr}</small>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="commune">Commune * </label>
                    <input
                      type="text"
                      name="city"
                      className="form-control"
                      id="exampleCommune"
                      placeholder="Commune"
                      required
                      onChange={(e) => handleChange(e, "city")}
                    />
                    {cityErr && (
                      <small className="text-danger">{cityErr}</small>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="codepostal">Code postal *</label>
                    <input
                      type="number"
                      name="postalCode"
                      className="form-control"
                      id="examplecodepostal"
                      placeholder="Code postal"
                      required
                      onChange={(e) => handleChange(e, "postalCode")}
                    />
                    {postalCodeErr && (
                      <small className="text-danger">{postalCodeErr}</small>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="commune"> Surface* (m²) </label>
                    <input
                      type="number"
                      name="surface"
                      min="1"
                      className={classnames("form-control", {
                        "is-invalid": surfaceErr,
                        "is-valid": !surfaceErr && surface.length,
                      })}
                      id="exampleSurface"
                      placeholder="Surface"
                      required
                      onChange={(e) => handleChange(e, "surface")}
                    />
                    {surfaceErr && (
                      <small className="text-danger">{surfaceErr}</small>
                    )}
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-dismiss="modal"
                  >
                    Fermer
                  </button>
                  <button
                    type="submit"
                    className="btn btn-success"
                    disabled={
                      cityErr || postalCodeErr || streetErr || surfaceErr
                    }
                  >
                    Ajouter
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form_ajout_terre;
