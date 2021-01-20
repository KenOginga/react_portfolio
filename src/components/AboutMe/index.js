import React from "react";
import myImage from "../../assets/images/myImage.jpg"

function AboutMe() {
    return (
        <div>
            
            <div className="row bg-light align-items-center mt-2" style={{flexWrap: "wrap"}, {display: "flex"}}>
                <div className="col-md-4">
                    <img className="rounded-circle" src={ myImage } alt="my image" style={{height: 550}, {width: 450}}/>
                </div>
                <div className="col-md-7 text-center">
                    <h2>About Me</h2>
                    <hr className="divider my-4" />
                    <div className=" col-10 rounded border border-dark">
                        <article>
                            <h5>I'm Kennedy Oginga, currently a computer science student at Oregon State University and also studying Full Stack Web Development at Rice University Coding Bootcamp.</h5>
                        </article>
                        <article>
                            <h5>I am very passionate about web and sofware development. I spend most of my time working with JavaScript and learning new tools and technology
                            to solve problems.
                            </h5>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;