//@ts-nocheck
import React, { useState } from "react";
import classnames from "classnames";
import { createLand } from "../../../adapters/LandManagement/landAdaptater";



function LandCreate() {
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
    if(street && city && postalCode && surface && !streetErr && !cityErr && !postalCodeErr && !surfaceErr ){
        await createLand({street, city, postalCode, surface});
    }
  };
  return (
    <div>
      <form onSubmit={HandleSubmitLand}>
        <input
          type="text"
          name="street"
          className={classnames("form-control", {
            "is-invalid": streetErr,
            "is-valid": !streetErr && street.length,
          })}
          required
          onChange={(e) => handleChange(e, "street")}
        ></input>
        {streetErr && <small className="text-danger">{streetErr}</small>}
        <input
          type="text"
          name="city"
          className={classnames("form-control", {
            "is-invalid": cityErr,
            "is-valid": !cityErr && city.length,
          })}
          required
          onChange={(e) => handleChange(e, "city")}
        ></input>
        {cityErr && <small className="text-danger">{cityErr}</small>}
        <input
          type="number"
          name="postalCode"
          min="0"
          max="99999"
          className={classnames("form-control", {
            "is-invalid": postalCodeErr,
            "is-valid": !postalCodeErr && postalCode.length,
          })}
          required
          onChange={(e) => handleChange(e, "postalCode")}
        ></input>
        {postalCodeErr && (
          <small className="text-danger">{postalCodeErr}</small>
        )}
        <input
          type="number"
          name="surface"
          min="1"
          className={classnames("form-control", {
            "is-invalid": surfaceErr,
            "is-valid": !surfaceErr && surface.length,
          })}
          required
          onChange={(e) => handleChange(e, "surface")}
        ></input>
        {surfaceErr && <small className="text-danger">{surfaceErr}</small>}
        <button
          type="submit"
          disabled={cityErr || postalCodeErr || streetErr || surfaceErr}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default LandCreate;
