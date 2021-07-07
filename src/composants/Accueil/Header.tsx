import '../App.tsx'
import '../../styles/header.css'
import PopupConnexion from './PopupConnexion';
import logo_text from '../../assets/Logo_texte_white.png';

function Header() {
    return (
        /*
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
        */
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-light fixed-top menu">
                <div className="container-fluid ">
                    <a href="!#" className="navbar-brand">
                        <img src={logo_text} height="50" alt="CoolBrand" className="logo_text" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    {<PopupConnexion />}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    );
}

export default Header
