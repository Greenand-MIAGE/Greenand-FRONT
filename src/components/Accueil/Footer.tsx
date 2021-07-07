import '../../styles/style_Accueil.css'

function Footer() {
  return (
    <div>
      <div className="container-fluid footerGreenand" >
        <footer className="text-center text-white " >
          <div className="container pt-4">
            <section className="mb-4 textLien">
              <a
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              >
                Mentions légales
              </a>

              <a
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              >
                Gestion des données personnelles et Cookies
              </a>

              <a
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              >
                Conditions générales d'utilisation
              </a>

              <a
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              >
                Conditions générales de vente
              </a>

              <a
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              >
                Nous contacter
              </a>
            </section>

            <section className="mb-4">
              <a
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              ><i className="fab fa-facebook-f"></i
              ></a>

              <a
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              ><i className="fab fa-twitter"></i
              ></a>

              <a
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              ><i className="fab fa-google"></i
              ></a>

              <a
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              ><i className="fab fa-instagram"></i
              ></a>

              <a
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              ><i className="fab fa-linkedin"></i
              ></a>

              <a
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              ><i className="fab fa-github"></i
              ></a>
            </section>

          </div>

          <div className="text-center p-3 copyright" >
            © 2021 Copyright:
            <a className="text-white" href="https://mdbootstrap.com/"> Greenand</a>
          </div>

        </footer>
      </div >
    </div>
  )
}

export default Footer
