import React from 'react'
import '../../styles/style.css'


function Chiffrescles() {
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <section className="page-section" id="services">
                        <div className="text-center">
                            <div>
                                <h1 className="section-heading text-uppercase" id="text">Quelques chiffres clés</h1>
                            </div>
                            <h3 className="section-subheading text-muted">Ile de France.</h3>
                        </div>
                        <div className="bloc-icon">
                            <div className="col-md-3">
                                <span className="fa-stack fa-3x">
                                    <i className="fas fa-circle fa-stack-2x text-primary"></i>
                                    <i className="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
                                </span>
                                <h4 className="my-3">Personne</h4>
                                <p className="text-muted"> AAA</p>
                            </div>
                            <div className="col-md-3">
                                <span className="fa-stack fa-3x">
                                    <i className="fas fa-circle fa-stack-2x text-primary"></i>
                                    <i className="fas fa-laptop fa-stack-1x fa-inverse"></i>
                                </span>
                                <h4 className="my-3">TEST ACTU</h4>
                                <p className="text-muted">AAA</p>
                            </div>
                            <div className="col-md-3">
                                <span className="fa-stack fa-3x">
                                    <i className="fas fa-circle fa-stack-2x text-primary"></i>
                                    <i className="fas fa-lock fa-stack-1x fa-inverse"></i>
                                </span>
                                <h4 className="my-3">HELLO</h4>
                                <p className="text-muted">AAA</p>
                            </div>
                        </div>

                    </section>
                </div>
            </div>
        </div>
    )
}

export default Chiffrescles
