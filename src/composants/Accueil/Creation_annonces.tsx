import React from 'react'
import '../../styles/styleAnnonce.css';
import gardenannounce from "../../assets/garden_announce.webp";
import lgm from '../../assets/p5_img.webp';
import p6img from '../../assets/p6_img.webp';
import logotitle from '../../assets/logo_texte.png';
import p8img from '../../assets/p8_img.webp';

function Creation_annonces() {
  return (
    <div>
      <header>
        <div
          className="p-5 text-center bg-image bg_style"
        >
          <div className="mask mask_style">
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white">
                <div className="mb-9">
                  <img
                    src={logotitle}
                    height="150px"
                    className="img-responsive"
                    alt=""
                  />
                </div>
                <h5 className="mb-12 text-center"> Partagez vos annonces avec de multiples particuliers en quête d'un monde vert et libérez cette verdure qui sommeille en vous !</h5>
                <a className="btn btn-outline-white btn-lg mb-8 main_btn_style" href="#partage_annonce"><i className="fas fa-clone left"></i> Créer une annonce </a>
              </div>
            </div>
          </div>
        </div>
      </header>


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
                          alt="..."
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
                          alt="..."
                        />
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <p className="card-text">
                          <div className="card_typo">
                            <form>
                              <legend>Votre Nouvelle Annonce</legend>
                              <div className="form-group row">
                                <label htmlFor="staticEmail" className="col-sm-2 col-form-label">N° :</label>
                                <div className="col-sm-10">
                                  <input type="text" className="form-control-plaintext" id="staticEmail" value="17325283d" required />
                                </div>
                              </div>
                              <div className="form-group">
                                <label htmlFor="exampleInputTitle" className="form-label mt-4">Intitulé annonce :</label>
                                <input type="text" className="form-control rounded-pill " id="exampleInputTitle" aria-describedby="TitleHelp" placeholder="Entrez l'intitulé de votre annonce" required />
                              </div>


                              <div className="form-group_catégorie_activité">
                                <label htmlFor="exampleInputPassword1">Nombre de clients maximum</label>
                                <input
                                  type="number"
                                  className="form-control rounded-pill"
                                  id="exampleInputCategorie1"
                                  placeholder="Nombre de client maximum"
                                  required
                                />
                              </div>

                              <div className="form-group">
                                <label htmlFor="exampleInputTitle" className="form-label mt-4">Vos terrains :</label>
                                <select className="form-select rounded-pill" id="exampleSelect1" required>
                                  <option>Choisissez...</option>
                                  <option>Toile de Fontaine : 5 rue Boulevard la ville</option>
                                  <option>Montaigne de Montmartre : 9 Square des Varennes</option>
                                  <option>Retour de champ : Val de Marne</option>
                                  <option>Rentrée de jardin : 12 bis Laurence</option>
                                </select>
                              </div>


                              <div className="form-group">
                                <label htmlFor="exampleInputTitle" className="form-label mt-4"> Date d'événement :</label>
                                <input className="form-control rounded-pill" id="dateinput" type="Date" required></input>

                              </div>
                              <div className="form-group">
                                <label htmlFor="exampleInputTitle" className="form-label mt-4"> Date de début :</label>
                                <input className="form-control rounded-pill" id="dateinput" type="time" required></input>

                              </div>

                              <div className="form-group">
                                <label htmlFor="exampleInputTitle" className="form-label mt-4"> Date de fin:</label>
                                <input className="form-control rounded-pill" id="dateinput" type="time" required></input>

                              </div>
                              <div className="form-group">
                                <label htmlFor="exampleInputTitle" className="form-label mt-4">Description :</label>
                                <textarea className="form-control rounded" id="exampleTextarea" required></textarea>

                              </div>

                              <button type="submit" className="btn btn-success">
                                Ajouter
                              </button>

                            </form>
                          </div>
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



  )
}


export default Creation_annonces