import Header from "../Accueil_Connecté/Header_Co";
import HeadCreateAnnonce from "../Annonces/Header_Create_Annonce";
import FormCreateAnnonce from "../Annonces/Form_Create_Annonce";
import Footer from "../Accueil/Footer";

function mainAnnonce() {
  return (
    <div>
      <Header />
      <HeadCreateAnnonce />
      <FormCreateAnnonce />
      <Footer />
    </div>
  );
}

export default mainAnnonce;
