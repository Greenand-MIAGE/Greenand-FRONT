import "../../styles/style_Annonce.css";
import logotitle from '../../assets/Logo_texte_white.png';

function headCreateAnnonce() {
    return (
        <div className="container-fluid headerAnnonces">
            <div className="mask_style">
                <header className="mastheadCreateAnnonce ">
                    <div className="container h-100">
                        <div className="row h-100 align-items-center">
                            <div className="col-12 text-center">
                                <div className="text-white">
                                    <div className="mb-9">
                                        <img
                                            src={logotitle}
                                            height="150px"
                                            className="img-responsive"
                                            alt=""
                                        />
                                    </div>
                                    <div className="py-5 "></div>
                                    <h5 className="mb-12 text-center">Partagez vos annonces avec de multiples particuliers en quête d'un monde vert et libérez cette verdure qui sommeille en vous !</h5>
                                    <div className="py-5 "></div>
                                    <a className="btn btn-outline-white btn-lg mb-8" href="#formCreateAnnonceId"><i className="fas fa-clone left"></i> Créer une annonce </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </div>
    );
}

export default headCreateAnnonce;