import React from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet, useLocation } from "react-router-dom";
import BreadCrumbs from "./components/BreadCrumbs";

function App() {
  const location = useLocation();

  return (
    <>
      <Header />
      {location.pathname !== "/" && !location.pathname.includes("/admin/event/") && <BreadCrumbs />}
      <main className="py-3">
        <Container>
          <Outlet/> 
        </Container>
      </main>
      <Footer/>
    </>
  );
}

export default App;