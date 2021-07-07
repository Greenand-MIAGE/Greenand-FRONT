import React from 'react'
import '../../styles/style_Reservation.css'
import  lieu from '../../assets/jardin.jpg'
import Footer from '../Accueil/Footer' 
import Header from  '../Accueil_Connecté/Header_Co'
import Popup_Reservation from './Popup_Reservation'

function Reservation() {
    return (
        <div>
           
        <div className="card" id="cardReservation" >
            <img src={lieu} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Description</h5>
                <p className="card-text">
                    Supeficie etc etc</p>
                  {<Popup_Reservation/>}
                          </div>
           {<Footer/>}
        </div>
    </div>
    );
}

export default Reservation
