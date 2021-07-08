import "../../styles/style_Annonce.css";
import logotitle from '../../assets/Logo_texte_white.png';

function masthead() {
    return (
        <div className="container-fluid headerAnnonces">
            <div className="mask_style">
                <header className="masthead ">
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
                                    <h5 className="mb-12 text-center">  Vivez une expérience inédite ! Accompagné, vivez des expériences vertes de toutes natures.</h5>
                                    <div className="py-5 "></div>
                                    <a className="btn btn-outline-white btn-lg mb-8" href="#multi-item-example"><i className="fas fa-clone left"></i> Voir les annonces </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </div>
    );
}

export default masthead;