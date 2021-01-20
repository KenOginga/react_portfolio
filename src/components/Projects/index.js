import React from "react";
import burgerLogger from "../../assets/images/burger_logger.PNG";
import dayPlanner from "../../assets/images/day_planner.PNG";
import vita from "../../assets/images/vita.png";
import noteTaker from "../../assets/images/note_taker.PNG";


function Projects() {
    return (
        <>
            <section>
                <div className="page-section" id="portfolio">
                    <h2 className="text-center mt-0">My Applications</h2>
                    <hr className="divider my-4" />
                    <div className="container-fluid p-5">
                        <div className="row justify-content-center">
                            <div className="card-group">
                                <div className="card ml-2 mr-2" style={{width: "30rem"}}>
                                    <div className="h-50">
                                        <img src={ burgerLogger } className="card-img-top h-100" alt="burger logger screenshot" />
                                    </div>

                                    <div className="card-body">
                                        <h5 className="card-title">Burger Logger</h5>
                                        <div style={{height: "100px"}}>
                                            <p className="card-text">This application is a resturant app that lets users input the name of the burgers they'd like to eat.</p>
                                        </div>

                                        <a href="https://sheltered-waters-40955.herokuapp.com/" className="btn btn-primary" target="_blank">Deployed</a>
                                        <a href="https://github.com/KenOginga/burger_logger" className="btn btn-primary" target="_blank">GitHub</a>
                                    </div>
                                </div>

                                <div className="card" style={{width: "30rem"}}>
                                    <div className="h-50">
                                        <img src={ vita } className="card-img-top" alt="note taker screenshot" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">VITA (Vehicle Information Tracking Application)</h5>
                                        <div style={{height: "100px"}}>
                                            <p className="card-text">This is an application for built for small business that would like to keep track of vehicles within their fleet.</p>
                                        </div>
                                        <a href="https://sheltered-waters-40955.herokuapp.com/" className="btn btn-primary" target="_blank">Deployed</a>
                                        <a href="https://github.com/KenOginga/burger_logger" className="btn btn-primary" target="_blank">GitHub</a>
                                    </div>
                                </div>

                                <div className="card ml-2" style={{width: "30rem"}}>
                                    <div className="h-50">
                                        <img src={ noteTaker } className="card-img-top" alt="note taker screenshot" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Note Taker</h5>
                                        <div style={{height: "100px"}}>
                                            <p className="card-text">This app is basically a note taker application running on browser.
                                    The application is used to write and save notes and once the user is done, he/she has the option to delete the notes.</p>
                                        </div>

                                        <a href="https://shrouded-wave-96629.herokuapp.com/" className="btn btn-primary" target="_blank">Deployed</a>
                                        <a href="https://github.com/KenOginga/note_taker" className="btn btn-primary" target="_blank">GitHub</a>
                                    </div>
                                </div>

                                <div className="card ml-2" style={{width: "30rem"}}>
                                    <div className="h-50">
                                        <img src={ dayPlanner } className="card-img-top" alt="note taker screenshot" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Day Planner</h5>
                                        <div style={{height: "100px"}}>
                                            <p className="card-text">This is a simple calendar application that allows a user to save events for each hour of the day.</p>
                                        </div>

                                        <a href="https://kenoginga.github.io/day_planner/" className="btn btn-primary" target="_blank">Deployed</a>
                                        <a href="https://github.com/KenOginga/day_planner" className="btn btn-primary" target="_blank">Github</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Projects;