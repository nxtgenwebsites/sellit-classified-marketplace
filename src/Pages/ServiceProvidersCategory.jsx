import React from 'react'
import Sidebar from '../components/sidebar'
import GoogleBanner from '../components/GoogleBanner'
import Container from 'react-bootstrap/Container'
import ServiceContent from '../components/ServiceContent'

export default function ServiceProvidersCategory() {
  return (
    <div>
      <Container>
        <GoogleBanner />
        <div className="layout-container d-lg-flex gap-4">
          <Sidebar />
          <ServiceContent />
        </div>
      </Container>
    </div>
  )
}
