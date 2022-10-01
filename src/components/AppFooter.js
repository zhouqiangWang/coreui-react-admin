import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="https://github.com/zhouqiangWang" target="_blank" rel="noopener noreferrer">
          Audio2Video
        </a>
        <span className="ms-1">&copy; 2022 SeenLab.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="https://github.com/zhouqiangWang" target="_blank" rel="noopener noreferrer">
          Video your podcast.
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
