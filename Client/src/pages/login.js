import React, {useEffect} from "react";
import FrimCloudLogo1 from "../assets/images/frim-cloud-black-logo-1.svg";
import CeasarLogo1 from "../assets/images/ceasar-coloured-logo-1.svg";

function Login() {
    const pageTitle = "Login";
    const currentYear = new Date().getFullYear();

    useEffect(() => {
        document.title = `${pageTitle} | Frim`;
    }, [pageTitle]);
    return (
        <section className="login">
            <div className="login-container">
                <div>
                    <div className="login-title">
                        <div>
                            <img src={FrimCloudLogo1} alt="Frim Cloud logo"/>
                        </div>
                        <div>
                            <h1>Good to see you again</h1>
                        </div>
                    </div>
                </div>
                <div className="login-main">
                    <div className="login-form">
                        <form method="post">
                            <fieldset>
                                <label>
                                    Your email
                                </label>
                                <div className="login-input">
                                    <i class="fa-solid fa-user"></i>
                                    <input type="email" placeholder="e.g. johndoe@example.com" />
                                </div>
                            </fieldset>
                            <fieldset>
                                <label>
                                    Your password
                                </label>
                                <div className="login-input">
                                    <i class="fa-solid fa-unlock"></i>
                                    <input type="password" placeholder="e.g. frimisthebest1234" />
                                </div>
                            </fieldset>
                            <button className="submit-btn">Sign in</button>
                        </form>
                        <div className="login-form-nav">
                            <a href="/signup">Don't have an account?</a>
                            <a href="/forgot-password">Forgot your password?</a>
                        </div>
                    </div>
                    <div className="login-products">
                        <a className="login-product" href="/ceasar" target="_blank">
                            <img src={CeasarLogo1} alt="Ceasar logo"/>
                        </a>
                    </div>
                </div>
                <div>
                    <div className="login-footer">
                        <p>© {currentYear} Frim, Inc.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;