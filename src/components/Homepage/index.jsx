import React, {Component} from 'react';
import styled from "styled-components"
import PageBg from "../../images/pattern.png"
import { portfolioData } from "../../data"

// Components
import PageTop from "../PageTop"
import About from '../About';
import Skills from '../Skills';
import Portfolio from '../Portfolio';
import HireMe from '../HireMe';
import Footer from "../Footer/Footer"



class Homepage extends Component {    
    state = {
        data: portfolioData
    }

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
                    <Portfolio data={this.state.data}/>
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

