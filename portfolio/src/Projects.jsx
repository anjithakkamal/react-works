import React from 'react'

function Projects() {
    const works=["CRUD","service center","fundkeeper"]
  return (
    <div>
      <h1>Projects</h1>
      <ol>
        
          {works.map((w,i)=><li key={i}>{w}</li>)}
      </ol>
    </div>
  )
}

export default Projects
