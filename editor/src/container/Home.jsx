import React, { useState } from 'react'
import {HiChevronDoubleLeft} from "react-icons/hi2"

const Home = ()=> {
 const [isSideMenu , setIsSideMenu] = useState(false)
    return (
    <div>
            <div className={`w-48 ${isSideMenu ? "w-48" : "flex-[.2] xl:flex-[1.8]"} 
            min-h-screen max-h-screen relative bg-zinc-800`}>
                {/* anchor*/}
                <div className='w-8 h-8 bg-zinc-800 rounded-tr-lg 
                rounded-br-lg absolute -right-8 flex items-center cursor-pointer'>
                 <HiChevronDoubleLeft className='text-white text-xl'/>
                </div>
                {/*logo */}
                {/*start coding */}
                {/*home nav */}
            </div>
            <div></div>
    </div>
  )
}

export default Home;