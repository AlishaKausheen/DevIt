import React from 'react';
import { motion } from 'framer-motion';

const Alert = ({status, alertMsg}) => {
  return (
    <motion.div className='fixed top-24 right-12 z-10'>
          {status === "Success" && (
              <div className='px-4 py-2 rounded-md bg-emerald-400 shadow-md shadow-emerald-500'>
                  <p className='text-lg text-zinc-700'>{alertMsg}</p>
              </div>
      )}
    </motion.div>
  )
}

export default Alert
