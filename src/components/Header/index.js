import React from "react";
import "./style.css"

function Header() {
    return (
        <>
            <header className="masthead">
                <div className="container align-items-center">
                    <div className="row justify-content-center text-center">
                        <div className="col-lg-10 align-self-end">
                            <h1 className="text-uppercase text-white font-weight-bold">Welcome to My Website</h1>
                            <hr className="divider my-4" />
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
