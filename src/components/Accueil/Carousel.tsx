import "../App.tsx";
import "../../styles/style_Header.css";
import madame from "../../assets/madame.jpg";
import Carousel1 from "../../assets/Carousel1.jpg";
import Carousel2 from "../../assets/Carousel2.jpg";
import Carousel3 from "../../assets/Carousel3.jpg";
import Carousel4 from "../../assets/Carousel4.jpg";
import Carousel5 from "../../assets/Carousel5.jpg";

function Carousel() {
  return (
    <div className="carousel">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
        </ol>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={madame} alt="mdm" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Banner Text one</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Maxime, nulla, tempore. Deserunt excepturi quas vero.
              </p>
            </div>
          </div>

          <div className="carousel-item">
            <img className="d-block w-100" src={Carousel1} alt="crl1" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Banner Text two</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Maxime, nulla, tempore. Deserunt excepturi quas vero.
              </p>
            </div>
          </div>

          <div className="carousel-item">
            <img className="d-block w-100" src={Carousel2} alt="crl2" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Banner Text three</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Maxime, nulla, tempore. Deserunt excepturi quas vero.
              </p>
            </div>
          </div>

          <div className="carousel-item">
            <img className="d-block w-100" src={Carousel3} alt="crl3" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Banner Text three</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Maxime, nulla, tempore. Deserunt excepturi quas vero.
              </p>
            </div>
          </div>

          <div className="carousel-item">
            <img className="d-block w-100" src={Carousel4} alt="crl4" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Banner Text three</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Maxime, nulla, tempore. Deserunt excepturi quas vero.
              </p>
            </div>
          </div>

          <div className="carousel-item">
            <img className="d-block w-100" src={Carousel5} alt="crl5" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Banner Text three</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Maxime, nulla, tempore. Deserunt excepturi quas vero.
              </p>
            </div>
          </div>
        </div>

        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default Carousel;
