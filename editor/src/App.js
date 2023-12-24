import React from 'react'
import { Route, Routes } from "react-router-dom"
import {Home}  from './container';

const App = () => {
  return(
    <div className="h-screen w-screen flex items-start justify-start overflow-hidden">
      <Routes>
        <Route path='/home/*' element={<Home/>} />
      </Routes>
    </div>
  );
}
export default App;
