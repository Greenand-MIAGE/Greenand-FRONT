import "../styles/App.css";
import Accueil from "./Accueil/Accueil"; 
import Land from "./Land/LandListing/Land";
import PageNotFound from "./PageNotFound/PageNotFound";
import CreateEvenement from "../composants/Evenement/CreateEvenement";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LandCreate from "./Land/LandCreate/LandCreate";
import ReservationEvenement from "./Evenement/ReservationEvenement";
import Activity from "./Land/ActivityListing/Activity";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Accueil} />
        <Route path="/land" exact component={Land} />
        <Route path="/land/create" exact component={LandCreate} />
        <Route path="/land/create-evenement/:id" component={CreateEvenement} />
        <Route path="/activities" component={Activity} />
        <Route path="/reservation/evenement/:id" component={ReservationEvenement} />
        <Route path="*" exact component={PageNotFound} />
      </Switch>
    </Router>
 
  );
}

export default App;
