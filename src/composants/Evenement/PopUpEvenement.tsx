//@ts-nocheck
import React, { useState } from "react";
import DatePicker from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import classnames from "classnames";
import { createEvenement } from "../../adapters/EvenementManagement/evenementAdaptater";

function PopUpEvenement(props) {
  const [label, setLabel] = useState(``);
  const [description, setDescription] = useState(``);

  const [labelErr, setLabelErr] = useState(``);
  const [descriptionErr, setDescriptionErr] = useState(``);

  const [values, setValues] = useState([]);

  const handleChange = (e, name) => {
    const evenement = {};

    evenement[name] = e.target.value;

    switch (name) {
      case `label`:
        setLabel(evenement.label);
        if (evenement.label.length < 3) {
          setLabelErr("Le label nécessite 3 caractères au minimum");
        } else if (evenement.label.length > 100) {
          setLabelErr("Le label ne doit pas dépasser 100 caractères ");
        } else {
          setLabelErr("");
        }
        break;

      case `description`:
        setDescription(evenement.description);
        if (evenement.description.length < 20) {
          setDescriptionErr(
            "La description nécessite 20 caractères au minimum"
          );
        } else {
          setDescriptionErr("");
        }
        break;
    }
  };

  const handleCreateEvenement = async (e) => {
    e.preventDefault();

    if (label && description && !labelErr && !descriptionErr) {
      const id = JSON.stringify(props).toString().split('"')[3];
      let dayBody = new Array();

      for (var i = 0; i < values.length; i++) {
        dayBody.push({
          startOfDay: values.toString().split(",")[i].toString().split(" ")[0],
          startOfHour: values.toString().split(",")[i].toString().split(" ")[1],
        });
      }

      console.log(dayBody);
      console.log(values.length);
      await createEvenement(id, {
        label,
        description,
        disponibility: dayBody,
      });
    }
  };

  return (
    <div>
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        role="document"
      >
        {" "}
        <form onSubmit={handleCreateEvenement}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalCenterTitle">
                Créer un évenement
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
              <div className="form-group_label">
                <label
                  htmlFor="validationDefaultUsername"
                  className="form-label"
                >
                  Label
                </label>
                <input
                  type="text"
                  name="label"
                  id="modal1"
                  className={classnames("form-control", {
                    "is-invalid": labelErr,
                    "is-valid": !labelErr && label.length,
                  })}
                  aria-describedby="emailHelp"
                  placeholder="Entrer un label"
                  required
                  onChange={(e) => handleChange(e, `label`)}
                />
                {labelErr && <small className="text-danger">{labelErr}</small>}
              </div>
              <div className="form-group_descript">
                <label htmlFor="descriptionID">
                  Description de l'evenement
                </label>
                <textarea
                  name="description"
                  id="descriptionID"
                  className={classnames("form-control", {
                    "is-invalid": descriptionErr,
                    "is-valid": !descriptionErr && description.length,
                  })}
                  onChange={(e) => handleChange(e, `description`)}
                ></textarea>
                {descriptionErr && (
                  <small className="text-danger">{descriptionErr}</small>
                )}
              </div>
              <div className="form-datePicker">
                <label htmlFor="creneauxID">Choisissez vos créneaux : </label>
                <br />
                <DatePicker
                  id="creneauxID"
                  value={values}
                  multiple
                  type="icon"
                  sort
                  onChange={setValues}
                  format="DD/MM/YYYY HH:mm"
                  plugins={[
                    <TimePicker position="bottom" hideSeconds />,
                    <DatePanel />,
                  ]}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                Annuler
              </button>
              <button
                type="submit"
                className="btn btn-success"
                disabled={labelErr || descriptionErr}
              >
                Envoyer
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PopUpEvenement;
