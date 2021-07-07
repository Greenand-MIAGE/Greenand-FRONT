import '../../styles/style_Accueil.css';

function cible() {
    return (
        <div className="container-fluid cible">
            <div className="row">
                <div className="col-md">
                    <div className="card card-image card_img_cible" >
                        <div className="text-white text-center rgba-stylish-strong py-5 px-4">
                            <div className="py-2 card-text mask">
                                <h2 className="card-title h2 my-4 py-2"><b>Pour qui ?</b></h2>
                                <p className="mb-4 pb-2 px-md-5 mx-md-5">Nous développons actuellement des "événements" pour avec les écoles pour toucher une population d’écoliers ainsi que les parents, mais aussi avec les mairies, qui peuvent être intéressées par des journée “verte” de formation, ainsi que les magasins Bio pour toucher une clientèle sensible aux questions environnementales.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default cible;