import react, { useEffect, useState } from 'react';
import DarkFrimCloudLogo from '../assets/images/frim-cloud-black-logo-1.svg';
import LightFrimCloudLogo from '../assets/images/frim-cloud-white-logo-1.svg';

const Pricing = () => {
    const pageTitle = "Pricing";

    useEffect(() => {
        document.title = `${pageTitle} | Frim`;

    }, [pageTitle]);
    return (
        <main className="pricing">
            <section className="pricing-masthead">
                <div>
                    <h1>Flexible pricing for all</h1>
                </div>
                <div>
                    <p>The all-in-one software solution for startup ventures</p>
                </div>
                <div>
                    <a className="scroll-down-btn" href="#featured-prices">
                        <span>SCROLL DOWN</span>
                        <i class="fa-solid fa-angles-down"></i>
                    </a>
                </div>
            </section>
            <section className="featured-prices" id="featured-prices">
                <div className='featured-prices-row'>
                    <div>
                        <img className='dark-frim-cloud-logo' src={DarkFrimCloudLogo} alt="Frim Cloud logo" />
                        <img className='light-frim-cloud-logo' src={LightFrimCloudLogo} alt="Frim Cloud logo" />
                    </div>
                    <div>
                        <p>Effortlessly store, share and collaborate on data <br /> across multiple platforms</p>
                    </div>
                </div>
                <div className='featured-prices-row'>
                    <div className='featured-prices-column'>
                        <div className='featured-prices-column-container featured-price-1'>
                            <div className='popular-banner'>
                                <h3>Most Popular</h3>
                            </div>
                            <div className='featured-price-1-container'>
                                <div>
                                    <i class="fa-solid fa-handshake-angle"></i>
                                </div>
                                <div>
                                    <h2>Frim Essentials</h2>
                                </div>
                                <div>
                                    <p>For learning and exploring the Frim Cloud platform with feature limitations</p>
                                </div>
                                <div className='price'>
                                    <h4>$0 CAD</h4>
                                    <p>per month</p>
                                </div>
                                <div>
                                    <a className="btn-3 pricing-cta-btn" href="/register">Get Started</a>
                                </div>
                                <div className='divider'>
                                    <hr />
                                </div>
                                <div>
                                    <ul>
                                        <li>
                                            <i class="fa-solid fa-circle-check"></i>
                                            <span>Essential access to Ceasar CRM, and other apps*</span>
                                        </li>
                                        <li>
                                            <i class="fa-solid fa-circle-check"></i>
                                            <span>Seamless user experience</span>
                                        </li>
                                        <li>
                                            <i class="fa-solid fa-circle-check"></i>
                                            <span>Email support</span>
                                        </li>
                                        <li>
                                            <i class="fa-solid fa-circle-check"></i>
                                            <span>Always-on security and data backups</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className='compare-link'>
                                    <a href="#plans">Compare plans <sup>†</sup></a>
                                </div>
                                <div className='legal-price'>
                                    <p>*With the emergence of new apps and technologies</p>
                                    <p><sup>†</sup>No commitment required, cancel subscription at any time</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='featured-prices-column'>
                        <div className='featured-prices-column-container featured-price-2'>
                            <div className='recommended-banner'>
                                <h3>Recommended</h3>
                            </div>
                            <div className='featured-price-2-container'>
                                <div>
                                    <i class="fa-solid fa-trophy"></i>  
                                </div>
                                <div>
                                    <h2>Frim Professional</h2>
                                </div>
                                <div>
                                    <p>For small to medium-sized businesses looking to implement Frim technologies</p>
                                </div>
                                <div className='price'>
                                    <h4>$9 CAD</h4>
                                    <p>per month</p>
                                </div>
                                <div>
                                    <a className="btn-4 pricing-cta-btn" href="/register">Get Started</a>
                                </div>
                                <div className='divider'>
                                    <hr />
                                </div>
                                <div>
                                    <ul>
                                        <li>
                                            <i class="fa-solid fa-circle-check"></i>
                                            <span>Professional access to Ceasar CRM, and other apps*</span>
                                        </li>
                                        <li>
                                            <i class="fa-solid fa-circle-check"></i>
                                            <span>Seamless user experience</span>
                                        </li>
                                        <li>
                                            <i class="fa-solid fa-circle-check"></i>
                                            <span>Priority email support, private Discord server</span>
                                        </li>
                                        <li>
                                            <i class="fa-solid fa-circle-check"></i>
                                            <span>Always-on security and data backups</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className='compare-link'>
                                    <a href="#plans">Compare plans <sup>†</sup></a>
                                </div>
                                <div className='legal-price'>
                                    <p>*With the emergence of new apps and technologies</p>
                                    <p><sup>†</sup>No commitment required, cancel subscription at any time</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='corporation-pricing'>
                <div className='corporation-pricing-container'>
                    <div className='corporation-pricing-column'>
                        <h1>Corporation or large-scale enterprise?</h1>
                        <p>Contact our sales team to learn about custom pricing and product scaling to meet your business needs</p>
                    </div>
                    <div className='corporation-pricing-column'>
                        <a className="btn-2" href="/contact">
                            <span>Contact Sales</span>
                            <i className="fa-solid fa-angles-right"></i>
                        </a>
                    </div>
                </div>
            </section>
            <section className='pricing-plans' id='plans'>
                <div className="table-wrapper">
                <table>
                    <thead className='recommended-thead'>
                        <td></td>
                        <td></td>
                        <td className='recommended-banner'>
                            <h3>Recommended</h3>
                        </td>
                        <td></td>
                    </thead>
                    <thead>
                        <tr>
                            <th className='no-border'></th>
                            <th className='no-border'>
                                <div className='th-content no-border'>
                                    <i className="fa-solid fa-handshake-angle"></i>
                                    <p>Frim Essentials</p>
                                    <p className='table-price'>$0 CAD/month</p>
                                    <a className="btn-1 small-pricing-cta-btn" href="/register">Get Started</a>
                                </div>
                            </th>
                            <th className='recommended-border-top'>
                                <div className='th-content no-border'>
                                    <i className="fa-solid fa-trophy"></i> 
                                    <p>Frim Professional</p>
                                    <p className='table-price'>$9 CAD/month</p>
                                    <a className="btn-4 small-pricing-cta-btn" href="/register">Get Started</a>
                                </div>
                            </th>
                            <th className='no-border'>
                                <div className='th-content no-border'>
                                    <i className="fa-solid fa-building"></i>
                                    <p>Frim Enterprise</p>
                                    <p className='table-price'>Custom pricing</p>
                                    <a className="btn-1 small-pricing-cta-btn" href="/contact">Contact Sales</a>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='sub-header'>
                            <td className='top-left-corner-radius'>Global Services</td>
                            <td></td>
                            <td className='recommended-cell-border'></td>
                            <td className='top-right-corner-radius'></td>
                        </tr>
                        <tr>
                            <td>Automated Backups</td>
                            <td>
                                <i className="fa-solid fa-circle-check center-cell"></i>
                            </td>
                            <td className='recommended-cell-border'>
                                <i className="fa-solid fa-circle-check center-cell"></i>
                            </td>
                            <td>
                                <i className="fa-solid fa-circle-check center-cell"></i>
                            </td>
                        </tr>
                        <tr>
                            <td>Health Checks</td>
                            <td>
                                <i className="fa-solid fa-circle-check center-cell"></i>
                            </td>
                            <td className='recommended-cell-border'>
                                <i className="fa-solid fa-circle-check center-cell"></i>
                            </td>
                            <td>
                                <i className="fa-solid fa-circle-check center-cell"></i>
                            </td>
                        </tr>
                        <tr>
                            <td>Private Data Storage</td>
                            <td>
                                <i className="fa-solid fa-circle-check center-cell"></i>
                            </td>
                            <td className='recommended-cell-border'>
                                <i className="fa-solid fa-circle-check center-cell"></i>
                            </td>
                            <td>
                                <i className="fa-solid fa-circle-check center-cell"></i>
                            </td>
                        </tr>
                        <tr>
                            <td>Auto Scaling</td>
                            <td></td>
                            <td className='recommended-cell-border'></td>
                            <td>
                                <i className="fa-solid fa-circle-check center-cell"></i>
                            </td>
                        </tr>
                        <tr>
                            <td>Activity Logs</td>
                            <td></td>
                            <td className='recommended-cell-border'></td>
                            <td>
                                <i className="fa-solid fa-circle-check center-cell"></i>
                            </td>
                        </tr>
                        <tr className='sub-header'>
                            <td>Ceasar (CRM)</td>
                            <td></td>
                            <td className='recommended-cell-border'></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Workspaces</td>
                            <td className='center-cell-text'>Up to 2</td>
                            <td className='center-cell-text recommended-cell-border'>Up to 10</td>
                            <td className='center-cell-text'>Custom</td>
                        </tr>
                        <tr>
                            <td>Collaboration</td>
                            <td className='center-cell-text'>10 users per workspace</td>
                            <td className='center-cell-text recommended-cell-border'>25 users per workspace</td>
                            <td className='center-cell-text'>Custom</td>
                        </tr>
                        <tr>
                            <td>Data Analytics</td>
                            <td className='center-cell-text'>Limited</td>
                            <td className='recommended-cell-border'><i className="fa-solid fa-circle-check center-cell"></i></td>
                            <td><i className="fa-solid fa-circle-check center-cell"></i></td>
                        </tr>
                        <tr>
                            <td>Email Notifications</td>
                            <td></td>
                            <td className='recommended-cell-border'><i className="fa-solid fa-circle-check center-cell"></i></td>
                            <td><i className="fa-solid fa-circle-check center-cell"></i></td>
                        </tr>
                        <tr className='sub-header'>
                            <td>Support</td>
                            <td></td>
                            <td className='recommended-cell-border'></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Email Support</td>
                            <td>
                                <i className="fa-solid fa-circle-check center-cell"></i>
                            </td>
                            <td className='recommended-cell-border'>
                                <i className="fa-solid fa-circle-check center-cell"></i>
                            </td>
                            <td>
                                <i className="fa-solid fa-circle-check center-cell"></i>
                            </td>
                        </tr>
                        <tr>
                            <td>Priority Email Support</td>
                            <td></td>
                            <td className='recommended-cell-border'>
                                <i className="fa-solid fa-circle-check center-cell"></i>
                            </td>
                            <td>
                                <i className="fa-solid fa-circle-check center-cell"></i>
                            </td>
                        </tr>
                        <tr>
                            <td>Private Discord Server</td>
                            <td></td>
                            <td className='recommended-cell-border'>
                                <i className="fa-solid fa-circle-check center-cell"></i>
                            </td>
                            <td>
                                <i className="fa-solid fa-circle-check center-cell"></i>
                            </td>
                        </tr>
                        <tr>
                            <td>Phone Support</td>
                            <td></td>
                            <td className='recommended-border-bottom'></td>
                            <td>
                                <i className="fa-solid fa-circle-check center-cell"></i>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </section>
            <section className='pricing-cta'>
                <div>
                    <h1>Ready to get started?</h1>
                </div>
                <div>
                    <p>Equip your business with easy-to-use, industry-ready software solutions</p>
                </div>
                <div>
                    <a className="btn-3" href="https://www.cloud.frim.io/register">
                        <span>Get Started for Free</span>
                        <i className="fa-solid fa-angles-right"></i>
                    </a>
                </div>
            </section>
        </main>
    );
}

export default Pricing;