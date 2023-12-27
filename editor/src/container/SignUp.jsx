import React from 'react'
import { Logo } from '../assets';

const SignUp = () => {
  return (
      <div className='w-full py-6'>
          <img src={Logo} className='object-contain w-12 opacity-50 h-auto' alt="" />
          <div className='w-full flex flex-col items-center justify-center py-8'>
              <p>Join with us...</p>
              <div className='px-8 w-full md:w-auto py-4 rounded-xl bg-slate-700
              shadow-md flex flex-col items-center justify-center gap-8'>
                  
              </div>

          </div>
    </div>
  )
}

export default SignUp;
