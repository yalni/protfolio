import python from "../assets/img/python-logo.png";
import Html from "../assets/img/html-logo.png";
import csslogo from "../assets/img/css-logo.png";
import js from "../assets/img/js-logo.png";
import django from "../assets/img/django.png";

import react from "../assets/img/react-logo.png";
import angular from "../assets/img/angular-logo.png";
import json from "../assets/img/jason.png";
import ts from "../assets/img/Typescript.png";
import api from "../assets/img/api.png";
import mysql from "../assets/img/mysql.png";
import mangodb from "../assets/img/mongodb.png";
import agilesrum from "../assets/img/agile-scrum.png";
import github from "../assets/img/github.png";
import node from "../assets/img/nodejs.png";
import express from "../assets/img/express.png";
import gcp from '../assets/img/gcp.png';
import aws from '../assets/img/aws.png';
import postman from '../assets/img/postman.png';
import jupyter from '../assets/img/jupyter.png';
import mat from "../assets/img/mat.png";
import pandas from "../assets/img/pandas.png";
import numpy from "../assets/img/numpy.png";
import r from "../assets/img/r.png";




import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";
import { Row, Col } from "react-bootstrap";

export const Skill = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
        
                            <Row className="align">
        

                                <Col className="sub"> 

                                <h2 >skills & Technology</h2>

                                    <table>

                                        <tr>

                                            <tr>
                                                <td>
                                                    <img src={python} alt="" />
                                                </td>
                                                <td>
                                                    <img src={django} alt="" />
                                                </td>
                                                <td>
                                                    <img src={Html} alt="" />
                                                </td>
                                                <td>
                                                    <img src={csslogo} alt="" />
                                                </td>
                                                <td>
                                                    <img src={js} alt="" />
                                                </td>
                                                <td>
                                                    <img src={ts} alt="" />
                                                </td>
                                                <td>
                                                    <img src={json} alt="" />
                                                </td>
                                                <td>
                                                    <img src={react} alt="" />
                                                </td>
                                               
                                            </tr>

                                            <tr>
                                                <td>
                                                    <img src={mysql} alt="" />
                                                </td>
                                                <td>
                                                    <img src={mangodb} alt="" />
                                                </td>
                                                <td>
                                                    <img src={agilesrum} alt="" />
                                                </td>
                                                <td>
                                                    <img src={github} alt="" />
                                                </td>
                                                <td>
                                                    <img src={node} alt="" />

                                                </td>
                                                <td>
                                                    <img src={express} alt="" />
                                                </td>
                                                <td>
                                                    <img src={gcp} alt="" />
                                                </td>
                                                <td>
                                                    <img src={aws} alt="" />
                                                </td>
                                       
                                            </tr>

                                            <tr>
                                            <td>
                                                    <img src={angular} alt="" />
                                                </td>
                                                <td>
                                                    <img src={api} alt="" />
                                                </td>
                                                <td>
                                                    <img src={postman} alt="" />
                                                </td>
                                                <td>
                                                    <img src={jupyter} alt="" />
                                                </td>
                                                <td>
                                                    <img src={mat} alt="" />
                                                </td>
                                                <td>
                                                    <img src={pandas} alt="" />
                                                </td>
                                                <td>
                                                    <img src={numpy} alt="" />
                                                </td>
                                                <td>
                                                    <img src={r} alt="" />
                                                </td>


                                            </tr>


                                        </tr>
                                    </table>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>

        </section >
    )
}