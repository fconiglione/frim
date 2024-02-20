import React, {useEffect, useState} from "react";
import HomeMastheadImg from "../assets/images/home-masthead-img.png";
import HomeBannerPlaceholder from "../assets/images/home-banner-placeholder.svg";

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
            <section className="home-banner-1">
                <div className="home-banner-1-column">
                    <h2>Powering every project, <br />Frim delivers for all.</h2>
                </div>
                <div className="home-banner-1-column">
                    <img src={HomeBannerPlaceholder} alt="A triangle, a square, a circle, and a trapezoid."/>
                </div>
            </section>
            <section className="home-instructions">
                <div className="home-instructions-title">
                    <h1>Unlock Real Affordability</h1>
                    <p>Break free from hefty software costs and discover an all-in-one solution for your company</p>
                </div>
                <div className="home-instructions-content">
                    <div className="home-instructions-content-column">
                        <div className="home-instructions-content-item">
                            <div>
                                <span>1</span>
                                <h2>Sign up for free</h2>
                                <p>Get started at no cost and begin exploring Frim</p>
                            </div>
                            <div>
                                <i className="fa-solid fa-computer-mouse"></i>
                            </div>
                        </div>
                    </div>
                    <div className="home-instructions-content-column">
                        <div className="home-instructions-content-item">
                            <div>
                                <span>2</span>
                                <h2>Find the right products</h2>
                                <p>Choose the applications best for your project</p>
                            </div>
                            <div>
                                <i className="fa-solid fa-folder-tree"></i>
                            </div>
                        </div>
                    </div>
                    <div className="home-instructions-content-column">
                        <div className="home-instructions-content-item">
                            <div>
                                <span>3</span>
                                <h2>Learn and grow</h2>
                                <p>Expand your knowledge and accelerate your business</p>
                            </div>
                            <div>
                                <i className="fa-solid fa-seedling"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="home-banner-2">
                <div className="home-banner-2-column">
                    <img src={HomeBannerPlaceholder} alt="A triangle, a square, a circle, and a trapezoid."/>
                </div>
                <div className="home-banner-2-column">
                    <h2>Trusted by teams <br/> across the globe.</h2>
                </div>
            </section>
        </main>
    );
}

export default Home;