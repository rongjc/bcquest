import React from 'react'

export const Loader = ({show}) => {
  return <div className={show?"loading-container":"loading-container notdisplayed"}>
    <div className="loading">
    </div>
    <div className="loading-text-container">
      <div className="loading-text">Do not refresh the webpage</div>
    </div>
    <div className="loading-progress">
      <div className="loading-i"></div>
      <div className="loading-i"></div>
      <div className="loading-i"></div>
      <div className="loading-i"></div>
      <div className="loading-i"></div>
      <div className="loading-i"></div>
    </div>
  </div>
}

