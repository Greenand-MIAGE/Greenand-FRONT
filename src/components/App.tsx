import "../styles/App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Accueil from "./Accueil/Accueil"
import Accueil_Co from "./Accueil_Connecté/Accueil_Co";
import CreateAnnonce from './Annonces/Creation_annonces';
import Annonces from './Annonces/Offres';
import Annonce from "./Annonces/Details_Annonce";
import Profil from './Profil/Base_Profil'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Accueil} />
        <Route exact path="/accueil" component={Accueil_Co} />
        <Route exact path="/creationAnnonce" component={CreateAnnonce} />
        <Route exact path="/annonces" component={Annonces} />
        <Route exact path="/annonce" component={Annonce} />
        <Route exact path="/profil" component={Profil} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
