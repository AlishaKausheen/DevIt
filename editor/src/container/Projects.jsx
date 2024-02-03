import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from "framer-motion";

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

const ProjectCard = ({project, index}) => {
  return (
    <motion.div key={index} className='w-full cursor-pointer md:w[450px]
    h-[375px] bg-zinc-700 rounded-md p-4 flex flex-col items-center justify-center
    gap-4'>
      <div className='bg-zinc-700 w-full h-full rounded-md overflow-hidden'
        style={{ overflow: "hidden", height: "100%" }}>
                        <iframe
                            title='result'
                            srcDoc={project.output}
                            style={{border: 'none', width:'100%', height:'100%'}}
                        />
                    </div>
    </motion.div>
  )
}
export default Projects;
