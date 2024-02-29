import { Link, useLocation } from 'react-router-dom';
import './BreadCrumbs.css';
// import Navbar from 'react-bootstrap/Navbar';

const BreadCrumbs = () => {
  const location = useLocation();

  let currentLink = '';
  const crumbs = location.pathname
    .split('/')
    .filter((crumb) => crumb !== '')
    .map((crumb, index) => {
      currentLink += `/${crumb}`;
      return (
        <div className="crumb" key={index}>
          <Link to={currentLink}>{crumb}</Link>
        </div>
      );
    });

  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
        <div className="breadcrumbs container">
          <div className="crumb">
            <Link to="/">Home</Link>{' '}
           
          </div>
          {crumbs}
        </div>
        </div>
      </nav>
    
    </>
  );
};

export default BreadCrumbs;
