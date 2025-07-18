import React from 'react'
import useAuth from '../Hooks/useAuth'
import { Navigate } from 'react-router';

function PrivetRoute({children}) {

    const {user,loading} = useAuth();

    if (loading) {
        return <span className="loading loading-spinner loading-xl"></span>
    }
    if (!user) {
        <Navigate to={'/login'}></Navigate>
    }
  return  children ;
  
}

export default PrivetRoute