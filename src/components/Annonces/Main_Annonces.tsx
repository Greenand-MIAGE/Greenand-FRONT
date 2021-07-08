import Header from '../Accueil_Connecté/Header_Co'
import HeaderAnnonce from '../Annonces/Header_Annonces';
import NewsAnnonces from './News_Annonces';
import Annonces from './Annonces';
import Footer from '../Accueil/Footer'

function mainAnnonce() {
    return (
        <div>
            <Header />
            <HeaderAnnonce />
            <NewsAnnonces />
            <Annonces />
            <Footer />
        </div>
    );
}

export default mainAnnonce;