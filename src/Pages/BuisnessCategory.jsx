import React from 'react'
import Sidebar from '../components/sidebar'
import GoogleBanner from '../components/GoogleBanner'
import Container from 'react-bootstrap/Container'
import BuisnessContent from '../components/BuisnessContent'

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
  )
}

export default BuisnessCategory
