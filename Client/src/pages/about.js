import { React } from "react";
import { useEffect } from "react";

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
            {/* <div className="about-story">
                <div className="about-highlight-column">
                    <h1>Our story</h1>
                    <p></p>
                </div>
                <div className="about-highlight-column">
                    <img src="/images/about/story.jpg" alt="Our Story" />
                    <img src="/images/about/story.jpg" alt="Our Story" />
                </div>
            </div> */}
        </section>
    );
}

export default About;