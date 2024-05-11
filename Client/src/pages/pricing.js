import react, { useEffect } from 'react';

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
        </main>
    );
}

export default Pricing;