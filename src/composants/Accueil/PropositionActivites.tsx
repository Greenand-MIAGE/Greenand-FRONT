
import './Accueil.tsx'
import'../../styles/style.css'
import  ptg from '../../assets/potager.jpg'
import  app from '../../assets/apprentissage.jpg'

function PropositionActivites() {
    return (
        <section id="services" className="section section-padded">
          <div className="container">
          <div className="row services">

            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="service">
                <div className="icon-holder">
                  <img src={app} alt="img 1" className="icon"/>
                </div>
                <h4 className="heading">PROPOSER UNE ACTIVITE</h4>
                <p className="description">Ce qu'il faut faire yeaaa.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="service">
                <div className="icon-holder">
                  <img src={ptg} alt="img 2" className="icon"/>
                </div>
                <h4 className="heading">CHOISIR UNE ACTIVITE</h4>
                <p className="description">Ce qu'il faut faire youhouu.</p>
              </div>
            </div>

          </div>
          </div>
        </section>
      );
}

export default PropositionActivites;
