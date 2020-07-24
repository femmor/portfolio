import React from 'react';
import "../../App.css"

import styled from "styled-components"

const HireMe = () => {

    return (
        <>
            <HireWrapper>
                <div>
                    <div className="container">
                        <div className="row text-center py-5">
                            <div className="col text-white cta"> 
                                <h2>Wanna work with me?</h2>
                                <p className="text-center">I'm currently available for work.</p>
                                <a className="btn cta-button" href="mailto:fegomson@gmail.com">Hire me</a> <a className="btn cta-button" href="./resume.pdf" target="_blank">Download CV</a>
                            </div>
                        </div>
                    </div>
                </div>
            </HireWrapper>
        </>

    );
}

const HireWrapper = styled.div`
    background: #3f3f3f;

`

export default HireMe;
