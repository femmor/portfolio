import React, {Component} from 'react';
import styled from "styled-components"
import PageBg from "../../images/pattern.png"
import {data} from "../../data"

// Components
import PageTop from "../PageTop"
import About from '../About';
import Skills from '../Skills';
import Portfolio from '../Portfolio';
import HireMe from '../HireMe';
import Footer from "../Footer/Footer"



class Homepage extends Component {    
    
    render() {

        return (
            <>
                <HomepageWrapper style={{
                    backgroundImage: `url(${PageBg})`,
                    backgroundAttachment: "fixed"
                }}>
                    <PageTop/>
                    <About/>
                    <Skills/>
                    <Portfolio/>
                    <HireMe/>
                    <Footer/>
                </HomepageWrapper>
            </>
        )
    }
}

const HomepageWrapper = styled.div`

`

export default Homepage

