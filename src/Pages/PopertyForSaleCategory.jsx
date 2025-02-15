import React from 'react'
import Sidebar from '../components/Sidebar/sidebar'
import GoogleBanner from '../components/Home/GoogleBanner'
import Container from 'react-bootstrap/Container'
import PropertyContent from '../components/Home/PropertyContent'

export default function PopertyForSaleCategory() {
  return (
    <div>
      <Container>
        <GoogleBanner />
        <div className="layout-container d-lg-flex gap-4">
          <Sidebar />
          <PropertyContent />
        </div>
      </Container>
    </div>
  )
}
