import React from 'react';
import styled from "styled-components"
import PageBg from "../../images/pattern.png"

// Components
import PageTop from "../PageTop"
import About from '../About';
import Experience from '../Experience';
import Footer from "../Footer/Footer"

const Homepage = () => {
    return (
        <>
            <HomepageWrapper style={{
                backgroundImage: `url(${PageBg})`,
                backgroundAttachment: "fixed"
            }}>
                <PageTop/>
                <About/>
                <Experience/>
                <Footer/>
            </HomepageWrapper>
        </>
    )
}

const HomepageWrapper = styled.div`

`

export default Homepage

