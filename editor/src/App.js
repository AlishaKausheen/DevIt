import React, { useEffect, useState } from 'react'
import { Navigate, Route, Routes, useNavigate } from "react-router-dom"
import { Home, NewProject } from './container';
import { auth, db } from './config/firebase.config';
import { collection, doc, onSnapshot, orderBy, query, setDoc } from 'firebase/firestore';
import { Spinner } from './components';
import { useDispatch } from 'react-redux';
import { SET_USER } from './context/actions/userActions';
import { SET_PROJECTS } from "./context/actions/projectActions";



const App = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const dispath = useDispatch()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userCred => {
      if (userCred) {
        console.log(userCred?.providerData[0]);
        setDoc(doc(db, "users", userCred?.uid), userCred?.providerData[0]).
          then(() => {
            //dispath the action to store
            dispath(SET_USER(userCred?.providerData[0]));
            navigate("/home/projects", { replace: true });

          })
      }
      else {
        navigate("/home/auth", { replace: true })
      }
     setInterval(() => {
        setIsLoading(false);
      },2000)
    })

    //clean up the listener event
    return () => unsubscribe();
  }, [])

  useEffect(() => {
    const projectQuery = query(
      collection(db, "Projects"),
      orderBy("id", "desc")
    )

    const unsubscribe = onSnapshot(projectQuery, (querySnaps => {
      const projectsList = querySnaps.docs.map(doc => doc.data())
      dispath(SET_PROJECTS(projectsList))
    }))

    return unsubscribe;
  },[])
  return(
    <>
      {isLoading ?
        (<div className='w-screen h-screen flex items-center
         justify-center overflow-hidden'>
         <Spinner/>
      </div>)
        :
        (<div className="h-screen w-screen flex items-start justify-start overflow-hidden">
      <Routes>
            <Route path='/home/*' element={<Home />} />
            <Route path='/newProject' element={<NewProject/>}/>
            {/*if route not matching */}
        <Route path='*' element={<Navigate to={'/home'}/>}/>
      </Routes>
    </div>)}
    </>
  );
}
export default App;
