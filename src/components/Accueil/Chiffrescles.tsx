import '../../styles/style_Accueil.css'
import adherent from '../../assets/adherents.jpg'
import field from '../../assets/field.jpg'


function Chiffrescles() {
    return (
        <div className="container-fluid chiffre">
            <div className="row">
                <div className=" col-lg-12 col-md-12 col-sm-12" id="chiffres">
                    <div className="text-center">
                        <div>
                            <h3 className="section-heading text-uppercase" id="text"><b>Quelques chiffres clés</b></h3>
                        </div>
                        <h4 className="section-subheading text-muted" id="idf">Ile de France</h4>
                    </div>
                </div>
            </div>

            <div className="row">

                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 img1">
                    <div className="hovereffect">
                        <img className="img-responsive rounded" src={adherent} alt="" />
                        <div className="overlay">
                            <h2>Nombre d'adhérents</h2>
                            <a className="info" href="#!">9</a>
                        </div>
                    </div>

                </div>

                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 img1">
                    <div className="hovereffect">
                        <img className="img-responsive" src={field} alt="" />
                        <div className="overlay">
                            <h2>Terrains en Ile-de-France</h2>
                            <a className="info" href="#!">15</a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 img1">
                    <div className="hovereffect">
                        <img className="img-responsive" src={adherent} alt="" />
                        <div className="overlay">
                            <h2>Nombre d'adhérents</h2>
                            <a className="info" href="#!">9</a>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Chiffrescles
