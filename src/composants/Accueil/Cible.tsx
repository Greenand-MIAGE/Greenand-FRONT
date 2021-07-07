import '../../styles/style.css';
import p2_img from '../../assets/p2_img.webp';
import Garden from '../../assets/Big_Garden.jpg';

function cible() {
    return (
        <div className="container-fluid cible">

            <div className="row">
                <div className="col-md">
                <img src={Garden} className="img-fluid" alt="..." id=""></img>
                </div>
            </div>


            {/*
            <div className="row">
                <div className="col-md">
                    <div className="p3_card">
                        <div className="row">

                            <div className="col-md-4 offset-md-1 mx-2 my-2">
                                <div className="view overlay">
                                    <img src={p2_img} className="img-fluid" alt="..." id="p2_img"></img>
                                </div>
                            </div>
                            <div className="col-md-7 text-md-left ml-3 mt-3">
                                <div className="title_card">
                                    <h4 className="h4 mb-4">Pour qui ?</h4>
                                </div>
                                <div className="card_typo"><p className="font-weight-normal">Nous développons actuellement des "événements" pour avec les écoles pour toucher une population d’écoliers ainsi que les parents, mais aussi avec les mairies, qui peuvent être intéressées par des journée “verte” de formation, ainsi que les magasins Bio pour toucher une clientèle sensible aux questions environnementales.</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            */}
        </div>

    );
}

export default cible;