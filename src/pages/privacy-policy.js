import React, {useEffect} from "react";

function PrivacyPolicy() {
    const pageTitle = "Privacy Policy";

    useEffect(() => {
        document.title = `${pageTitle} | Frim`;
    }, [pageTitle]);
    const currentDate = new Date().toLocaleDateString('en-CA', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });
    return (
        <section className="privacy-policy">
            <h1>Privacy Policy</h1>
            <p>Last updated: February 26, 2024</p>
            <p>Frim, Inc. (“us”, “we”, or “our”) operates https://www.frim.io (the “Site”). This page informs you of our policies regarding the collection, use, and disclosure of Personal Information we receive from users of the Site.</p>
            <h2>Information Collection And Use</h2>
            <p>While using our Site, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to your name (“Personal Information”).</p>
            <h2>Log Data</h2>
            <p>Like many site operators, we collect information that your browser sends whenever you visit our Site (“Log Data”). This Log Data may include information such as your computer’s Internet Protocol (“IP”) address, browser type, browser version, the pages of our Site that you visit, the time and date of your visit, the time spent on those pages and other statistics.</p>
            <h2>Communications</h2>
            <p>We may use your Personal Information to contact you with newsletters, marketing or promotional materials and other information that pertains to our products Ceasar, Blunder, and Ryko, among others.</p>
            <h2 id="cookies">Cookies</h2>
            <p>
                Cookies are essential for the proper functioning of our website. These are files with a small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your computer's hard drive. Like many sites,
                we use "cookies" to collect information. Please note that disabling cookies in your browser settings may
                affect your ability to use some portions of our site.
            </p>
            <p>
                To disable cookies, you must do so in your browser's settings. However, please be aware that by
                disabling cookies, you may not be able to access certain features or functionality of our site.
            </p>
            <h2>Security</h2>
            <p>The security of your Personal Information is important to us, but remember that no method of transmission
                over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.</p>
            <h2>Changes To This Privacy Policy</h2>
            <p>This Privacy Policy is effective as of {currentDate} and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page. We reserve the right to update or change our Privacy Policy at any time and you should check this Privacy Policy periodically. Your continued use of the Service after we post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy.</p>
            <h2>Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please <a href="/contact-us">contact us</a>.</p>
        </section>
    );
}

export default PrivacyPolicy;