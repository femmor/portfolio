import React from 'react';
import styled from "styled-components"

const PageTop = () => {
    return (
        <>
            <Wrapper>
                <div className="thin-bar"></div>
            </Wrapper>
        </>
    );
}

const Wrapper = styled.div `
    .thin-bar {
    border-bottom: 5px solid #b83b5e;
}
`

export default PageTop;
