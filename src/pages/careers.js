import React, {useEffect} from "react";
import CareersMastheadImage from "../assets/images/careers-masthead-img.svg";

function Careers() {
    const pageTitle = "Careers";

    useEffect(() => {
        document.title = `${pageTitle} | Frim`;
    }, [pageTitle]);
    return (
        <main className="careers">
            <section className="careers-masthead">
                <div className="careers-masthead-column">
                    <div className="careers-masthead-row">
                        <div>
                            <h1>Become part of something great</h1>
                        </div>
                        <div>
                            <p>Frim is on a journey to change the digital era. Explore remote-friendly, flexible opportunities within an organization that wants you to succeed.</p>
                        </div>
                    </div>
                    <div className="careers-masthead-row">
                        <div>
                            <a className="btn-1" href="/careers/#current-openings">
                                <span>View Careers</span>
                                <i className="fa-solid fa-angles-right"></i>
                            </a>
                        </div>
                        <div>
                            <a href="/careers/#current-openings" className="internships-anchor">Looking for internships?</a>
                        </div>
                    </div>
                </div>
                <div className="careers-masthead-column">
                    <img src={CareersMastheadImage} alt="A remote worker sits on a bean bag"/>
                </div>
            </section>
            <section className="careers-cta">
                <div>
                    <h1>Like our mission? <br /> You'll fit right in.</h1>
                    <p>We’re looking for creative, passionate and determined people to help further our mission</p>
                </div>
                <div>
                    <div>
                        <a className="btn-3" href="/careers/#current-openings">
                            <span>See Open Positions</span>
                            <i className="fa-solid fa-angles-right"></i>
                        </a>
                    </div>
                </div>
            </section>
            <section className="careers-video">
                <div>
                    {/* This is a video placeholder */}
                    <iframe src="https://www.youtube.com/embed/NpEaa2P7qZI?si=-5c0ticnq2LQt9SA"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                </div>
            </section>
        </main>
    );
}

export default Careers;