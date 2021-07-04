import'../../styles/style.css'

function Footer() {
    return (
    
  <div className="container-fluid-inline">
    <footer>
      <div className="text-center" id="liens">
             <a href="#!" className="text">Mentions légales</a>
             <a href="#!" className="text">Gestion des données personnelles et Cookies </a>
             <a href="#!" className="text">Conditions générales d'utilisation</a>
             <a href="#!" className="text">Conditions générales de vente</a>
             <a href="#!" className="text">Nous contacter</a> 
      </div>
      <div id="reseaux">
        <section className="mb-4" >
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"> 
             <i className="fab fa-facebook-f"></i>
            </a>
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
             <i className="fab fa-twitter"></i>
             </a>
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
              <i className="fab fa-google"></i>
            </a>
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
              <i className="fab fa-instagram"></i>
              </a>
        </section>
      </div>
      <div className="text-center p-3" id="copy">
          © 2021 Copyright: 
         <a className="text"> Greenand</a>
      </div>
    </footer>
  </div>
    )
}

export default Footer
