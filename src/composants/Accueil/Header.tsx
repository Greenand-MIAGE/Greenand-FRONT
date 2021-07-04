import '../App.tsx'
import React from 'react';
import '../../styles/style.css'
import logo from '../../assets/logoVers2.png'
import PopupConnexion from './PopupConnexion';
function Header() {


    return (
        <div className="header">
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <button className="navbar-brand mt-2 mt-lg-0" type="button" id="but_witht_brd">
                            <img
                                src={logo}
                                height="15"
                                alt=""
                                loading="lazy"
                            />
                        </button>
                        <div className="title_card">
                            <h3>Greenand</h3>
                        </div>
                    </div>
                    <p className="navbar-text navbar-right">
                        {<PopupConnexion />}
                    </p>
                </div>
            </nav>
            <img src={logo} alt="logo" className="greenand_logo"></img>
        </div>


    );
}

export default Header
