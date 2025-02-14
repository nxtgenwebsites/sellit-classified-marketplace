import React from 'react'
import Sidebar from '../components/sidebar'
import GoogleBanner from '../components/GoogleBanner'
import Container from 'react-bootstrap/Container'
import CarContent from '../components/CarContent'

export default function CarsCategory() {
  return (
    <div>
      <Container>
        <GoogleBanner />
        <div className="layout-container d-lg-flex gap-4">
          <Sidebar />
          <CarContent />
        </div>
      </Container>
    </div>
  )
}
