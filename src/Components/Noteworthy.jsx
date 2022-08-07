import React from 'react'

import './css/noteworthy.css'

const Noteworthy = () => {
  return (
    <div className='section noteworthy'>
      <h2 className='noteworthyTitle'>--- Noteworthy Projects ---</h2>
      <div className="projectGrid">
        <div className="singleProjContainer">
          <h3 className='singleProjTitle'>Project</h3>
          <img src={require("./images/greeting.jpeg")} alt="project" className='singleProjImg' />
        </div>
        <div className="singleProjContainer">
          <h3 className='singleProjTitle'>Project</h3>
          <img src={require("./images/greeting.jpeg")} alt="project" className='singleProjImg' />
        </div>
        <div className="singleProjContainer">
          <h3 className='singleProjTitle'>Project</h3>
          <img src={require("./images/greeting.jpeg")} alt="project" className='singleProjImg' />
        </div>
        <div className="singleProjContainer">
          <h3 className='singleProjTitle'>Project</h3>
          <img src={require("./images/greeting.jpeg")} alt="project" className='singleProjImg' />
        </div>
        
      </div>
    </div>
  )
}

export default Noteworthy