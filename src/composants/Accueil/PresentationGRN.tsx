import React from 'react'
import '../../styles/style.css'
import logo from '../../assets/logoVers2.png'
import p2_img from '../../assets/p2_img.webp'
import p4_img from '../../assets/p4_img.webp'
import PropositionActivites from './PropositionActivites'
import Chiffrescles from './Chiffrescles'

function PresentationGRN() {
    return (
        <div className="container-fluid">
            <div className="card_ens">
                 <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img
                                src={logo}
                                id="card_logo"
                                className="img-fluid"
                                alt="..."
                            />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <div className="title_card">
                                    <h3 className="card-title">Qui sommes-nous ?</h3>
                                </div>
                                <p className="card-text">
                                    <div className="card_typo">
                                        70% des possesseurs d'un jardin ne l'entretiennent pas en France. 55% des Français qui n'ont pas de jardin aimeraient avoir un espace vert.
                                        Vous êtes possesseur d'un jardin et vous souhaitez apprendre à cultiver ? Vous n'avez pas de jardin et vous aimeriez partager votre passion aux services des autres ?
                                        Greenand est la solution pour vous ! Il s'agit d’un espace de partage de jardins, centré autour de l'apprentissage entre possesseurs de jardin et de personnes souhaitant se former à l’agriculture.
                                    </div>
                                </p>
                                <p className="card-text">
                                    <small className="text-muted">- Les Copains Jardins</small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {<Chiffrescles/>}
            <div className="container-fluid">
                <div className="row">
                    <div className=" col-lg-1 col-md-1 col-sm-1">
                    </div>
                    <div className=" col-lg-10 col-md-10 col-sm-10">
                        <div className="text-center">
                            <div className="title_card">
                                <h3>Un site simple et intuitif </h3>
                            </div>
                        </div>
                        <div className="card_typo">
                            <p> Réserver un créneau n'a jamais été aussi simple. Nous avons crée système de réservation via un planning permettant une vision claire des disponibilités des possesseurs d’espace cultivable.
                                Un peu d'histoire ? Nous nous inspirons du principe des FabLab/MakerSpace dans les entreprises pour l'esprit de partage et de convivialité. Le planning permet de réserver un “moment privilégié” avec le propriétaire.</p>
                        </div>
                    </div>
                    <div className=" col-lg-1 col-md-1 col-sm-1">  </div>
                </div>
            </div>
            <div className="p3_card">
                <div className="row">
                    <div className="col-md-4 offset-md-1 mx-3 my-3">
                        <div className="view overlay">
                            <img src={p2_img} className="img-fluid" alt="..." id="p2_img"></img>
                        </div>
                    </div>
                    <div className="col-md-7 text-md-left ml-3 mt-3">
                        <div className="title_card">
                            <h4 className="h4 mb-4">Pour qui ?</h4>
                        </div>
                        <div className="card_typo"><p className="font-weight-normal">Nous développons actuellement des "événements" pour avec les écoles pour toucher une population d’écoliers ainsi que les parents, mais aussi avec les mairies, qui peuvent être intéressées par des journée “verte” de formation, ainsi que les magasins Bio pour toucher une clientèle sensible aux questions environnementales.</p></div>
                    </div>
                </div>
            </div>
            {<PropositionActivites />}
            <div className="container-fluid">
                <div className="row">
                    <div className=" col-lg-1 col-md-1 col-sm-1">
                    </div>
                    <div className=" col-lg-10 col-md-10 col-sm-10" id="valo">
                        <div className="text-center">
                            <div className="title_card">
                                <h3>Revalorisation d’un métier</h3>
                            </div>
                        </div>
                        <div className="card_typo">
                            <p> Le métier d'agriculteur est un métier difficile mais au combien important pour notre alimentation dans la vie de tous les jours. Vous en avez assez de manger des tomates qui ont fait 10000km ?
                                Nous souhaitons revaloriser le métier d'agriculteur en France afin de créer des vocations pour nos jeunes et de favoriser une production locale.</p>
                        </div>
                    </div>
                    <div className=" col-lg-1 col-md-1 col-sm-1">  </div>
                </div>
            </div>
            <div className="p4_card">
                <div className="card">
                    <div className="card-body">
                        <div className="text-center">
                        </div>
                        <p className="card-text">
                        </p>
                        <p className="card-text">
                        </p>
                    </div>
                </div>
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-8">
                            <div className="card-body">
                                <div className="title_card">
                                    <h3 className="card-title">Nos activités futurs ?</h3>
                                </div>
                                <p className="card-text">
                                    <div className="card_typo">
                                        Dans un futur, nous développerons un système de ventes pour les particuliers des fruits et légumes produites en trop pour éviter le gâchis !
                                        Nous avons également pour objectif de favoriser les ruches citoyennes quand on sait que les abeilles sont responsables à 80% de la pollinisation de la flore.
                                    </div>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <img
                                src={p4_img}
                                id="p4_img"
                                className="img-fluid"
                                alt="..."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PresentationGRN
