import React from "react";

function Contacts() {
    return (
        <>
            <section className="page-section" id="contact" style={{ padding: "4rem 0"}}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <h2 className="mt-0">My Contacts</h2>
                            <hr className="divider my-4" />
                            <p className="text-muted mb-5">Please feel free to reach out</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
                            <i className="fas fa-phone fa-3x mb-3 text-muted"></i>
                            <div>+1 (254) 420-8696</div>
                        </div>
                        <div className="col-lg-4 mr-auto text-center">
                            <i className="fas fa-envelope fa-3x mb-3 text-muted"></i>
                            <a className="d-block" href="mailto:contact@yourwebsite.com">kn.oginga@gmail.com</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contacts;