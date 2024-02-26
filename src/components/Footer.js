import React from "react";

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-wrapper">
                    <div className="footer-column">
                        <h1>Products</h1>
                        <ul>
                            <li><a href="/ceasar">Ceasar</a></li>
                            <li><a href="/blunder">Blunder</a></li>
                            <li><a href="/ryko">Ryko</a></li>
                            <li><a href="/education">Education</a></li>
                            <li><a href="/all-products">All Products</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h1>Resources</h1>
                        <ul>
                            <li><a href="/pricing">Pricing</a></li>
                            <li><a href="/docs">Docs</a></li>
                            <li><a href="/blog">Blog</a></li>
                            <li><a href="/help">Help Center</a></li>
                            <li><a href="/events">Events and Webinars</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h1>Company</h1>
                        <ul>
                            <li><a href="/about">About</a></li>
                            <li><a href="/careers">Careers</a></li>
                            <li><a href="/news">News</a></li>
                            <li><a href="/customers">Customers</a></li>
                            <li><a href="/our-commitment">Our Commitment</a></li>
                        </ul>
                    </div>
                </div>
                <hr/>
                <div className="footer-wrapper">
                    <div className="footer-row">
                        <div className="footer-column">
                            <div className="footer-social-icon">
                                <a href="/">
                                    <i className="fa-brands fa-facebook-f"></i>
                                </a>
                            </div>
                            <div className="footer-social-icon">
                                <a href="/">
                                    <i className="fa-brands fa-x-twitter"></i>
                                </a>
                            </div>
                            <div className="footer-social-icon">
                                <a href="/">
                                    <i className="fa-brands fa-youtube"></i>
                                </a>
                            </div>
                            <div className="footer-social-icon">
                                <a href="/">
                                    <i className="fa-brands fa-linkedin"></i>
                                </a>
                            </div>
                        </div>
                        <div className="footer-column">
                            <button className="language-selector">
                                <i className="fa-solid fa-globe"></i>
                                <span>English</span>
                            </button>
                        </div>
                    </div>
                    <div className="footer-row">
                        <div className="footer-column">
                            <ul>
                                <li><a href="/privacy-policy">Privacy Policy</a></li>
                                <span className="bullet">&bull;</span>
                                <li><a href="/terms-of-use">Terms of Use</a></li>
                                <span className="bullet">&bull;</span>
                                <li><a href="/legal">Legal</a></li>
                                <span className="bullet">&bull;</span>
                                <li><a href="/sitemap.xml">Site Map</a></li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <p>© {currentYear} Frim, Inc.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;