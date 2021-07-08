//@ts-nocheck
import React, { useState } from "react";
import { signIn } from "../../adapters/ConnectionManagement/signInAdapter";
import { useHistory } from "react-router-dom";


function SignIn() {
  const [mail, setMail] = useState(``);
  const [password, setPassword] = useState(``);

  const [mailErr, setMailErr] = useState(``);
  const [passwordErr, setPasswordErr] = useState(``);

  const [signErr, setSignErr] = useState(``);

  const history = useHistory();

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
      case `mail`:
        setMail(client.mail);
        !mailRegex.test(client.mail)
          ? setMailErr("Mail invalide")
          : setMailErr("");
        break;
      case `password`:
        setPassword(client.password);
        !passwordRegex.test(client.password)
          ? setPasswordErr("Mot de passe invalide")
          : setPasswordErr("");
        break;
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    if (mail && password && !mailErr && !passwordErr) {
      await signIn({ mail, password });
      history.push("/accueil");
    }

    setSignErr("Login ou Mot de passe incorrect");
    console.log("Here");
};

return (
  <div>
    {signErr && <small className="text-danger">{signErr}</small>}
    <form onSubmit={handleSignIn}>
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalCenterTitle">
              Connexion
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
            <div className="form-group_mail">
              <label
                htmlFor="validationDefaultUsername"
                className="form-label"
              >
                Adresse e-mail
              </label>
              <input
                type="email"
                className="form-control"
                name="mail"
                id="modal1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                required
                onChange={(e) => handleChange(e, "mail")}
              />
              {mailErr && <small className="text-danger">{mailErr}</small>}
            </div>
            <div className="form-group_password">
              <label htmlFor="exampleInputPassword1">Mot de passe</label>
              <input
                type="password"
                name="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                required
                onChange={(e) => handleChange(e, "password")}
              />
              {passwordErr && (
                <small className="text-danger">{passwordErr}</small>
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
            <button type="submit" className="btn btn-success">
              Se Connecter
            </button>
          </div>
          <div className="modal-footer">
            <p>
              Pas encore de compte ?
              <button
                id="but_witht_brd"
                className="card-link"
                data-toggle="modal"
                data-target="#modal2"
                data-dismiss="modal"
              >
                Créer mon compte
              </button>
            </p>
          </div>
        </div>
      </div>
    </form>
  </div>
);
}

export default SignIn;
