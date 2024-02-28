import React, {useEffect} from "react";

function Careers() {
    const pageTitle = "Careers";

    useEffect(() => {
        document.title = `${pageTitle} | Frim`;
    }, [pageTitle]);
    return (
        <section className="careers">
            
        </section>
    );
}

export default Careers;