import React, {useEffect} from "react";
import FrimCloudLogo1 from "../assets/images/frim-cloud-black-logo-1.svg";
import CeasarLogo1 from "../assets/images/ceasar-coloured-logo-1.svg";

function Register() {
    const pageTitle = "Get Started";
    const currentYear = new Date().getFullYear();

    useEffect(() => {
        document.title = `${pageTitle} | Frim`;
    }, [pageTitle]);
    return (
        <section className="register">
            <div className="register-container">
                <div>
                    <div className="register-title">
                        <div className="register-title-item">
                            <div>
                                <img src={FrimCloudLogo1} alt="Frim Cloud logo"/>
                            </div>
                            <div>
                                <a href="/login">Already have an account?</a>
                            </div>
                        </div>
                        <div>
                            <h1>Create your account</h1>
                        </div>
                    </div>
                </div>
                <div className="register-main">
                    <div className="register-form">
                        <form method="post">
                            <fieldset>
                                <label>
                                    Enter your email
                                </label>
                                <div className="register-input">
                                    <i class="fa-solid fa-user"></i>
                                    <input type="email" placeholder="e.g. johndoe@example.com" />
                                </div>
                            </fieldset>
                            <fieldset>
                                <label>
                                    Enter your password
                                </label>
                                <div className="register-input">
                                    <i class="fa-solid fa-unlock"></i>
                                    <input type="password" placeholder="e.g. frimisthebest1234" />
                                </div>
                            </fieldset>
                            <fieldset>
                                <label>
                                    Confirm your password
                                </label>
                                <div className="register-input">
                                    <i class="fa-solid fa-arrows-rotate"></i>
                                    <input type="confirm" placeholder="e.g. frimisthebest1234" />
                                </div>
                            </fieldset>
                            <fieldset>
                                <label>
                                    How did you find out about Frim? (Optional)
                                </label>
                                <div className="register-input">
                                    <select>
                                        <option value="0">Please, select the first interaction you can remember</option>
                                        <option value="1">Search engine</option>
                                        <option value="2">Social media</option>
                                        <option value="3">Friend or family</option>
                                        <option value="4">Other</option>
                                    </select>
                                </div>
                            </fieldset>
                            <fieldset>
                                <div className="register-input">
                                    <checkbox>
                                        <input type="checkbox" />
                                        <label>Receive product updates and special offers</label>
                                    </checkbox>
                                </div>
                            </fieldset>
                            <button className="submit-btn">Create account</button>
                        </form>
                        <div className="register-form-nav">
                            <p>By creating an account, you agree to our <a href="/terms-of-use">Terms of Use</a> and <a href="/privacy-policy">Privacy Policy</a>.</p>
                        </div>
                    </div>
                    <div className="register-products">
                        <a className="register-product" href="/ceasar" target="_blank">
                            <img src={CeasarLogo1} alt="Ceasar logo"/>
                        </a>
                    </div>
                </div>
                <div>
                    <div className="register-footer">
                        <p>© {currentYear} Frim, Inc.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Register;