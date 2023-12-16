import { Circle } from "react-awesome-shapes";
import { Row, Col } from "react-bootstrap";
import about from "../assets/img/about.png";
import edu from "../assets/img/edu.png";



function Aboutme() {
  return (
    <section className="mid">
      <Row>
        <Col>
          <img className="circle" src={about} alt="" />
        </Col>
        <Col>

          <p>
            
          Fresh Graduate, Ambitious professional with foundational software development skills in <span className="job1">Python, Js,HTML, Css & Frame works Django and Flask </span> with <span className="job3">Google Python & Meta software development professional certification</span>, strong analytical abilities, and excellent communication. Familiar with MySQL, PostgreSQL, and Git. Thrives both independently and collaboratively in dynamic environments, with a strong desire of learning new things, enhancing skills and knowledge which could build towards  personal career goals while contributing to the success of the  workplace.  
          </p>
        </Col>
      </Row>
      <Row className="edu">
          <img className="eduimg" src={edu} alt=""/>
        </Row>
    </section>
  );

}

export default Aboutme;
