import React from 'react'
import '../../styles/style_Reservation.css'
import lieu from '../../assets/jardin.jpg'
import Footer from '../Accueil/Footer'
import Header from '../Accueil_Connecté/Header_Co'
import Popup_Reservation from './Popup_Reservation'
import Header_Co from '../Accueil_Connecté/Header_Co'

function Reservation() {
    return (
        <div>
            {<Header />}

            <div className="container">
                <div className="row">
                    <div className=" col-lg-12 col-md-12 col-sm-12" id="chiffres">
                        <div className="text-center">
                            <div>
                                <h3 className="section-heading text-uppercase" id="text"><b>Nos dernières offres</b></h3>
                            </div>
                        </div>
                    </div>
                </div>

            </div>





            <div className="card" id="cardReservation" >
                <img src={lieu} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Description</h5>
                    <p className="card-text">
                        Supeficie etc etc</p>
                    {<Popup_Reservation />}
                </div>
                {<Footer />}
            </div>
        </div>
    );
}

export default Reservation
