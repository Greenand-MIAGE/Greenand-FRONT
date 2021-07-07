import SignIn from "../Modal-Login/SignIn";
import "../../styles/style.css";
import SignUp from "../Modal-Login/SignUp";

function PopupConnexion() {
  return (
    <div>
      <div className="container-fluid">
        <div>
          <button
            className="btn btn-outline-success"
            id="connexion_button"
            type="button"
            data-toggle="modal"
            data-target="#modal1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-person-circle"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"></path>
              <path
                fill-rule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="modal fade"
          id="modal1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <SignIn />
        </div>
        <SignUp />
      </div>
    </div>
  );
}

export default PopupConnexion;
