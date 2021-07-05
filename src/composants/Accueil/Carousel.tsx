import '../App.tsx'
import '../../styles/style.css'
import ptg from '../../assets/potager.jpg'
import otl from '../../assets/outils.jpg'
import app from '../../assets/apprentissage.jpg'
import apc from '../../assets/apiculture.jpg'
import lgm from '../../assets/legumes.jpg'


function Carousel() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className=" col-lg-12 col-md-12 col-sm-12">
          <div id="carouselExemple" className="carousel slide" data-ride="carousel" date-interval="3000" >
            <ol className="carousel-indicators" >
              <li data-targer="#carouselExemple" data-slide-to="0" className="active"></li>
              <li data-targer="#carouselExemple" data-slide-to="1" ></li>
              <li data-targer="#carouselExemple" data-slide-to="2" ></li>
              <li data-targer="#carouselExemple" data-slide-to="3" > </li>
              <li data-targer="#carouselExemple" data-slide-to="4" ></li>
            </ol>

            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src={ptg} alt="ptg" />
                <div className="carousel-caption d-none d-md-block">
                  <h2>Titre de la légende</h2>
                </div>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={otl} alt="otl" />
                <div className="carousel-caption d-none d-md-block">
                  <h2>Titre de la légende</h2>
                </div>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={app} alt="app" />
                <div className="carousel-caption d-none d-md-block ">
                  <h2>Titre de la légende</h2>
                </div>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100 " src={apc} alt="apc" />
                <div className="carousel-caption d-none d-md-block">
                  <h2>Titre de la légende</h2>
                </div>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100 " src={lgm} alt="lgm" />
                <div className="carousel-caption d-none d-md-block">
                  <h2>Titre de la légende</h2>
                </div>
              </div>
            </div>
            <a href="#carouselExemple" className="carousel-control-prev" role="button" data-slide="prev">
              
              <span className="sr-only">Previous</span>
            </a>
            <a href="#carouselExemple" className="carousel-control-next" role="button" data-slide="next">
              
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Carousel