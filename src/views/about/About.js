import React from 'react'
import {
  CCard,
  CCardBody,
  CContainer,
  // CInputGroupText,
  CRow,
} from '@coreui/react'

const About = () => {
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCard className="text-primary py-5" style={{ width: '76%', height: '92%' }}>
            <CCardBody className="text-center">
              <div>
                <h2>About Us</h2>
                <p>
                  We are using AI to generate a Video for your podcast, let the world watch your
                  podcast!
                </p>
              </div>
            </CCardBody>
          </CCard>
        </CRow>
      </CContainer>
    </div>
  )
}

export default About
