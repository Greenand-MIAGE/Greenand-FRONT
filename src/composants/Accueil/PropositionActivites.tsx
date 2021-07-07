
import './Accueil.tsx'
import '../../styles/style.css'
import actv from '../../assets/activite.jpg'
import prtg from '../../assets/partage.jpg'

function PropositionActivites() {
  return (
    <div className="container-fluid" id="cards">
      <div className="row d-flex justify-content-center">
        <div className="col-md-4">
          <div className="card" id="card1" >
            <img className="card-img-top" src={actv} alt="..." />
            <div className="card-body">
              <h5 className="card-title">Ce que je peux faire sur Greenand</h5>
              <p className="card-text">
                Louer votre terrain à des particuliers,
                partager des moments d'échanges avec des passionnés de jardinage,
                enseigner votre savoir-faire et vos astuces aux amateurs ainsi que
                proposer différentes activitées (Jardinage, Apiculture,...etc.).
                Cela vous intéresse? Rejoignez vite notre communauté!
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-2"></div>

        <div className="col-md-4">
          <div className="card" id="card2" >
            <img className="card-img-top" src={prtg} alt="..." />
            <div className="card-body">
              <h5 className="card-title">Ce que je peux proposer sur Greenand</h5>
              <p className="card-text">
                Réserver un créneau sur le terrain ou le jardin de votre choix,
                apprendre auprés de personnes expérimentées,
                participer à des expériences uniques et différentes activités, et
                être au plus proche de la terre.
                Amateur de jardinage? Ta place est parmi nous!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>




  )
    ;
}

export default PropositionActivites;
