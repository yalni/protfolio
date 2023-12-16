import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import deskorg from "../assets/img/DeskOrg.png";
import webscrap from "../assets/img/webscrap.png";
import movierec from "../assets/img/MovieRec.png";
import netflixc from "../assets/img/NetflixC.png";
import todo from "../assets/img/todo list.png";
import chatapp from "../assets/img/chatapp.png";
import library from "../assets/img/library.png";
import pong from "../assets/img/pong.png";
import translate from "../assets/img/translate.png";
import bank from "../assets/img/Banking.png";
import rpc from "../assets/img/RPS.png";
import guessu from "../assets/img/GuessUser.png";
import mcq from "../assets/img/MultipleC.png";
import guessc from "../assets/img/GuessCom.png";
import weather from "../assets/img/weather.png";
import hangm from "../assets/img/hangman.png";
import tictac from "../assets/img/tictactoe.png";
import dic from "../assets/img/dictionary.png";
import madlib from "../assets/img/madlibs.png";
import url from "../assets/img/url.png";
import Leeza from "../assets/img/leeza.png";
import donut from "../assets/img/donut.png";
import insta from "../assets/img/insta.png";
import Protfolio from "../assets/img/protfolio.png";
import server from "../assets/img/server.png";



import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const Topproject = [
    {
      title: "Desktop Organizer",
      description: "Developed with: Python, os & Shutil library",
      imgUrl: deskorg,
    },
    {
      title: "Hotel list - Web Scrapper",
      description: "Developed with:  Python, pandas, requests & BeautifulSoup library",
      imgUrl: webscrap,
    },
    {
      title: "Movie recommendation system",
      description: "Developed with:  Python, numpy,pandas,os,re,TfidfVectorizer,cosine_similarity,ipywidgets & display library",
      imgUrl: movierec,
    },
    {
      title: "Netflix   Clone",
      description: "Developed with : HTML & CSS",
      imgUrl:netflixc,
    },
    {
      title: "Todo Application",
      description: "Developed with :django,python,html",
      imgUrl: todo,
    },
    {
      title: "Chat Application",
      description: "Developed with : Nodejs, react,REST client,chatengine.io",
      imgUrl: chatapp,
    },
  ];

  const pythonproject = [
    {
      title: "Library Membership Form",
      description: "Developed with: Python & anvil.works",
      imgUrl: library,
    },
    {
      title: "Pong game",
      description: "Developed with:  Python, turtle & windsound library",
      imgUrl: pong,
    },
    {
      title: "Translating App",
      description: "Developed with:  Python",
      imgUrl: translate,
    },
    {
      title: "Banking Unit",
      description: "Developed with:  Python",
      imgUrl:bank,
    },
    {
      title: "Rock Paper Scissor",
      description: "Developed with :Python & random library",
      imgUrl: rpc,
    },
    {
      title: "Guess the number - user",
      description: "Developed with : Python & random library",
      imgUrl: guessu,
    },
    {
      title: "Multiple Choice Question",
      description: "Developed with:  Python",
      imgUrl: mcq,
    },
    {
      title: "Guess the number - Computer",
      description: "Developed with:  Python & random library",
      imgUrl:guessc,
    },
    {
      title: "URL shortner",
      description: "Developed with : NodeJs, Javascript & mongoDB",
      imgUrl: url,
    },
    {
      title: "Desktop Organizer",
      description: "Developed with: Python, os & Shutil library",
      imgUrl: deskorg,
    },
    {
      title: "Hotel list - Web Scrapper",
      description: "Developed with:  Python, pandas, requests & BeautifulSoup library",
      imgUrl: webscrap,
    },
    {
      title: "Movie recommendation system",
      description: "Developed with:  Python, numpy,pandas,os,re,TfidfVectorizer,cosine_similarity,ipywidgets & display library",
      imgUrl: movierec,
    },
    {
      title: "Todo Application",
      description: "Developed with :django,python,html",
      imgUrl: todo,
    },
    {
      title: "Guess the number - user",
      description: "Developed with : Python & random library",
      imgUrl: guessu,
    },
    {
      title: "Weather App",
      description: "Developed with: Python & Weather API",
      imgUrl: weather,
    },
    {
      title: "Hangman game",
      description: "Developed with:  Python & random library",
      imgUrl:hangm,
    },
    {
      title: "TIC TAC TOE Game",
      description: "Developed with :Python, random & time library",
      imgUrl: tictac,
    },
    {
      title: "Dictionary",
      description: "Developed with : Python, django, html, css & pydictionary library",
      imgUrl: dic,
    },
    {
      title: "Madlibs",
      description: "Developed with : Python",
      imgUrl: madlib,
    },
  ];

  const fullstackproject = [
    {
      title: "Leeza Packaging Pvt Ltd - client project",
      description: "Developed with: React, SQLserver, Javascript, Html, Css",
      imgUrl: Leeza,
    },
    {
      title: "Donut shop webpage - front end design",
      description: "Developed with: html & css",
      imgUrl: donut,
    },
    {
      title: "Netflix Clone",
      description: "Developed with: html & css",
      imgUrl: netflixc,
    },
    {
      title: "Instagram Clone",
      description: "Developed with : React, Javascript, Html, Css",
      imgUrl:insta,
    },
    {
      title: "Personal Protfolio",
      description: "Developed with : React, Javascript, Html, Css",
      imgUrl: Protfolio,
    },
    {
      title: "server side development",
      description: "Developed with : React, Javascript & postman",
      imgUrl: server,
    },
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Popular Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second"> Python </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">FullStack</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          Topproject.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">

                      <Row>
                        {
                          pythonproject.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                         </Row>

                      
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">

                      <Row>
                        {
                          fullstackproject.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                         </Row>


                      
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          
      </Container>
    </section>
  )
}