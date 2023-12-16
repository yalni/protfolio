import {useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";
import aboutme from "../assets/img/aboutme.png"
import badge from '../assets/img/badge.png';


export const Banners = () => {

    const pdf_file = "http://localhost:3000/Hariyalni-Panneerselvam-Resume-Python-Intern.pdf"

    const downloadFileAtURL = (url) => {

        const fileName = url.split('/').pop();
        const aTag = document.createElement('a');
        aTag.href = url;
        aTag.setAttribute('download', fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    }
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(200 - Math.random() * 200);
    const [index, setIndex] = useState(1);
    const toRotate = ["Python Developer", "Django - Flask", "HTML-CSS-JS", "DATABASE MANAGEMENT"];
    const period = 1000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])





    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>

                <Row className="align-items-center">
                    <Col>
                        <div className="divx">Hi, I'm Hariyalni Panneerselvam </div>
                        <br />
                        <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Python Developer", "Web Developer", "Designer", "ML engineer - Preparing"]'><span className="wrap">{text}</span></span>
                        <br />
                        <p>welcome to my protfolio</p>
                        <br />
                         
                        
                        <button onClick={() => { downloadFileAtURL(pdf_file) }}>Download CV <FontAwesomeIcon icon={faArrowCircleDown} style={{ color: "#ffffff", }} /></button>
                        <img className="starbadge" src={badge} alt="" />
                    </Col>
                    <Col>

                        <img src={aboutme} alt="about" />

                    </Col>
                </Row>
            </Container>

        </section >
    )
}