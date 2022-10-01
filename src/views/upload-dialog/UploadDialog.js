import React, { useState } from 'react'
import {
  CButton,
  CLink,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CPopover,
  CTooltip,
  CModalFooter,
} from '@coreui/react'

const UploadDialog = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <CButton onClick={() => setVisible(!visible)}>Launch demo modal</CButton>
      <CModal alignment="center" visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>Upload Your Audio File.</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <h5>Online</h5>
          <p>
            This could be
            <CTooltip content="Google Drive">
              <CLink>Google Drive</CLink>
            </CTooltip>{' '}
            and
            <CTooltip content="Dropbox">
              <CLink>Dropbox</CLink>
            </CTooltip>{' '}
            links.
          </p>
        </CModalBody>
        <CModalFooter>
          <CButton color="primary">Choose from computer</CButton>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}

export default UploadDialog
