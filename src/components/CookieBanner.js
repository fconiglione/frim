import React, { useState } from 'react';

const CookieBanner = () => {
    const [acceptedCookies, setAcceptedCookies] = useState(false);

    const acceptCookies = () => {
        setAcceptedCookies(true);
    };

    if (acceptedCookies) {
        return null;
    }

    return (
        <div className="cookie-banner">
            <div className="cookie-banner-container">
                <p>To provide you with a personalized and efficient online experience, we use cookies. Cookies help us understand how you interact with our site, improve your browsing experience, and deliver content tailored to your interests. By continuing to use our site, you acknowledge and agree to our use of cookies. We appreciate your understanding and cooperation.</p>
                <p>For more information about how we use cookies, please refer to our <a href="/terms-of-use">terms of use</a> and our <a href="/privacy-policy">privacy policy</a>.</p>
            </div>
            <div className="cookie-banner-container">
                <a href="/privacy-policy/#cookies">
                    <span>Learn More</span>
                </a>
                <button onClick={acceptCookies}>Accept Cookies</button>
            </div>
        </div>
    );
};

export default CookieBanner;
