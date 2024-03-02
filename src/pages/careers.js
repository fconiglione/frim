import React, {useEffect} from "react";
import CareersMastheadImage from "../assets/images/careers-masthead-img.svg";

function Careers() {
    const pageTitle = "Careers";

    useEffect(() => {
        document.title = `${pageTitle} | Frim`;
    }, [pageTitle]);
    return (
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
    );
}

export default Careers;