import React, { useState } from 'react'
import { Logo } from '../assets';
import { UserAuthinput } from '../components';
import { FaEnvelope, FaGithub } from 'react-icons/fa6';
import { MdPassword } from 'react-icons/md';
import { motion } from 'framer-motion';
import { FcGoogle} from 'react-icons/fc';
import { signInWithGoogle } from '../utils/helpers';

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [getEmailValidationStatus, setGetEmailValidationStatus] = useState(false);
  const [isLogin, setisLogin] = useState(false);
  return (
      <div className='w-full py-6'>
          <img src={Logo} className='object-contain w-12 opacity-50 h-auto' alt="Logo" />
          <div className='w-full flex flex-col items-center justify-center py-1'>
              <p className='py-12 text-2xl text-gray-200'>Join with us...</p>
              <div className='px-8 w-full md:w-auto py-4 rounded-xl bg-slate-700
              shadow-md flex flex-col items-center justify-center gap-8'>
         
          {/*email */}
          <UserAuthinput label="Email"
            placeHolder="Email"
            isPass={false}
            key="Email"
            setStateFunction={setEmail}
            Icon={FaEnvelope}
            setGetEmailValidationStatus={setGetEmailValidationStatus} />
          
          {/*password */}
          <UserAuthinput label="Password"
            placeHolder="Password"
            isPass={true}
            key="Password"
            setStateFunction={setPassword}
            Icon={MdPassword} />
          
          {/*alert section */}

          {/*login button */}
          {!isLogin ? (
            <motion.div whileTap={{scale: .9}} className='flex items-center justify-center w-full
          py-3 rounded-xl hover:bg-emerald-400 cursor-pointer bg-emerald-500'>
           <p className='text-xl text-white'>Sign Up</p>
            </motion.div>)
            : (<motion.div whileTap={{scale: .9}} className='flex items-center justify-center w-full
          py-3 rounded-xl hover:bg-emerald-400 cursor-pointer bg-emerald-500'>
           <p className='text-xl text-white'>Login</p>
          </motion.div>)
          }
          
          {/*account text  section */}
          {!isLogin ? (
            <p className='text-sm text-gray-400 flex items-center justify-center
          gap-3'>Already Have an account !
            <span onClick={()=> setisLogin(!isLogin)} className='text-emerald-500 cursor-pointer'>Login Here</span></p>
          ) : 
            (
              <p className='text-sm text-gray-400 flex items-center justify-center
          gap-3'>Doesn't Have an account !
            <span onClick={()=> setisLogin(!isLogin)} className='text-emerald-500 cursor-pointer'>Create Here</span></p>
            )
          }   
          
          {/*or section */}
          <div className='flex items-center justify-center gap-12'>
            <div className='h-[1px] bg-[rgba(256,256,256,0.2)] rounded-md w-24'></div>
            <p className='text-sm text-[rgba(256,256,256,0.2)]'>OR</p>
            <div className='h-[1px] bg-[rgba(256,256,256,0.2)] rounded-md w-24'></div>
          </div>

          {/* sign in with google */}
          <motion.div onClick={signInWithGoogle}
            className='flex items-center justify-center gap-3
          bg-[rgba(256,256,256,0.2)] backdrop:blur-md w-full py-3 rounded-xl
          hover:bg-[rgba(256,256,256,0.4)] cursor-pointer' whileTap={{ scale: .9 }}>
            <FcGoogle className='text-3xl ' />
            <p className='text-xl text-white '>Sign in with Google</p>
          </motion.div>

          {/*or section */}
          <div className='flex items-center justify-center gap-12'>
            <div className='h-[1px] bg-[rgba(256,256,256,0.2)] rounded-md w-24'></div>
            <p className='text-sm text-[rgba(256,256,256,0.2)]'>OR</p>
            <div className='h-[1px] bg-[rgba(256,256,256,0.2)] rounded-md w-24'></div>
          </div>


          {/*sign in with github */}
           <motion.div className='flex items-center justify-center gap-3
          bg-[rgba(256,256,256,0.2)] backdrop:blur-md w-full py-3 rounded-xl
          hover:bg-[rgba(256,256,256,0.4)] cursor-pointer' whileTap={{ scale: .9 }}>
            <FaGithub className='text-3xl text-white' />
            <p className='text-xl text-white '>Sign in with Github</p>
          </motion.div>
                  
              </div>

          </div>
    </div>
  )
}

export default SignUp;
