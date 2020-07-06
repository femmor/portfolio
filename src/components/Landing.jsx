import React from "react"
import LandingBg from "../images/cta-bg.png"

const Landing = () => {
    return (
        <div className="landing-section py-5">
                <div className="bg-center bg-no-repeat py-5"
                    style={{
                        backgroundImage: `url(${LandingBg})`, 
                        backgroundColor: "#6610f2"
                    }}
                >
                    <div className="px-4 py-5">
                        <div className="row justify-content-center py-3">
                            <div className="col-xl-7 col-lg-9">
                                <h2 className="block-title text-white text-center pb-4">The site you dreamed of is coming soon</h2>
                                <div className="pt-4 text-center">
                                    <p className="text-white">While you wait, Please check me out on Github</p>
                                    <a className="btn btn-style-4 btn-light" href="https://github.com/femmor" target="_blank">View my profile</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Landing