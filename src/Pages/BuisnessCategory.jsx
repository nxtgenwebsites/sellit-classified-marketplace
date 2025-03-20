import React from "react";
import Sidebar from "../components/Sidebar/sidebar";
import GoogleBanner from "../components/Home/GoogleBanner";
import Container from "react-bootstrap/Container";
import BuisnessContent from "../components/Categories/BuisnessContent";

function BuisnessCategory() {
  return (
    <div>
      <Container>
        <GoogleBanner />
        <div className="layout-container d-lg-flex gap-4">
          <Sidebar />
          <BuisnessContent />
        </div>
      </Container>
    </div>
  );
}

export default BuisnessCategory;
