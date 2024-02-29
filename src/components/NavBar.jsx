import { Nav, Navbar, Image} from 'react-bootstrap';
import Logo from '../assets/logo2.png';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="custom-navbar px-4 px-lg-5 py-3 py-lg-2 custom-nav-font"
        data-bs-theme="dark"
      >
        <Navbar.Brand href="#home" className="p-0">
          <Image src={Logo} alt="Logo" className="logo-image" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="pr-3" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto py-0 ">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/admin">
              Admin
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
