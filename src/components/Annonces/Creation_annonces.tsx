//@ts-nocheck
import "../../styles/style_Annonce.css";
import Header_Co from "../Accueil_Connecté/Header_Co";
import gardenannounce from "../../assets/garden_announce.webp";
import lgm from "../../assets/p5_img.webp";
import p6img from "../../assets/p6_img.webp";
import p8img from "../../assets/p8_img.webp";
import DatePicker from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import { useState, useEffect } from "react";
import classnames from "classnames";
import { createEvenement } from "../../adapters/EvenementManagement/evenementAdapter";
import { getLands } from "../../adapters/LandManagement/landAdapter";

function Creation_annonces() {
  const [label, setLabel] = useState(``);
  const [description, setDescription] = useState(``);
  const [lands, setLands] = useState([]);
  const [id, setId] = useState(``);

  const [labelErr, setLabelErr] = useState(``);
  const [descriptionErr, setDescriptionErr] = useState(``);

  const [values, setValues] = useState([]);

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

      await createEvenement(idLand, {
        label,
        description,
        disponibility: dayBody,
      });
    }
  };

  return (
    <div>
      {<Header_Co />}
      <div className="container-fluid">
        <div className="row ">
          <div className="col">
            <div className="p-5 text-center bg-image rounded-3">
              <div className="mask">
                <div className="d-flex justify-content-center align-items-center h-100">
                  <div className="text-white">
                    <h1 className="mb-3">Heading</h1>
                    <h4 className="mb-3">Subheading</h4>
                    <a
                      className="btn btn-outline-light btn-lg"
                      href="#!"
                      role="button"
                    >
                      Call to action
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="partage_annonce" className="rounded">
        <div className="container-fluid">
          <div className="row ">
            <div className=" col-lg-2 col-md-2 col-sm-2"></div>
            <div className=" col-lg-10 col-md-10 col-sm-10">
              <div className="card_ens">
                <div className="card mb-3">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <div className="my-custom-scrollbar my-custom-scrollbar-primary">
                        <img
                          src={lgm}
                          id="img_responsive"
                          height="100%"
                          className="img-fluid  w-100"
                          alt=""
                        />

                        <img
                          src={gardenannounce}
                          id="img_responsive"
                          height="100%"
                          className="img-fluid  w-100"
                          alt="..."
                        />
                        <img
                          src={p6img}
                          id="img_responsive"
                          height="100%"
                          className="img-fluid  w-100"
                          alt="..."
                        />

                        <img
                          src={p8img}
                          id="img_responsive"
                          height="100%"
                          className="img-fluid  w-100"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <p className="card-text">
                          <form onSubmit={handleCreateEvenement}>
                            <legend>Votre Nouvelle Annonce</legend>
                            <div className="form-group row">
                              <label
                                htmlFor="staticEmail"
                                className="col-sm-2 col-form-label"
                              >
                                N° :
                              </label>
                              <div className="col-sm-10">
                                <input
                                  type="text"
                                  className="form-control-plaintext"
                                  id="staticEmail"
                                  value="{17325283d}"
                                  required
                                />
                              </div>
                            </div>

                            <div className="form-group">
                              <label
                                htmlFor="exampleInputTitle"
                                className="form-label mt-4"
                              >
                                Intitulé annonce :
                              </label>
                              <input
                                type="text"
                                name="label"
                                id="exampleInputTitle"
                                aria-describedby="TitleHelp"
                                className={classnames("form-control", {
                                  "is-invalid": labelErr,
                                  "is-valid": !labelErr && label.length,
                                })}
                                placeholder="Entrez l'intitulé de votre annonce"
                                required
                                onChange={(e) => handleChange(e, `label`)}
                              />
                              {labelErr && (
                                <small className="text-danger">
                                  {labelErr}
                                </small>
                              )}
                            </div>

                            <div className="form-group">
                              <label
                                htmlFor="exampleInputTitle"
                                className="form-label mt-4"
                              >
                                Vos terrains :
                              </label>
                              <select
                                className="form-select rounded-pill"
                                id="selectLand"
                                required
                                onChange={(e) => handleChange(e, `selectLand`)}
                              >
                                {lands.map((land) => (
                                  <option key={land._id} value={land._id}>
                                    {land.city} - {land.street}
                                  </option>
                                ))}
                              </select>
                            </div>

                            <div className="form-group">
                              <label
                                htmlFor="exampleInputTitle"
                                className="form-label mt-4"
                              >
                                {" "}
                                Date d'événement :
                              </label>
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
                            <div className="form-group">
                              <label
                                htmlFor="exampleInputTitle"
                                className="form-label mt-4"
                              >
                                Description :
                              </label>
                              <textarea
                                name="description"
                                id="exampleTextarea"
                                required
                                className={classnames("form-control", {
                                  "is-invalid": descriptionErr,
                                  "is-valid":
                                    !descriptionErr && description.length,
                                })}
                                onChange={(e) => handleChange(e, `description`)}
                              ></textarea>
                              {descriptionErr && (
                                <small className="text-danger">
                                  {descriptionErr}
                                </small>
                              )}
                            </div>

                            <button
                              type="submit"
                              disabled={labelErr || descriptionErr}
                              className="btn btn-success"
                            >
                              Ajouter
                            </button>
                          </form>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Creation_annonces;
