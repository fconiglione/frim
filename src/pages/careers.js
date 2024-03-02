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
            <section className="careers-values">
                <div className="careers-value-item">
                    <div>
                        <h1>We work as a team.</h1>
                    </div>
                    <div>
                        <p>Working in a team encourages personal growth, increases job satisfaction, and reduces employee stress. We build trust with our colleagues, partners, and customers by being true to our word.</p>
                    </div>
                </div>
                <hr/>
                <div className="careers-value-item">
                    <div>
                        <h1>We innovate and adapt.</h1>
                    </div>
                    <div>
                        <p>Innovation and adaptation are at the soul center of our operations. These guiding stars illuminate our path, ensuring resilience and growth. We champion inner growth and encourage employee engagement in Frim's future.</p>
                    </div>
                </div>
            </section>
            <section className="careers-roles" id="current-openings">
                <div className="careers-roles-title">
                <h1>Current openings</h1>
                    <p>Explore our open roles, whether you prefer to work remotely, from a traditional office setting, or anywhere in between.</p>
                </div>
                <div className="careers-roles-listings">
                    <div className="careers-role">
                        <div>
                            <h1>Software Developer - Frontend</h1>
                            <p>Remote - Canada | Engineering</p>
                        </div>
                        <div>
                            <a className="btn-1" href="#">Apply Now</a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Careers;