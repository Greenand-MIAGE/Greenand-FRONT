import React from "react";
import Header from './Header'
import Footer from './Footer'
import Carousel from './Carousel'
import PropositionActivites from "./PropositionActivites";
import PresentationGRN from "./PresentationGRN";
import ManageCookies from "./ManageCookies";




function Accueil() {
  return (
    <div>
            
      <Header />
      <Carousel />
      <PresentationGRN />
      <PropositionActivites/>
      <ManageCookies />        
      <Footer/>
  
    </div>
  );

  }
export default Accueil
