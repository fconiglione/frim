import { React } from "react";
import { useEffect } from "react";

function Maintenance() {
    const pageTitle = "Maintenance";

    useEffect(() => {
        document.title = `${pageTitle} | Frim`;
    }, [pageTitle]);
    return (
        <section className="maintenance">
            <h1>Our Website Is Currently Under Construction</h1>
            <p>Last updated: June 12, 2024</p>
            <p>Welcome to the Frim Maintenance Page. Bookmark this page for the latest on site performance and any major issues affecting your use of the Frim platform.</p>
            <p>We apologize for any inconvenience this may cause and appreciate your patience as we work to improve your experience.</p>
            <hr />
            <div className="maintenance-status">
                <p>Status:</p>
                <div className="maintenance-status-dot"></div>
                <p>Offline</p>
            </div>
            <p>Frim is currently undergoing development and has not yet been officially released. Most features will be unavailable at this time.</p>
            <p>For more information, please visit our contact page by clicking <a href="/contact">here</a>.</p>
        </section>
    );
}

export default Maintenance;