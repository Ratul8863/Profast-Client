import React, { useEffect, useState } from 'react'
import { AuthContext } from './AuthContext'
import { auth } from '../Firebase/firebase.init'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'


const provider = new GoogleAuthProvider();

function AuthProvider({children}) {
const [user,setUser] = useState(null);
const [loading,setLoading] = useState(true)

const createuser = (email,password) => {
  setLoading(true)
  return createUserWithEmailAndPassword(auth,email,password)
}

const signIn = (email,password) =>{
   setLoading(true)
  return signInWithEmailAndPassword(auth, email, password)
}

const signInWithGoogle = () => {
   setLoading(true)
   return signInWithPopup(auth, provider)
}

const logout = () =>{
  setLoading(true)
  return signOut(auth)
}



useEffect (()=>{
  const unsubscribe = onAuthStateChanged(auth, currentUser => {
    setUser(currentUser)
    setLoading(false);
  }
  );

  return () => {
    unsubscribe();
  }
},[])


    const authInnfo = {
user,
loading,
createuser,
signIn,
signInWithGoogle,
logout,

    }
  return (
    <AuthContext value={authInnfo}>
{children}
    </AuthContext>
  )
}

export default AuthProvider