import React, { useState } from 'react'

const Home = ()=> {
 const [isSideMenu , setIsSideMenu] = useState(false)
    return (
    <div>
            <div className={`w-48 ${isSideMenu ? "w-48" : "flex-[.2] xl:flex-[1.8]"} min-h-screen max-h-screen relative bg-zinc-800`}></div>
    </div>
  )
}

export default Home;