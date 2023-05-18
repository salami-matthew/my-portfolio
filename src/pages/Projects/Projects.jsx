import React from 'react'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import "./Projects.css"
import { projects } from '../../api/projects';

function Projects() {
  return (
    <div className='projects'>
      <h1 className='projectTitle'>My Projects</h1>
      <div className='projectList'>
        {projects?.map((project, index) => {
          return (<a className='projectLink' key={index} href={project.url} target='_blank'>
            <ProjectCard
              image={project.image}
              name={project.name}
              description={project.description}
              stack={project.stack} />
          </a>)
        })}



      </div>
    </div>
  )
}

export default Projects