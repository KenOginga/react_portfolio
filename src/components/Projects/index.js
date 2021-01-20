import React from "react";
import burgerLogger from "../../assets/images/burger_logger.PNG";
import dayPlanner from "../../assets/images/day_planner.PNG";
import vita from "../../assets/images/vita.png";
import noteTaker from "../../assets/images/note_taker.PNG";


function Projects() {
    return (
        <>
            {/* <section>
                <div className="page-section" id="portfolio">
                    <h2 className="text-center mt-0">My Applications</h2>
                    <hr className="divider my-4" />
                    <div className="container p-5 d-inline">
                        <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
                            <div className="card-group">
                                <div className="col card ml-2 mr-2" style={{width: "90rem"}}>
                                    <div className="h-50">
                                        <img src={ burgerLogger } className="card-img-top h-100" alt="burger logger screenshot" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Burger Logger</h5>
                                        <div style={{height: "100px"}}>
                                            <p className="card-text">This application is a resturant app that lets users input the name of the burgers they'd like to eat.</p>
                                        </div>
                                        <a href="https://sheltered-waters-40955.herokuapp.com/" className="btn btn-primary m-2" target="_blank" rel="noreferrer">Deployed</a>
                                        <a href="https://github.com/KenOginga/burger_logger" className="btn btn-primary m-2" target="_blank" rel="noreferrer">GitHub</a>
                                    </div>
                                </div>

                                <div className="col card" style={{width: "50rem"}}>
                                    <div className="h-50">
                                        <img src={ vita } className="card-img-top" alt="note taker screenshot" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">VITA (Vehicle Information Tracking Application)</h5>
                                        <div style={{height: "100px"}}>
                                            <p className="card-text">This is an application for built for small business that would like to keep track of vehicles within their fleet.</p>
                                        </div>
                                        <a href="https://arcane-basin-49331.herokuapp.com/login" className="btn btn-primary m-2" target="_blank" rel="noreferrer">Deployed</a>
                                        <a href="https://github.com/HananYusuf/Projectect2" className="btn btn-primary m-2" target="_blank" rel="noreferrer">GitHub</a>
                                    </div>
                                </div>

                                <div className="col card ml-2" style={{width: "50rem"}}>
                                    <div className="h-50">
                                        <img src={ noteTaker } className="card-img-top" alt="note taker screenshot" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Note Taker</h5>
                                        <div style={{height: "100px"}}>
                                            <p className="card-text">This app is basically a note taker application running on browser. Built using 
                                            No</p>
                                        </div>
                                        <a href="https://shrouded-wave-96629.herokuapp.com/" className="btn btn-primary m-2" target="_blank" rel="noreferrer">Deployed</a>
                                        <a href="https://github.com/KenOginga/note_taker" className="btn btn-primary m-2" target="_blank" rel="noreferrer">GitHub</a>
                                    </div>
                                </div>

                                <div className="col card ml-2" style={{width: "50rem"}}>
                                    <div className="h-50">
                                        <img src={ dayPlanner } className="card-img-top" alt="note taker screenshot" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Day Planner</h5>
                                        <div style={{height: "100px"}}>
                                            <p className="card-text">This is a simple calendar application that allows a user to save events for each hour of the day.</p>
                                        </div>
                                        <a href="https://kenoginga.github.io/day_planner/" className="btn btn-primary m-2" target="_blank" rel="noreferrer">Deployed</a>
                                        <a href="https://github.com/KenOginga/day_planner" className="btn btn-primary m-2" target="_blank" rel="noreferrer">Github</a>
                                    </div>
                                </div>

                                <div className="col card ml-2" style={{width: "50rem"}}>
                                    <div className="h-50">
                                        <img src={ dayPlanner } className="card-img-top" alt="note taker screenshot" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Day Planner</h5>
                                        <div style={{height: "100px"}}>
                                            <p className="card-text">This is a simple calendar application that allows a user to save events for each hour of the day.</p>
                                        </div>
                                        <a href="https://kenoginga.github.io/day_planner/" className="btn btn-primary m-2" target="_blank" rel="noreferrer">Deployed</a>
                                        <a href="https://github.com/KenOginga/day_planner" className="btn btn-primary m-2" target="_blank" rel="noreferrer">Github</a>
                                    </div>
                                </div>

                                <div className="col card ml-2" style={{width: "50rem"}}>
                                    <div className="h-50">
                                        <img src={ dayPlanner } className="card-img-top" alt="note taker screenshot" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Day Planner</h5>
                                        <div style={{height: "100px"}}>
                                            <p className="card-text">This is a simple calendar application that allows a user to save events for each hour of the day.</p>
                                        </div>
                                        <a href="https://kenoginga.github.io/day_planner/" className="btn btn-primary m-2" target="_blank" rel="noreferrer">Deployed</a>
                                        <a href="https://github.com/KenOginga/day_planner" className="btn btn-primary m-2" target="_blank" rel="noreferrer">Github</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card">
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Projects;