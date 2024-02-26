import React, {useEffect} from "react";

function Legal() {
    const pageTitle = "Legal";

    useEffect(() => {
        document.title = `${pageTitle} | Frim`;
    }, [pageTitle]);
    return (
        <section className="legal">
            <h1>Legal Information</h1>
            <p>Last updated: February 26, 2024</p>
            <p>For more information regarding your rights, please consult our <a href="/privacy-policy">privacy
                policy</a> and <a href="/terms-of-use">terms of use</a>.</p>
            <p>If you have any questions or concerns, feel free to <a href="/contact-us">contact us</a>.</p>
        </section>
    );
}

export default Legal;