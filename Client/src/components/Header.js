import React, {useEffect, useState} from "react";
import LightHeaderLogo from "../assets/images/frim-black-logo-1.svg";
import DarkHeaderLogo from "../assets/images/frim-white-logo-1.svg";

function Header() {
    const [isMenuActive, setIsMenuActive] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(
        localStorage.getItem("darkMode") === "true" ? true : false
    );

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("darkMode", isDarkMode);
    }, [isDarkMode]);

    const toggleMenu = () => {
        setIsMenuActive(!isMenuActive);

        if (!isMenuActive) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
    };

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    const currentYear = new Date().getFullYear();
    return (
        <div className="header">
            <div className="header-banner-container">
                <div className="header-banner">
                    <i className="fa-solid fa-info-circle"></i>
                    <p>Our website is currently under construction. As a result, some features may not be available at this time. We apologize for any inconvenience this may cause. <a href="/maintenance">Learn more</a></p>
                </div>
            </div>
            <div className="large-screen-header-container">
                <div className="large-screen-header-column">
                    <div className="large-screen-header-row">
                        <a href="/">
                            <img className="large-screen-header-logo" src={isDarkMode ? DarkHeaderLogo : LightHeaderLogo} alt="Frim header logo"/>
                        </a>
                    </div>
                    <div className="large-screen-header-row">
                        <ul className="large-screen-header-nav">
                            <div className="large-screen-header-dropdown-wrapper">
                                <button
                                   className="large-screen-header-dropdown-trigger large-screen-header-products-btn">
                                    <span>Products</span>
                                </button>
                                <div className="large-screen-header-dropdown-content">
                                    <div className="large-screen-header-dropdown-content-row">
                                        <a href="/ceasar">Ceasar</a>
                                        |
                                        <a href="/blunder">Blunder</a>
                                        |
                                        <a href="/ryko">Ryko</a>
                                        |
                                        <a href="/education">Education</a>
                                    </div>
                                    <div className="large-screen-header-dropdown-content-row">
                                        <a className="btn-1" href="/products">All Products</a>
                                    </div>
                                </div>
                            </div>
                            <li>
                                <a href="/pricing">Pricing</a>
                            </li>
                            <li>
                                <a href="/blog">Blog</a>
                            </li>
                            <li>
                                <a href="/docs">Docs</a>
                            </li>
                            <li>
                                <a href="/careers">Careers</a>
                            </li>
                            <li>
                                <a href="/about">About</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="large-screen-header-column">
                    <div className="large-screen-header-row">
                        <div>
                            <button onClick={toggleDarkMode}
                                    className={`light-dark-mode-btn ${isDarkMode ? 'rotate180' : ''}`}>
                                {isDarkMode ? <i className="fa-solid fa-sun"></i> :
                                    <i className="fa-solid fa-moon"></i>}
                            </button>
                        </div>
                        <div>
                            <a className="btn-1" href="https://www.cloud.frim.io">Get Started</a>
                        </div>
                        <div>
                            <a className="btn-2" href="https://www.cloud.frim.io">Login</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="small-screen-header-container">
                <div className="small-screen-header-column">
                    <div className="small-screen-header-row">
                        <div className="hamburger-container" onClick={toggleMenu}>
                            <div className={`hamburger-btn ${isMenuActive ? 'active' : ''}`}>
                                <span className="bar"></span>
                                <span className="bar"></span>
                                <span className="bar"></span>
                            </div>
                        </div>
                    </div>
                    <div className="small-screen-header-row">
                        <a href="/">
                            <img className="small-screen-header-logo" src={isDarkMode ? DarkHeaderLogo : LightHeaderLogo} alt="Frim header logo"/>
                        </a>
                    </div>
                </div>
                <div className="small-screen-header-column">
                    <div className="small-screen-header-row">
                        <div>
                            <button onClick={toggleDarkMode}
                                    className={`light-dark-mode-btn ${isDarkMode ? 'rotate180' : ''}`}>
                                {isDarkMode ? <i className="fa-solid fa-sun"></i> :
                                    <i className="fa-solid fa-moon"></i>}
                            </button>
                        </div>
                        <div>
                            <a className="btn-1" href="https://www.cloud.frim.io">Get Started</a>
                        </div>
                        <div>
                            <a className="btn-2" href="https://www.cloud.frim.io">Login</a>
                        </div>
                    </div>
                </div>
                <div className={`small-screen-hamburger-menu ${isMenuActive ? 'active' : ''}`}>
                    <div className={`hamburger-menu ${isMenuActive ? 'active' : ''}`} id="hamburger-menu">
                        <div className="hamburger-menu-container">
                            <div>
                                <a href="/">
                                    <img className="small-screen-hamburger-logo" src={isDarkMode ? DarkHeaderLogo : LightHeaderLogo} alt="Frim header logo"
                                         style={{marginLeft: isMenuActive ? '0' : ''}}/>
                                </a>
                            </div>
                            <div className="hamburger-nav">
                                <nav>
                                    <ul>
                                        <li>
                                            <a href="/products">Products</a>
                                        </li>
                                        <li>
                                            <a href="/pricing">Pricing</a>
                                        </li>
                                        <li>
                                            <a href="/blog">Blog</a>
                                        </li>
                                        <li>
                                            <a href="/docs">Docs</a>
                                        </li>
                                        <li>
                                            <a href="/careers">Careers</a>
                                        </li>
                                        <li>
                                            <a href="/about">About</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="hamburger-sub-nav">
                                <nav>
                                    <ul>
                                        <li>
                                            <a href="/privacy-policy">Privacy Policy</a>
                                        </li>
                                        <span className="bullet">&bull;</span>
                                        <li>
                                            <a href="/terms-of-use">Terms of Use</a>
                                        </li>
                                        <span className="bullet">&bull;</span>
                                        <li>
                                            <a href="legal">Legal</a>
                                        </li>
                                        <span className="bullet">&bull;</span>
                                        <li>
                                            <a href="/sitemap.xml">Site Map</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="hamburger-legal-nav">
                                <div className="hamburger-legal-nav-socials">
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
                                <div>
                                    <p>Copyright © {currentYear} Frim, Inc. All Rights Reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;