import '../../styles/style_Accueil.css'

function PopupReservation() {
  return (
    <div>
      <div className="container-fluid">
        <div>
          <button
            className="btn btn-outline-success btn"
            id="reserver_button"
            type="button"
            data-toggle="modal"
            data-target="#modal1"> Reserver
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
                <h6>
                  Votre réservation a bien été prise en compte! Merci!
                </h6>

              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                >
                  Fermer
                </button>
              </div>

            </div>
          </div>
        </div>


      </div>

    </div>
  )
}

export default PopupReservation;