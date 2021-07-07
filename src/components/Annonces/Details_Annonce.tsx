import React from 'react'
import '../../styles/style_Accueil.css'
import lieu from '../../assets/Garden.jpg'
import Footer from '../Accueil/Footer'
import Popup_Reservation from './Popup_Reservation'

function Details_Annonce() {
    return (
        <div>
            <div className="card" id="cardReservation" >
                <img src={lieu} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Description</h5>
                    <p className="card-text">
                        Supeficie etc etc</p>
                    
                    {<Popup_Reservation />}
                </div> 
            </div>
            {<Footer />}
        </div>
    );
}

export default Details_Annonce;
