import React, {useEffect, useState} from "react";
import HomeMastheadImg from "../assets/images/home-masthead-img.png";

function Home() {
    const pageTitle = "Foundational Tools for Startups";

    useEffect(() => {
        document.title = `${pageTitle} | Frim`;
    }, [pageTitle]);
    return (
        <main className="home">
            <section className="home-masthead">
                <div className="home-masthead-column">
                    <div className="home-masthead-row">
                        <p className="coming-soon">*Coming Soon*</p>
                        <h1>Grow faster with solutions designed for startup ventures</h1>
                    </div>
                    <div className="home-masthead-row">
                        <div>
                            <a className="btn-1" href="/get-started">
                                <span>Get Started for Free</span>
                                <i className="fa-solid fa-angles-right"></i>
                            </a>
                        </div>
                        <div>
                            <a className="btn-2" href="/demo">
                                <span>Watch Demo</span>
                                <i className="fa-solid fa-angles-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="home-masthead-column">
                    <div>
                        <img src={HomeMastheadImg} alt="A black and white road graphic"/>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;