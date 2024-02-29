import { Col, Container, Row,} from "react-bootstrap";
import {BiSolidChevronRight} from "react-icons/bi";
// import { IconContext } from "react-icons";

import "./Footer.css"

const Footer = () => {
  return (
    <Container fluid className="mt-5 pt-5 bg-dark text-light footer">
      <Container className="py-5">
        <Row className="g-5">
          <Col sm={12} md={12} lg={4} xl={4}>
            <h4 className="text-white mb-3">INFORMATION</h4>

           

            <a className="btn btn-link" href="/">
            <div className="d-inline" style={{marginRight:"10px"}}>
            <BiSolidChevronRight/>
            </div>           
              Privacy Policy
            </a>

            <a className="btn btn-link" href="/">
            <div className="d-inline" style={{marginRight:"10px"}}>
            <BiSolidChevronRight/>
            </div>           
              Privacy Policy
            </a>

             <a className="btn btn-link" href="/">
            <div className="d-inline" style={{marginRight:"10px"}}>
            <BiSolidChevronRight/>
            </div>           
              Privacy Policy
            </a>

          </Col>

          <Col sm={12} md={12} lg={4} xl={4}>
            <h4 className="text-white mb-3">EVENTS</h4>
            <a className="btn btn-link" href="/">
              Westlands-Nairobi
            </a>
            <a className="btn btn-link" href="/">
              +254 758491492
            </a>
           
          </Col>

          
          <Col sm={12} md={12} lg={4} xl={4}>
           
            <div>
            <h4 className="text-white mb-3">GET IN TOUCH</h4>
            <a className="btn btn-link" href="/">
              Westlands-Nairobi
            </a>
            <a className="btn btn-link" href="/">
              +254 758491492
            </a>
            </div>

            <div className="mt-5">
            <h4 className="text-white mb-3">GET IN TOUCH</h4>
            <a className="btn btn-link" href="/">
              Westlands-Nairobi
            </a>
            <a className="btn btn-link" href="/">
              +254 758491492
            </a>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Footer;
