import '../../styles/header.css'

function PopupConnexion() {
  return (
    <div>
      <div className="container-fluid">
        <div>
          <button
            className="btn btn-outline-light"
            id="connexion_button"
            type="button"
            data-toggle="modal"
            data-target="#modal1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"></path>
              <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"></path>
            </svg>
          </button>
        </div>

        <div
          className="modal fade"
          id="modal1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true">
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
                  aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group_mail">
                    <label
                      htmlFor="validationDefaultUsername"
                      className="form-label">
                      Adresse e-mail
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="modal1"
                      aria-describedby="emailHelp"
                      placeholder="Adresse e-mail"
                      required
                    />
                  </div>
                  <div className="form-group_password">
                    <label htmlFor="exampleInputPassword1">Mot de passe</label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Mot de passe"
                      required
                    />
                  </div>
                </form>
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
        </div>
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
                  Faites partie des GreenAnd !{" "}
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
                <form>
                  <div className="form-group_Nom">
                    <label htmlFor="LastName">Nom</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nom"
                      required
                    />
                  </div>
                  <div className="form-group_Prenom">
                    <label htmlFor="FirstName">Prénom</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Prénom"
                      required
                    />
                  </div>
                  <div className="form-group_rue">
                    <label htmlFor="rue">Rue</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Rue"
                      required
                    />
                  </div>
                  <div className="form-group_ville">
                    <label htmlFor="ville">Ville</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Ville"
                      required
                    />
                  </div>
                  <div className="form-group_code_postal">
                    <label htmlFor="Code_Postal">Code Postal</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Code Postal"
                      required
                    />
                  </div>
                  <div className="form-group_email">
                    <label htmlFor="exampleInputEmail1">Adresse e-mail</label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      required
                    />
                  </div>
                  <div className="form-group_pwd">
                    <label htmlFor="exampleInputPassword1">Mot de passe</label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                      required
                    />
                    <small id="emailHelp" className="form-text text-muted">
                      Votre mot de passe doit contenir au moins 4 caractères
                      spéciaux, 2 caratères alpha-numériques
                    </small>
                  </div>
                  <div className="form-group_confirmation_pwd">
                    <label htmlFor="Confirmation">
                      {" "}
                      Confirmation mot de passe
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirmation mot de passe"
                      required
                    />
                  </div>
                </form>
              </div>
              <div className="form-check">
                <input className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                  required />
                <label className="form-check-label"
                  htmlFor="flexCheckDefault">
                  *J'accepte les Conditions générales d'utilisation et la Politique de confidentialité.
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
                <button type="submit" className="btn btn-success">
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

      </div>

    </div>
  )
}

export default PopupConnexion
