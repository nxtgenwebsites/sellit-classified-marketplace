import React from 'react'
import Sidebar from '../components/sidebar'
import GoogleBanner from '../components/GoogleBanner'
import Container from 'react-bootstrap/Container'
import JobContent from '../components/JobContent'

export default function FindJobCategory() {
  return (
    <div>
      <Container>
        <GoogleBanner />
        <div className="layout-container d-lg-flex gap-4">
          <Sidebar />
          <JobContent />
        </div>
      </Container>
    </div>
  )
}
