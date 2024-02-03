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
    h-[375px] bg-zinc-700 rounded-md p-3 flex flex-col items-center justify-center
    gap-2'>
      <div className='bg-zinc-700 w-full h-full rounded-md overflow-hidden'
        style={{ overflow: "hidden", height: "100%" }}>
                        <iframe
                            title='result'
                            srcDoc={project.output}
                            style={{border: 'none', width:'100%', height:'100%'}}
                        />
      </div>
      <div className='flex items-center justify-start gap-2 w-full'>
        {/*image */}
        <div className='w-14 h-14 flex items-center justify-center 
rounded-xl overflow-hidden cursor-pointer bg-emerald-500'>
          {project?.user?.photoURL ? (
          <motion.img
            whileHover={{ scale: 1.2 }}
            src={project?.user?.photoURL}
            alt=''
            referrerPolicy='no-referrer'
            className='w-full h-full object-cover'

          />
        ) : (
            <p className='text-xl text-white font-semibold capitalize'>{project?.user?.email[0]}</p>
         )}

</div>

                {/*name */}
      </div>
    </motion.div>
  )
}
export default Projects;
