import React from "react";
import burgerLogger from "../../assets/images/burger_logger.PNG";
import dayPlanner from "../../assets/images/day_planner.PNG";
import vita from "../../assets/images/vita.png";
import noteTaker from "../../assets/images/note_taker.PNG";
import employeeDirectory from "../../assets/images/employee_directory_screenshot.PNG";
import budgetTracker from "../../assets/images/budget_tracker_screenshot.PNG";


function Projects() {
    return (
        <>
            <div className="container-fluid">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col mb-5">
                        <div className="card">
                            <img src={burgerLogger} className="card-img-top" alt="burger logger screenshot" style={{ height: "300px" }} />
                            <div className="card-body" style={{ height: "150px" }}>
                                <h5 className="card-title">Burger Logger</h5>
                                <p className="card-text">This application is a resturant app that lets users input the name of the burgers they'd like to eat.</p>
                            </div>
                            <div className="row justify-content-center">
                                <a href="https://sheltered-waters-40955.herokuapp.com/" className="btn btn-primary m-2" target="_blank" rel="noreferrer">Deployement</a>
                                <a href="https://github.com/KenOginga/burger_logger" className="btn btn-primary m-2" target="_blank" rel="noreferrer">GitHub</a>
                            </div>
                        </div>
                    </div>

                    <div className="col mb-5">
                        <div className="card">
                            <img src={vita} className="card-img-top" alt="vita screenshot" style={{ height: "300px" }} />
                            <div className="card-body" style={{ height: "150px" }}>
                                <h5 className="card-title">VITA (Vehicle Information Tracking Application)</h5>
                                <p className="card-text">This is an application for built for small business that would like to keep track of vehicles within their fleet.</p>
                            </div>
                            <div className="row justify-content-center">
                                <a href="https://arcane-basin-49331.herokuapp.com/login" className="btn btn-primary m-2" target="_blank" rel="noreferrer">Deployement</a>
                                <a href="https://github.com/HananYusuf/Projectect2" className="btn btn-primary m-2" target="_blank" rel="noreferrer">GitHub</a>
                            </div>
                        </div>
                    </div>

                    <div className="col mb-5">
                        <div className="card">
                            <img src={noteTaker} className="card-img-top" alt="note taker screenshot" style={{ height: "300px" }} />
                            <div className="card-body" style={{ height: "150px" }}>
                                <h5 className="card-title">Note Taker</h5>
                                <p className="card-text">This app is basically a note taker application running on browser.</p>
                            </div>
                            <div className="row justify-content-center">
                                <a href="https://shrouded-wave-96629.herokuapp.com/" className="btn btn-primary m-2" target="_blank" rel="noreferrer">Deployement</a>
                                <a href="https://github.com/KenOginga/note_taker" className="btn btn-primary m-2" target="_blank" rel="noreferrer">GitHub</a>
                            </div>
                        </div>
                    </div>

                    <div className="col mb-5">
                        <div className="card">
                            <img src={dayPlanner} className="card-img-top" alt="day planner screenshot" style={{ height: "300px" }}/>
                            <div className="card-body" style={{ height: "150px" }}>
                                <h5 className="card-title">Day Planner</h5>
                                <p className="card-text">This is a simple calendar application that allows a user to save events for each hour of the day.</p>
                            </div>
                            <div className="row justify-content-center">
                                <a href="https://kenoginga.github.io/day_planner/" className="btn btn-primary m-2" target="_blank" rel="noreferrer">Deployement</a>
                                <a href="https://github.com/KenOginga/day_planner" className="btn btn-primary m-2" target="_blank" rel="noreferrer">GitHub</a>
                            </div>
                        </div>
                    </div>

                    <div className="col mb-5">
                        <div className="card">
                            <img src={ employeeDirectory } className="card-img-top" alt="day planner screenshot" style={{ height: "300px" }}/>
                            <div className="card-body" style={{ height: "150px" }}>
                                <h5 className="card-title">Employee Directory</h5>
                                <p className="card-text">This application is an employee directory application used to view the entire list of employees.</p>
                            </div>
                            <div className="row justify-content-center">
                                <a href="https://kenoginga.github.io/employee_directory/" className="btn btn-primary m-2" target="_blank" rel="noreferrer">Deployement</a>
                                <a href="https://github.com/KenOginga/employee_directory" className="btn btn-primary m-2" target="_blank" rel="noreferrer">GitHub</a>
                            </div>
                        </div>
                    </div>

                    <div className="col mb-5">
                        <div className="card">
                            <img src={ budgetTracker } className="card-img-top" alt="day planner screenshot" style={{ height: "300px" }}/>
                            <div className="card-body" style={{ height: "150px" }}>
                                <h5 className="card-title">Online/Offline Budget Planner</h5>
                                <p className="card-text">This application is a budget tracker app with a functionality that allows users to use it both in online and offline mode.</p>
                            </div>
                            <div className="row justify-content-center">
                                <a href="https://fierce-retreat-39908.herokuapp.com/" className="btn btn-primary m-2" target="_blank" rel="noreferrer">Deployement</a>
                                <a href="https://github.com/KenOginga/progressive_budget" className="btn btn-primary m-2" target="_blank" rel="noreferrer">GitHub</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Projects;