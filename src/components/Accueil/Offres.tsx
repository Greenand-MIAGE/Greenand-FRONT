import "../../styles/style_Offres.css";
import Footer from "./Footer";
import logotitle from "../../assets/logo_texte.png";

function Offres() {
  return (
    <div>
      <header>
        <div className="p-5 text-center bg-image bg_style">
          <div className="mask mask_style">
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white">
                <div className="mb-9">
                  <img
                    src={logotitle}
                    height="150px"
                    className="img-responsive"
                    alt=""
                  />
                </div>
                <h5 className="mb-12 text-center">
                  {" "}
                  Vivez une expérience inédite ! Accompagné, vivez des
                  expériences vertes de toutes natures.
                </h5>
                <a
                  className="btn btn-outline-white btn-lg mb-8"
                  href="#partage_annonce"
                >
                  <i className="fas fa-clone left"></i> Voir les annonces{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="py-5 "></div>
      <h3 className="text-success text-center" id="dern_offres">
        {" "}
        Nos dernières offres
      </h3>
      <div className="py-5"></div>
      <div className="row row-cols-1 row-cols-md-3 g-4 card_margin">
        <div className="col ">
          <div className="card h-100 card_border">
            <img
              src="https://mdbootstrap.com/img/new/standard/city/041.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Annonce #1</h5>
              <p className="card-text">Description</p>
            </div>
            <a href="#!" className="text-success px-3">
              <h6>
                Découvrir l'annonce{" "}
                <i className="fas fa-angle-double-right"></i>
              </h6>
            </a>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="https://mdbootstrap.com/img/new/standard/city/042.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Annonce #2</h5>
              <p className="card-text">Description</p>
            </div>
            <a href="#!" className="text-success px-3">
              <h6>
                Découvrir l'annonce{" "}
                <i className="fas fa-angle-double-right"></i>
              </h6>
            </a>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="https://mdbootstrap.com/img/new/standard/city/043.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Annonce #3</h5>
              <p className="card-text">Description.</p>
            </div>
            <a href="#!" className="text-success px-3">
              <h6>
                Découvrir l'annonce{" "}
                <i className="fas fa-angle-double-right"></i>
              </h6>
            </a>
          </div>
        </div>
      </div>
      <div className="py-5 "></div>
      <h3 className="text-success text-center">
        Voici les offres disponibles{" "}
      </h3>
      <div className="py-5 "></div>

      <div className="row row-cols-1 row-cols-md-3 g-4 card_margin">
        <div className="col">
          <div className="card h-100">
            <img
              src="https://mdbootstrap.com/img/new/standard/city/041.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Annonce #4</h5>
              <p className="card-text">Description</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="https://mdbootstrap.com/img/new/standard/city/042.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Annonce #5</h5>
              <p className="card-text">Description</p>
            </div>
            <a href="#!" className="text-success px-3">
              <h6>
                Découvrir l'annonce{" "}
                <i className="fas fa-angle-double-right"></i>
              </h6>
            </a>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="https://mdbootstrap.com/img/new/standard/city/043.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Annonce #6</h5>
              <p className="card-text">Description</p>
            </div>
            <a href="#!" className="text-success px-3">
              <h6>
                Découvrir l'annonce{" "}
                <i className="fas fa-angle-double-right"></i>
              </h6>
            </a>
          </div>
        </div>
      </div>

      <div className="py-5"></div>

      <div className="row row-cols-1 row-cols-md-3 g-4 card_margin">
        <div className="col">
          <div className="card h-100">
            <img
              src="https://mdbootstrap.com/img/new/standard/city/041.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Annonce #7</h5>
              <p className="card-text">Description</p>
            </div>
            <a href="#!" className="text-success px-3">
              <h6>
                Découvrir l'annonce{" "}
                <i className="fas fa-angle-double-right"></i>
              </h6>
            </a>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="https://mdbootstrap.com/img/new/standard/city/042.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Annonce #8</h5>
              <p className="card-text">Description</p>
            </div>
            <a href="#!" className="text-success px-3">
              <h6>
                Découvrir l'annonce{" "}
                <i className="fas fa-angle-double-right"></i>
              </h6>
            </a>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="https://mdbootstrap.com/img/new/standard/city/043.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Annonce #9</h5>
              <p className="card-text">Description</p>
            </div>
            <a href="#!" className="text-success px-3">
              <h6>
                Découvrir l'annonce{" "}
                <i className="fas fa-angle-double-right"></i>
              </h6>
            </a>
          </div>
        </div>
      </div>

      <div className="py-5"></div>
      {<Footer />}
    </div>
  );
}

export default Offres;
