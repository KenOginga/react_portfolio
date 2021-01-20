import React from "react";

function Social() {
    return (
        <>
            <section className="page-section" id="services">
                <div className="container">
                    <h2 className="text-center mt-0">Where to find me</h2>
                    <hr className="divider my-4" />
                    <div className="row">
                        <div className="col-lg-3 col-md-6 text-center">
                            <div className="mt-5">
                                <i className="fab fa-4x fa-instagram text-primary mb-4"></i>
                                <h3 className="h4 mb-2"><a href="https://instagram.com/kenogonda/" target="_blank">Instagram</a></h3>
                                <p className="text-muted mb-0">Come follow me on Instagram</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 text-center">
                            <div className="mt-5">
                                <i className="fab fa-4x fa-linkedin text-primary mb-4"></i>
                                <h3 className="h4 mb-2"><a href="https://linkedin.com/in/kennedyoginga" target="_blank">LinkedIn</a></h3>
                                <p className="text-muted mb-0">Let's get connected in LinkedIn</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 text-center">
                            <div className="mt-5">
                                <i className="fab fa-4x fa-facebook-square text-primary mb-4"></i>
                                <h3 className="h4 mb-2"><a href="https://facebook.com/ken.mcoginga" target="_blank">Facebook</a></h3>
                                <p className="text-muted mb-0">Send me a request or follow me on Facebook</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 text-center">
                            <div className="mt-5">
                                <i className="fab fa-4x fa-github text-primary mb-4"></i>
                                <h3 className="h4 mb-2"><a href="https://github.com/KenOginga" target="_blank">Github</a></h3>
                                <p className="text-muted mb-0">Check out some of my work</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Social;