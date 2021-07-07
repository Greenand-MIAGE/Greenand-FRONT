import '../../styles/style_Accueil.css'

function Form_ajout_terre() {
  return (
    <div>
      <div className="container-fluid">
        <div>
          <button
            className="btn btn-outline-success btn"
            id="ajoutTerre_button"
            type="button"
            data-toggle="modal"
            data-target="#modal1"> Ajouter une terre
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
                  Ajouter une terre
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
                  <div className="form-group">
                    <label
                      htmlFor="adresse"
                      className="form-label">
                      Adresse *
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="modal1"
                      aria-describedby="adresse"
                      placeholder="Adresse"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="commune">Commune* </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleCommune"
                      placeholder="Commune"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="codepostal">Code postal *</label>
                    <input
                      type="number"
                      className="form-control"
                      id="examplecodepostal"
                      placeholder="Code postal"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="commune"> Surface* (m²) </label>
                    <input
                      type="number"
                      className="form-control"
                      id="exampleSurface"
                      placeholder="Surface"
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
                  Ajouter
                </button>
              </div>
              
            </div>
          </div>
        </div>
        

      </div>

    </div>
  )
}

export default Form_ajout_terre