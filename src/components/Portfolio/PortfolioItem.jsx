import React from 'react';
import {FaChevronRight} from "react-icons/fa"

const PortfolioItem = ({ portfolio }) => {
    return (
        <>
            {
                portfolio.map(item => {
                    const { id, image, project_name, project_link, project_desc, tags } = item
                    return (
                        <div key={id}className="col-md-6 col-lg-4 my-3">
                        <div className="card">
                            <img className="card-img-top" src={image} alt="portfolio"/>
                            <div className="card-body">
                                <h4 className="card-title mb-2">{project_name}</h4>
                                <p>{project_desc}</p>
                                <h6 className="text-muted">Technologies</h6>
                                { tags.map(tag => (
                                    <span key={tag} className="badge badge-dark mr-2">{tag}</span>
                                ))}
                            </div>
                            <div className="card-footer">
                            <div className="row align-items-center">
                                <div className="col-8">
                                    <a href={project_link} target="_blank" rel="noopener noreferrer" className="btn btn-rounded btn-outline-primary">
                                        Check it out <FaChevronRight/>
                                    </a>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    )
                })
            }
        </>
    );
}

export default PortfolioItem;
