import { React } from "react";
import { useEffect } from "react";
import AboutStoryImg1 from "../assets/images/about-story-img-1.jpg";
import AboutStoryImg2 from "../assets/images/about-story-img-2.jpg";

function About() {
    const pageTitle = "About";

    useEffect(() => {
        document.title = `${pageTitle} | Frim`;
    }, [pageTitle]);
    return (
        <section className="about">
            <div className="about-masthead">
                <h1>Our mission is to <span>inspire</span> & <span>fuel success</span> with liberating technology.</h1>
                <p>Frim is a fast-growing software company that keeps innovation and customer-centric values at its core.</p>
            </div>
            <div className="about-highlights">
                <div className="about-highlight-row">
                    <h1>A few highlights</h1>
                </div>
                <div className="about-highlight-row">
                    <div className="about-highlight-card">
                        <h2>1000+</h2>
                        <p>users consistently use and trust our platform</p>
                    </div>
                    <div className="about-highlight-card">
                        <h2>12+</h2>
                        <p>countries where our platform is used</p>
                    </div>
                    <div className="about-highlight-card">
                        <h2>99.9%</h2>
                        <p>uptime for our applications</p>
                    </div>
                    <div className="about-highlight-card">
                        <h2>100%</h2>
                        <p>overall customer satisfaction</p>
                    </div>
                </div>
            </div>
            <div className="about-story">
                <div className="about-story-column">
                    <h1>Our story</h1>
                    <p>Now more than ever, people are trying to escape the 9-5 status quo and become true entrepreneurs. This spirit of innovation and independence is the foundation of Frim Technologies. Founded in late 2023 by Francesco Coniglione, Frim was born out of a desire to empower entrepreneurs and small to medium-sized businesses with the tools they need to succeed.</p>
                    <p>In a world where complexity often hinders progress, we are committed to offering a refreshing alternative. Our vision is clear: <i>to provide young businesses with an affordable, easy-to-use software platform that challenges industry giants.</i> We believe in simplicity over complexity, functionality over feature overload, and user experience at the heart of every line of code. <b>That is what we believe in.</b></p>

                </div>
                <div className="about-story-column">
                    <img className="about-story-img-1" src={AboutStoryImg1} alt="An aerial view of Toronto, ON" />
                    <img className="about-story-img-2" src={AboutStoryImg2} alt="Our Story" />
                </div>
            </div>
        </section>
    );
}

export default About;