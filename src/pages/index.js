import React, {useEffect, useState} from "react";

function Home() {
    const pageTitle = "Foundational Tools for Startups";

    useEffect(() => {
        document.title = `${pageTitle} | Frim`;
    }, [pageTitle]);
    return (
        <main className="home">
            <section className="home-masthead">
                <h1>Hello, World!</h1>
            </section>
        </main>
    );
}

export default Home;