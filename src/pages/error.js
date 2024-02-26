import React, {useEffect} from "react";

function Error404() {
    const pageTitle = "Error 404";

    useEffect(() => {
        document.title = `${pageTitle} | Frim`;
    }, [pageTitle]);
    return (
        <section className="error">
            <div>
                <h1>404</h1>
                <h1>Page Not Found</h1>
                <p>Sorry, the page you are looking for does not exist.</p>
            </div>
            <div>
                <a href="/" className="btn-2">
                    <span>Return Home</span>
                    <i className="fa-solid fa-angles-right"></i>
                </a>
            </div>
            <div>
                <div className="error-social-icon">
                    <a href="/">
                        <i className="fa-brands fa-facebook-f"></i>
                    </a>
                </div>
                <div className="error-social-icon">
                    <a href="/">
                        <i className="fa-brands fa-x-twitter"></i>
                    </a>
                </div>
                <div className="error-social-icon">
                    <a href="/">
                        <i className="fa-brands fa-youtube"></i>
                    </a>
                </div>
                <div className="error-social-icon">
                    <a href="/">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Error404;