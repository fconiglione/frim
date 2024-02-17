import React from "react";
import LightHeaderLogo from "../assets/images/frim-white-logo-1.svg";

function Header() {
    return (
        <div className="header">
            <div className="large-screen-header-container">
                <div className="large-screen-header-column">
                    <div className="large-screen-header-row">
                        <a href="/">
                            <img className="large-screen-header-logo" src={LightHeaderLogo} alt="Frim header logo"/>
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
                                        <a href="#">Ceasar</a>
                                        |
                                        <a href="#">Blunder</a>
                                        |
                                        <a href="#">Ryko</a>
                                        |
                                        <a href="#">Education</a>
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
                            <button className="light-dark-mode-btn">
                                <i className="fa-regular fa-sun"></i>
                            </button>
                        </div>
                        <div>
                            <a className="btn-1" href="/get-started">Get Started</a>
                        </div>
                        <div>
                            <a className="btn-2" href="/login">Login</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="small-screen-header-container"></div>
        </div>
    );
}

export default Header;