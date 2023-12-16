import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    
      <div className="Foot" >
        <Container className="footerdiv">
          <Row className="row">
            <Col size={12} sm={6} className="cont">
              <p className="details">Email: hariyalni294@gmail.com</p>
              <br />
              <p className="details">Contact: +94726208035</p>


            </Col>

            <Col size={12} sm={6} className="detail">
              <div className='social-icon'>
                <a href='#'><img src={navIcon1} alt='' /> </a>
                <a href='#'><img src={navIcon2} alt='' /> </a>
                <a href='#'><img src={navIcon3} alt='' /> </a>
              </div>


            </Col>
          </Row>
        </Container>
        <footer>
        <p>
          2023 &copy; Hariyalni Panneerselvam, All Rights Reserved
        </p>
      </footer>

      </div>
      
   

  )
}