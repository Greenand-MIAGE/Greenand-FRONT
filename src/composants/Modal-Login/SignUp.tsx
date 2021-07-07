//@ts-nocheck
import React from "react";
import classnames from "classnames";
import { signUp } from "../../adapters/ConnectionManagement/registerAdaptater";
import "../../styles/style.css";
import { useState } from "react";

function SignUp() {
  const [lastName, setLastName] = useState(``);
  const [firstName, setFirstName] = useState(``);
  const [street, setStreet] = useState(``);
  const [city, setCity] = useState(``);
  const [postalCode, setPostalCode] = useState(``);
  const [mail, setMail] = useState(``);
  const [password, setPassword] = useState(``);
  const [confirmPassword, setConfirmPassword] = useState(``);

  const [lastNameErr, setLastNameErr] = useState(``);
  const [firstNameErr, setFirstNameErr] = useState(``);
  const [streetErr, setStreetErr] = useState(``);
  const [cityErr, setCityErr] = useState(``);
  const [postalCodeErr, setPostalCodeErr] = useState(``);
  const [mailErr, setMailErr] = useState(``);
  const [passwordErr, setPasswordErr] = useState(``);
  const [confirmPasswordErr, setConfirmPasswordErr] = useState(``);

  const handleChange = (e, name) => {
    const client = {};

    const mailRegex = RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    const passwordRegex = RegExp(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,30}$/
    );

    client[name] = e.target.value;

    switch (name) {
      case `lastName`:
        setLastName(client.lastName);

        if (client.lastName.length < 2) {
          setLastNameErr(
            "Le nom de famille doit contenir 2 caractères au minimum"
          );
        } else if (client.lastName.length > 75) {
          setLastNameErr(
            "Le nom de famille doit contenir 75 caractères au maximum"
          );
        } else {
          setLastNameErr("");
        }
        break;
      case `firstName`:
        setFirstName(client.firstName);

        if (client.firstName.length < 2) {
          setFirstNameErr("Le prénom doit contenir 2 caractères au minimum");
        } else if (client.firstName.length > 75) {
          setFirstNameErr("Le prénom doit contenir 75 caractères au maximum");
        } else {
          setFirstNameErr("");
        }
        break;
      case `street`:
        setStreet(client.street);

        if (client.street.length < 2) {
          setStreetErr("La rue doit contenir 2 caractères au minimum");
        } else if (client.street.length > 75) {
          setStreetErr("La rue doit contenir 75 caractères au maximum");
        } else {
          setStreetErr("");
        }
        break;
      case `city`:
        setCity(client.city);

        if (client.city.length < 2) {
          setCityErr("La ville doit contenir 2 caractères au minimum");
        } else if (client.city.length > 75) {
          setCityErr("La ville doit contenir 75 caractères au maximum");
        } else {
          setCityErr("");
        }
        break;
      case `postalCode`:
        setPostalCode(client.postalCode);
        if (client.postalCode < 0) {
          setPostalCodeErr("Code postal incorrect");
        } else if (client.postalCode > 99999) {
          setPostalCodeErr("Code postal incorrect");
        } else {
          setPostalCodeErr("");
        }
        break;
      case `mail`:
        setMail(client.mail);
        !mailRegex.test(client.mail)
          ? setMailErr("Mail invalide !")
          : setMailErr("");
        break;
      case `password`:
        setPassword(client.password);
        !passwordRegex.test(client.password)
          ? setPasswordErr("Mot de passe invalide !")
          : setPasswordErr("");
        break;
      case `confirmPassword`:
        setConfirmPassword(client.confirmPassword);
        client.confirmPassword !== password
          ? setConfirmPasswordErr("Les mots de passe ne sont pas identiques")
          : setConfirmPasswordErr("");
        break;
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (
      lastName &&
      firstName &&
      street &&
      city &&
      postalCode &&
      mail &&
      password &&
      confirmPassword &&
      !lastNameErr &&
      !firstNameErr &&
      !streetErr &&
      !cityErr &&
      !postalCodeErr &&
      !mailErr &&
      !passwordErr &&
      !confirmPasswordErr
    ) {
      await signUp({
        lastName,
        firstName,
        street,
        city,
        postalCode,
        mail,
        password,
        confirmPassword,
      });
    }
  };
  return (
    <div>
      <form onSubmit={handleSignUp}>
        <div
          className="modal fade"
          id="modal2"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalCenterTitle">
                  Faites partie des Greenand !{" "}
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
                <div className="form-group_Nom">
                  <label htmlFor="LastName">Nom</label>
                  <input
                    type="text"
                    name="lastName"
                    className={classnames("form-control", {
                      "is-invalid": lastNameErr,
                      "is-valid": !lastNameErr && lastName.length,
                    })}
                    placeholder="Nom"
                    required
                    onChange={(e) => handleChange(e, `lastName`)}
                  />
                  {lastNameErr && (
                    <small className="text-danger">{lastNameErr}</small>
                  )}
                </div>
                <div className="form-group_Prenom">
                  <label htmlFor="FirstName">Prénom</label>
                  <input
                    type="text"
                    name="firstName"
                    className={classnames("form-control", {
                      "is-invalid": firstNameErr,
                      "is-valid": !firstNameErr && firstName.length,
                    })}
                    placeholder="Prénom"
                    required
                    onChange={(e) => handleChange(e, `firstName`)}
                  />
                  {firstNameErr && (
                    <small className="text-danger">{firstNameErr}</small>
                  )}
                </div>
                <div className="form-group_rue">
                  <label htmlFor="rue">Rue</label>
                  <input
                    type="text"
                    name="street"
                    className={classnames("form-control", {
                      "is-invalid": streetErr,
                      "is-valid": !streetErr && street.length,
                    })}
                    placeholder="Rue"
                    required
                    onChange={(e) => handleChange(e, `street`)}
                  />
                  {streetErr && (
                    <small className="text-danger">{streetErr}</small>
                  )}
                </div>
                <div className="form-group_ville">
                  <label htmlFor="ville">Ville</label>
                  <input
                    type="text"
                    name="city"
                    className={classnames("form-control", {
                      "is-invalid": cityErr,
                      "is-valid": !cityErr && city.length,
                    })}
                    placeholder="Ville"
                    required
                    onChange={(e) => handleChange(e, `city`)}
                  />
                  {cityErr && <small className="text-danger">{cityErr}</small>}
                </div>
                <div className="form-group_code_postal">
                  <label htmlFor="Code_Postal">Code Postal</label>
                  <input
                    type="number"
                    min="0"
                    max="99999"
                    name="postalCode"
                    className={classnames("form-control", {
                      "is-invalid": postalCodeErr,
                      "is-valid": !postalCodeErr && postalCode.length,
                    })}
                    placeholder="Code Postal"
                    required
                    onChange={(e) => handleChange(e, `postalCode`)}
                  />
                  {postalCodeErr && (
                    <small className="text-danger">{postalCodeErr}</small>
                  )}
                </div>
                <div className="form-group_email">
                  <label htmlFor="exampleInputEmail1">Adresse e-mail</label>
                  <input
                    type="email"
                    name="mail"
                    className={classnames("form-control", {
                      "is-invalid": mailErr,
                      "is-valid": !mailErr && mail.length,
                    })}
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    required
                    onChange={(e) => handleChange(e, `mail`)}
                  />
                  {mailErr && <small className="text-danger">{mailErr}</small>}
                </div>
                <div className="form-group_pwd">
                  <label htmlFor="exampleInputPassword1">Mot de passe</label>
                  <input
                    type="password"
                    name="password"
                    className={classnames("form-control", {
                      "is-invalid": passwordErr,
                      "is-valid": !passwordErr && password.length,
                    })}
                    id="exampleInputPassword1"
                    placeholder="Password"
                    required
                    onChange={(e) => handleChange(e, `password`)}
                  />
                  {passwordErr && (
                    <small className="text-danger">{passwordErr}</small>
                  )}
                </div>
                <div className="form-group_confirmation_pwd">
                  <label htmlFor="Confirmation">
                    {" "}
                    Confirmation mot de passe
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    className={classnames("form-control", {
                      "is-invalid": confirmPasswordErr,
                      "is-valid": !confirmPasswordErr && confirmPassword.length,
                    })}
                    placeholder="Confirmation mot de passe"
                    required
                    onChange={(e) => handleChange(e, `confirmPassword`)}
                  />
                </div>
                {confirmPasswordErr && (
                  <small className="text-danger">{confirmPasswordErr}</small>
                )}
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                  required
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  *J'accepte les Conditions générales d'utilisation et la
                  Politique de confidentialité.
                </label>
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
                    lastNameErr ||
                    firstNameErr ||
                    streetErr ||
                    cityErr ||
                    postalCodeErr ||
                    mailErr ||
                    passwordErr ||
                    confirmPasswordErr
                  }
                >
                  S'inscrire
                </button>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  id="but_witht_brd"
                  className="card-link"
                  data-toggle="modal"
                  data-target="#modal1"
                  data-dismiss="modal"
                >
                  Se Connecter
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
