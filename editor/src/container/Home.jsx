import React, { useState } from 'react'
import { HiChevronDoubleLeft } from "react-icons/hi2"
import { MdHome } from "react-icons/md"
import { FaSearchengin } from "react-icons/fa6"
import {motion} from "framer-motion"
import { Link, Route, Routes } from 'react-router-dom'
import {Logo} from "../assets"
import {Projects} from '../container'
import { SignUp } from '../container'
import { useDispatch, useSelector } from 'react-redux'
import { UserProfileDetails } from '../components'
import { SET_SEARCH_TERM } from '../context/actions/searchActions'

const Home = ()=> {
  const [isSideMenu, setIsSideMenu] = useState(false);
  const user = useSelector(state => state.user?.user);
  const searchTerm = useSelector(state => state.searchTerm?.searchTerm ?
    state.searchTerm?.searchTerm : "");
  const dispatch = useDispatch();
    return(
    <>
            <div className={`w-6 ${isSideMenu ? "w-1" : "flex-[.1] xl:flex-[.2]"} 
            min-h-screen max-h-screen relative bg-zinc-800
            px-3 py-3 flex flex-col items-center justify-start gap-4 transition-all
            duration-200 ease-in-out`}>
                {/* anchor*/}
                <motion.div whileTap={{scale:0.9}} onClick={() => setIsSideMenu(!isSideMenu)} className='w-8 h-8 bg-zinc-800 rounded-tr-lg 
                rounded-br-lg absolute -right-8 flex items-center cursor-pointer'>
                 <HiChevronDoubleLeft className='text-white text-xl'/>
          </motion.div>
          <div className='overflow-hidden w-full flex flex-col gap-4'>
            {/*logo */}
            <Link to={"/home"}>
              <img src={Logo} alt="Logo" className='object-contain w-16 h-auto' />
            </Link>
            {/*start coding */}
            <Link to={'/newProject'}>
              <div className='px-6 py-3 flex items-center justify-center
              rounded-xl border border-gray-400 cursor-pointer
              group hover:border-gray-200'>
               <p className='text-gray-400 group-hover:text-gray-200 capitalize'>Start Coding</p>
              </div>
            </Link>
            {/*home nav */}
            {user && (
              <Link to={"/home/projects"} className='flex items-center justify-center gap-6'>
                <MdHome className='text-gray-200 text-xl' />
                <p className='text-lg text-gray-200'>Home</p>
              </Link>
            )}
            </div>
        </div>
        
        <div  className='flex-1 min-h-screen max-h-screen overflow-y-scroll
            h-full flex flex-col items-start justify-start px-4 md:px-12 py-4 md:py-12'>
          {/*top section */}
          <div className=' h-2 w-full flex items-center justify-between gap-3'>
            {/* search */}
            <div className='bg-zinc-800 h-10 w-full px-4 py-3 rounded-md
            flex items-center justify-center gap-3'>
              <FaSearchengin className='text-2xl text-gray-300' />
              <input type='text'
                value={searchTerm}
                className='flex-1 px-4 py-1 text-xl bg-transparent
              outline-none border-none text-gray-300 placeholder:text-gray-600'
                placeholder="Search here..."
              onClick={(e)=> dispatch(SET_SEARCH_TERM(e.target.value))}/>
            </div>
            {/*profile section */}
            {!user && (
              <motion.div whileTap={{scale: .9}} className='flex items-center justify-center gap-3'>
                <Link to={"/home/auth"} className='bg-emerald-500 px-6 py-2
                rounded-md text-white text-lg cursor-pointer hover:bg-emerald-700'>
                  SignUp
                </Link>
                </motion.div>
            )}

            {user && (
              <UserProfileDetails/>
            )}
          </div>
          {/*bottom section */}
          <div className='w-full'>
            <Routes>
              <Route path='/*' element={<Projects />} />
              <Route path='/auth' element={<SignUp/>}/>
            </Routes>
          </div>
          </div>  
    </>
  )
}

export default Home;