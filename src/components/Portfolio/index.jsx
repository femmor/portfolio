import React from 'react';
import PortfolioItem from "./PortfolioItem"

const Portfolio = ({ data }) => {
    
    return (
        <section className="portfolio-bg">
            <div className="container">
                <div className="row py-5">
                    <div className="col-12 py-3">
                        <h2 className="text-center">My Portfolio</h2>
                        <p className="text-center tag-line">Some of my works</p>
                    </div>
                    <PortfolioItem portfolio={data}/>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;

