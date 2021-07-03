import React from "react";
import Header from './Header'
import Footer from './Footer'
import Carousel from './Carousel'
import Chiffrescles from "./Chiffrescles";
import PropositionActivites from "./PropositionActivites";
import ManageCookies from "./ManageCookies";




function Accueil() {
  return (
    <div>
            
      <Header />
      <Carousel />
      <Chiffrescles />
      <PropositionActivites/>
      <ManageCookies />     
      <Footer/>
  
    </div>
  );

  }
export default Accueil
