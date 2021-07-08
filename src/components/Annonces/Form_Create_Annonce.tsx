//@ts-nocheck
import "../../styles/style_Annonce.css";
import forest from "../../assets/forest.jpg";
import logo from "../../assets/Logo_text.png";
import DatePicker from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import { useState, useEffect } from "react";
import { getLands } from "../../adapters/LandManagement/landAdapter";
import { createEvenement } from "../../adapters/EvenementManagement/evenementAdapter";
import classnames from "classnames";

function CreateAnnonces() {
  const [values, setValues] = useState([]);
  const [label, setLabel] = useState(``);
  const [description, setDescription] = useState(``);
  const [lands, setLands] = useState([]);
  const [id, setId] = useState(``);

  const [labelErr, setLabelErr] = useState(``);
  const [descriptionErr, setDescriptionErr] = useState(``);

  useEffect(() => {
    const fetchLands = async () => {
      const response = await getLands();
      setLands(response.data);
    };
    fetchLands();
  }, []);

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
        console.log("ici")
        setDescription(evenement.description);
        if (evenement.description.length < 20) {
          setDescriptionErr(
            "La description nécessite 20 caractères au minimum"
          );
        } else {
          setDescriptionErr("");
        }
        break;
      case `selectLand`:
        setId(evenement.selectLand);
        break;
    }
  };

  const handleCreateEvenement = async (e) => {
    e.preventDefault();

    if (label && description && !labelErr && !descriptionErr) {
      const idLand = id;
      let dayBody = new Array();

      for (var i = 0; i < values.length; i++) {
        dayBody.push({
          startOfDay: values.toString().split(",")[i].toString().split(" ")[0],
          startOfHour: values.toString().split(",")[i].toString().split(" ")[1],
        });
      }

      console.log(idLand);
      await createEvenement(idLand, {
        label,
        description,
        disponibility: dayBody,
      });
    }
  };

  return (
    <div className="formCreate" id="formCreateAnnonceId">
      <section className="form my-4 mx-5">
        <div className="container">
          <div className="row py-5 d-flex flex-wrap align-items-center rowCreateAnnonce">
            <div className="col-lg-5 col-md">
              <img src={forest} className="img-fluid" alt="imgForest" />
            </div>

            <div className="col-lg-7 px-5 formCreateAnnonce">
              <img src={logo} className="img-fluid my-3" alt="" />
              <h4>Création d'une annonce</h4>
              <form onSubmit={handleCreateEvenement}>
                <div className="form-row">
                  <div className="col-lg-7">
                    <input
                      type="text"
                      name="label"
                      className={classnames(
                        "form-control rounded-pill my-3 p-4",
                        {
                          "is-invalid": labelErr,
                          "is-valid": !labelErr && label.length,
                        }
                      )}
                      onChange={(e) => handleChange(e, `label`)}
                      placeholder="Intitulé de l'annonce"
                    />
                    {labelErr && (
                      <small className="text-danger">{labelErr}</small>
                    )}
                  </div>
                </div>

                <div className="form-row">
                  <div className="col-lg-7">
                    <select
                      className="form-control rounded-pill my-3"
                      id="selectLand"
                      required
                      onChange={(e) => handleChange(e, `selectLand`)}
                    >
                      <option>Faites votre choix..</option>
                      {lands.map((land) => (
                        <option key={land._id} value={land._id}>
                          {land.city} - {land.street}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <DatePicker
                    id="creneauxID"
                    value={values}
                    multiple
                    type="icon"
                    className="form-label mt-4"
                    sort
                    onChange={setValues}
                    format="DD/MM/YYYY HH:mm"
                    plugins={[
                      <TimePicker position="bottom" hideSeconds />,
                      <DatePanel />,
                    ]}
                  />
                </div>

                <div className="form-row">
                  <div className="col-lg-7">
                    <textarea
                      name="description"
                      className={classnames("form-control rounded my-3 p-4", {
                        "is-invalid": descriptionErr,
                        "is-valid": !descriptionErr && description.length,
                      })}
                      placeholder="Description"
                      id="exampleTextarea"
                      onChange={(e) => handleChange(e, `description`)}
                      required
                    ></textarea>
                    {descriptionErr && (
                      <small className="text-danger">{descriptionErr}</small>
                    )}
                  </div>
                </div>

                <div className="form-row">
                  <div className="col-lg-7">
                    <button type="submit" className="btn1 mt-3 mb-5">
                      Valider
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CreateAnnonces;