import React from 'react'
import Bgphoto from '../assets/page-misc-error-light.png'
import { Link } from 'react-router-dom'

function Notfound() {
  return (
      <div className="h-100 container-xxl container-p-y d-flex align-items-center justify-content-center">
        <div className="misc-wrapper text-center ">
          <h2 className="mb-2 mx-2">Page Not Found :(</h2>
          <p className="mb-4 mx-2">Oops! 😖 The requested URL was not found on this server.</p>
          <Link to='/'  className="btn btn-primary">Back to home</Link>

          <div className="mt-3">
            <img src={Bgphoto} alt="page-misc-error-light" width={500} className="img-fluid" data-app-dark-img="illustrations/page-misc-error-dark.png" data-app-light-img="illustrations/page-misc-error-light.png" />
          </div>
        </div>
      </div>
  )
}

export default Notfound
