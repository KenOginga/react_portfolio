import React from "react";
import resume from "../../assets/documents/Kennedy_Oginga_Resume.pdf"

function Resume() {
    return (
        <>
            <section className="page-section bg-dark text-white" style={{ padding: "5rem 0"}}>
                <div className="container text-center">
                    <h2 className="mb-4">My Resume</h2>
                    <a className="btn btn-light btn-xl" href={ resume } target="_blank" rel="noreferrer">Download!</a>
                </div>
            </section>
        </>
    );
};

export default Resume;