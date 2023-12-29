import React, { useState } from 'react';
import { FaEnvelope, FaEye } from "react-icons/fa6";
import { motion } from "framer-motion";

const UserAuthinput = ({ label, placeHolder, isPass, setStateFunction, Icon }) => {
  const [value, setValue] = useState("");
  const [showPass, setShowPass] = useState(false);
  return (
    <div className='flex flex-col items-start justify-start gap-1'>
          <label className='text-sm text-gray-300'>{label}</label>
          <div className={`flex items-center justify-center gap-3 w-full md:w-96
          rounded-md px-4 py-1 bg-gray-200`}>
              <Icon className='text-text555 text-2xl' />
              <input type= {isPass ? "password" : "text"}
                  placeholder={placeHolder}
                  className='flex-1 w-full h-full py-6 outline-none border-none bg-transparent text-gray-600 text-lg'
                  value={value}
                  onChange={(e) => setValue(e.target.value)} />
        {isPass && (
          <motion.div whileTap={{scale: .9}} className='cursor-pointer'>
                  <FaEye className='text-gray-600 text-2xl'/>
              </motion.div>
              )}
          </div>
    </div>
  )
}

export default UserAuthinput
