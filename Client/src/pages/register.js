import React, {useEffect, useState, useRef} from "react";
import FrimCloudLogo1 from "../assets/images/frim-cloud-black-logo-1.svg";
import ReCAPTCHA from "react-google-recaptcha"
import axios from "axios";

function Register() {
    const pageTitle = "Get Started";
    const currentYear = new Date().getFullYear();
    const captchaRef = useRef(null) // Src: https://blog.logrocket.com/implement-recaptcha-react-application/

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const token = captchaRef.current.getValue();
        const apiUrl = process.env.NODE_ENV === 'development' ? 
                       process.env.REACT_APP_DEV_API_URL : 
                       process.env.REACT_APP_PROD_API_URL;
        try {
            await axios.post(apiUrl + '/register', { token }, { withCredentials: true });
            
            captchaRef.current.reset();
        } catch (error) {
            console.error("Error submitting registration form:", error);
        }
    }

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
                        <form method="post" onSubmit={handleSubmit}>
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
                                    <input type="password" placeholder="e.g. frimisthebest1234" />
                                </div>
                            </fieldset>
                            {/* <fieldset>
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
                            </fieldset> */}
                            <fieldset>
                                <div className="register-input register-checkbox">
                                    <checkbox>
                                        <input type="checkbox" />
                                        <label>Receive product updates and special offers</label>
                                    </checkbox>
                                </div>
                            </fieldset>
                            <div className="captcha" style={{transform:"scale(0.85)", transformOrigin:"0 0"}}>
                                <ReCAPTCHA
                                    sitekey={process.env.REACT_APP_SITE_KEY}
                                    ref={captchaRef}
                                    className="custom-recaptcha"
                                    theme="light"
                                />
                            </div>
                            <button className="submit-btn">Create account</button>
                        </form>
                        <div className="register-form-nav">
                            <p>By creating an account, you agree to our <a href="/terms-of-use">Terms of Use</a> and <a href="/privacy-policy">Privacy Policy</a>.</p>
                        </div>
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