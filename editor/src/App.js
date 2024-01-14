import React, { useEffect } from 'react'
import { Navigate, Route, Routes, useNavigate } from "react-router-dom"
import { Home } from './container';
import { auth } from './config/firebase.config';
import { setDoc } from 'firebase/firestore';


const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userCred => {
      if (userCred) {
        console.log(userCred?.providerData[0]);
        setDoc(doc(db, "users", userCred?.uid), userCred?.providerData[0]).
          then(() => {
            //dispath the action to store

          })
      }
      else {
        navigate("/home/auth", {replace:true})
      }
    })

    //clean up the listener event
    return () => unsubscribe();
  }, [])
  return(
    <div className="h-screen w-screen flex items-start justify-start overflow-hidden">
      <Routes>
        <Route path='/home/*' element={<Home />} />
        <Route path='*' element={<Navigate to={'/home'}/>}/>
      </Routes>
    </div>
  );
}
export default App;
