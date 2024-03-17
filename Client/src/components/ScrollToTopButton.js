import React, { useState, useEffect } from "react";

function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    const toggleVisibility = () => {
        if (window.pageYOffset > 20) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <button
            id="scrollToTopButton"
            onClick={scrollToTop}
            style={{ display: isVisible ? "block" : "none" }}
            title="Scroll To Top"
        >
            <i className="fa-solid fa-angles-up"></i>
        </button>
    );
}

export default ScrollToTopButton;