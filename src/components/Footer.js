import { Container, Row, Col } from "react-bootstrap";
//import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo1.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
//import navIcon2 from "../assets/img/nav-icon2.svg";


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <img className="logofooter" src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-iconfooter">
              <a href="https://www.linkedin.com/in/nicolasmahecha11/" target="_blank" rel="noreferrer"><img src={navIcon1} alt="Icon" /></a>
            
            </div>
            <p>Copyrigth &copy; 2023 by Nicolas Mahecha | All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
