import React from "react";
import Header from './Header'
import Footer from './Footer'
import Carousel from './Carousel'
import PresentationGRN from "./PresentationGRN";
import ManageCookies from "./ManageCookies";
import Presentation from "./Presentation";
import Chiffre from './Chiffrescles'
import Objectif from "./Objectif";
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
      <Footer/>
      

    {/* 
      
      <PresentationGRN />
      <ManageCookies />        
      <Footer/>
      */}
  
    </div>
  );

  }
export default Accueil
