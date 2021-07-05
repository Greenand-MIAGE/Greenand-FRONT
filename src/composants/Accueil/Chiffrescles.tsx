import React from 'react'
import '../../styles/style.css'


function Chiffrescles() {
    return (
        <div className=" col-lg-12 col-md-12 col-sm-12" id="chiffres">
            <div className="card">
                <div className="card-body">
                    <section className="page-section" id="services">
                        <div className="text-center">
                            <div>
                                <h3 className="section-heading text-uppercase" id="text">Quelques chiffres clés</h3>
                            </div>
                            <h4 className="section-subheading text-muted" id="idf">Ile de France.</h4>
                        </div>
                        <div className ="bloc-icon">
                <div className="col-md-3">
                    <span className="fa-stack fa-3x">
                        <i className="fas fa-circle fa-stack-2x text-primary"></i>
                        <i className="fas fa-user fa-stack-1x fa-inverse"></i>
                    </span>
                    <h4 className="my-3">9</h4>
                    <p className="text-muted"> Nombre d’adhérents </p>
                </div>
                <div className="col-md-3">
                    <span className="fa-stack fa-3x">
                        <i className="fas fa-circle fa-stack-2x text-primary"></i>
                        <i className="fas fa-map fa-stack-1x fa-inverse"></i>
                    </span>
                    <h4 className="my-3">15</h4>
                    <p className="text-muted">Terrains en Ile-de-France</p>
                </div>
                <div className="col-md-3">
                    <span className="fa-stack fa-3x">
                        <i className="fas fa-circle fa-stack-2x text-primary"></i>
                        <i className="fas fa-calendar-check fa-stack-1x fa-inverse"></i>
                    </span>
                    <h4 className="my-3">???</h4>
                    <p className="text-muted">???</p>
                </div>
            </div>
         </section>
    </div>
</div>
</div>
    )
}

export default Chiffrescles
