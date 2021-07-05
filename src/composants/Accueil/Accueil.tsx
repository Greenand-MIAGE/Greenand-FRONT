import React from "react";
import Header from './Header'
import Footer from './Footer'
import Carousel from './Carousel'
import PresentationGRN from "./PresentationGRN";
import PropositionActivites from "./PropositionActivites";
import ManageCookies from "./ManageCookies";




function Accueil() {
  return (
    <div>
            
      <Header />
      <Carousel />
      <PresentationGRN />
      <ManageCookies />        
      <Footer/>
  
    </div>
  );

  }
export default Accueil
