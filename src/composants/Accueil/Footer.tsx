import React from 'react'

function Footer() {
    return (
    
    <div id="footer">
        <footer >
          <div id="liens">
             <a href="#!" className="text">Mentions légales</a>
             <a href="#!" className="text">Gestion des données personnelles et Cookies </a>
             <a href="#!" className="text">Conditions générales d'utilisation</a>
             <a href="#!" className="text">Conditions générales de vente</a>
             <a href="#!" className="text">Nous contacter</a> 
          </div>
          <div className="text-center p-3">
          © 2021 Copyright: 
            <a className="text"> Greenand</a>
          </div>
        </footer>
    </div>
    )
}

export default Footer
