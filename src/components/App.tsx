import "../styles/App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Accueil from "./Accueil/Accueil";
import Accueil_Co from "./Accueil_Connecté/Accueil_Co";
import CreateAnnonce from "./Annonces/Main_Create_Annonce";
import Annonces from "./Annonces/Main_Annonces";
import Annonce from "./Annonces/Details_Annonce";
import Profil from "./Profil/Base_Profil";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Accueil} />
        <Route exact path="/accueil" component={Accueil_Co} />
        <Route exact path="/creation-annonce" component={CreateAnnonce} />
        <Route exact path="/annonces" component={Annonces} />
        <Route path="/annonce/:id" component={Annonce} />
        <Route exact path="/profil" component={Profil} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
