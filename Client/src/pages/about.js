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
        </section>
    );
}

export default About;