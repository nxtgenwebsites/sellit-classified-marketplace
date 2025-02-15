import React from 'react'
import Sidebar from '../components/Sidebar/sidebar'
import GoogleBanner from '../components/Home/GoogleBanner'
import Container from 'react-bootstrap/Container'
import MotocyclesContent from '../components/Home/MotorcycleContent'

export default function MotorcyclesCategory() {
  return (
    <div>
      <Container>
        <GoogleBanner />
        <div className="layout-container d-lg-flex gap-4">
          <Sidebar />
          <MotocyclesContent />
        </div>
      </Container>
    </div>
  )
}
