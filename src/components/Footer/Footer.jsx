import React from 'react';
import "../../App.css"
import { FaHeart} from "react-icons/fa"
import Logo from "../../images/logo.svg"

import styled from "styled-components"

const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()

    return (
        <>
            <FooterWrapper>
                <footer className="footer-cta">
                    <div className="container">
                        <div className="row text-center py-5">
                            <div className="col">
                                <img src={Logo} alt="eLogo" className="img-responsive pb-3" width="85"/>
                                <p id="copyright">Copyright &copy; { year } | Made with <FaHeart style={{ color: "#e5001a" }}/> by Emmanuel Egomson</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </FooterWrapper>
        </>

    );
}

const FooterWrapper = styled.div`
    background: #eee;
`

export default Footer;
