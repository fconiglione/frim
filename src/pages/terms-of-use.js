import React, {useEffect} from "react";

function TermsOfUse() {
    const pageTitle = "Terms of Use";

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
            <h1>Terms of Use</h1>
            <p>Last updated: February 26, 2024</p>
            <p>Please read these Terms of Use (“Terms”, “Terms of Use”) carefully before using the https://www.frim.io website (the “Service”) operated by Frim, Inc. (“us”, “we”, or “our”).</p>
            <h2>Terms</h2>
            <p>By accessing the website at https://www.frim.io, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>
            <h2>Use License</h2>
            <p>Permission is granted to temporarily download one copy of the materials (information or software) on Frim, Inc.'s website for personal, non-commercial transitory viewing only.</p>
            <h2>Disclaimer</h2>
            <p>The materials on Frim, Inc.'s website are provided on an ‘as is’ basis. Frim, Inc. makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
            <h2>Limitations</h2>
            <p>In no event shall Frim, Inc. or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Frim, Inc.'s website, even if Frim, Inc. or a Frim, Inc. authorized representative has been notified orally or in writing of the possibility of such damage.</p>
            <h2>Modifications</h2>
            <p>Frim, Inc. may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.</p>
            <h2>Governing Law</h2>
            <p>These terms and conditions, effective as of {currentDate}, are governed by and construed in accordance with the laws of Ontario, Canada and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
        </section>
    );
}

export default TermsOfUse;