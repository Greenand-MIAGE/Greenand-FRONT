import "../../styles/style_Annonce.css";
import forest from "../../assets/forest.jpg";
import logo from "../../assets/Logo_text.png";

function createAnnonces() {
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
                            <form >
                                <div className="form-row">
                                    <div className="col-lg-7">
                                        <input type="text" placeholder="Intitulé de l'annonce" className="form-control rounded-pill my-3 p-4" />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="col-lg-7">
                                        <select className="form-control rounded-pill my-3 p-4" id="exampleFormControlSelect1" aria-label="Default select example">
                                            <option>Choisissez...</option>
                                            <option>Toile de Fontaine : 5 rue Boulevard la ville</option>
                                            <option>Montaigne de Montmartre : 9 Square des Varennes</option>
                                            <option>Retour de champ : Val de Marne</option>
                                            <option>Rentrée de jardin : 12 bis Laurence</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="col-lg-7">
                                        <input className="form-control rounded-pill my-3 p-4" id="dateinput" type="Date" required />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="col-lg-7">
                                        <textarea className="form-control rounded my-3 p-4" placeholder="Description" id="exampleTextarea" required></textarea>
                                    </div>
                                </div>


                                <div className="form-row">
                                    <div className="col-lg-7">
                                        <button type="button" className="btn1 mt-3 mb-5">Valider</button>
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

export default createAnnonces;