import React from 'react'



function ProjectCard({ image, name, description, stack }) {
  return (
    <div className='projectItem'>
      <div style={{ backgroundImage: `url(${image})` }} className='bgImage' />
      <h1>{name}</h1>
      <p>{description}</p>
      <em><p className='stack'> {stack}</p></em>
    </div>
  )
}

export default ProjectCard