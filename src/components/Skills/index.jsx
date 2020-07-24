import React from 'react';
import styled from "styled-components"
import {FaLaptopCode, FaDatabase, FaTools, FaHtml5, FaCss3, FaBootstrap, FaReact, FaNodeJs, FaNpm, FaGulp, FaGithub, FaUserShield, FaWordpress } from "react-icons/fa"
import {IoLogoJavascript} from "react-icons/io"
import {DiJqueryLogo, DiMongodb, DiBower, DiFirebase} from "react-icons/di"
import {RiSecurePaymentLine} from "react-icons/ri"


const Experience = () => {
    return (
        <ExperienceWrapper>
            <section className="experience">
                <div className="container">
                <div className="row py-5">
                    <div className="col text-white">
                        <h2 className="text-center">My Skills</h2>
                        <p className="text-center tag-line">Specialist in need. Generalist at heart.</p>
                    </div>
                </div>
                <div className="row mx-auto pb-5 text-white">
                    <div className="col-4 text-center">
                    <span className="title__icons"><FaLaptopCode /></span>
                        <h3 className="text-center">Front-end</h3>
                        <ul className="skills_list py-3">
                            <li><FaHtml5/> HTML5</li>
                            <li><FaCss3/> CSS3</li>
                            <li><IoLogoJavascript/> JavaScript</li>
                            <li><DiJqueryLogo/> JQuery</li>
                            <li><FaBootstrap/> Bootstrap</li>
                            <li><FaReact/> React JS</li>
                        </ul>
                    </div>
                    <div className="col-4 text-center">
                        <span className="title__icons"><FaDatabase /></span>
                        <h3 className="text-center">Back-end</h3>
                        <ul className="skills_list py-3">
                            <li><FaNodeJs/> NodeJS</li>
                            <li><FaNpm/> NPM</li>
                            <li><DiMongodb/> MongoDB</li>
                            <li><DiFirebase/> Firebase</li>
                            <li><FaWordpress/> Wordpress</li>
                            <li><RiSecurePaymentLine/> Payment Gateway Integration</li>
                        </ul>
                    </div>
                    <div className="col-4 text-center">
                    <span className="title__icons"><FaTools /></span>
                        <h3 className="text-center">Tools</h3>
                        <ul className="skills_list py-3">
                        <li><FaGulp/> Gulp</li>
                            <li><DiBower/> Bower</li>
                            <li><FaGithub/> Github && Bitbucket</li>
                            <li><FaUserShield/> SSH</li>
                            <li>Restful Web APIs</li>
                        </ul>
                    </div>
                </div>
                </div>
            </section>
        </ExperienceWrapper>
    );
}

const ExperienceWrapper = styled.div`
    font-family: "Roboto", sans-serif !important;

    .experience {
        background: rgb(184, 59, 94, 0.9)
    }

    span.title__icons {
        font-size: 30px;
        padding-bottom: 20px; 
    }

    ul {
        padding-inline-start: 0 !important;
    }

    li {
        list-style: none;
        padding: 0;
        text-align: center;
    }
`

export default Experience;
