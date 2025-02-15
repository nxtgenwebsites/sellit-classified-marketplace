import React from 'react'
import Sidebar from '../components/Sidebar/sidebar'
import GoogleBanner from '../components/Home/GoogleBanner'
import Container from 'react-bootstrap/Container'
import CarContent from '../components/Home/CarContent'

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
