import React from 'react'

const BackToTopBtn = () => {
  return (
    <a href="#" className="btn btn-lg btn-secondary btn-lg-square back-to-top relative">
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" className="bi bi-arrow-up-short" viewBox="0 0 16 16" style={{ color: 'white', position: 'absolute', top: 0, left: 0 }}>
    <path fillRule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5"/>
  </svg>
</a>
)
}

export default BackToTopBtn