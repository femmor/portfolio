import React from 'react';
import PortfolioItem from "./PortfolioItem"

const Portfolio = (portfolioItem) => {
    return (
        <section className="portfolio-bg">
            <div className="container">
                <div className="row py-5">
                    <div className="col-12 py-3">
                        <h2 className="text-center">My Portfolio</h2>
                        <p className="text-center tag-line">Selected display from my works</p>
                    </div>
                    <PortfolioItem />
                </div>
            </div>
        </section>
    );
}

export default Portfolio;

