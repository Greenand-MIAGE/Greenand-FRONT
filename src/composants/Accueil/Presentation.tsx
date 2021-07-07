import '../../styles/style.css';
import logo from '../../assets/logoVers2.png';

function presentation() {
    return (
        <div className="container-fluid presentation">
            <div className="row">
                <div className="card_ens">
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img
                                    src={logo}
                                    id="card_logo"
                                    className="img-fluid"
                                    alt="..."
                                />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <div className="title_card">
                                        <h3 className="card-title">Qui sommes-nous ?</h3>
                                    </div>
                                    <div className="card_typo">
                                        <p className="card-text ">

                                            70% des possesseurs d'un jardin ne l'entretiennent pas en France. 55% des Français qui n'ont pas de jardin aimeraient avoir un espace vert.
                                            Vous êtes possesseur d'un jardin et vous souhaitez apprendre à cultiver ? Vous n'avez pas de jardin et vous aimeriez partager votre passion aux services des autres ?
                                            Greenand est la solution pour vous ! Il s'agit d’un espace de partage de jardins, centré autour de l'apprentissage entre possesseurs de jardin et de personnes souhaitant se former à l’agriculture.

                                        </p>
                                    </div>
                                    <p className="card-text">
                                        <small className="text-muted">- Les Copains Jardins</small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default presentation;