import Header from './Header'
import Footer from './Footer'
import Carousel from './Carousel'
import Presentation from "./Presentation";
import Chiffre from './Chiffrescles'
import Cible from "./Cible";
import PropositionActivites from "./PropositionActivites";

function Accueil() {
  return (
    <div>
      <Header />
      <Carousel />
      <Presentation />
      <PropositionActivites />
      <Chiffre />
      <Cible />
      <Footer />
    </div>
  );

}
export default Accueil
