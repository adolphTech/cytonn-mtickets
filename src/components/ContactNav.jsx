import { Row, Col } from "react-bootstrap";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { IconContext } from "react-icons";

const ContactNav = () => {
  return (
    <div className="container-fluid bg-dark px-5 cont-nav d-none d-lg-block">
      <Row className="gx-0">
        <Col className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
          <div
            className="d-inline-flex align-items-center"
            style={{ height: "45px" }}
          >
            <small className="me-3 text-light">
              <div className="me-2 d-inline " style={{ color: "white" }}>
                <FiPhoneCall />
              </div>
              <a href="tel:+254725952229" className="text-light"> +254 758 491 492</a>{" "}
            </small>
            <small className="text-light">
              <div className="me-2 d-inline" style={{ color: "white" }}>
                <AiOutlineMail />
              </div>
              <a href="mailto:adolphodhiambo@outlook.com" className="text-light">
                adolphodhiambo@outlook.com
              </a>
            </small>
          </div>
        </Col>

        <Col className="text-center text-lg-end">
          <div
            className="d-inline-flex align-items-center"
            style={{ height: "45px" }}
          >
            <a
              className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
              href="/"
            >
              <IconContext.Provider
                value={{ className: "shared-class", size: 15 }}
              >
                <RiTwitterXLine />
              </IconContext.Provider>
            </a>

            <a
              className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
              href="/"
            >
              <IconContext.Provider
                value={{ className: "shared-class", size: 15 }}
              >
                <FaFacebookF />
              </IconContext.Provider>
            </a>

            <a
              className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-auto"
              href="/"
            >
              <IconContext.Provider
                value={{ className: "shared-class", size: 15 }}
              >
                <FaInstagram />
              </IconContext.Provider>
            </a>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ContactNav;
