import React from 'react';
import { useSelector } from 'react-redux';

const Projects = () => {
  const projects = useSelector((state) => state.projects?.projects);
  return (
    <div className='w-full py-6 flex items-center justify-center gap-6 flex-wrap'>
      {projects && projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
      
    </div>
  )
}

const ProjectCard = () => {
  return (
    <div>
      Project
    </div>
  )
}
export default Projects;
