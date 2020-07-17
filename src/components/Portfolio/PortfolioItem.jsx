import React from 'react';
import {FaChevronRight} from "react-icons/fa"

const PortfolioItem = () => {
    return (
        <>
            <div className="col-md-6 col-lg-4">
                <div className="card">
                    <img className="card-img-top" src="../assets/images/demo/image-square-4.jpg" alt="Card image cap" />
                    <div className="card-body">
                    <a href="" className="eyebrow mb-1">Design</a>
                    <h4 className="card-title mb-0"><a href="">Planning amazing weddings that you won’t forget.</a></h4>
                    </div>
                    <div className="card-footer">
                    <div className="row align-items-center">
                        <div className="col-8">
                        <a href="" className="btn btn-rounded btn-outline-primary">
                            <FaChevronRight/>
                        </a>
                        </div>
                        <div className="col-4 text-right">
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item">
                                <a href="#">
                                    
                                </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PortfolioItem;
