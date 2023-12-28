import React, { useState } from 'react'
import { Logo } from '../assets';
import { UserAuthinput } from '../components';
import { FaEnvelope } from 'react-icons/fa6';

const SignUp = () => {
  const [email, setEmail] = useState("");
   const [password , setPassword] = useState("")
  return (
      <div className='w-full py-6'>
          <img src={Logo} className='object-contain w-12 opacity-50 h-auto' alt="Logo" />
          <div className='w-full flex flex-col items-center justify-center py-8'>
              <p className='py-12 text-2xl text-gray-200'>Join with us...</p>
              <div className='px-8 w-full md:w-auto py-4 rounded-xl bg-slate-700
              shadow-md flex flex-col items-center justify-center gap-8'>
         
          {/*email */}
          <UserAuthinput label="Email"
            placeHolder="Email"
            isPass={false}
            key="Email"
            setStateFunction={setEmail}
            Icon={FaEnvelope} />
          
          {/*password */}
          <UserAuthinput label=''
            placeHolder=""
            isPass=""
            key=""
            setStateFunction=""
            Icon="" />
          
          {/*alert section */}

          {/*login button */}

          {/*account text  section */}

          {/*or section */}

          {/* sign in with google */}

          {/*or section */}

          {/*sign in with github */}
                  
              </div>

          </div>
    </div>
  )
}

export default SignUp;
