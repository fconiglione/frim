import { React } from "react";
import { useEffect } from "react";
import CeasarColouredLogo1 from "../../assets/images/ceasar-coloured-logo-1.svg";
import CeasarCRMMobileAppPreview from "../../assets/images/ceasar-crm-mobile-app-preview.svg";

function CeasarMobileLanding() {
    const pageTitle = "Download Ceasar CRM for Mobile";

    useEffect(() => {
        document.title = `${pageTitle} | Frim`;
    }, [pageTitle]);
    return (
        <section className="ceasar-mobile-landing">
            <div className="ceasar-mobile-landing-container">
                <div className="ceasar-mobile-landing-header">
                    <div>
                        <img src={CeasarColouredLogo1} alt="Ceasar CRM coloured logo"></img>
                    </div>
                    <div>
                        <div className="ceasar-mobile-landing-socials">
                            <div>
                                <a href="/" target="_blank">
                                    <i className="fa-brands fa-facebook-f"></i>
                                </a>
                            </div>
                            <div>
                                <a href="/" target="_blank">
                                    <i className="fa-brands fa-x-twitter"></i>
                                </a>
                            </div>
                            <div>
                                <a href="/" target="_blank">
                                    <i className="fa-brands fa-youtube"></i>
                                </a>
                            </div>
                            <div>
                                <a href="https://www.linkedin.com/company/frimco/" target="_blank">
                                    <i className="fa-brands fa-linkedin"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ceasar-mobile-landing-content">
                    <div className="ceasar-mobile-landing-content-column">
                        <div>
                            <h1>The #1 CRM Choice For Startup Ventures*</h1>
                            <p>Get the best of business software built for your startup's growth. Download the app today!</p>
                        </div>
                        <div className="ceasar-mobile-landing-download-btns">
                            <a href="/" target="_blank">
                                <img src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg" alt="Download on the App Store"></img>
                            </a>
                            <a href="/" target="_blank">
                                <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Get it on Google Play"></img>
                            </a>
                        </div>
                        <div>
                            <span><i>*Launching soon...</i></span>
                        </div>
                    </div>
                    <div className="ceasar-mobile-landing-content-column">
                        <img className="ceasar-crm-mobile-app-img" src={CeasarCRMMobileAppPreview} alt="Ceasar CRM Mobile App Preview"></img>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CeasarMobileLanding;