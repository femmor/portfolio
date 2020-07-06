import React from 'react';
import { Link } from "react-router-dom"
import { FaHeart} from "react-icons/fa"

const Footer = () => {
    return (
        <footer className="pt-3">
            <div className="container">
                <div className="row justify-content-center pb-4 mb-3">
                    <div className="d-md-flex justify-content-between align-items-center py-4 text-center text-md-left">
                        <p><span className='opacity-60'>© All rights reserved. Made with <FaHeart className="text-danger"/></span> <Link href='/' className='d-inline-block navi-link p-0' target='_blank'>by Emmanuel Egomson</Link></p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
