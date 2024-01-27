import React from 'react';
import { UseSelector } from 'react-redux';
import { motion } from 'framer-motion';


const UserProfileDetails = () => {
  const user = useSelector(state => state.user?.user);
  return (
    <div className='flex items-center justify-center gap-4 relative'>
      <div className='w-14 h-14 flex items-center justify-center rounded-xl overflow-hidden cursor-pointer bg-emerald-500'>
        {
          user?.photoURL ? <>
            <motion.img whileHover={{ scale: 1.2 }} src={user?.photoURL}
              alt={user?.displayName} referrerPolicy='no-referrer' className='w-full h-full object-cover'/>
          </> : <p className='text-xl text-white font-semibold capitalize'>
              {user?.email[0]}
          </p>
        }
      </div>
    </div>
  )
}

export default UserProfileDetails
