import React from "react";
import Sidebar from "../components/Sidebar/sidebar";
import GoogleBanner from "../components/Home/GoogleBanner";
import Container from "react-bootstrap/Container";
import MobileContent from "../components/Categories/MobileContent";

export default function MobilesCategory() {
  return (
    <div>
      <Container>
        <GoogleBanner />
        <div className="layout-container d-lg-flex gap-4">
          <Sidebar />
          
          <MobileContent />
        </div>
      </Container>
    </div>
  );
}
